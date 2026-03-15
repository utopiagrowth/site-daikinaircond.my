"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Smartphone, Wrench, Wallet } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: <Smartphone className="w-6 h-6" />,
    title: "Pilih Model",
    description: "WhatsApp kami dan beritahu saiz bilik + bajet anda. Kami cadangkan model Daikin terbaik untuk anda.",
  },
  {
    num: "02",
    icon: <Wrench className="w-6 h-6" />,
    title: "Kami Pasang",
    description: "Technician datang 1–3 hari selepas confirm. Pemasangan profesional siap dalam 2–4 jam.",
  },
  {
    num: "03",
    icon: <Wallet className="w-6 h-6" />,
    title: "Bayar Bulanan",
    description: "Dari RM89/bulan, selepas habis tempoh jadi milik anda. Takde hidden charges.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-frost bg-wash">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-brand)] text-sm font-semibold">Cara Sewa Beli</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-dark)]">
              Sewa Beli Aircond Daikin<br />
              <span className="gradient-text">Dalam 3 Langkah Mudah</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps — card-based layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative card p-8 text-center h-full">
                {/* Step number — large watermark */}
                <div className="absolute top-4 right-5 text-5xl font-extrabold text-[var(--color-brand)]/8">
                  {step.num}
                </div>

                {/* Icon circle */}
                <div className="w-14 h-14 bg-[var(--color-brand)] rounded-full flex items-center justify-center mx-auto mb-5 text-white">
                  {step.icon}
                </div>

                <h3 className="text-xl font-extrabold text-[var(--color-text-dark)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector (desktop only, between cards) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white border border-[var(--color-border)] rounded-full flex items-center justify-center shadow-sm">
                      <svg className="w-4 h-4 text-[var(--color-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="text-center text-[var(--color-brand)] font-semibold text-base mt-10 max-w-xl mx-auto">
            Dari WhatsApp sampai aircond terpasang — biasanya dalam masa 3 hari.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
