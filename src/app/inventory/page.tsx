import Image from "next/image";
import Link from "next/link";
import { inventory } from "@/data/inventory";

function money(v?: number | null) {
  if (typeof v !== "number") return "—";
  return `$${v.toLocaleString()}`;
}

function termValue(item: (typeof inventory)[number], term: "3 mo" | "12 mo", kind: "ownerDown" | "scgDown") {
  if (kind === "scgDown") {
    return money(item.down?.[term]);
  }
  const owner = (item as { ownerDown?: Record<string, number> }).ownerDown;
  return money(owner?.[term]);
}

export default function InventoryIndexPage() {
  const sorted = [...inventory].sort((a, b) => a.car.localeCompare(b.car));

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">COSTS Inventory View</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Inventory Kanban Squares</h1>
          </div>
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
            ← Back
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {sorted.map((item) => {
            const ownerMonthly = (item as { ownerMonthly?: number }).ownerMonthly;
            const scgMonthly = (item as { scgMonthly?: number }).scgMonthly ?? item.monthly;
            const milesPerYear = (item as { milesPerYear?: number }).milesPerYear;

            return (
              <article key={item.slug} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="relative h-44 border-b border-zinc-200 bg-zinc-100">
                  {item.images?.[0] ? (
                    <Image src={item.images[0]} alt={item.car} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.12em] text-zinc-500">No media</div>
                  )}
                </div>

                <div className="p-4">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900">{item.car}</h2>

                  <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div className="text-zinc-500">3 mo Owner Down</div>
                    <div className="text-right font-medium">{termValue(item, "3 mo", "ownerDown")}</div>

                    <div className="text-zinc-500">3 mo SCG Down</div>
                    <div className="text-right font-medium">{termValue(item, "3 mo", "scgDown")}</div>

                    <div className="text-zinc-500">12 mo Owner Down</div>
                    <div className="text-right font-medium">{termValue(item, "12 mo", "ownerDown")}</div>

                    <div className="text-zinc-500">12 mo SCG Down</div>
                    <div className="text-right font-medium">{termValue(item, "12 mo", "scgDown")}</div>

                    <div className="text-zinc-500">Owner Monthly</div>
                    <div className="text-right font-medium">{money(ownerMonthly)}</div>

                    <div className="text-zinc-500">SCG Monthly</div>
                    <div className="text-right font-medium">{money(scgMonthly)}</div>

                    <div className="text-zinc-500">Miles / Year</div>
                    <div className="text-right font-medium">{milesPerYear ? milesPerYear.toLocaleString() : "—"}</div>

                    <div className="text-zinc-500">Terms</div>
                    <div className="text-right font-medium">{item.terms.join(" / ")}</div>
                  </div>

                  <Link
                    href={`/inventory/${item.slug}`}
                    className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white hover:bg-zinc-800"
                  >
                    Open Details
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
