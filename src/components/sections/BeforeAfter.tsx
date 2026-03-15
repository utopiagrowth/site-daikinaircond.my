"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SprayCan, Sparkles, MapPin, ThermometerSnowflake, Wind } from "lucide-react";

const RESULTS = [
  {
    title: "Chemical Wash — Wall Mounted 1.5HP",
    location: "Puchong, Selangor",
    beforeDesc: "Coil hitam, tersumbat habuk tebal 4 tahun. Angin lemah, aircond tak sejuk.",
    afterDesc: "Coil bersih macam baru, angin kuat balik. Sejuk maksimum, jimat elektrik.",
    image: "/images/blog/kos-servis-aircond.jpg",
    beforeIcon: <SprayCan className="w-5 h-5 text-red-400" />,
    afterIcon: <Sparkles className="w-5 h-5 text-emerald-500" />,
  },
  {
    title: "Full Service + Gas Top-Up — 2HP",
    location: "Shah Alam, Selangor",
    beforeDesc: "Aircond bocor air, bising teruk. Gas dah habis, compressor overheat.",
    afterDesc: "Takde bocor, senyap, sejuk gila. Gas R32 penuh, perform macam baru.",
    image: "/images/hero-install.jpg",
    beforeIcon: <ThermometerSnowflake className="w-5 h-5 text-red-400" />,
    afterIcon: <Wind className="w-5 h-5 text-emerald-500" />,
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 bg-frost bg-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-brand)] text-sm font-medium">Hasil Kerja</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-dark)]">
              Tengok Hasil Servis Kami —<br />
              <span className="gradient-text">Aircond Macam Baru</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {RESULTS.map((result, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="card overflow-hidden h-full">
                {/* Context image */}
                <div className="relative h-[140px] w-full">
                  <Image
                    src={result.image}
                    alt={result.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{result.title}</span>
                    <span className="flex items-center gap-1 text-xs text-white/80">
                      <MapPin className="w-3 h-3" />
                      {result.location}
                    </span>
                  </div>
                </div>

                {/* Before / After split */}
                <div className="grid grid-cols-2 min-h-[140px]">
                  {/* Before */}
                  <div className="bg-red-50 p-5 flex flex-col justify-center border-r border-[var(--color-border)]">
                    <div className="flex items-center gap-2 mb-3">
                      {result.beforeIcon}
                      <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Sebelum</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{result.beforeDesc}</p>
                  </div>
                  {/* After */}
                  <div className="bg-emerald-50 p-5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      {result.afterIcon}
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Selepas</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{result.afterDesc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
