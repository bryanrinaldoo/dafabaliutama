const img = (name) => require(`./static/web/${name}`);

export const whatsapp = 'https://wa.me/6287880171188';
export const email = 'dafabaliutamajkt@gmail.com';
export const haluuInstagram = 'https://www.instagram.com/haluudrinks/';

// Disc colours rotate through the chapter colours; facts are the client's own product notes.
export const bottles = [
  { name: 'Tequila', brand: 'Crystal Club', img: img('c1.webp'), disc: 'var(--gold)', fact: 'From Mexico, best with a squeeze of lemon.' },
  { name: 'Whisky', brand: 'Crystal Club', img: img('c2.webp'), disc: 'var(--red)', fact: 'Never wrong over ice.' },
  { name: 'Rum', brand: 'Crystal Club', img: img('c3.webp'), disc: 'var(--grey)', fact: 'From Latin America, made for cocktails.' },
  { name: 'Vodka', brand: 'Crystal Club', img: img('c4.webp'), disc: 'var(--green)', fact: 'Never wrong with a mixer.' },
  { name: 'Gin', brand: 'Crystal Club', img: img('c5.webp'), disc: 'var(--gold)', fact: 'You’re the gin to my tonic.' },
  { name: 'Whisky', brand: 'Stag 5', img: img('s1.webp'), disc: 'var(--red)', fact: '40% alcohol, also in a 350 ml bottle.' },
  { name: 'Vodka', brand: 'Stag 5', img: img('s3.webp'), disc: 'var(--green)', fact: 'Stag 5 vodka, from the same plant in Tabanan.' },
];

// Descriptions follow the retailer's product notes for each flavour.
export const haluu = [
  {
    name: 'Kopyor',
    img: img('haluu-kopyor.webp'),
    field: '#ff8a7a',
    note: 'Inspired by Bali’s coconut desserts: coconut and fragrant pandan, sweet and indulgent, with a soft, milky finish and a hint of tropical fruit.',
  },
  {
    name: 'Kuwut',
    img: img('haluu-kuwut.webp'),
    field: '#cfe04f',
    note: 'After Es Kuwut, the Balinese street drink: sweet cantaloupe, young coconut, a squeeze of lime and basil seeds. Bright, tangy and refreshing.',
  },
  {
    name: 'Teh Manis',
    img: img('haluu-tehmanis.webp'),
    field: '#ee9446',
    note: 'The classic sweet iced tea, made from 100% natural, locally sourced tea leaves. A sweet, nostalgic taste of the Nusantara.',
  },
  {
    name: 'Anggur Gulali',
    img: img('haluu-gulali.webp'),
    field: '#8fd6f2',
    note: 'Fresh grape with the sweetness of gulali, the cotton candy every Indonesian kid remembers.',
  },
];

export const plant = [
  { kind: 'heading', word: 'Our plant', bg: 'var(--ink)', ink: '#fff' },
  { kind: 'photo', img: img('company1.jpg'), caption: 'The filling line', alt: 'Filling machine and steel tanks at the Tabanan plant' },
  { kind: 'word', word: '2010', caption: 'The year we opened', bg: 'var(--gold)', ink: 'var(--ink)' },
  { kind: 'word', word: 'Bali', caption: 'Tabanan, Bali', bg: 'var(--red)', ink: '#fff' },
  { kind: 'word', word: '>20%', caption: 'Class C spirits', bg: 'var(--green)', ink: 'var(--ink)' },
  { kind: 'photo', img: img('company2.jpg'), caption: 'The filler', alt: 'Control panel and bottle-filling nozzles' },
  { kind: 'word', word: 'BPOM', caption: 'Every product registered', bg: 'var(--grey)', ink: 'var(--ink)' },
  { kind: 'word', word: '40%', caption: 'Stag 5 Whisky', bg: 'var(--gold)', ink: 'var(--ink)' },
  { kind: 'word', word: '350', caption: 'Millilitres, Stag 5 and Haluu', bg: 'var(--red)', ink: '#fff' },
  { kind: 'photo', img: img('company3.jpg'), caption: 'Water filtration', alt: 'Water filter columns in the production room' },
  { kind: 'word', word: 'Excise', caption: 'An official band on every bottle', bg: 'var(--green)', ink: 'var(--ink)' },
  { kind: 'photo', img: img('company4.jpg'), caption: 'The capper', alt: 'Bottle-capping machine beside a steel tank' },
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

export const pours = ['Tequila', 'Whisky', 'Rum', 'Vodka', 'Gin', 'Everyday Soju', 'Kopyor', 'Kuwut', 'Teh Manis', 'Anggur Gulali'];

export const strip = [
  img('soju1.jpg'), img('company1.jpg'), img('soju4.jpg'), img('e1.jpg'), img('company3.jpg'), img('soju5.jpg'),
  img('e3.jpg'), img('company2.jpg'), img('soju3.jpg'), img('e4.jpg'), img('company4.jpg'), img('soju2.jpg'),
];

export const logo = img('logo.png');

export const faq = [
  {
    q: 'How do I know your products are good quality?',
    a: 'Every PT Dafa Bali Utama product is registered with BPOM and lab-tested to the health standards the government requires.',
  },
  {
    q: 'Can any outlet sell your products?',
    a: 'Any outlet can buy from us. To resell, an outlet must meet the government’s licensing requirements: an NPPBKC and a SIUP MB.',
  },
  {
    q: 'Why do we cost more than some imported or local brands?',
    a: 'Alcoholic drinks are a controlled product, and an excise band on each bottle proves the excise has been paid. Our prices include that excise, so a fair comparison is only with products whose legality can also be proven. We also always use the best ingredients to keep our quality.',
  },
  {
    q: 'How can I check that your excise band is genuine?',
    a: 'Check that the class and volume printed on the band match the product, and that it carries DAFBALUT00, our plant’s code as the band’s registered orderer. The band’s colour usually changes every year; in 2021, class C bands were brown.',
  },
  {
    q: 'Is Crystal Club still imported from Malaysia, Singapore or the Philippines?',
    a: 'PT Dafa Bali Utama holds the official Crystal Club trademark in Indonesia. Van’wine and Spirit Bhd. in Malaysia stopped producing the brand to prevent infiltration. Any Crystal Club not made by PT Dafa Bali Utama is not official, and both the product and its excise band are in doubt. Your local Customs and Excise office can test a band for you.',
  },
  {
    q: 'Are the brands and flavours in the catalogue all you make?',
    a: 'For now, yes. We will add flavours and brands as the market grows; Haluu is the newest.',
  },
];
