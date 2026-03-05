"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? "shadow-sm border-b border-[var(--color-border)]" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-heading text-2xl font-[700] text-[var(--color-brand)]">
            [LOGO]
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}
                className="text-sm font-medium text-[var(--color-text-body)] hover:text-[var(--color-text-dark)] transition-colors">
                {link.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-[var(--color-brand)] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90">
              Get Started
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-[var(--color-text-dark)] transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text-dark)] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text-dark)] transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${mobileOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="bg-white border-t border-[var(--color-border)] px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className="block text-[var(--color-text-body)] hover:text-[var(--color-text-dark)] py-2 text-base">
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="block bg-[var(--color-brand)] text-white text-center px-5 py-3 rounded-full font-semibold mt-2">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
