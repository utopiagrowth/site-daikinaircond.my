// ============================================================
// DAIKIN AIRCOND MALAYSIA — Site Constants
// ============================================================

export const SITE_NAME = "Daikin AirCond Malaysia";
export const SITE_TAGLINE = "Pakar Pasang, Servis & Sewa Beli Daikin";

// WhatsApp
export const WHATSAPP_NUMBER = "60189294628";
export const WHATSAPP_MESSAGE = "Hi, saya berminat nak pasang aircond Daikin. Boleh bagi harga?";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_LINKS = [
  { label: "Produk", href: "/#produk" },
  { label: "Servis", href: "/#servis" },
  { label: "Sewa Beli", href: "/#sewa-beli" },
  { label: "Blog", href: "/blog" },
  { label: "Lokasi", href: "/lokasi" },
];

// ============================================================
// PROOF BAR STATS
// ============================================================

export const PROOF_STATS = [
  { value: "1,000+", label: "Pemasangan Siap" },
  { value: "4.8★", label: "Google Rating" },
  { value: "1-3 Hari", label: "Technician Datang" },
  { value: "5", label: "Cawangan Malaysia" },
];

// ============================================================
// SERVICES
// ============================================================

export interface Service {
  name: string;
  description: string;
  price: string;
  icon: string;
  image: string;
  waMessage: string;
}

export const SERVICES: Service[] = [
  {
    name: "Pasang Aircond Daikin",
    description: "Beli unit Daikin baru + pemasangan profesional. Semua model tersedia — wall mounted, cassette, ceiling. Harga termasuk bracket, piping, dan wiring standard.",
    price: "Dari RM1,760 (unit + pasang)",
    icon: "wrench",
    image: "/images/hero-install.jpg",
    waMessage: "Hi, saya nak pasang aircond Daikin. Boleh bagi harga?",
  },
  {
    name: "Servis Aircond Daikin",
    description: "Servis berkala, chemical wash, gas top-up, dan repair. Aircond sejuk balik, jimat elektrik, tahan lama. Kami pakar Daikin — faham setiap model.",
    price: "Servis dari RM80 | Chemical wash dari RM130",
    icon: "spray-can",
    image: "/images/blog/kos-servis-aircond.jpg",
    waMessage: "Hi, saya nak servis aircond Daikin. Boleh bagi harga chemical wash?",
  },
  {
    name: "Sewa Beli Aircond Daikin",
    description: "Tak perlu bayar penuh. Sewa beli Daikin brand new dari RM109/bulan — termasuk unit + pemasangan + warranty 1 tahun. Bayar bulanan, akhirnya aircond tu jadi milik anda.",
    price: "Dari RM109/bulan (24 bulan)",
    icon: "calendar-check",
    image: "/images/blog/sewa-beli-aircond.jpg",
    waMessage: "Hi, saya berminat nak sewa beli aircond Daikin. Boleh explain plan sewa beli?",
  },
];

// ============================================================
// PRODUCT DATA
// ============================================================

export type ServiceMode = "beli" | "servis" | "sewa-beli";

export interface ProductCategory {
  name: string;
  slug: string;
  description: Record<ServiceMode, string>;
  features: Record<ServiceMode, string[]>;
  hpRange: string;
  pricing: {
    beli: { label: string; price: string; sub: string };
    servis: { label: string; price: string; sub: string };
    "sewa-beli": { label: string; price: string; sub: string };
  };
  models: string;
  image: string;
  waMessage: Record<ServiceMode, string>;
}

export const SERVICE_MODES: { key: ServiceMode; label: string; icon: string }[] = [
  { key: "beli", label: "Beli & Pasang", icon: "shopping-cart" },
  { key: "servis", label: "Servis & Repair", icon: "spray-can" },
  { key: "sewa-beli", label: "Sewa Beli", icon: "calendar-check" },
];

export const PRODUCTS: ProductCategory[] = [
  {
    name: "Inverter Split Unit",
    slug: "inverter-split",
    description: {
      beli: "Beli unit Daikin inverter baru + pemasangan profesional. Jimat elektrik sehingga 50%. Pilihan #1 untuk rumah.",
      servis: "Servis berkala untuk aircond Daikin inverter anda. Chemical wash, gas top-up, repair — aircond sejuk macam baru.",
      "sewa-beli": "Sewa beli Daikin inverter — bayar bulanan, termasuk unit baru + pemasangan + warranty 1 tahun. Akhirnya jadi milik anda.",
    },
    features: {
      beli: ["Jimat 50% Elektrik", "Senyap (19-42 dBA)", "Wi-Fi Smart Control", "Warranty 5 Tahun Compressor"],
      servis: ["Chemical Wash", "Gas Top-Up R32", "General Service", "Repair & Troubleshoot"],
      "sewa-beli": ["Unit Baru 100%", "Pasang Percuma", "Warranty 1 Tahun", "Jadi Milik Anda"],
    },
    hpRange: "1.0HP - 3.0HP",
    pricing: {
      beli: { label: "Unit + Pasang", price: "RM1,580", sub: "Harga bergantung model & HP" },
      servis: { label: "Servis dari", price: "RM80", sub: "Chemical wash dari RM130" },
      "sewa-beli": { label: "Bulanan dari", price: "RM99/bln", sub: "24 bulan | Deposit RM200" },
    },
    models: "SMARTO, FTKM, BLUVI, FTKP, FTKF, FTKB, FTKE",
    image: "/images/products/smarto-banner.jpg",
    waMessage: {
      beli: "Hi, saya nak beli & pasang Daikin Inverter Split Unit. Boleh bagi harga?",
      servis: "Hi, saya nak servis aircond Daikin Inverter. Boleh bagi harga?",
      "sewa-beli": "Hi, saya nak sewa beli Daikin Inverter. Boleh explain plan?",
    },
  },
  {
    name: "Non-Inverter Split Unit",
    slug: "non-inverter",
    description: {
      beli: "Harga paling mampu milik untuk brand Daikin. Sesuai untuk bilik jarang digunakan, rumah sewa, atau bajet terhad.",
      servis: "Servis untuk Daikin non-inverter. Bersihkan habuk & kulat, top-up gas, pastikan aircond perform macam baru.",
      "sewa-beli": "Sewa beli Daikin non-inverter dari RM89/bulan. Paling murah — sesuai untuk bajet terhad tapi nak brand Daikin.",
    },
    features: {
      beli: ["Harga Terendah Daikin", "Powerful Mode", "Wi-Fi Smart Control", "R32 Eco-Friendly"],
      servis: ["Chemical Wash", "Gas Top-Up R32", "Filter Cleaning", "General Check-Up"],
      "sewa-beli": ["Unit Baru 100%", "Pasang Percuma", "Warranty 1 Tahun", "Harga Paling Rendah"],
    },
    hpRange: "1.0HP - 3.0HP",
    pricing: {
      beli: { label: "Unit + Pasang", price: "RM1,480", sub: "Harga terendah Daikin" },
      servis: { label: "Servis dari", price: "RM80", sub: "Chemical wash dari RM130" },
      "sewa-beli": { label: "Bulanan dari", price: "RM89/bln", sub: "36 bulan | Deposit RM200" },
    },
    models: "FTV-P Series",
    image: "/images/products/ftv-p-banner.jpg",
    waMessage: {
      beli: "Hi, saya nak beli & pasang Daikin Non-Inverter. Boleh bagi harga?",
      servis: "Hi, saya nak servis aircond Daikin Non-Inverter. Boleh bagi harga?",
      "sewa-beli": "Hi, saya nak sewa beli Daikin Non-Inverter. Boleh explain plan?",
    },
  },
  {
    name: "Cassette Inverter",
    slug: "cassette-inverter",
    description: {
      beli: "Pemasangan siling — sesuai untuk office, kedai, restoran. Aliran udara 360° untuk pendinginan sekata. Capacity besar.",
      servis: "Servis cassette unit Daikin. Chemical overhaul siling unit, gas top-up, pastikan aliran udara 360° berfungsi optimal.",
      "sewa-beli": "Sewa beli Daikin cassette untuk premis komersial. Bayar bulanan — sesuai untuk bisnes yang nak aircond premium tanpa modal besar.",
    },
    features: {
      beli: ["360° Airflow", "Ceiling Mounted", "Sesuai Komersial", "High Capacity"],
      servis: ["Full Chemical Overhaul", "360° Vent Cleaning", "Gas Top-Up", "Drain Pan Service"],
      "sewa-beli": ["Unit Baru 100%", "Pasang Percuma", "Warranty 1 Tahun", "Sesuai Komersial"],
    },
    hpRange: "2.0HP - 5.0HP",
    pricing: {
      beli: { label: "Unit + Pasang", price: "RM4,760", sub: "Harga bergantung HP" },
      servis: { label: "Servis dari", price: "RM200", sub: "Full overhaul dari RM350" },
      "sewa-beli": { label: "Bulanan dari", price: "RM249/bln", sub: "24 bulan | Deposit RM500" },
    },
    models: "SkyAir Series",
    image: "/images/products/cassette-unit.jpg",
    waMessage: {
      beli: "Hi, saya nak beli & pasang Daikin Cassette untuk office/kedai. Boleh bagi harga?",
      servis: "Hi, saya nak servis Daikin Cassette unit. Boleh bagi harga?",
      "sewa-beli": "Hi, saya nak sewa beli Daikin Cassette untuk bisnes. Boleh explain plan?",
    },
  },
];

// ============================================================
// RTO PRICING
// ============================================================

export interface RTOPlan {
  hp: string;
  buyPrice: string;
  rto24: string;
  rto36: string;
  deposit: string;
}

export const RTO_PLANS: RTOPlan[] = [
  { hp: "1.0 HP", buyPrice: "Dari RM1,760", rto24: "RM109/bln", rto36: "RM79/bln", deposit: "RM200" },
  { hp: "1.5 HP", buyPrice: "Dari RM2,200", rto24: "RM139/bln", rto36: "RM99/bln", deposit: "RM200" },
  { hp: "2.0 HP", buyPrice: "Dari RM3,250", rto24: "RM209/bln", rto36: "RM149/bln", deposit: "RM300" },
  { hp: "2.5 HP", buyPrice: "Dari RM3,670", rto24: "RM239/bln", rto36: "RM169/bln", deposit: "RM300" },
  { hp: "3.0 HP", buyPrice: "Dari RM4,430", rto24: "RM269/bln", rto36: "RM189/bln", deposit: "RM500" },
];

// ============================================================
// TESTIMONIALS
// ============================================================

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Ahmad R.", role: "Pemilik Rumah, Puchong", quote: "Pagi WhatsApp tanya harga Daikin 1.5HP, petang dah confirm. Esok technician datang pasang. Memang laju gila. Aircond sejuk, harga pun OK.", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Faizal M.", role: "Landlord, Shah Alam", quote: "Saya sewa beli Daikin FTKF 2HP untuk rumah sewa — RM209 sebulan je. Tak payah keluar duit besar. Tenant happy, saya pun happy.", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Siti A.", role: "Ibu Rumah, Ampang", quote: "Dulu pakai aircond lama, bil elektrik RM400 sebulan. Tukar Daikin inverter, turun jadi RM250. Jimat gila. Patut tukar lama dah.", avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
  { name: "Jason T.", role: "Condo Owner, KLCC", quote: "Chemical wash servis memang bagus. Aircond dah 4 tahun tak servis — lepas chemical wash, sejuk macam baru. RM150 je.", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { name: "Nurul H.", role: "Pemilik Apartment, Cyberjaya", quote: "Saya compare harga 5 kedai sebelum jumpa AirCond Malaysia. Harga paling transparent, takde hidden charges. Siap ada sewa beli lagi. Recommended.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Kevin L.", role: "Business Owner, PJ", quote: "Pasang 3 unit Daikin BLUVI untuk office baru. Warna Sky Blue cantik, match dengan design office. Technician siap dalam satu hari.", avatar: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Rizal K.", role: "Pemilik Rumah, Seremban", quote: "First time dengar boleh SEWA BELI aircond Daikin. Ingat tipu. Tapi betul — RM109 sebulan, siap pasang semua. Lepas habis bayar, jadi milik saya.", avatar: "https://randomuser.me/api/portraits/men/36.jpg" },
  { name: "Aminah Z.", role: "Office Manager, Putrajaya", quote: "Servis aircond office 8 unit sekaligus. Harga bulk discount, siap dalam setengah hari. Professional gila team ni.", avatar: "https://randomuser.me/api/portraits/women/52.jpg" },
];

// ============================================================
// FAQ
// ============================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Berapa harga pasang aircond Daikin?",
    answer: "Harga bermula dari RM1,760 untuk unit Daikin 1HP + pemasangan standard. Harga termasuk bracket, piping (10ft), dan wiring. Kalau piping lebih panjang, kami bagitahu harga extra sebelum start kerja — takde surprise charges.",
  },
  {
    question: "Macam mana sewa beli aircond Daikin berfungsi?",
    answer: "Anda pilih model, kami pasang unit baru. Bayar secara bulanan — dari RM89/bulan (36 bulan) atau RM109/bulan (24 bulan). Deposit RM200-500 bergantung pada HP. Selepas habis bayar, unit 100% jadi milik anda.",
  },
  {
    question: "Sewa beli termasuk apa?",
    answer: "Termasuk unit Daikin brand new, pemasangan profesional, dan warranty 1 tahun. Anda juga boleh tambah maintenance plan (RM49/bulan) untuk servis berkala — kami datang setiap 3 bulan.",
  },
  {
    question: "Kawasan mana anda cover?",
    answer: "KL, Selangor, Johor Bahru, Penang, dan Negeri Sembilan. Kalau kawasan anda tak dalam senarai, WhatsApp kami — kami check dan confirm.",
  },
  {
    question: "Berapa lama proses pemasangan?",
    answer: "Biasanya 1-3 hari selepas confirm order. Pemasangan sendiri ambil masa 2-4 jam bergantung pada setup. Kami buat scheduling siap — anda just pilih slot yang sesuai.",
  },
  {
    question: "Kenapa pilih Daikin?",
    answer: "Daikin adalah jenama aircond #1 di Malaysia — 26% market share. Inverter Daikin jimat sehingga 50% elektrik. Compressor warranty 5 tahun, parts warranty 3 tahun. Tahan lama, jimat elektrik, kurang bising.",
  },
  {
    question: "Kalau aircond rosak dalam tempoh sewa beli?",
    answer: "Dalam tempoh warranty, kami repair atau ganti percuma. Selepas warranty, anda boleh WhatsApp kami untuk servis — kami bagi harga istimewa untuk pelanggan sewa beli.",
  },
  {
    question: "Ada soalan lain?",
    answer: "WhatsApp kami terus di +60189294628 — kami reply dalam masa 1 jam waktu bekerja. Tak payah call, tak payah isi borang. WhatsApp je.",
  },
];

// ============================================================
// COVERAGE AREAS
// ============================================================

export const COVERAGE_AREAS = [
  { state: "Kuala Lumpur", areas: "Semua kawasan", slug: "kuala-lumpur", image: "/images/locations/kuala-lumpur.jpg" },
  { state: "Selangor", areas: "Shah Alam, PJ, Subang, Puchong, Klang, Cyberjaya, Putrajaya", slug: "selangor", image: "/images/locations/selangor.jpg" },
  { state: "Johor", areas: "JB, Iskandar, Kulai, Pontian", slug: "johor", image: "/images/locations/johor.jpg" },
  { state: "Penang", areas: "George Town, Butterworth, Seberang Perai", slug: "penang", image: "/images/locations/penang.jpg" },
  { state: "Perak", areas: "Ipoh, Taiping, Teluk Intan", slug: "perak", image: "/images/locations/perak.jpg" },
  { state: "Negeri Sembilan", areas: "Seremban, Nilai", slug: "negeri-sembilan", image: "/images/locations/negeri-sembilan.jpg" },
  { state: "Melaka", areas: "Bandaraya Melaka, Ayer Keroh", slug: "melaka", image: "/images/locations/melaka.jpg" },
  { state: "Pahang", areas: "Kuantan, Temerloh, Bentong", slug: "pahang", image: "/images/locations/pahang.jpg" },
  { state: "Kelantan", areas: "Kota Bharu, Pasir Mas", slug: "kelantan", image: "/images/locations/kelantan.jpg" },
  { state: "Terengganu", areas: "Kuala Terengganu, Kemaman", slug: "terengganu", image: "/images/locations/terengganu.jpg" },
  { state: "Kedah", areas: "Alor Setar, Sungai Petani, Langkawi", slug: "kedah", image: "/images/locations/kedah.jpg" },
  { state: "Sabah", areas: "Kota Kinabalu, Sandakan, Tawau", slug: "sabah", image: "/images/locations/sabah.jpg" },
  { state: "Sarawak", areas: "Kuching, Miri, Sibu", slug: "sarawak", image: "/images/locations/sarawak.jpg" },
];

// ============================================================
// DAIKIN vs COMPETITORS
// ============================================================

export const COMPARISON_DATA = [
  { feature: "Penjimatan elektrik", daikin: "Jimat sehingga 50%", generic: "Standard" },
  { feature: "Bunyi bising", daikin: "Serendah 19 dBA", generic: "35-45 dBA" },
  { feature: "Hayat compressor", daikin: "8-10 tahun", generic: "3-5 tahun" },
  { feature: "Warranty compressor", daikin: "5 tahun", generic: "1-2 tahun" },
  { feature: "Smart control (WiFi)", daikin: "✅ GO DAIKIN App", generic: "❌ Kebanyakan tiada" },
  { feature: "Air purification", daikin: "✅ Selected models", generic: "❌ Tiada" },
  { feature: "R32 eco-friendly", daikin: "✅ Semua model", generic: "Campuran" },
];

// ============================================================
// FOOTER
// ============================================================

export const FOOTER_LINKS = [
  { label: "Produk", href: "/#produk" },
  { label: "Servis", href: "/#servis" },
  { label: "Sewa Beli", href: "/#sewa-beli" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Lokasi", href: "/lokasi" },
  { label: "Privacy Policy", href: "/privacy" },
];
