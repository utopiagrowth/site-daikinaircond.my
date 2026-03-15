"use client";

import Image from "next/image";
import { whatsappUrl } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const PRODUCTS = [
  {
    name: "SMARTO",
    tagline: "Air Purifier + Aircond",
    image: "/images/brand/smarto-thumb.png",
    waMessage: "Hi, saya berminat dengan Daikin SMARTO. Boleh bagi harga?",
  },
  {
    name: "BLUVI",
    tagline: "Sky Blue Design Award",
    image: "/images/products/bluvi-blue.png",
    waMessage: "Hi, saya berminat dengan Daikin BLUVI. Boleh bagi harga?",
  },
  {
    name: "FTKP",
    tagline: "iPlasma Purification",
    image: "/images/brand/ftkp-thumb.png",
    waMessage: "Hi, saya berminat dengan Daikin FTKP. Boleh bagi harga?",
  },
  {
    name: "FTKF",
    tagline: "Best Value Inverter",
    image: "/images/products/ftkf-thumb.png",
    waMessage: "Hi, saya berminat dengan Daikin FTKF. Boleh bagi harga?",
  },
  {
    name: "FTKE",
    tagline: "Budget Inverter",
    image: "/images/products/ftke-thumb.png",
    waMessage: "Hi, saya berminat dengan Daikin FTKE. Boleh bagi harga?",
  },
  {
    name: "FTV-P",
    tagline: "Non-Inverter",
    image: "/images/products/ftv-p-3hp-product.jpg",
    waMessage: "Hi, saya berminat dengan Daikin FTV-P Non-Inverter. Boleh bagi harga?",
  },
];

export default function ProductRange() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-gray-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--color-brand)] text-sm font-semibold">
                Rangkaian Produk Daikin
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-dark)] mb-4">
              Aircond Untuk Setiap Keperluan
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.08}>
              <div className="card bg-white rounded-2xl overflow-hidden h-full flex flex-col items-center p-6 text-center">
                <div className="w-full flex items-center justify-center h-[180px] mb-5">
                  <Image
                    src={product.image}
                    alt={`Daikin ${product.name}`}
                    width={280}
                    height={180}
                    className="object-contain max-h-[170px] w-auto"
                  />
                </div>
                <h3 className="text-lg font-extrabold text-[var(--color-text-dark)] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-[var(--color-text-body)] mb-5">
                  {product.tagline}
                </p>
                <a
                  href={whatsappUrl(product.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-[var(--color-brand)] font-bold text-sm hover:underline"
                >
                  Lihat Harga
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
