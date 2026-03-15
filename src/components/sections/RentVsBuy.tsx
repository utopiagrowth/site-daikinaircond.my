"use client";

import { RTO_PLANS, whatsappUrl } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check, X } from "lucide-react";

export default function RentVsBuy() {
  return (
    <section id="sewa-beli" className="py-20 md:py-28 bg-breeze bg-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-brand)] text-sm font-medium">Sewa vs Beli</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-dark)] mb-4">
              Tak Perlu Bayar Penuh.<br />
              <span className="gradient-text">Sewa Beli Daikin Dari RM89/Bulan.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <ScrollReveal delay={0}>
            <div className="card p-6 md:p-8 border-2 border-[var(--color-brand)] relative h-full">
              <div className="absolute -top-3 left-6 bg-[var(--color-brand)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </div>
              <h3 className="text-xl font-bold text-[var(--color-brand)] mb-4">
                Sewa Beli (Rent-to-Own)
              </h3>
              <ul className="space-y-3">
                {[
                  "Tak perlu bayar penuh — dari RM89/bulan",
                  "Unit baru 100% + pemasangan percuma",
                  "Warranty 1 tahun termasuk",
                  "Selepas habis bayar — aircond jadi milik anda",
                  "Deposit rendah — dari RM200 sahaja",
                  "Tak payah pinjam bank atau guna kredit kad",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[var(--color-accent-emerald)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-text-body)] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="card p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                Beli Terus (Cash)
              </h3>
              <ul className="space-y-3">
                {[
                  { text: "Bayar penuh — dari RM1,480 ke atas", good: true },
                  { text: "Unit baru 100% + pemasangan", good: true },
                  { text: "Warranty standard Daikin", good: true },
                  { text: "Kena keluar duit besar sekaligus", good: false },
                  { text: "Tak semua orang ada cash", good: false },
                  { text: "Maintenance plan kena bayar extra", good: false },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2">
                    {item.good ? (
                      <Check className="w-5 h-5 text-[var(--color-accent-emerald)] shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    )}
                    <span className="text-[var(--color-text-body)] text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[var(--color-text-dark)] text-center mb-6">
              Harga Sewa Beli Mengikut HP
            </h3>
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-brand)] text-white">
                    <th className="px-4 py-3 text-left font-semibold">HP</th>
                    <th className="px-4 py-3 text-left font-semibold">Harga Beli</th>
                    <th className="px-4 py-3 text-left font-semibold">24 Bulan</th>
                    <th className="px-4 py-3 text-left font-semibold">36 Bulan</th>
                    <th className="px-4 py-3 text-left font-semibold">Deposit</th>
                  </tr>
                </thead>
                <tbody>
                  {RTO_PLANS.map((plan, i) => (
                    <tr key={plan.hp} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-gray-50)]"}>
                      <td className="px-4 py-3 font-semibold text-[var(--color-text-dark)]">{plan.hp}</td>
                      <td className="px-4 py-3 text-[var(--color-text-body)]">{plan.buyPrice}</td>
                      <td className="px-4 py-3 font-semibold text-[var(--color-brand)]">{plan.rto24}</td>
                      <td className="px-4 py-3 font-semibold text-[var(--color-brand)]">{plan.rto36}</td>
                      <td className="px-4 py-3 text-[var(--color-text-body)]">{plan.deposit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <a
              href={whatsappUrl("Hi, saya berminat nak sewa beli aircond Daikin. Boleh explain plan sewa beli?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-whatsapp)] text-white px-8 py-4 rounded-full font-bold text-base transition-opacity hover:opacity-90 shadow-lg shadow-[var(--color-whatsapp)]/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Untuk Sewa Beli
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
