import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-pjs",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pasang & Servis Aircond Daikin Malaysia | Sewa Dari RM109/bulan",
  description: "Pakar pasang aircond Daikin — harga termasuk pemasangan. Servis chemical wash dari RM130. Sewa aircond Daikin dari RM109/bulan. WhatsApp sekarang!",
  openGraph: {
    type: "website",
    url: "https://site-tau-sooty-90.vercel.app",
    title: "Pasang & Servis Aircond Daikin Malaysia | Sewa Dari RM109/bulan",
    description: "Authorised installer Daikin. Pasang, servis & sewa aircond Daikin di KL, Selangor & seluruh Malaysia. WhatsApp untuk harga!",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ms_MY",
    siteName: "Daikin AirCond Malaysia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasang & Servis Aircond Daikin Malaysia | Sewa Dari RM109/bulan",
    description: "Authorised installer Daikin. Pasang, servis & sewa aircond Daikin di KL, Selangor & seluruh Malaysia.",
    images: ["/og-image.png"],
  },
  icons: { icon: [{ url: "/favicon.svg" }, { url: "/favicon.png", type: "image/png" }] },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Daikin AirCond Malaysia",
  "description": "Installation & Service Partner untuk aircond Daikin di Malaysia. Pasang, servis & sewa beli aircond Daikin.",
  "url": "https://site-tau-sooty-90.vercel.app",
  "telephone": "+60189294628",
  "image": "https://site-tau-sooty-90.vercel.app/images/brand/daikin-logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MY",
    "addressRegion": "Selangor",
  },
  "areaServed": ["Kuala Lumpur", "Selangor", "Johor", "Penang", "Perak", "Negeri Sembilan", "Melaka", "Pahang", "Kelantan", "Terengganu", "Kedah", "Sabah", "Sarawak"],
  "priceRange": "RM80 - RM8,650",
  "openingHours": "Mo-Sa 08:00-18:00",
  "sameAs": [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa harga pasang aircond Daikin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Harga bermula dari RM1,760 untuk unit Daikin 1HP + pemasangan standard. Harga termasuk bracket, piping (10ft), dan wiring. Kalau piping lebih panjang, kami bagitahu harga extra sebelum start kerja — takde surprise charges.",
      },
    },
    {
      "@type": "Question",
      "name": "Macam mana sewa beli aircond Daikin berfungsi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anda pilih model, kami pasang unit baru. Bayar secara bulanan — dari RM89/bulan (36 bulan) atau RM109/bulan (24 bulan). Deposit RM200-500 bergantung pada HP. Selepas habis bayar, unit 100% jadi milik anda.",
      },
    },
    {
      "@type": "Question",
      "name": "Sewa beli termasuk apa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Termasuk unit Daikin brand new, pemasangan profesional, dan warranty 1 tahun. Anda juga boleh tambah maintenance plan (RM49/bulan) untuk servis berkala — kami datang setiap 3 bulan.",
      },
    },
    {
      "@type": "Question",
      "name": "Kawasan mana anda cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KL, Selangor, Johor Bahru, Penang, dan Negeri Sembilan. Kalau kawasan anda tak dalam senarai, WhatsApp kami — kami check dan confirm.",
      },
    },
    {
      "@type": "Question",
      "name": "Berapa lama proses pemasangan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biasanya 1-3 hari selepas confirm order. Pemasangan sendiri ambil masa 2-4 jam bergantung pada setup. Kami buat scheduling siap — anda just pilih slot yang sesuai.",
      },
    },
    {
      "@type": "Question",
      "name": "Kenapa pilih Daikin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Daikin adalah jenama aircond #1 di Malaysia — 26% market share. Inverter Daikin jimat sehingga 50% elektrik. Compressor warranty 5 tahun, parts warranty 3 tahun. Tahan lama, jimat elektrik, kurang bising.",
      },
    },
    {
      "@type": "Question",
      "name": "Kalau aircond rosak dalam tempoh sewa beli?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dalam tempoh warranty, kami repair atau ganti percuma. Selepas warranty, anda boleh WhatsApp kami untuk servis — kami bagi harga istimewa untuk pelanggan sewa beli.",
      },
    },
    {
      "@type": "Question",
      "name": "Ada soalan lain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WhatsApp kami terus di +60189294628 — kami reply dalam masa 1 jam waktu bekerja. Tak payah call, tak payah isi borang. WhatsApp je.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-[family-name:var(--font-pjs)] antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* TODO: Replace G-PLACEHOLDER with real GA4 measurement ID */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PLACEHOLDER');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
