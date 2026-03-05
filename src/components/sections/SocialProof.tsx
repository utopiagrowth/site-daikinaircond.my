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
          <p className="text-[var(--color-text-muted)] text-xs">{t.role}, {t.company}</p>
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
  const row1 = TESTIMONIALS.slice(0, 10);
  const row2 = TESTIMONIALS.slice(10, 20);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-[700] text-[var(--color-text-dark)]">
              What Our Customers <span className="gradient-text">Say</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative mb-6">
        <div className="flex gap-5 hover:[animation-play-state:paused]"
          style={{ animation: "scroll-left 60s linear infinite", width: "max-content" }}>
          {[...row1, ...row1].map((t, i) => <TestimonialCard key={`r1-${i}`} t={t} />)}
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-5 hover:[animation-play-state:paused]"
          style={{ animation: "scroll-right 60s linear infinite", width: "max-content" }}>
          {[...row2, ...row2].map((t, i) => <TestimonialCard key={`r2-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
}
