import Link from "next/link";
import { membershipInventory } from "@/data/membership-inventory";

function money(v: unknown) {
  if (v === null || v === undefined || v === "") return "—";
  const n = Number(v);
  if (Number.isFinite(n)) return `$${n.toLocaleString()}`;
  return String(v);
}

export default function InventoryIndexPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Membership Inventory (No Credit)</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Marketplace Inventory</h1>
            <p className="mt-1 text-sm text-zinc-500">{membershipInventory.length} cards routed from command center</p>
          </div>
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">← Back</Link>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {membershipInventory.map((item) => {
            const t3 = item.threeMo || {};
            const t12 = item.twelveMo || {};
            const scgMo3 = t3.scgMonthly;
            const ownerMo3 = t3.ownerMonthly;
            const scgMo12 = t12.scgMonthly;
            const ownerMo12 = t12.ownerMonthly;
            const spread3 = scgMo3 != null && ownerMo3 != null ? Number(scgMo3) - Number(ownerMo3) : null;
            const spread12 = scgMo12 != null && ownerMo12 != null ? Number(scgMo12) - Number(ownerMo12) : null;

            return (
              <article key={item.car} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.08em]">{item.car}</h2>
                <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
                  <div className="text-zinc-500">Miles</div><div className="text-right font-medium">{item.miles || "—"}</div>
                  <div className="text-zinc-500">VIN</div><div className="text-right font-medium">{item.vin || "—"}</div>

                  <div className="text-zinc-500">3 mo Owner Down</div><div className="text-right font-medium">{money(t3.ownerDown)}</div>
                  <div className="text-zinc-500">3 mo SCG Down</div><div className="text-right font-medium">{money(t3.scgDown)}</div>
                  <div className="text-zinc-500">3 mo Owner Monthly</div><div className="text-right font-medium">{money(ownerMo3)}</div>
                  <div className="text-zinc-500">3 mo SCG Monthly</div><div className="text-right font-medium">{money(scgMo3)}</div>
                  <div className="text-zinc-500">3 mo Spread</div><div className="text-right font-semibold text-emerald-700">{money(spread3)}</div>

                  <div className="text-zinc-500">12 mo Owner Down</div><div className="text-right font-medium">{money(t12.ownerDown)}</div>
                  <div className="text-zinc-500">12 mo SCG Down</div><div className="text-right font-medium">{money(t12.scgDown)}</div>
                  <div className="text-zinc-500">12 mo Owner Monthly</div><div className="text-right font-medium">{money(ownerMo12)}</div>
                  <div className="text-zinc-500">12 mo SCG Monthly</div><div className="text-right font-medium">{money(scgMo12)}</div>
                  <div className="text-zinc-500">12 mo Spread</div><div className="text-right font-semibold text-emerald-700">{money(spread12)}</div>

                  <div className="text-zinc-500">Owner</div><div className="text-right font-medium">{item.ownerName || "—"}</div>
                  <div className="text-zinc-500">Owner Email</div><div className="text-right font-medium">{item.ownerEmail || "—"}</div>
                  <div className="text-zinc-500">Notes</div><div className="text-right font-medium">{item.notes || "—"}</div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
