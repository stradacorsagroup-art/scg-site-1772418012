"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { OwnershipPills } from "@/components/ownership-pills";
import { inventory } from "@/data/inventory";

function formatPrice(value: number) {
  return `$${value.toLocaleString()}`;
}

function normalizeBrand(value: string) {
  const normalized = value.trim().toUpperCase();
  if (normalized === "MERCEDES-AMG") return "MERCEDES-BENZ";
  return normalized;
}

function displayBrand(value: string) {
  return value
    .toLowerCase()
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("-");
}

function getPlaceholderImage(carName: string) {
  const text = encodeURIComponent(carName);
  return `https://placehold.co/1200x800/e8e8e8/333333?text=${text}`;
}

function splitCardTitle(car: string) {
  const tokens = car.trim().split(/\s+/);
  const year = /^\d{4}$/.test(tokens[0]) ? tokens[0] : "";
  const brand = year ? (tokens[1] || "") : (tokens[0] || "");
  const model = year ? tokens.slice(2).join(" ") : tokens.slice(1).join(" ");

  return {
    top: `${brand} ${year}`.trim(),
    model: (model || car).toUpperCase(),
  };
}

export default function Home() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const brandOptions = useMemo(() => {
    const set = new Set<string>();
    inventory.forEach((item) => {
      const tokens = item.car.split(" ");
      const guess = /^\d{4}$/.test(tokens[0]) ? tokens[1] : tokens[0];
      if (guess) set.add(normalizeBrand(guess));
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered = useMemo(() => {
    return inventory.filter((item) => {
      const tokens = item.car.split(" ");
      const guessedBrand = /^\d{4}$/.test(tokens[0]) ? tokens[1] : tokens[0];
      const normalized = normalizeBrand(guessedBrand);

      return selectedBrands.length === 0 || selectedBrands.includes(normalized);
    });
  }, [selectedBrands]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#111]">
      <section className="border-b border-zinc-200/80 bg-gradient-to-b from-white to-[#f6f7f9]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">The Exotic Marketplace</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.02em] text-zinc-900 sm:text-5xl">Luxury Vehicle Ownership, Redefined for Discerning Drivers.</h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-600 sm:text-base">Curated inventory. Transparent terms. Zero guesswork. Browse live inventory—with flexible ownership built for a lifestyle that moves with you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-6 py-8 sm:px-10">
        <div className="mb-5">
          <OwnershipPills active="membership" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[170px_minmax(0,1fr)]">
          <aside>
            <h2 className="mb-3 text-[26px] font-light">Brands</h2>
            <div className="space-y-2">
              {brandOptions.map((brand) => (
                <label key={brand} className="flex cursor-pointer items-center gap-2 text-[14px] text-[#333]">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="h-4 w-4 rounded-none border-[#bcbcbc]"
                  />
                  <span>{displayBrand(brand)}</span>
                </label>
              ))}
            </div>
          </aside>

          <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {filtered.map((item) => (
                <Link
                  key={item.slug}
                  href={`/inventory/${item.slug}`}
                  className="block border border-[#8f8f8f] bg-white transition hover:shadow-[0_8px_18px_rgba(0,0,0,0.08)]"
                >
                  <article>
                    <div className="flex h-[86px] items-start justify-between border-b border-[#cfcfcf] px-3 py-2">
                      <div className="pr-3">
                        <p className="text-[13px] leading-tight text-[#252525]">{splitCardTitle(item.car).top}</p>
                        <h4 className="h-[44px] overflow-hidden text-[18px] font-medium uppercase leading-tight tracking-[0.01em] text-[#131313]">
                          {splitCardTitle(item.car).model}
                        </h4>
                      </div>
                      <span className="text-xl leading-none text-[#555]">→</span>
                    </div>

                    <div className="relative h-[170px] border-b border-[#cfcfcf] bg-[#e8e8e8]">
                      <img
                        src={item.images?.[0] || getPlaceholderImage(item.car)}
                        alt={item.car}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex items-center justify-between px-3 py-2">
                      <div>
                        <p className="text-xs text-[#5a5a5a]">Subscription</p>
                        <p className="text-[16px] font-medium text-[#161616]">{formatPrice(item.monthly)}/mo</p>
                      </div>
                      <div className="border border-[#999] px-3 py-1 text-[13px] text-[#242424]">See Details →</div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
