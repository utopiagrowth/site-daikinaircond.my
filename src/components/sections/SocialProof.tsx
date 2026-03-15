"use client";

import { TESTIMONIALS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="card p-6 w-[300px] md:w-[340px] shrink-0">
      <div className="flex items-center gap-3 mb-3">
        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
        <div>
          <p className="text-[var(--color-text-dark)] font-semibold text-sm">{t.name}</p>
          <p className="text-[var(--color-text-muted)] text-xs">{t.role}</p>
        </div>
        {/* Google G icon */}
        <div className="ml-auto w-6 h-6 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
    </div>
  );
}

export default function SocialProof() {
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4, 8);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-dark)]">
              Dipercayai Oleh Pelanggan<br />
              <span className="gradient-text">Di Seluruh Malaysia</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative mb-6">
        <div className="flex gap-5 hover:[animation-play-state:paused]"
          style={{ animation: "scroll-left 40s linear infinite", width: "max-content" }}>
          {[...row1, ...row1, ...row1].map((t, i) => <TestimonialCard key={`r1-${i}`} t={t} />)}
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-5 hover:[animation-play-state:paused]"
          style={{ animation: "scroll-right 40s linear infinite", width: "max-content" }}>
          {[...row2, ...row2, ...row2].map((t, i) => <TestimonialCard key={`r2-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
}
