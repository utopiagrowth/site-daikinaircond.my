"use client";

import Link from "next/link";
import Image from "next/image";
import { COVERAGE_AREAS, WHATSAPP_URL } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPin } from "lucide-react";

export default function CoverageArea() {
  return (
    <section className="py-20 md:py-28 bg-frost bg-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-brand)] text-sm font-medium">Kawasan Liputan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-dark)]">
              Kami Servis <span className="gradient-text">Seluruh Malaysia</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {COVERAGE_AREAS.map((area, i) => (
            <ScrollReveal key={area.state} delay={i * 0.08}>
              <Link href={`/lokasi/${area.slug}`} className="block">
                <div className="card p-0 h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-[100px] w-full">
                    <Image
                      src={area.image}
                      alt={`Servis Aircond Daikin di ${area.state}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[var(--color-brand)]/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[var(--color-brand)]" />
                      </div>
                      <h3 className="font-bold text-[var(--color-text-dark)]">
                        {area.state}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-[44px]">
                      {area.areas}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-[var(--color-text-muted)] text-sm mt-8">
            Kawasan lain?{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand)] font-semibold hover:underline">
              WhatsApp kami
            </a>{" "}
            — kami check coverage untuk anda.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
