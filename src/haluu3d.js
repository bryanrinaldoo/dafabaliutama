import * as THREE from 'three';

// The Haluu scene: the bottle turns to the next flavour as the visitor scrolls,
// and each flavour's own ingredients float around it.

const smoothstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

// Materials are shared by colour so the scene compiles a handful of shader programs, not one per piece.
const materials = new Map();
const std = (color, extra = {}) => {
  const id = color + JSON.stringify(extra);
  if (!materials.has(id)) materials.set(id, new THREE.MeshStandardMaterial({ color, roughness: 0.55, ...extra }));
  return materials.get(id);
};

// One builder per flavour, in the order of content.js.
const ingredients = [
  // Kopyor: coconut halves and pandan leaves
  (i) => {
    const g = new THREE.Group();
    if (i % 3 === 2) {
      g.add(new THREE.Mesh(new THREE.BoxGeometry(0.11, 1.3, 0.02), std('#3f8f3a', { roughness: 0.7 })));
      return g;
    }
    g.add(new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), std('#6b4226', { roughness: 0.95, side: THREE.DoubleSide })));
    const flesh = new THREE.Mesh(new THREE.CircleGeometry(0.4, 32), std('#fbf6ec', { roughness: 0.6 }));
    flesh.rotation.x = Math.PI / 2;
    g.add(flesh);
    g.rotation.x = Math.PI;
    return g;
  },
  // Kuwut: lime slices, melon cubes, basil seeds
  (i) => {
    const g = new THREE.Group();
    if (i % 4 === 3) {
      g.add(new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.34), std('#f6a65a', { roughness: 0.4 })));
    } else if (i % 4 === 2) {
      for (let k = 0; k < 7; k++) {
        const seed = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 8), std('#1b1b1b', { roughness: 0.3 }));
        seed.position.set(Math.cos(k) * 0.14, Math.sin(k * 1.7) * 0.14, Math.sin(k) * 0.1);
        g.add(seed);
      }
    } else {
      const rind = std('#5aa02c', { roughness: 0.5 });
      const pulp = std('#d9f07a', { roughness: 0.35 });
      g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.09, 40), [rind, pulp, pulp]));
    }
    return g;
  },
  // Teh Manis: ice cubes and tea leaves
  (i) => {
    const g = new THREE.Group();
    if (i % 3 === 2) {
      const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.32, 24, 12), std('#3d5a22', { roughness: 0.6 }));
      leaf.scale.set(1, 0.12, 0.45);
      g.add(leaf);
    } else {
      g.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), std('#f3f9ff', { roughness: 0.08, transparent: true, opacity: 0.6 })));
    }
    return g;
  },
  // Anggur Gulali: grape clusters and cotton candy
  (i) => {
    const g = new THREE.Group();
    if (i % 3 === 2) {
      g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 3), std('#ffb3d9', { roughness: 1 })));
      return g;
    }
    const grape = std('#6b2d7a', { roughness: 0.3 });
    [[0, 0, 0], [0.2, 0.08, 0.05], [-0.18, 0.1, -0.04], [0.04, -0.2, 0.06], [0.02, 0.24, -0.1]].forEach((p) => {
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.17, 24, 16), grape);
      ball.position.set(...p);
      g.add(ball);
    });
    return g;
  },
];

const PIECES = 14;

const place = (i, rand) => {
  // A loose shell around the bottle, kept clear of the space in front of it.
  const angle = (i / PIECES) * Math.PI * 2 + rand() * 0.4;
  const radius = 1.6 + rand() * 1.6;
  const p = new THREE.Vector3(Math.cos(angle) * radius, (rand() - 0.5) * 3.6, Math.sin(angle) * radius * 0.6 - 0.6);
  if (Math.abs(p.x) < 1 && p.z > -0.4) p.x += Math.sign(p.x || 1) * 1.1;
  return p;
};

export function mount({ canvas, section, flavours, onStep }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio));
  // The error check makes the browser wait for every shader to link; keep it for development only.
  renderer.debug.checkShaderErrors = process.env.NODE_ENV !== 'production';

  const scene = new THREE.Scene();
  const fields = flavours.map((f) => new THREE.Color(f.field));
  scene.background = fields[0].clone();

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 8);

  scene.add(new THREE.HemisphereLight('#ffffff', '#555555', 1.7));
  const key = new THREE.DirectionalLight('#ffffff', 2.4);
  key.position.set(3, 5, 6);
  scene.add(key);
  const fill = new THREE.DirectionalLight('#ffffff', 0.7);
  fill.position.set(-4, -2, 3);
  scene.add(fill);

  // The bottle: one plane whose photo is swapped halfway through each turn.
  const loader = new THREE.TextureLoader();
  const loads = [];
  const textures = flavours.map((f) => {
    let done;
    loads.push(new Promise((resolve) => { done = resolve; }));
    const t = loader.load(f.img, done, undefined, done);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  });
  const bottleMat = new THREE.MeshBasicMaterial({ map: textures[0], transparent: true, alphaTest: 0.02, toneMapped: false, side: THREE.DoubleSide });
  const BOTTLE_H = 3.3;
  const bottle = new THREE.Mesh(new THREE.PlaneGeometry(BOTTLE_H * 0.44, BOTTLE_H), bottleMat);
  bottle.renderOrder = 2;
  const holder = new THREE.Group();
  holder.add(bottle);
  scene.add(holder);

  let seed = 7;
  const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const groups = ingredients.map((build) => {
    const group = new THREE.Group();
    for (let i = 0; i < PIECES; i++) {
      const piece = build(i);
      const home = place(i, rand);
      piece.userData = {
        home,
        spin: new THREE.Vector3(rand() - 0.5, rand() - 0.5, rand() - 0.5).multiplyScalar(0.9),
        phase: rand() * Math.PI * 2,
        size: 0.8 + rand() * 0.5,
      };
      piece.rotation.set(rand() * 6, rand() * 6, rand() * 6);
      piece.position.copy(home);
      group.add(piece);
    }
    scene.add(group);
    return group;
  });

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const onPointer = (e) => {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  // Keep every piece out of the corners where the words sit.
  const fit = (home, narrow) => {
    const p = home.clone();
    if (narrow) {
      p.y = Math.min(1.25, Math.max(-0.55, p.y * 0.5 + 0.35));
    } else if (p.x < -1.1) {
      p.y = Math.min(0.45, Math.max(-0.5, p.y * 0.3));
    } else if (p.x > 1.1) {
      p.y = Math.max(-0.2, Math.abs(p.y) * 0.7);
    }
    return p;
  };

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const narrow = w < 700;
    // On a narrow screen the bottle sits higher so the words fit below it.
    holder.position.y = narrow ? 0.75 : 0;
    holder.scale.setScalar(narrow ? 0.82 : 1);
    groups.forEach((group) => group.children.forEach((piece) => { piece.userData.pos = fit(piece.userData.home, narrow); }));
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  let shown = -1;
  let running = false;
  let raf = 0;
  const clock = new THREE.Clock();
  const blend = new THREE.Color();
  const root = document.documentElement.style;

  const frame = () => {
    raf = requestAnimationFrame(frame);
    const time = clock.getElapsedTime();
    const rect = section.getBoundingClientRect();
    const span = Math.max(1, rect.height - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -rect.top / span));
    const s = progress * flavours.length;
    const idx = Math.min(flavours.length - 1, Math.floor(s));
    const local = s - idx;
    const turn = idx < flavours.length - 1 ? smoothstep(0.62, 1, local) : 0;
    const current = turn > 0.5 ? idx + 1 : idx;

    if (current !== shown) {
      shown = current;
      bottleMat.map = textures[current];
      bottleMat.needsUpdate = true;
      onStep(current);
    }

    blend.copy(fields[idx]).lerp(fields[Math.min(idx + 1, fields.length - 1)], turn);
    scene.background.copy(blend);
    if (rect.top <= 0 && rect.bottom > 72) root.setProperty('--header-bg', `#${blend.getHexString()}`);

    pointer.x += (pointer.tx - pointer.x) * 0.06;
    pointer.y += (pointer.ty - pointer.y) * 0.06;
    const spin = turn > 0.5 ? (turn - 1) * Math.PI : turn * Math.PI;
    bottle.rotation.y = spin + pointer.x * 0.3;
    bottle.rotation.x = pointer.y * 0.12;
    bottle.position.y = Math.sin(time * 1.1) * 0.06;
    bottle.rotation.z = Math.sin(time * 0.7) * 0.025;

    groups.forEach((group, g) => {
      const weight = g === idx ? 1 - turn : g === idx + 1 ? turn : 0;
      group.visible = weight > 0.001;
      if (!group.visible) return;
      const ease = 1 - (1 - weight) ** 3;
      group.rotation.y = progress * 2.4 + time * 0.05;
      group.children.forEach((piece) => {
        const { pos, spin: sp, phase, size } = piece.userData;
        const spread = 1 + (1 - ease) * 0.9;
        piece.position.set(pos.x * spread, pos.y * spread + Math.sin(time * 0.8 + phase) * 0.1, pos.z * spread);
        piece.rotation.x += sp.x * 0.01;
        piece.rotation.y += sp.y * 0.01;
        piece.rotation.z += sp.z * 0.01;
        piece.scale.setScalar(size * ease);
      });
    });

    renderer.render(scene, camera);
  };

  // Compile every shader and upload every texture before the visitor arrives, so entering the section doesn't stall.
  // compileAsync links shaders off the main thread where the browser supports it.
  const ready = renderer.compileAsync(scene, camera).catch(() => {});
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));
  Promise.all([ready, ...loads]).then(() => idle(() => {
    // One unseen frame with everything visible uploads the textures and finishes linking now, not on arrival.
    textures.forEach((t) => renderer.initTexture(t));
    groups.forEach((group) => { group.visible = true; });
    renderer.render(scene, camera);
    groups.forEach((group) => { group.visible = false; });
  }));

  const start = () => { if (!running) { running = true; clock.start(); frame(); } };
  const stop = () => { running = false; cancelAnimationFrame(raf); };
  // Render only while the scene is on screen and the tab is visible.
  const io = new IntersectionObserver(([e]) => (e.isIntersecting && !document.hidden ? start() : stop()));
  io.observe(section);
  const onVisibility = () => (document.hidden ? stop() : section.getBoundingClientRect().top < window.innerHeight && start());
  document.addEventListener('visibilitychange', onVisibility);

  return () => {
    stop();
    io.disconnect();
    ro.disconnect();
    window.removeEventListener('pointermove', onPointer);
    document.removeEventListener('visibilitychange', onVisibility);
    scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) [].concat(o.material).forEach((m) => m.dispose());
    });
    textures.forEach((t) => t.dispose());
    renderer.dispose();
  };
}
