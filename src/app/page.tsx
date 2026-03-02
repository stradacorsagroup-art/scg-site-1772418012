import Link from "next/link";
import { inventory } from "@/data/inventory";

type ParsedCar = {
  year: string;
  make: string;
  model: string;
  full: string;
};

function parseCarName(name: string): ParsedCar {
  const cleaned = name.replace(/\s*\([^)]*\)\s*$/g, "").trim();
  const tokens = cleaned.split(/\s+/);
  const year = /^\d{4}$/.test(tokens[0] || "") ? tokens.shift()! : "";
  const make = tokens.shift() || "Luxury";
  const model = tokens.join(" ").toUpperCase();

  return {
    year,
    make,
    model,
    full: cleaned,
  };
}

const preferredOrder = [
  "2022-rolls-royce-ghost-black-badge-whiteblack",
  "2020-rolls-royce-cullinan-whitered",
  "2020-rolls-royce-cullinan-bb-whitewhite-forgiatos",
  "2017-rolls-royce-dawn-white-on-red",
  "2018-ferrari-488-spider-yellow",
  "2023-lamborghini-urus-performante-yellow",
  "2020-mclaren-720s-spyder-satin-black",
  "2021-mercedes-benz-s580-black-on-peanut-butter",
  "2022-mercedes-benz-s580",
];

export default function Home() {
  const rank = new Map(preferredOrder.map((slug, index) => [slug, index]));
  const sortedInventory = [...inventory].sort((a, b) => {
    const aRank = rank.get(a.slug) ?? 999;
    const bRank = rank.get(b.slug) ?? 999;
    if (aRank !== bRank) return aRank - bRank;
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#0b0b0c] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,#1a1a1f,transparent_60%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">Strada Corsa Group</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Your Perfect Car Awaits</h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Browse our curated selection of luxury vehicles ready for immediate private access.
          </p>
        </div>
      </section>

      <section id="inventory" className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Inventory</h2>
            <p className="mt-1 text-sm text-white/60">{inventory.length} vehicles currently listed</p>
          </div>
          <button className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/90 hover:border-white/40">
            Apply Now
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedInventory.map((item) => {
            const car = parseCarName(item.car);

            return (
              <article
                key={item.car}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131317] transition hover:border-white/25"
              >
                <div className="relative h-36 border-b border-white/10 bg-gradient-to-br from-zinc-700/40 via-zinc-800/40 to-black">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.14),transparent_40%)]" />
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/40 px-2 py-1 text-[10px] uppercase tracking-wider text-white/80">
                    {item.terms.join(" • ")}
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                    {car.make} {car.year}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold uppercase tracking-wide text-white">{car.model}</h3>

                  <p className="mt-3 text-sm font-medium text-white/90">{item.display}</p>
                  <p className="mt-1 text-xs text-white/50">Buyout available • Terms subject to verification</p>

                  <Link
                    href={`/inventory/${item.slug}`}
                    className="mt-4 block w-full rounded-lg bg-white/10 px-3 py-2 text-center text-sm font-medium text-white transition group-hover:bg-white group-hover:text-black"
                  >
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
