"use client";

import { COMPARISON_DATA } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Zap, Volume2, Shield, Wifi, Wind, Leaf } from "lucide-react";

const SELLING_POINTS = [
  { icon: <Zap className="w-5 h-5 text-[var(--color-brand)]" />, text: "Inverter Daikin jimat sehingga 50% bil elektrik berbanding non-inverter" },
  { icon: <Volume2 className="w-5 h-5 text-[var(--color-brand)]" />, text: "Bunyi serendah 19 dBA — lebih senyap dari bisikan" },
  { icon: <Shield className="w-5 h-5 text-[var(--color-brand)]" />, text: "Compressor warranty 5 tahun, parts warranty 3 tahun" },
  { icon: <Wifi className="w-5 h-5 text-[var(--color-brand)]" />, text: "Smart control via GO DAIKIN App — on/off aircond dari mana-mana" },
  { icon: <Wind className="w-5 h-5 text-[var(--color-brand)]" />, text: "Selected models ada air purification built-in — Streamer, iPlasma" },
  { icon: <Leaf className="w-5 h-5 text-[var(--color-brand)]" />, text: "Semua model guna R32 refrigerant — mesra alam" },
];

export default function Comparison() {
  return (
    <section className="py-20 md:py-28 bg-breeze bg-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-brand)] text-sm font-medium">Kenapa Daikin</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-dark)]">
              Kenapa 1 Dari 4 Rakyat Malaysia<br />
              <span className="gradient-text">Pilih Daikin?</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="px-4 py-3 text-left font-semibold text-[var(--color-text-dark)]">Ciri</th>
                    <th className="px-4 py-3 text-left font-semibold text-white bg-[var(--color-brand)] rounded-tl-none">Daikin</th>
                    <th className="px-4 py-3 text-left font-semibold text-[var(--color-text-muted)]">Jenama Lain</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-gray-50)]"}>
                      <td className="px-4 py-3 text-[var(--color-text-dark)] font-medium">{row.feature}</td>
                      <td className="px-4 py-3 text-[var(--color-brand)] font-semibold bg-[var(--color-brand)]/5">{row.daikin}</td>
                      <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.generic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SELLING_POINTS.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-gray-50)]">
                  <div className="shrink-0 mt-0.5">{point.icon}</div>
                  <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
