const img = (name) => require(`./static/web/${name}`);

export const whatsapp = 'https://wa.me/6287880171188';
export const email = 'dafabaliutamajkt@gmail.com';

// Disc colours rotate through the chapter colours; descriptions are the client's own copy.
export const bottles = [
  { name: 'Tequila', brand: 'Crystal Club', img: img('c1.webp'), disc: 'var(--gold)', fact: 'Asal Meksiko, nikmat dengan sedikit perasan lemon.' },
  { name: 'Whisky', brand: 'Crystal Club', img: img('c2.webp'), disc: 'var(--red)', fact: 'Tidak pernah salah diminum bersama es.' },
  { name: 'Rum', brand: 'Crystal Club', img: img('c3.webp'), disc: 'var(--grey)', fact: 'Asal Amerika Latin, paling enak dijadikan cocktail.' },
  { name: 'Vodka', brand: 'Crystal Club', img: img('c4.webp'), disc: 'var(--green)', fact: 'Tidak pernah salah dicampur dengan mixer.' },
  { name: 'Gin', brand: 'Crystal Club', img: img('c5.webp'), disc: 'var(--gold)', fact: 'You’re the gin to my tonic.' },
  { name: 'Stag 5 Whisky', brand: 'Stag 5', img: img('s1.webp'), disc: 'var(--red)', fact: 'Kadar alkohol 40%, juga tersedia dalam kemasan 350 ml.' },
  { name: 'Stag 5 Vodka', brand: 'Stag 5', img: img('s3.webp'), disc: 'var(--green)', fact: 'Vodka Stag 5 dari pabrik yang sama di Tabanan.' },
];

export const plant = [
  { kind: 'heading', word: 'Pabrik kami', bg: 'var(--ink)', ink: '#fff' },
  { kind: 'photo', img: img('company1.jpg'), caption: 'Jalur pengisian botol', alt: 'Mesin pengisian dan tangki baja di pabrik Tabanan' },
  { kind: 'figure', word: '2010', caption: 'Tahun pabrik berdiri', bg: 'var(--gold)', ink: 'var(--ink)' },
  { kind: 'word', word: 'Bali', caption: 'Tabanan, Bali', bg: 'var(--red)', ink: '#fff' },
  { kind: 'word', word: '>20%', caption: 'Minuman golongan C', bg: 'var(--green)', ink: 'var(--ink)' },
  { kind: 'photo', img: img('company2.jpg'), caption: 'Mesin pengisi', alt: 'Panel kontrol dan nozel pengisi botol' },
  { kind: 'word', word: 'BPOM', caption: 'Semua produk terdaftar', bg: 'var(--grey)', ink: 'var(--ink)' },
  { kind: 'figure', word: '40%', caption: 'Kadar alkohol Stag 5 Whisky', bg: 'var(--gold)', ink: 'var(--ink)' },
  { kind: 'figure', word: '350', caption: 'Mililiter, botol kecil Stag 5', bg: 'var(--red)', ink: '#fff' },
  { kind: 'photo', img: img('company3.jpg'), caption: 'Penyaringan air', alt: 'Tabung penyaring air di ruang produksi' },
  { kind: 'word', word: 'Cukai', caption: 'Pita cukai resmi di tiap botol', bg: 'var(--green)', ink: 'var(--ink)' },
  { kind: 'photo', img: img('company4.jpg'), caption: 'Mesin penutup botol', alt: 'Mesin penutup botol di samping tangki' },
];

export const soju = {
  hero: img('soju2.jpg'),
  flavours: [
    { name: 'Original', img: img('e3.jpg') },
    { name: 'Grape', img: img('e1.jpg') },
    { name: 'Lychee', img: img('e2.jpg') },
    { name: 'Orange', img: img('e4.jpg') },
  ],
};

// Venues named on the client's own event posters.
export const venues = ['Avenzel Hotel', 'Hotel Neo Melawai', 'NYC Bar & Lounge', 'Twelve Rooftop', 'Aston Cilegon'];

export const strip = [
  img('event2.jpg'), img('soju1.jpg'), img('company1.jpg'), img('event4.jpg'), img('soju4.jpg'), img('event3.jpg'),
  img('company3.jpg'), img('soju5.jpg'), img('event5.jpg'), img('soju3.jpg'), img('company2.jpg'), img('e1.jpg'),
];

export const logo = img('logo.png');

export const faq = [
  {
    q: 'Apa bukti produk PT Dafa Bali Utama berkualitas baik?',
    a: 'Semua produk PT Dafa Bali Utama telah terdaftar di BPOM dan telah melalui uji lab sesuai standar kesehatan yang disyaratkan pemerintah.',
  },
  {
    q: 'Apakah setiap outlet boleh menjual produk ini?',
    a: 'Semua outlet boleh membeli produk PT Dafa Bali Utama. Untuk menjualnya kembali, outlet harus memenuhi persyaratan administrasi dari pemerintah, yaitu memiliki NPPBKC dan SIUP MB.',
  },
  {
    q: 'Mengapa harganya lebih tinggi dari sebagian produk impor atau lokal?',
    a: 'Minuman beralkohol termasuk produk yang dikendalikan peredarannya, salah satunya dengan pita cukai sebagai bukti cukai telah dibayar. Harga jual kami sudah termasuk cukai, jadi perbandingan harga harus dengan produk yang sama-sama dapat dibuktikan legalitasnya. Kami juga selalu memakai bahan baku terbaik demi menjaga mutu.',
  },
  {
    q: 'Bagaimana membuktikan keaslian pita cukai kami?',
    a: 'Periksa apakah golongan dan volume di pita cukai sesuai dengan produk yang diterima, dan apakah tercantum inisial DAFBALUT00, inisial pabrik kami sebagai pemesan pita cukai. Warna pita cukai biasanya berganti tiap tahun; untuk tahun 2021 pita cukai golongan C berwarna cokelat.',
  },
  {
    q: 'Apakah Crystal Club masih diimpor dari Malaysia, Singapura atau Filipina?',
    a: 'PT Dafa Bali Utama adalah pemegang merek resmi Crystal Club di Indonesia. Van’wine and Spirit Bhd. di Malaysia telah berhenti memproduksi merek ini agar tidak terjadi infiltrasi. Produk bernama Crystal Club selain buatan PT Dafa Bali Utama bukan produk resmi dan diragukan keasliannya, baik produknya maupun pita cukainya. Keaslian pita cukai dapat diuji di kantor Bea Cukai setempat.',
  },
  {
    q: 'Apakah merek dan varian hanya yang ada di katalog?',
    a: 'Untuk saat ini produk yang tersedia sesuai katalog. Ke depan kami akan menyediakan varian dan merek lain sesuai perkembangan pasar.',
  },
];
