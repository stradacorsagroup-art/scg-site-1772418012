import Link from "next/link";
import { notFound } from "next/navigation";
import { ReserveModalButton } from "@/components/reserve-modal-button";
import { VehicleGallery } from "@/components/vehicle-gallery";
import { TermPricingSelector } from "@/components/term-pricing-selector";
import { deposit, getInventoryBySlug, membershipFee } from "@/data/inventory";

export default async function InventoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getInventoryBySlug(slug);

  if (!vehicle) notFound();

  const orderedTerms = [...vehicle.terms].sort((a, b) => {
    const order: Record<string, number> = { "3 mo": 1, "6 mo": 2, "12 mo": 3 };
    return (order[a] ?? 99) - (order[b] ?? 99);
  });

  const startupCosts = orderedTerms.map((term) => {
    const scgDown = vehicle.down[term] ?? 0;
    const scgMonthly = vehicle.scgMonthlyByTerm?.[term] ?? vehicle.monthly;
    const scgBuyout = vehicle.scgBuyoutByTerm?.[term];

    return {
      term,
      scgDown,
      scgMonthly,
      scgBuyout,
      totalDue: scgDown + scgMonthly + membershipFee,
    };
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 sm:py-9 lg:grid-cols-[1.42fr_1fr] lg:gap-7">
        <div>
          <Link href="/" className="inline-flex text-sm font-medium text-zinc-400 hover:text-zinc-100">
            ← Back to inventory
          </Link>

          <div className="mt-3 rounded-2xl border border-zinc-800 bg-[#111] p-2 shadow-sm sm:p-3">
            <VehicleGallery car={vehicle.car} images={vehicle.images} video={vehicle.video} />
          </div>

          <div className="mt-3 rounded-xl border border-zinc-800 bg-[#111] p-4 text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">Notes</p>
            <div className="mt-2 space-y-1 text-zinc-300">
              <p>Miles: {vehicle.mileage || "—"}</p>
              <p>{vehicle.notes || "—"}</p>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-zinc-800 bg-[#111] p-4 shadow-sm sm:p-5 lg:sticky lg:top-4">
          <h1 className="text-[1.85rem] font-semibold leading-tight tracking-[-0.02em] text-zinc-100 sm:text-[2.25rem]">{vehicle.car}</h1>
          <p className="mt-3 text-sm font-medium text-zinc-400">Monthly Price</p>
          <p className="mt-1 text-3xl font-semibold text-zinc-100">${vehicle.monthly.toLocaleString()}/month</p>

          <h2 className="mt-4 text-lg font-semibold text-zinc-100">Due at Signing</h2>
          <p className="mt-1 text-sm text-zinc-400">Estimated drive-off total. Excludes taxes and registration fees.</p>

          <details className="mt-3 rounded-xl border border-zinc-700 bg-[#181818] p-3">
            <summary className="cursor-pointer text-sm font-semibold text-zinc-200">View full terms</summary>
            <div className="mt-2">
              <TermPricingSelector startupCosts={startupCosts} membershipFee={membershipFee} />
            </div>
          </details>

          <div className="mt-4 rounded-xl border border-zinc-700 bg-[#181818] p-3 text-sm">
            <p className="text-zinc-400">Deposit to reserve</p>
            <p className="text-xl font-semibold text-zinc-100">${deposit.toLocaleString()}</p>
          </div>

          <ReserveModalButton car={vehicle.car} />
        </aside>
      </section>
    </main>
  );
}
