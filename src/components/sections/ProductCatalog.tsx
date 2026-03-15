"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, SERVICE_MODES, whatsappUrl } from "@/lib/constants";
import type { ServiceMode } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ShoppingCart, SprayCan, CalendarCheck } from "lucide-react";

const MODE_ICONS = {
  beli: <ShoppingCart className="w-5 h-5" />,
  servis: <SprayCan className="w-5 h-5" />,
  "sewa-beli": <CalendarCheck className="w-5 h-5" />,
};

export default function ProductCatalog() {
  const [mode, setMode] = useState<ServiceMode>("beli");

  return (
    <section id="produk" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-brand)] text-sm font-semibold">Model Daikin</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-dark)] mb-4">
              Pilih Jenis Aircond Daikin<br />
              <span className="gradient-text">Yang Sesuai Untuk Anda</span>
            </h2>
            <p className="text-[var(--color-text-body)] text-lg max-w-2xl mx-auto mb-8">
              Anda nak beli, servis, atau sewa beli? Pilih di bawah — harga berubah mengikut pilihan anda.
            </p>
          </div>
        </ScrollReveal>

        {/* Toggle Strip */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[var(--color-gray-100)] rounded-2xl p-1.5 gap-1">
            {SERVICE_MODES.map((m) => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                className={`flex items-center gap-2 px-5 md:px-8 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                  mode === m.key
                    ? "bg-[var(--color-brand)] text-white shadow-lg shadow-[var(--color-brand)]/20"
                    : "text-[var(--color-text-body)] hover:text-[var(--color-text-dark)] hover:bg-white/60"
                }`}
              >
                {MODE_ICONS[m.key]}
                <span className="hidden sm:inline">{m.label}</span>
                <span className="sm:hidden">{m.key === "beli" ? "Beli" : m.key === "servis" ? "Servis" : "Sewa Beli"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 0.1}>
              <div className="card product-card p-0 overflow-hidden h-full flex flex-col">
                <div className="relative bg-[var(--color-gray-50)] flex items-center justify-center min-h-[200px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`Daikin ${product.name}`}
                    width={600}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Top section — fixed area for name + description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-extrabold text-[var(--color-text-dark)] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)] mb-3">
                      {product.hpRange} &nbsp;|&nbsp; {product.models}
                    </p>
                    <p className="text-sm text-[var(--color-text-body)] leading-relaxed min-h-[60px]">
                      {product.description[mode]}
                    </p>
                  </div>

                  {/* Features — fixed height area */}
                  <div className="flex flex-wrap gap-1.5 mb-5 min-h-[68px] content-start">
                    {product.features[mode].map((feat) => (
                      <span key={feat} className="text-xs bg-[var(--color-brand)]/8 border border-[var(--color-brand)]/15 rounded-full px-3 py-1 text-[var(--color-brand)] font-medium h-fit">
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Bottom section — pricing + CTA always at bottom */}
                  <div className="mt-auto">
                    {/* Dynamic Pricing — standardized box */}
                    <div className="bg-[var(--color-gray-50)] rounded-xl p-4 mb-5 h-[100px] flex flex-col justify-center">
                      <div className="text-xs text-[var(--color-text-muted)] font-medium mb-1">
                        {product.pricing[mode].label}
                      </div>
                      <div className="text-2xl font-extrabold text-[var(--color-brand)]">
                        {product.pricing[mode].price}
                      </div>
                      <div className="text-xs text-[var(--color-text-muted)] mt-1">
                        {product.pricing[mode].sub}
                      </div>
                    </div>

                    <a
                      href={whatsappUrl(product.waMessage[mode])}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[var(--color-whatsapp)] text-white px-6 py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-90 w-full"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp Untuk {mode === "beli" ? "Harga" : mode === "servis" ? "Booking" : "Sewa Beli"}
                    </a>
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
