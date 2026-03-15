"use client";

import Image from "next/image";
import { SERVICES, whatsappUrl } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Wrench, SprayCan, CalendarCheck } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  wrench: <Wrench className="w-8 h-8 text-[var(--color-brand)]" />,
  "spray-can": <SprayCan className="w-8 h-8 text-[var(--color-brand)]" />,
  "calendar-check": <CalendarCheck className="w-8 h-8 text-[var(--color-brand)]" />,
};

export default function ServicesGrid() {
  return (
    <section id="servis" className="py-20 md:py-28 bg-[var(--color-gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-brand)] text-sm font-medium">Servis Kami</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-dark)]">
              Pasang. Servis. Sewa Beli. —<br />
              <span className="gradient-text">Semua Untuk Aircond Daikin Anda.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card p-0 h-full flex flex-col overflow-hidden">
                <div className="relative h-[160px] w-full">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="w-14 h-14 bg-[var(--color-brand)]/10 rounded-2xl flex items-center justify-center mb-5">
                  {ICON_MAP[service.icon]}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">
                  {service.name}
                </h3>
                <p className="text-[var(--color-text-body)] text-base leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <p className="text-[var(--color-brand)] font-semibold text-base mb-5">
                  {service.price}
                </p>
                <a
                  href={whatsappUrl(service.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-whatsapp)] text-white px-6 py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-90 w-full"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Sekarang
                </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
