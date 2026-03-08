"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { OwnershipPills } from "@/components/ownership-pills";
import { inventory } from "@/data/inventory";

function formatPrice(value: number) {
  return `$${value.toLocaleString()}`;
}

type Term = "3 mo" | "6 mo" | "12 mo";

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeTerm, setActiveTerm] = useState<Term | "all">("all");
  const [maxMonthly, setMaxMonthly] = useState<number>(10000);
  const [maxDown, setMaxDown] = useState<number>(50000);
  const [brand, setBrand] = useState<string>("all");
  const [location, setLocation] = useState<string>("all");
  const [sort, setSort] = useState<"featured" | "monthlyAsc" | "monthlyDesc" | "nameAsc">("featured");

  const brandOptions = useMemo(() => {
    const set = new Set<string>();
    inventory.forEach((item) => {
      const tokens = item.car.split(" ");
      const guess = /^\d{4}$/.test(tokens[0]) ? tokens[1] : tokens[0];
      if (guess) set.add(guess.toUpperCase());
    });
    return ["all", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const locationOptions = useMemo(() => {
    const set = new Set<string>();
    inventory.forEach((item) => set.add(item.location || "Unknown"));
    return ["all", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = [...inventory].filter((item) => {
      const downValues = Object.values(item.down || {}).filter((v) => Number.isFinite(v)) as number[];
      const minDown = downValues.length ? Math.min(...downValues) : Number.POSITIVE_INFINITY;
      const tokens = item.car.split(" ");
      const guessedBrand = (/^\d{4}$/.test(tokens[0]) ? tokens[1] : tokens[0])?.toUpperCase();

      const matchQuery = !q || item.car.toLowerCase().includes(q) || item.location.toLowerCase().includes(q);
      const matchTerm = activeTerm === "all" || item.terms.includes(activeTerm);
      const matchMonthly = item.monthly <= maxMonthly;
      const matchDown = minDown <= maxDown;
      const matchBrand = brand === "all" || guessedBrand === brand;
      const matchLocation = location === "all" || item.location === location;
      return matchQuery && matchTerm && matchMonthly && matchDown && matchBrand && matchLocation;
    });

    if (sort === "monthlyAsc") out.sort((a, b) => a.monthly - b.monthly);
    if (sort === "monthlyDesc") out.sort((a, b) => b.monthly - a.monthly);
    if (sort === "nameAsc") out.sort((a, b) => a.car.localeCompare(b.car));

    return out;
  }, [query, activeTerm, maxMonthly, maxDown, brand, location, sort]);

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="border-b border-zinc-200/80 bg-gradient-to-b from-white to-[#f6f7f9]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">The Exotic Marketplace</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.02em] text-zinc-900 sm:text-5xl">Luxury Vehicle Ownership, Redefined for Discerning Drivers.</h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-600 sm:text-base">Curated inventory. Transparent terms. Zero guesswork. Browse live inventory—with flexible ownership built for a lifestyle that moves with you.</p>
        </div>
      </section>

      <section id="inventory" className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-12">
        <div className="mb-6">
          <OwnershipPills active="membership" />
        </div>

        <div id="membership-inventory" className="mb-5">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Membership Inventory</h2>
          <p className="mt-1 text-sm text-zinc-500">{filtered.length} shown • {inventory.length} total vehicles</p>
        </div>

        <div className="sticky top-2 z-20 mb-6 rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-sm backdrop-blur sm:p-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-7">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by car or location"
              className="h-10 rounded-xl border border-zinc-300 px-3 text-sm outline-none ring-zinc-300 focus:ring-2"
            />

            <select
              value={activeTerm}
              onChange={(e) => setActiveTerm(e.target.value as Term | "all")}
              className="h-10 rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none ring-zinc-300 focus:ring-2"
            >
              <option value="all">All Terms</option>
              <option value="3 mo">3 Months</option>
              <option value="6 mo">6 Months</option>
              <option value="12 mo">12 Months</option>
            </select>

            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="h-10 rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none ring-zinc-300 focus:ring-2"
            >
              {brandOptions.map((b) => (
                <option key={b} value={b}>{b === "all" ? "All Brands" : b}</option>
              ))}
            </select>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-10 rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none ring-zinc-300 focus:ring-2"
            >
              {locationOptions.map((loc) => (
                <option key={loc} value={loc}>{loc === "all" ? "All Locations" : loc}</option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="h-10 rounded-xl border border-zinc-300 bg-white px-3 text-sm outline-none ring-zinc-300 focus:ring-2"
            >
              <option value="featured">Sort: Featured</option>
              <option value="monthlyAsc">Monthly: Low to High</option>
              <option value="monthlyDesc">Monthly: High to Low</option>
              <option value="nameAsc">Name: A–Z</option>
            </select>

            <div className="rounded-xl border border-zinc-300 px-3 py-2">
              <div className="mb-1 flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                <span>Max Monthly</span>
                <span>{formatPrice(maxMonthly)}</span>
              </div>
              <input type="range" min={1000} max={12000} step={100} value={maxMonthly} onChange={(e) => setMaxMonthly(Number(e.target.value))} className="w-full" />
            </div>

            <div className="rounded-xl border border-zinc-300 px-3 py-2">
              <div className="mb-1 flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                <span>Max Down</span>
                <span>{formatPrice(maxDown)}</span>
              </div>
              <input type="range" min={5000} max={100000} step={500} value={maxDown} onChange={(e) => setMaxDown(Number(e.target.value))} className="w-full" />
            </div>

            <button
              onClick={() => {
                setQuery("");
                setActiveTerm("all");
                setMaxMonthly(10000);
                setMaxDown(50000);
                setBrand("all");
                setLocation("all");
                setSort("featured");
              }}
              className="h-10 rounded-xl border border-zinc-300 bg-zinc-50 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => {
            const downValues = Object.values(item.down || {}).filter((v) => Number.isFinite(v)) as number[];
            const hasDown = downValues.length > 0;
            const lowestDown = hasDown ? Math.min(...downValues) : null;

            return (
              <article key={item.car} className="group overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <div className="relative h-44 border-b border-zinc-200 bg-zinc-100 sm:h-48">
                  {item.video ? (
                    <video src={item.video} className="h-full w-full object-cover" autoPlay muted loop playsInline />
                  ) : item.images?.[0] ? (
                    <Image src={item.images[0]} alt={item.car} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.12em] text-zinc-500">
                      <span>Media coming soon</span>
                    </div>
                  )}
                  <div className="absolute left-3 top-3 rounded-full border border-zinc-200 bg-white/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-700">{item.terms.join(" • ")}</div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="min-h-10 text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-900">{item.car}</h3>
                  <p className="mt-3 text-sm font-semibold text-zinc-900">{formatPrice(item.monthly)}/mo</p>
                  <p className="mt-1 text-sm text-zinc-600">{hasDown ? `From ${formatPrice(lowestDown as number)} down` : "Down payment on request"}</p>
                  <p className="mt-3 text-xs text-zinc-500">Buyout available • Terms subject to verification</p>

                  <Link href={`/inventory/${item.slug}`} className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-xl bg-zinc-900 px-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
                    View Details
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
