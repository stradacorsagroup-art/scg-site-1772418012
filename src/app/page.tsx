import Image from "next/image";
import Link from "next/link";
import { inventory } from "@/data/inventory";

function formatPrice(value: number) {
  return `$${value.toLocaleString()}`;
}

export default function Home() {
  const sortedInventory = [...inventory].sort((a, b) => a.monthly - b.monthly);

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="border-b border-zinc-200/80 bg-gradient-to-b from-white to-[#f6f7f9]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Exotic Membership Marketplace • Curated Inventory</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-zinc-900 sm:text-5xl">
            Exotic Car Memberships Made Clear and Simple
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-600 sm:text-base">
            A direct marketplace for exotic vehicle memberships with transparent startup costs, monthly payments, and live inventory.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#inventory"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              View Inventory
            </a>
            <Link
              href="/apply"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <section id="inventory" className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-12">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Path to ownership</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <a href="#membership-inventory" className="inline-flex h-9 items-center rounded-full border border-zinc-300 bg-white px-4 text-xs font-semibold text-zinc-900 hover:bg-zinc-100">Membership Inventory (No Credit)</a>
            <a href="#cars-for-sale" className="inline-flex h-9 items-center rounded-full border border-zinc-300 bg-white px-4 text-xs font-semibold text-zinc-900 hover:bg-zinc-100">Cars for Sale (Cash / Financing)</a>
            <Link href="/apply" className="inline-flex h-9 items-center rounded-full border border-zinc-900 bg-zinc-900 px-4 text-xs font-semibold text-white hover:bg-zinc-800">Apply for a specific car</Link>
          </div>
        </div>

        <div id="membership-inventory" className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Membership Inventory</h2>
            <p className="mt-1 text-sm text-zinc-500">{inventory.length} vehicles currently listed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {sortedInventory.map((item) => {
            const lowestDown = Math.min(...Object.values(item.down));
            return (
              <article
                key={item.car}
                className="group overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-44 border-b border-zinc-200 bg-zinc-100 sm:h-48">
                  {item.video ? (
                    <video src={item.video} className="h-full w-full object-cover" autoPlay muted loop playsInline />
                  ) : item.images?.[0] ? (
                    <Image src={item.images[0]} alt={item.car} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.12em] text-zinc-500">No media</div>
                  )}
                  <div className="absolute left-3 top-3 rounded-full border border-zinc-200 bg-white/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-700">
                    {item.terms.join(" • ")}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="min-h-10 text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-900">{item.car}</h3>
                  <p className="mt-3 text-sm font-semibold text-zinc-900">{formatPrice(item.monthly)}/mo</p>
                  <p className="mt-1 text-sm text-zinc-600">From {formatPrice(lowestDown)} down</p>
                  <p className="mt-3 text-xs text-zinc-500">Buyout available • Terms subject to verification</p>

                  <Link
                    href={`/inventory/${item.slug}`}
                    className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-xl bg-zinc-900 px-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div id="cars-for-sale" className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-white p-5">
          <h3 className="text-lg font-semibold text-zinc-900">Cars for Sale (Cash / Financing)</h3>
          <p className="mt-1 text-sm text-zinc-600">This lane is being populated now. Cards added here will support cash purchase and standard financing applications.</p>
        </div>
      </section>
    </main>
  );
}
