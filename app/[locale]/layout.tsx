import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { localeHref } from '@/lib/localeHref';
import { ogImages } from '@/lib/ogImage';
import { siteConfig } from '@/config/site';
import { OrganizationSchema } from '@/components/schema/OrganizationSchema';
import { WebSiteSchema } from '@/components/schema/WebSiteSchema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
});

const OG_LOCALE: Record<string, string> = {
  ms: 'ms_MY',
  en: 'en_MY',
  zh: 'zh_CN',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.home' });
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `${localeHref(l)}`]),
  );
  languages['x-default'] = `${localeHref(routing.defaultLocale)}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${localeHref(locale)}`,
      languages,
    },
    openGraph: {
      type: 'website',
      url: `${localeHref(locale)}`,
      siteName: siteConfig.brandName,
      title: t('title'),
      description: t('description'),
      locale: OG_LOCALE[locale] || 'ms_MY',
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      images: ogImages(locale),
    },
    twitter: { card: 'summary_large_image', images: ogImages(locale) },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        {/* Search Console URL-prefix property for https://daikinaircond.my/.
            The sc-domain: property is DNS-verified and needs no tag; this one
            is META-verified, so removing this line un-verifies the property. */}
        <meta
          name="google-site-verification"
          content="PFNyIIn2L64887xnwPFNPPMifbpfG7wgCxqRQbJxLdI"
        />
        {/* Google Tag Manager — this site's OWN container, GTM-N5BW97JN
            (GTM account 6000211475, container 260994924), created by Gloo for
            daikinaircond.my alongside GA4 G-W5D2SSWWZY. Cross-check any change
            against scripts/google-automation/configs/daikinaircond.my.json —
            the scaffold originally arrived carrying water-tank.my's live
            container, which would have posted Daikin's conversions into
            TANKPRO's account. */}
        <script
          id="gtm-base"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5BW97JN');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          defer
          src="https://webcore.utopiaai.my/t.js"
          data-website={siteConfig.domain}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5BW97JN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          <OrganizationSchema />
          <WebSiteSchema locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
