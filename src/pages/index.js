import React, { useEffect, useRef, useState } from 'react';
import { bottles, email, faq, haluu, haluuInstagram, logo, plant, pours, soju, strip, whatsapp } from '../content';

const links = [
  ['#bottles', 'Bottles'],
  ['#haluu', 'Haluu'],
  ['#soju', 'Soju'],
  ['#company', 'Company'],
  ['#faq', 'FAQ'],
];

// Each chapter tells the fixed header which ground and ink sit under it.
const chapter = (bg, ink) => ({ 'data-bg': bg, 'data-ink': ink });

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Lines = ({ lines }) => lines.map((text, i) => (
  <span className="line" key={text}><span style={{ '--i': i }}>{text}</span></span>
));

const Header = ({ onMenu }) => (
  <header className="header" style={{ '--logo': `url(${new URL(logo, document.baseURI).href})` }}>
    <a className="wordmark" href="#top" aria-label="Dafa Bali Utama, back to top">
      <span className="wordmark__mark" aria-hidden="true" />
      Dafa Bali Utama
    </a>
    <nav className="nav" aria-label="Main">
      <ul className="nav__links">
        {links.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}
      </ul>
      <a className="button" href={whatsapp} target="_blank" rel="noreferrer">Order</a>
      <button className="menu-toggle" type="button" onClick={onMenu} aria-haspopup="dialog">Menu</button>
    </nav>
  </header>
);

const Menu = ({ open, onClose }) => (
  <div className={`menu${open ? ' is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open}>
    <button className="menu__close" type="button" onClick={onClose} tabIndex={open ? 0 : -1}>Close</button>
    <ul>
      {links.map(([href, label], i) => (
        <li key={href} style={{ '--i': i }}><a className="display" href={href} onClick={onClose} tabIndex={open ? 0 : -1}>{label}</a></li>
      ))}
    </ul>
    <a className="button" href={whatsapp} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>Order on WhatsApp</a>
  </div>
);

// The page opens as a glass being filled: gold rises to the seam between the headline's two lines.
const Hero = () => (
  <section className="hero" id="top" {...chapter('#ffffff', '#0b0b0b')}>
    <div className="hero__low" aria-hidden="true" />
    <h1 className="hero__title display"><Lines lines={['Poured', 'in Bali']} /></h1>
    <div className="hero__foot">
      <p className="hero__lead">PT Dafa Bali Utama makes Crystal Club, Stag 5, Everyday Soju and Haluu spirits in Tabanan, Bali, since 2010.</p>
      <a className="button" href="#bottles" style={{ '--i': 1 }}>See the bottles</a>
    </div>
  </section>
);

const ROTATE_MS = 3600;

// The bottles turn on their own; any click, swipe or key takes over and pauses the turning.
const Showcase = () => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const touch = useRef(null);
  const n = bottles.length;
  const go = (i) => setActive((i + n) % n);
  const pick = (i) => { setPlaying(false); go(i); };

  useEffect(() => {
    if (reducedMotion()) setPlaying(false);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !visible) return undefined;
    const id = setTimeout(() => setActive((a) => (a + 1) % n), ROTATE_MS);
    return () => clearTimeout(id);
  }, [playing, visible, active, n]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); pick(active + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); pick(active - 1); }
  };
  const bottle = bottles[active];
  const offset = (i) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <section
      className={`showcase${playing && visible ? ' is-playing' : ''}`}
      id="bottles"
      ref={ref}
      {...chapter('#ffffff', '#0b0b0b')}
      aria-labelledby="bottles-title"
      aria-roledescription="carousel"
      style={{ '--disc-colour': bottle.disc, '--rotate': `${ROTATE_MS}ms` }}
    >
      <h2 className="showcase__title display lines" id="bottles-title" data-lines><Lines lines={['Seven bottles']} /></h2>
      <div
        className="carousel"
        onKeyDown={onKey}
        onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touch.current == null) return;
          const dx = e.changedTouches[0].clientX - touch.current;
          if (Math.abs(dx) > 40) pick(active + (dx < 0 ? 1 : -1));
          touch.current = null;
        }}
      >
        <button className="carousel__arrow carousel__arrow--prev" type="button" onClick={() => pick(active - 1)} aria-label="Previous bottle">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4 7 12l8 8" /></svg>
        </button>
        <div className="carousel__stage">
          <div className="disc" aria-hidden="true" key={active} />
          {bottles.map((b, i) => {
            const d = offset(i);
            return (
              <img
                key={`${b.brand}-${b.name}`}
                className="bottle"
                data-offset={Math.max(-2, Math.min(2, d))}
                src={b.img}
                alt={d === 0 ? `${b.brand} ${b.name} bottle` : ''}
                aria-hidden={d !== 0}
                onClick={() => d !== 0 && pick(i)}
                width="340"
                height="1100"
              />
            );
          })}
        </div>
        <button className="carousel__arrow carousel__arrow--next" type="button" onClick={() => pick(active + 1)} aria-label="Next bottle">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" /></svg>
        </button>
      </div>
      <div className="showcase__caption" aria-live="polite">
        <p className="showcase__name" key={active}><span>{bottle.brand}</span> {bottle.name}</p>
        <p className="showcase__fact">{bottle.fact}</p>
      </div>
      <div className="showcase__controls">
        <div className="dots" role="group" aria-label="Choose a bottle">
          {bottles.map((b, i) => (
            <button key={`${b.brand}-${b.name}`} type="button" className="dot" aria-pressed={i === active} aria-label={`${b.brand} ${b.name}`} onClick={() => pick(i)}>
              <span className="dot__fill" />
            </button>
          ))}
        </div>
        <button className="play" type="button" onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play'}</button>
      </div>
    </section>
  );
};

// Haluu: a held stage where the bottle turns to the next flavour as the visitor scrolls.
const Haluu = () => {
  const section = useRef(null);
  const canvas = useRef(null);
  const [step, setStep] = useState(0);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (reducedMotion() || !window.WebGLRenderingContext) return undefined;
    let dispose;
    let cancelled = false;
    import('../haluu3d').then(({ mount }) => {
      if (cancelled) return;
      try {
        dispose = mount({ canvas: canvas.current, section: section.current, flavours: haluu, onStep: setStep });
        setLive(true);
      } catch (err) {
        // No WebGL: the flavours stay as the plain stacked list below.
      }
    });
    return () => { cancelled = true; if (dispose) dispose(); };
  }, []);

  const f = haluu[step];
  return (
    <section ref={section} className={`haluu${live ? ' is-live' : ''}`} id="haluu" style={{ '--steps': haluu.length, '--field': f.field }} aria-labelledby="haluu-title">
      <div className="haluu__stage" {...chapter(haluu[0].field, '#0b0b0b')}>
        <canvas ref={canvas} className="haluu__canvas" aria-hidden="true" />
        <div className="haluu__intro">
          <h2 className="haluu__title display" id="haluu-title">Haluu</h2>
          <p>Our newest line: flavoured liqueurs that taste like Indonesian desserts and street drinks. 350 ml.</p>
        </div>
        <div className="haluu__now" aria-live="polite">
          <p className="haluu__flavour display" key={f.name}>{f.name}</p>
          <p className="haluu__note" key={`${f.name}-note`}>{f.note}</p>
          <p className="haluu__count">{step + 1} of {haluu.length}</p>
        </div>
        <div className="haluu__links">
          <a className="button" href={haluuInstagram} target="_blank" rel="noreferrer">Follow @haluudrinks</a>
        </div>
      </div>
      <ol className="haluu__list">
        {haluu.map((item) => (
          <li key={item.name} style={{ '--field': item.field }}>
            <img src={item.img} alt={`Haluu ${item.name} bottle`} loading="lazy" width="362" height="837" />
            <div>
              <h3 className="display">{item.name}</h3>
              <p>{item.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

const Plant = () => (
  <section className="plant" id="plant" {...chapter('#0b0b0b', '#ffffff')} aria-labelledby="plant-title">
    {plant.map((t, i) => {
      const style = { '--t-bg': t.bg, '--t-ink': t.ink, '--i': i % 4 };
      if (t.kind === 'photo') {
        return (
          <figure className="tile tile--photo" key={t.caption} data-reveal style={style}>
            <img src={t.img} alt={t.alt} loading="lazy" width="1050" height="1400" />
            <figcaption className="tile__caption"><span>{t.caption}</span></figcaption>
          </figure>
        );
      }
      if (t.kind === 'heading') {
        return <div className="tile" key={t.word} style={style}><h2 className="tile__word display" id="plant-title">{t.word}</h2></div>;
      }
      return (
        <div className="tile" key={t.caption} data-reveal style={style}>
          <span className="tile__word display">{t.word}</span>
          <span className="tile__caption">{t.caption}</span>
        </div>
      );
    })}
  </section>
);

const Soju = () => (
  <section className="soju" id="soju" {...chapter('#38c48a', '#0b0b0b')} aria-labelledby="soju-title">
    <h2 className="chapter-title display lines" id="soju-title" data-lines><Lines lines={['Everyday', 'Soju']} /></h2>
    <div className="soju__grid">
      <div className="soju__text">
        <p className="lead" data-reveal>The taste of Indonesia and Korea in one green bottle.</p>
        <p data-reveal style={{ '--i': 1 }}>Made from the best ingredients in the same plant as Crystal Club, for one purpose: drinking that’s fun. Have fun every second, every minute, every hour, everyday.</p>
        <a className="button" href={whatsapp} target="_blank" rel="noreferrer" data-reveal style={{ '--i': 2, background: 'var(--ink)', color: '#fff', justifySelf: 'start' }}>Order Everyday Soju</a>
      </div>
      <figure className="soju__window">
        <img src={soju.hero} alt="Four bottles of Everyday Soju lined up against a green wall" loading="lazy" width="933" height="1400" />
      </figure>
    </div>
    <ul className="flavours" aria-label="Four flavours">
      {soju.flavours.map((f, i) => (
        <li className="flavour" key={f.name} data-reveal style={{ '--i': i }}>
          <figure>
            <div className="flavour__frame"><img src={f.img} alt={`Everyday Soju, ${f.name} flavour`} loading="lazy" width="933" height="1400" /></div>
            <figcaption>{f.name}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  </section>
);

const Company = () => {
  const marks = [
    ['2010', 'var(--gold)'], ['Tabanan, Bali', 'var(--green)'], ['class C', 'var(--gold)'],
    ['BPOM', 'var(--green)'], ['an official excise band', '#ffffff'], ['an NPPBKC and a SIUP MB', '#ffffff'],
  ];
  const m = (i) => <span className="mark" style={{ '--hl': marks[i][1], '--i': i }}>{marks[i][0]}</span>;
  return (
    <section className="company" id="company" {...chapter('#c9c9c9', '#0b0b0b')} aria-labelledby="company-title">
      <h2 id="company-title" className="display lines" data-lines><Lines lines={['About us']} /></h2>
      <p className="statement" data-reveal>
        <strong>PT Dafa Bali Utama</strong> opened in {m(0)} and makes {m(2)} spirits, over 20% alcohol, at our plant in {m(1)}. We blend local and imported ingredients and check our quality at every step, because our aim is simple: the best drink, from the best ingredients. Every product is registered with {m(3)} and lab-tested to government standards, and every bottle carries {m(4)} with our plant’s code, DAFBALUT00. We hold the official Crystal Club trademark in Indonesia, and we sell to outlets that hold {m(5)}. Our vision is to be a business partner you can trust, built on integrity, partnership and care for our customers.{' '}
        <a className="statement__close mark mark--red" href="#order" style={{ '--i': 6 }}>Become a partner.</a>
      </p>
    </section>
  );
};

// What we pour, running off both edges; this band now names the drinks instead of venues.
const Pours = () => {
  const set = (hidden) => (
    <div className="marquee__set display" aria-hidden={hidden}>
      {pours.map((v) => <React.Fragment key={v}><span>{v}</span><span className="marquee__dot" /></React.Fragment>)}
    </div>
  );
  return (
    <section className="pours" id="pours" {...chapter('#0b0b0b', '#ffffff')} aria-labelledby="pours-title">
      <h2 className="sr-only" id="pours-title">Everything we pour</h2>
      <div className="pours__band"><div className="marquee" data-marquee>{set(false)}{set(true)}</div></div>
    </section>
  );
};

const Faq = () => (
  <section className="faq" id="faq" {...chapter('#ffffff', '#0b0b0b')} aria-labelledby="faq-title">
    <h2 id="faq-title">Questions</h2>
    <div className="faq__list">
      {faq.map((item, i) => (
        <details key={item.q} name="faq" data-reveal style={{ '--i': i }}>
          <summary>{item.q}<span className="plus" aria-hidden="true" /></summary>
          <p className="faq__answer">{item.a}</p>
        </details>
      ))}
    </div>
  </section>
);

// No form backend: the order opens WhatsApp with the outlet's details already written.
const Contact = () => {
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Hello Dafa Bali Utama, this is ${data.get('name')} from ${data.get('outlet')}. I would like to order.`;
    window.open(`${whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };
  return (
    <section className="contact" id="order" {...chapter('#a92e2f', '#ffffff')} aria-labelledby="order-title">
      <div className="strip" aria-hidden="true">
        {strip.map((src, i) => <img key={i} src={src} alt="" loading="lazy" />)}
      </div>
      <div className="contact__body">
        <h2 id="order-title" className="lines" data-lines><Lines lines={['Order for your outlet']} /></h2>
        <form className="order" onSubmit={submit}>
          <div className="order__cell">
            <label className="sr-only" htmlFor="name">Your name</label>
            <input id="name" name="name" placeholder="Your name" required autoComplete="name" />
            <small>We reply on WhatsApp, 0878-8017-1188.</small>
          </div>
          <div className="order__cell">
            <label className="sr-only" htmlFor="outlet">Outlet name</label>
            <input id="outlet" name="outlet" placeholder="Outlet name" required autoComplete="organization" />
          </div>
          <div className="order__cell">
            <button type="submit">Send on WhatsApp</button>
            <small>Resale requires an NPPBKC and a SIUP MB.</small>
          </div>
        </form>
      </div>
    </section>
  );
};

const BaliTime = () => {
  const fmt = () => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Makassar' }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 30000);
    return () => clearInterval(id);
  }, []);
  return <>{time} in Tabanan</>;
};

// The footer closes on the name, set as large as the page allows.
const Footer = () => (
  <footer className="footer" {...chapter('#0b0b0b', '#ffffff')}>
    <div className="footer__top">
      <a className="footer__cta" href={whatsapp} target="_blank" rel="noreferrer">
        Order on WhatsApp
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden="true"><path d="M14 50 50 14M22 14h28v28" /></svg>
      </a>
      <div className="footer__cols">
        <div>
          <h2 className="footer__label">Visit</h2>
          <p>Jl. Jepun, Dauh Peken<br />Tabanan, Bali 82113</p>
          <p><BaliTime /></p>
        </div>
        <div>
          <h2 className="footer__label">Write</h2>
          <p><a className="link" href={`mailto:${email}`}>{email}</a></p>
          <p><a className="link" href={whatsapp} target="_blank" rel="noreferrer">0878-8017-1188</a></p>
        </div>
        <nav aria-label="Footer">
          <h2 className="footer__label">Explore</h2>
          <ul>{links.map(([href, label]) => <li key={href}><a className="link" href={href}>{label}</a></li>)}</ul>
        </nav>
      </div>
    </div>
    <p className="footer__name display" aria-hidden="true">Dafa Bali Utama</p>
    <div className="footer__legal">
      <small>© {new Date().getFullYear()} PT Dafa Bali Utama</small>
      <small>For adults of legal drinking age only. Please drink responsibly.</small>
    </div>
  </footer>
);

const useMotion = () => {
  useEffect(() => {
    const once = (selector, options) => {
      const els = document.querySelectorAll(selector);
      if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-in')); return null; }
      const io = new IntersectionObserver((entries) => {
        for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      }, options);
      els.forEach((el) => io.observe(el));
      return io;
    };
    const observers = [
      once('[data-reveal]', { rootMargin: '0px 0px -12% 0px', threshold: 0.1 }),
      once('[data-lines]', { rootMargin: '0px 0px -10% 0px' }),
      once('.footer', { rootMargin: '0px 0px -10% 0px' }),
    ];
    const root = document.documentElement.style;
    const header = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        root.setProperty('--header-bg', e.target.dataset.bg);
        root.setProperty('--header-ink', e.target.dataset.ink);
      }
    }, { rootMargin: '0px 0px -92% 0px' });
    document.querySelectorAll('[data-ink]').forEach((el) => header.observe(el));
    // Loops pause when off screen.
    const loops = new IntersectionObserver((entries) => {
      for (const e of entries) e.target.classList.toggle('is-paused', !e.isIntersecting);
    });
    document.querySelectorAll('[data-marquee]').forEach((el) => loops.observe(el));
    return () => [...observers, header, loops].forEach((o) => o && o.disconnect());
  }, []);
};

const Home = () => {
  const [menu, setMenu] = useState(false);
  useMotion();
  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    if (!menu) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenu(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu]);

  return (
    <>
      <Header onMenu={() => setMenu(true)} />
      <Menu open={menu} onClose={() => setMenu(false)} />
      <main>
        <Hero />
        <Showcase />
        <Haluu />
        <Soju />
        <Pours />
        <Plant />
        <Company />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
