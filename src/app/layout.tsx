import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "[Your Company] — [Your Tagline]",
  description: "[Your meta description — keep under 160 characters for SEO]",
  openGraph: {
    type: "website",
    url: "https://yoursite.com",
    title: "[Your Company] — [Your Tagline]",
    description: "[Your OG description]",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_MY",
    siteName: "[Your Company]",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Your Company] — [Your Tagline]",
    description: "[Your Twitter description]",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bricolage.variable} ${plusJakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
