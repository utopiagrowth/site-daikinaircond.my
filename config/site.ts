export const siteConfig = {
  brandName: 'Daikin AirCond Malaysia',
  legalName: 'Utopia Group of Companies',
  tagline: 'Pasang, Servis & Sewa Beli Aircond Daikin Malaysia',
  domain: 'daikin-aircond.vercel.app',
  url: 'https://daikin-aircond.vercel.app',
  // Pinned company_websites.id — a domain rename can never disconnect this site.
  siteId: '0e5cc273-393a-4273-ad1d-1c5eafcda16f',
  productSlug: 'aircond-daikin',
  productName: 'Aircond Daikin — Pasang, Servis & Sewa Beli',
  fallbackPhone: '60189294628',
  defaultLocale: 'ms' as const,
  locales: ['ms', 'en', 'zh'] as const,
  whatsappMessages: {
    ms: 'Hi, saya berminat nak pasang / servis / sewa beli aircond Daikin. Boleh bagi harga?',
    en: 'Hi, I am interested in Daikin aircond installation / service / rent-to-own. Can you send me a quote?',
    zh: '你好，我想咨询大金冷气的安装／保养／分期租购。可以给我报价吗？',
  },
  colors: {
    brandBlue: '#0097E0',
    brandBlueDeep: '#00609C',
    brandCyan: '#4FC3F7',
    brandBluePale: '#E6F5FE',
    brandNavy: '#0A2540',
    brandSteel: '#1C3D5A',
    brandGrey: '#6B7280',
    brandGreyLight: '#E5E7EB',
    brandWhite: '#FFFFFF',
    waGreen: '#25D366',
    waGreenHover: '#1EBE57',
    googleYellow: '#FBBC04',
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type Locale = (typeof siteConfig.locales)[number];
