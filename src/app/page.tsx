import { inventory } from "@/data/inventory";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.28em] text-zinc-400">Strada Corsa Group</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
          ID + Insurance + Drive
        </h1>
        <p className="mt-5 max-w-2xl text-base text-zinc-300 sm:text-lg">
          Private vehicle access for qualified members. 3, 6, and 12-month structures with buyout options.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">
            Apply Now
          </button>
          <button className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-400">
            View Inventory
          </button>
        </div>
      </section>

      <section id="inventory" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Available Inventory</h2>
          <p className="text-sm text-zinc-400">{inventory.length} vehicles live</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inventory.map((item) => (
            <article
              key={item.car}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <h3 className="text-lg font-medium leading-snug text-zinc-100">{item.car}</h3>
              <p className="mt-2 text-xl font-semibold text-white">{item.display}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.terms.map((term) => (
                  <span
                    key={`${item.car}-${term}`}
                    className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs uppercase tracking-wide text-zinc-300"
                  >
                    {term}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-xs text-zinc-400">Buyout available • Terms subject to verification</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
