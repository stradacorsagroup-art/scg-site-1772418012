"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { OwnershipPills } from "@/components/ownership-pills";
import { inventory } from "@/data/inventory";

function formatPrice(value: number) {
  return `$${value.toLocaleString()}`;
}

function normalizeBrand(value: string) {
  const normalized = value.trim().toUpperCase();
  if (normalized === "MERCEDES-AMG" || normalized === "MERCEDES") return "MERCEDES-BENZ";
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
  return `https://placehold.co/1200x800/101010/e8e8e8?text=${text}`;
}

function getCardImage(src?: string) {
  if (!src) return undefined;
  return src.replace(/\/hero\.(jpg|jpeg|png|webp)$/i, "/thumb.jpg");
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
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <section className="border-b border-zinc-800 bg-[radial-gradient(circle_at_30%_20%,#1d1d1d_0%,#0a0a0a_50%)]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-700" />
            <p className="text-[13px] font-semibold uppercase tracking-[0.34em] text-zinc-400">Dealhaus</p>
            <span className="h-px w-8 bg-zinc-700" />
          </div>

          <h1 className="font-display mt-4 max-w-4xl text-[2.2rem] leading-[1.02] tracking-[-0.02em] text-white sm:text-[4.1rem]">
            Private access.
            <br />
            Elite inventory.
          </h1>

          <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">Luxury cars. Flexible ownership.</p>

          <div className="mt-6">
            <Link
              href="#membership-inventory"
              className="inline-flex h-11 items-center rounded-full border border-zinc-500 px-5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-300 hover:bg-zinc-900"
            >
              Explore Inventory
            </Link>
          </div>

          <div className="mt-7">
            <OwnershipPills active="membership" />
          </div>
        </div>
      </section>

      <section id="membership-inventory" className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10">
        <div className="mb-6 rounded-2xl border border-zinc-800 bg-[#111] p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">Filter by brand</p>
            <button
              type="button"
              onClick={() => setSelectedBrands([])}
              className="text-[12px] font-medium text-zinc-400 hover:text-zinc-200"
            >
              Clear
            </button>
          </div>

          <div className="-mx-1 overflow-x-auto pb-1 sm:mx-0 sm:overflow-visible sm:pb-0">
            <div className="flex w-max gap-2 px-1 sm:w-auto sm:flex-wrap sm:px-0">
              {brandOptions.map((brand) => {
                const active = selectedBrands.includes(brand);
                return (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => toggleBrand(brand)}
                    className={`rounded-full border px-3 py-1.5 text-[13px] font-medium transition ${
                      active
                        ? "border-zinc-100 bg-zinc-100 text-zinc-900"
                        : "border-zinc-700 bg-transparent text-zinc-300 hover:border-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {displayBrand(brand)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              href={`/inventory/${item.slug}`}
              className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-[#111] transition duration-200 hover:-translate-y-0.5 hover:border-zinc-600"
            >
              <article>
                <div className="relative h-[240px] bg-zinc-900">
                  <Image
                    src={getCardImage(item.images?.[0]) || getPlaceholderImage(item.car)}
                    alt={item.car}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    quality={55}
                    unoptimized={!item.images?.[0]}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-300">{splitCardTitle(item.car).top}</p>
                    <h4 className="mt-1 line-clamp-2 text-[20px] font-semibold uppercase leading-tight text-white">{splitCardTitle(item.car).model}</h4>
                    <p className="mt-2 text-[18px] font-semibold text-white">{formatPrice(item.monthly)}/mo</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
