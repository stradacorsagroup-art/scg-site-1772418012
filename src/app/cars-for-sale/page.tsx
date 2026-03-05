import Link from "next/link";
import { OwnershipPills } from "@/components/ownership-pills";
import { carsForSaleInventory } from "@/data/cars-for-sale";

function money(v: unknown) {
  if (v === null || v === undefined || v === "") return "—";
  const n = Number(v);
  if (Number.isFinite(n)) return `$${n.toLocaleString()}`;
  return String(v);
}

export default function CarsForSalePage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-12">
        <div className="mb-6">
          <OwnershipPills active="sale" />
        </div>

        <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Cars for Sale</h1>
            <p className="mt-1 text-sm text-zinc-500">Cash / Financing inventory • {carsForSaleInventory.length} vehicles currently listed</p>
          </div>
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">← Back to home</Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {carsForSaleInventory.map((item) => {
            const t3 = item.threeMo || {};
            const t12 = item.twelveMo || {};
            return (
              <article key={item.car} className="group overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <div className="p-4 sm:p-5">
                  <h3 className="min-h-10 text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-900">{item.car}</h3>
                  <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                    <div className="text-zinc-500">Miles</div><div className="text-right font-medium">{item.miles || "—"}</div>
                    <div className="text-zinc-500">VIN</div><div className="text-right font-medium">{item.vin || "—"}</div>
                    <div className="text-zinc-500">3 mo SCG Down</div><div className="text-right font-medium">{money(t3.scgDown)}</div>
                    <div className="text-zinc-500">12 mo SCG Down</div><div className="text-right font-medium">{money(t12.scgDown)}</div>
                    <div className="text-zinc-500">3 mo SCG Monthly</div><div className="text-right font-medium">{money(t3.scgMonthly)}</div>
                    <div className="text-zinc-500">12 mo SCG Monthly</div><div className="text-right font-medium">{money(t12.scgMonthly)}</div>
                    <div className="text-zinc-500">Location</div><div className="text-right font-medium">{item.location || "—"}</div>
                  </div>
                  <p className="mt-3 text-xs text-zinc-500">{item.notes || "Cash / financing inventory"}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
