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
    <main className="min-h-screen bg-[#f5f5f5] text-zinc-900">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white to-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:py-16">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-300" />
            <p className="text-[15px] font-semibold uppercase tracking-[0.34em] text-zinc-600">Dealhaus</p>
            <span className="h-px w-8 bg-zinc-300" />
          </div>
          <h1 className="mt-4 max-w-5xl text-[2.15rem] font-semibold leading-[1.03] tracking-[-0.03em] text-zinc-900 sm:text-[3.8rem]">
            Luxury cars. Flexible ownership.
          </h1>
          <div className="mt-6">
            <OwnershipPills active="membership" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10">

        <div className="grid gap-8 lg:grid-cols-[210px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Filter by brand</h2>
            <div className="space-y-2.5">
              {brandOptions.map((brand) => (
                <label key={brand} className="flex cursor-pointer items-center gap-2.5 text-[14px] text-zinc-800">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="h-4 w-4 rounded border-zinc-300"
                  />
                  <span className="font-medium">{displayBrand(brand)}</span>
                </label>
              ))}
            </div>
          </aside>

          <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((item) => (
                <Link
                  key={item.slug}
                  href={`/inventory/${item.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(0,0,0,0.09)]"
                >
                  <article>
                    <div className="relative h-[190px] border-b border-zinc-200 bg-zinc-100">
                      <img
                        src={item.images?.[0] || getPlaceholderImage(item.car)}
                        alt={item.car}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                        style={{
                          objectPosition: item.car === "2020 Rolls-Royce Cullinan Black Badge" ? "center 64%" : "center",
                        }}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-3 p-4">
                      <div className="min-h-[60px]">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{splitCardTitle(item.car).top}</p>
                        <h4 className="mt-1 line-clamp-2 text-[20px] font-semibold uppercase leading-tight tracking-[0.01em] text-zinc-900">
                          {splitCardTitle(item.car).model}
                        </h4>
                      </div>

                      <div className="flex items-center justify-between border-t border-zinc-200 pt-3">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Monthly Price</p>
                          <p className="mt-1 text-[18px] font-semibold text-zinc-900">{formatPrice(item.monthly)}/mo</p>
                        </div>
                        <div className="rounded-full border border-zinc-300 px-3 py-1 text-[13px] font-medium text-zinc-700 transition group-hover:border-zinc-900 group-hover:text-zinc-900">
                          See Details →
                        </div>
                      </div>
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
