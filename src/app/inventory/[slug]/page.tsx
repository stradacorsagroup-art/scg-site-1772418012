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
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 py-7 sm:gap-9 sm:px-6 sm:py-11 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Link href="/" className="inline-flex text-sm text-zinc-600 hover:text-zinc-900">
            ← Back to inventory
          </Link>

          <VehicleGallery car={vehicle.car} images={vehicle.images} video={vehicle.video} />

          <div className="mt-4 rounded-xl border border-zinc-200 bg-white p-4 text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Notes</p>
            <p className="mt-2 text-zinc-700">{vehicle.notes || "—"}</p>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-6">
          <h1 className="text-2xl font-semibold tracking-[-0.02em] sm:text-[2.2rem]">{vehicle.car}</h1>
          <p className="mt-4 text-sm text-zinc-500">Monthly Price</p>
          <p className="mt-1 text-3xl font-semibold text-zinc-900">${vehicle.monthly.toLocaleString()}/month</p>

          <h2 className="mt-5 text-lg font-semibold">Due at Signing</h2>
          <p className="mt-1 text-sm text-zinc-500">Estimated drive-off total. Excludes taxes and registration fees.</p>

          <TermPricingSelector startupCosts={startupCosts} membershipFee={membershipFee} />

          <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm">
            <p className="text-zinc-600">Deposit to reserve</p>
            <p className="text-xl font-semibold">${deposit.toLocaleString()}</p>
          </div>

          <ReserveModalButton car={vehicle.car} />

        </aside>
      </section>

    </main>
  );
}
