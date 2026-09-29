import { loadEnvConfig } from '@next/env';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

loadEnvConfig(process.cwd() + '/../..');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // Keep metadata blocking for every user agent. By default Next streams it into
  // <body> for anything not on its bot list — webcore's audit (`head > title`)
  // and some crawlers then find no title on a freshly rendered page.
  htmlLimitedBots: /.*/,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // Current shared instance. The scaffold carried the retired host
      // (xzydvhzcngpxdbyniliy), which has no tables on it any more.
      { protocol: 'https', hostname: 'mazdcaibvhyqglfctdul.supabase.co' },
    ],
  },
};

export default withNextIntl(nextConfig);
