import React, { useEffect, useState } from 'react';
import { bottles, email, faq, logo, plant, soju, strip, venues, whatsapp } from '../content';

const links = [
  ['#produk', 'Produk'],
  ['#soju', 'Soju'],
  ['#perusahaan', 'Perusahaan'],
  ['#tanya', 'Tanya jawab'],
];

// Each chapter tells the fixed header which ground and ink sit under it.
const chapter = (bg, ink) => ({ 'data-bg': bg, 'data-ink': ink });

const Lines = ({ lines }) => lines.map((text, i) => (
  <span className="line" key={text}><span style={{ '--i': i }}>{text}</span></span>
));

const Header = ({ onMenu }) => (
  <header className="header" style={{ '--logo': `url(${new URL(logo, document.baseURI).href})` }}>
    <a className="wordmark" href="#top" aria-label="Dafa Bali Utama, ke atas">
      <span className="wordmark__mark" aria-hidden="true" />
      Dafa Bali Utama
    </a>
    <nav className="nav" aria-label="Utama">
      <ul className="nav__links">
        {links.map(([href, label]) => <li key={href}><a href={href}>{label}</a></li>)}
      </ul>
      <a className="button" href={whatsapp} target="_blank" rel="noreferrer">Pesan</a>
      <button className="menu-toggle" type="button" onClick={onMenu} aria-haspopup="dialog">Menu</button>
    </nav>
  </header>
);

const Menu = ({ open, onClose }) => (
  <div className={`menu${open ? ' is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open}>
    <button className="menu__close" type="button" onClick={onClose} tabIndex={open ? 0 : -1}>Tutup</button>
    <ul>
      {links.map(([href, label], i) => (
        <li key={href} style={{ '--i': i }}><a className="display" href={href} onClick={onClose} tabIndex={open ? 0 : -1}>{label}</a></li>
      ))}
    </ul>
    <a className="button" href={whatsapp} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>Pesan lewat WhatsApp</a>
  </div>
);

// The page opens as a glass being filled: gold rises to the seam between the headline's two lines.
const Hero = () => {
  const title = ['Dituang', 'di Bali'];
  return (
    <section className="hero" id="top" {...chapter('#ffffff', '#0b0b0b')}>
      <div className="hero__low" aria-hidden="true" />
      <h1 className="hero__title display"><Lines lines={title} /></h1>
      <div className="hero__foot">
        <p className="hero__lead">PT Dafa Bali Utama membuat minuman beralkohol Crystal Club, Stag 5 dan Everyday Soju di Tabanan sejak 2010.</p>
        <a className="button" href="#produk" style={{ '--i': 1 }}>Lihat produk</a>
      </div>
    </section>
  );
};

const Showcase = () => {
  const [active, setActive] = useState(0);
  const bottle = bottles[active];
  return (
    <section className="showcase" id="produk" {...chapter('#ffffff', '#0b0b0b')} aria-label="Produk">
      <div className="showcase__list" role="group" aria-label="Pilih botol">
        <h2 data-reveal>Pilih botolnya</h2>
        {bottles.map((b, i) => (
          <button key={b.name} type="button" aria-pressed={i === active} onClick={() => setActive(i)} data-reveal style={{ '--i': i + 1 }}>
            {b.name}
          </button>
        ))}
      </div>
      <div className="showcase__stage" style={{ '--disc-colour': bottle.disc }}>
        <div className="disc" />
        <div className="bottles">
          {bottles.map((b, i) => (
            <img key={b.name} className={`bottle${i === active ? ' is-on' : ''}`} src={b.img} alt={i === active ? `Botol ${b.name.startsWith(b.brand) ? b.name : `${b.brand} ${b.name}`}` : ''} aria-hidden={i !== active} width="340" height="1100" />
          ))}
        </div>
        <p className="showcase__fact" aria-live="polite">
          <strong>{bottle.brand}</strong>
          {bottle.fact}
        </p>
      </div>
    </section>
  );
};

const Plant = () => (
  <section className="plant" id="pabrik" {...chapter('#0b0b0b', '#ffffff')} aria-labelledby="pabrik-title">
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
        return <div className="tile" key={t.word} style={style}><h2 className="tile__word display" id="pabrik-title">{t.word}</h2></div>;
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
        <p className="lead" data-reveal>Rasa Indonesia dan Korea dalam satu botol hijau, produk terbaru kami.</p>
        <p data-reveal style={{ '--i': 1 }}>Dibuat dari bahan terbaik di pabrik yang sama dengan Crystal Club, untuk satu tujuan: minum yang menyenangkan. Have fun every second, every minute, every hour, everyday.</p>
        <a className="button" href={whatsapp} target="_blank" rel="noreferrer" data-reveal style={{ '--i': 2, background: 'var(--ink)', color: '#fff', justifySelf: 'start' }}>Pesan Everyday Soju</a>
      </div>
      <figure className="soju__window">
        <img src={soju.hero} alt="Empat botol Everyday Soju berjajar di depan dinding hijau" loading="lazy" width="933" height="1400" />
      </figure>
    </div>
    <ul className="flavours" aria-label="Empat rasa">
      {soju.flavours.map((f, i) => (
        <li className="flavour" key={f.name} data-reveal style={{ '--i': i }}>
          <figure>
            <div className="flavour__frame"><img src={f.img} alt={`Botol Everyday Soju rasa ${f.name}`} loading="lazy" width="933" height="1400" /></div>
            <figcaption>{f.name}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  </section>
);

const Company = () => {
  const marks = [
    ['2010', 'var(--gold)'], ['Tabanan, Bali', 'var(--green)'], ['golongan C', 'var(--gold)'],
    ['BPOM', 'var(--green)'], ['pita cukai resmi', '#ffffff'], ['NPPBKC dan SIUP MB', '#ffffff'],
  ];
  const m = (i) => <span className="mark" style={{ '--hl': marks[i][1], '--i': i }}>{marks[i][0]}</span>;
  return (
    <section className="company" id="perusahaan" {...chapter('#c9c9c9', '#0b0b0b')} aria-labelledby="perusahaan-title">
      <h2 id="perusahaan-title" className="display lines" data-lines><Lines lines={['Tentang kami']} /></h2>
      <p className="statement" data-reveal>
        <strong>PT Dafa Bali Utama</strong> berdiri pada {m(0)} dan memproduksi minuman beralkohol {m(2)}, berkadar di atas 20%, di pabrik kami di {m(1)}. Bahan baku lokal dan impor kami olah dengan kualitas yang selalu diperiksa, karena tujuan kami sederhana: membuat minuman terbaik dari bahan terbaik. Setiap produk terdaftar di {m(3)}, telah melalui uji lab sesuai standar pemerintah, dan setiap botol membawa {m(4)} dengan inisial pabrik DAFBALUT00. Kami adalah pemegang merek resmi Crystal Club di Indonesia, dan kami menjual kepada outlet yang memiliki {m(5)}. Visi kami: menjadi partner bisnis terpercaya, dengan integritas, kemitraan dan fokus pada pelanggan.{' '}
        <a className="statement__close mark mark--red" href="#pesan" style={{ '--i': 6 }}>Mulai bermitra dengan kami.</a>
      </p>
    </section>
  );
};

const Venues = () => {
  const set = (hidden) => (
    <div className="marquee__set display" aria-hidden={hidden}>
      {venues.map((v) => <React.Fragment key={v}><span>{v}</span><span className="marquee__dot" /></React.Fragment>)}
    </div>
  );
  return (
    <section className="venues" id="tempat" {...chapter('#0b0b0b', '#ffffff')} aria-labelledby="tempat-title">
      <div className="venues__band"><div className="marquee" data-marquee>{set(false)}{set(true)}</div></div>
      <div className="venues__copy" {...chapter('#ffffff', '#0b0b0b')}>
        <h2 id="tempat-title" data-reveal>Tempat kami dituang</h2>
        <p data-reveal style={{ '--i': 1 }}>Hotel dan bar yang pernah mengadakan Crystal Club Bar Takeover bersama kami, dengan cocktail tasting gratis, dari Jakarta sampai Cilegon.</p>
      </div>
    </section>
  );
};

const Faq = () => (
  <section className="faq" id="tanya" {...chapter('#ffffff', '#0b0b0b')} aria-labelledby="tanya-title">
    <h2 id="tanya-title">Tanya jawab</h2>
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
    const text = `Halo Dafa Bali Utama, saya ${data.get('nama')} dari ${data.get('outlet')}. Saya ingin memesan produk.`;
    window.open(`${whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };
  return (
    <section className="contact" id="pesan" {...chapter('#a92e2f', '#ffffff')} aria-labelledby="pesan-title">
      <div className="strip" aria-hidden="true">
        {strip.map((src, i) => <img key={i} src={src} alt="" loading="lazy" />)}
      </div>
      <div className="contact__body">
        <h2 id="pesan-title" data-reveal>Pesan untuk outlet Anda</h2>
        <form className="order" onSubmit={submit} data-reveal style={{ '--i': 1 }}>
          <div className="order__cell">
            <label className="sr-only" htmlFor="nama">Nama</label>
            <input id="nama" name="nama" placeholder="Nama Anda" required autoComplete="name" />
            <small>Kami membalas di WhatsApp, 0878-8017-1188.</small>
          </div>
          <div className="order__cell">
            <label className="sr-only" htmlFor="outlet">Nama outlet</label>
            <input id="outlet" name="outlet" placeholder="Nama outlet" required autoComplete="organization" />
          </div>
          <div className="order__cell">
            <button type="submit">Kirim lewat WhatsApp</button>
            <small>Penjualan kembali memerlukan NPPBKC dan SIUP MB.</small>
          </div>
        </form>
      </div>
    </section>
  );
};

const BaliTime = () => {
  const fmt = () => new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Makassar' }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 30000);
    return () => clearInterval(id);
  }, []);
  return <p>Di Tabanan sekarang pukul {time} WITA.</p>;
};

const Footer = () => (
  <footer className="footer" {...chapter('#ffffff', '#0b0b0b')}>
    <div className="ftile ftile--statement">
      <p>Minuman golongan C dari Tabanan, Bali, sejak 2010.</p>
      <small>© {new Date().getFullYear()} PT Dafa Bali Utama. Hanya untuk usia 21 tahun ke atas.</small>
    </div>
    <nav className="ftile ftile--nav" aria-label="Kaki halaman">
      <ul>{links.map(([href, label]) => <li key={href}><a className="link" href={href}>{label}</a></li>)}</ul>
    </nav>
    <div className="ftile ftile--place">
      <p>Jl. Jepun, Dauh Peken, Tabanan, Bali 82113</p>
      <BaliTime />
    </div>
    <div className="ftile ftile--mail">
      <a className="link" href={`mailto:${email}`}>{email}</a>
    </div>
    <div className="ftile ftile--mark"><img src={logo} alt="PT Dafa Bali Utama" loading="lazy" width="600" height="457" /></div>
    <a className="ftile ftile--cta" href={whatsapp} target="_blank" rel="noreferrer">
      Pesan lewat WhatsApp
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden="true"><path d="M14 50 50 14M22 14h28v28" /></svg>
    </a>
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
        <Plant />
        <Soju />
        <Company />
        <Venues />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
