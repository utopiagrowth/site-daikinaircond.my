// Fallback product catalogue — used ONLY when the Supabase `products` table is
// unreachable or empty (per CLAUDE.md rule 6). The DB is the source of truth;
// homepage + location pages query it first and fall back to this list so the
// grid never renders blank. Prices are the real unit+installation prices from
// the Daikin AirCond Malaysia price sheet.

export interface FallbackProduct {
  slug: string;
  name: string;
  /** Short category/eyebrow tag shown on the card, e.g. "Inverter". */
  category: string;
  description: string;
  /** Unit + standard installation price in RM. */
  price: number;
  image: string | null;
}

export const fallbackProducts: FallbackProduct[] = [
  {
    slug: 'daikin-smarto-inverter',
    name: 'Daikin SMARTO Inverter',
    category: 'Inverter',
    description:
      'Siri SMARTO dengan kawalan Wi-Fi GO DAIKIN — jimat elektrik sehingga 50%, serendah 19 dBA. Harga termasuk pemasangan standard.',
    price: 1580,
    image: '/images/products/smarto-banner.jpg',
  },
  {
    slug: 'daikin-ftkm-inverter',
    name: 'Daikin FTKM Inverter',
    category: 'Inverter',
    description:
      'FTKM Series — model inverter premium Daikin dengan penapisan udara Streamer. Warranty compressor 5 tahun.',
    price: 2200,
    image: '/images/products/ftkm-banner.jpg',
  },
  {
    slug: 'daikin-bluvi-inverter',
    name: 'Daikin BLUVI Inverter',
    category: 'Inverter',
    description:
      'BLUVI dengan pilihan warna Sky Blue dan White — inverter R32 untuk bilik tidur dan ruang tamu moden.',
    price: 1980,
    image: '/images/products/bluvi-blue.png',
  },
  {
    slug: 'daikin-ftkf-inverter',
    name: 'Daikin FTKF Inverter',
    category: 'Inverter',
    description:
      'FTKF Series — inverter mesra bajet dengan Powerful Mode dan kawalan Wi-Fi pilihan. Sesuai rumah teres.',
    price: 1780,
    image: '/images/products/ftkf-banner.jpg',
  },
  {
    slug: 'daikin-ftv-p-non-inverter',
    name: 'Daikin FTV-P Non-Inverter',
    category: 'Non-Inverter',
    description:
      'Harga paling mampu milik untuk jenama Daikin. Sesuai untuk bilik jarang digunakan, rumah sewa, atau bajet terhad.',
    price: 1480,
    image: '/images/products/ftv-p-banner.jpg',
  },
  {
    slug: 'daikin-skyair-cassette',
    name: 'Daikin SkyAir Cassette',
    category: 'Cassette',
    description:
      'Cassette siling dengan aliran udara 360° untuk pejabat, kedai, dan restoran. Kapasiti 2.0HP hingga 5.0HP.',
    price: 4760,
    image: '/images/products/cassette-unit.jpg',
  },
];
