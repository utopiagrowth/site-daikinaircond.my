"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Smartphone, Clock, BarChart3, Bell } from "lucide-react";

const FEATURES = [
  { icon: Smartphone, label: "On/Off dari phone" },
  { icon: Clock, label: "Set schedule harian" },
  { icon: BarChart3, label: "Monitor penggunaan tenaga" },
  { icon: Bell, label: "Notifikasi penyelenggaraan" },
];

const APP_STORES = [
  { name: "Google Play", image: "/images/brand/google-play.png", href: "#" },
  { name: "App Store", image: "/images/brand/app-store.png", href: "#" },
  { name: "Huawei AppGallery", image: "/images/brand/huawei.png", href: "#" },
];

export default function SmartControl() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #005A8C 0%, #0097E0 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
                Smart Control
              </h2>
              <p className="text-xl md:text-2xl font-bold text-white/90 mb-6">
                Kawal Aircond Anda Dari Mana Sahaja.
              </p>
              <p className="text-base md:text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
                Dengan GO DAIKIN App, anda boleh on/off aircond, adjust suhu, set schedule
                — semua dari phone anda. Balik kerja, rumah dah sejuk. Jimat elektrik dengan
                monitoring penggunaan tenaga.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {FEATURES.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                      <feat.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {APP_STORES.map((store) => (
                  <a
                    key={store.name}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[44px] rounded-lg overflow-hidden transition-opacity hover:opacity-80"
                  >
                    <Image
                      src={store.image}
                      alt={store.name}
                      width={148}
                      height={44}
                      className="h-[44px] w-auto object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/brand/smart-control-banner.jpg"
                alt="GO DAIKIN Smart Control App"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
