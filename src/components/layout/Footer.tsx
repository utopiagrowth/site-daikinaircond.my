import { WHATSAPP_URL, NAV_LINKS, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-gray-50)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <span className="font-heading text-2xl font-[700] text-[var(--color-brand)]">[LOGO]</span>
            <p className="text-[var(--color-text-muted)] text-sm mt-3 leading-relaxed">
              [Your company tagline or short description goes here. Keep it to 1-2 lines.]
            </p>
          </div>

          <div>
            <h4 className="font-heading font-[700] text-sm text-[var(--color-text-dark)] mb-4">Navigate</h4>
            <div className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="block text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-[700] text-sm text-[var(--color-text-dark)] mb-4">Legal</h4>
            <div className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="block text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-[700] text-sm text-[var(--color-text-dark)] mb-4">Contact</h4>
            <div className="space-y-2.5">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-[var(--color-text-muted)] hover:text-[var(--color-whatsapp)] text-sm transition-colors">
                WhatsApp Us
              </a>
              <span className="block text-[var(--color-text-muted)] text-sm">[Your City, Country]</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-text-muted)] text-xs">
            &copy; {new Date().getFullYear()} [Your Company Name]. All rights reserved.
          </p>
          <p className="text-[var(--color-text-muted)] text-xs">[Your tagline or location]</p>
        </div>
      </div>
    </footer>
  );
}
