import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL, WHATSAPP_NUMBER, NAV_LINKS, FOOTER_LINKS, COVERAGE_AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-gray-50)] border-t border-[var(--color-border)]">
      {/* Dark stats strip */}
      <div className="bg-[var(--color-text-dark)] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-white/80">
            <span className="font-semibold">1,000+ Pemasangan</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="font-semibold">{COVERAGE_AREAS.length} Negeri</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="font-semibold">4.8&#9733; Google Rating</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/brand/daikin-logo.png"
              alt="Daikin Malaysia"
              width={160}
              height={36}
              className="h-9 w-auto mb-3"
            />
            <p className="text-[var(--color-text-muted)] text-sm mt-3 leading-relaxed">
              Pakar Pasang, Servis &amp; Sewa Beli Daikin
            </p>
            <p className="text-[var(--color-text-muted)] text-xs mt-2">
              Authorised Installer of AirCond Malaysia
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[var(--color-text-dark)] mb-4">Navigasi</h4>
            <div className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[var(--color-text-dark)] mb-4">Pautan</h4>
            <div className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[var(--color-text-dark)] mb-4">Hubungi</h4>
            <div className="space-y-2.5">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-[var(--color-text-muted)] hover:text-[var(--color-whatsapp)] text-sm transition-colors">
                WhatsApp: +{WHATSAPP_NUMBER}
              </a>
            </div>
            <h4 className="font-bold text-sm text-[var(--color-text-dark)] mt-6 mb-3">Kawasan</h4>
            <div className="flex flex-wrap gap-1.5">
              {COVERAGE_AREAS.map((area) => (
                <span key={area.state} className="text-xs text-[var(--color-text-muted)] bg-[var(--color-gray-100)] px-2 py-0.5 rounded">
                  {area.state}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-text-muted)] text-xs">
            &copy; 2026 AirCond Malaysia. All rights reserved.
          </p>
          <p className="text-[var(--color-text-muted)] text-xs">Authorised Installer of AirCond Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
