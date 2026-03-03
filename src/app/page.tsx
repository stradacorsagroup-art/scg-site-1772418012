import Image from "next/image";
import Link from "next/link";
import { inventory } from "@/data/inventory";

export default function Home() {
  const sortedInventory = [...inventory];

  return (
    <main className="min-h-screen bg-[#f4f6f8] text-zinc-900">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">Strada Corsa Group • UI v2 LIVE</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Your Perfect Car Awaits</h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 sm:text-lg">
            Browse our curated luxury inventory with 3, 6, and 12-month private access structures.
          </p>
          <div className="mt-6">
            <Link
              href="/apply"
              className="inline-flex rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <section id="inventory" className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Inventory</h2>
            <p className="mt-1 text-sm text-zinc-500">{inventory.length} vehicles currently listed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedInventory.map((item) => (
            <article
              key={item.car}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-lg"
            >
              <div className="relative h-44 border-b border-zinc-200 bg-zinc-100">
                {item.video ? (
                  <video src={item.video} className="h-full w-full object-cover" autoPlay muted loop playsInline />
                ) : item.images?.[0] ? (
                  <Image src={item.images[0]} alt={item.car} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                ) : null}
                <div className="absolute bottom-3 left-3 rounded-full border border-zinc-300 bg-white/90 px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-700">
                  {item.terms.join(" • ")}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">{item.car}</h3>
                <p className="mt-3 text-sm font-medium text-zinc-800">{item.display}</p>
                <p className="mt-1 text-xs text-zinc-500">Buyout available • Terms subject to verification</p>

                <Link
                  href={`/inventory/${item.slug}`}
                  className="mt-4 block w-full rounded-lg bg-zinc-900 px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
