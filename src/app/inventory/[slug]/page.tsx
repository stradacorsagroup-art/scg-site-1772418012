import Link from "next/link";
import { notFound } from "next/navigation";
import { VehicleGallery } from "@/components/vehicle-gallery";
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

  const startupCosts = orderedTerms.map((term) => ({
    term,
    startupCost: vehicle.down[term] ?? 0,
    totalDue: (vehicle.down[term] ?? 0) + vehicle.monthly + membershipFee,
  }));

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 py-7 sm:gap-9 sm:px-6 sm:py-11 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Link href="/" className="inline-flex text-sm text-zinc-600 hover:text-zinc-900">
            ← Back to inventory
          </Link>

          <VehicleGallery car={vehicle.car} images={vehicle.images} video={vehicle.video} />

          <h1 className="mt-6 text-2xl font-semibold tracking-[-0.02em] sm:text-[2.45rem]">{vehicle.car}</h1>
          <p className="mt-2 text-sm text-zinc-600 sm:text-[15px]">Private membership inventory • {vehicle.location}</p>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            <div className="rounded-xl border border-zinc-200 bg-white p-3">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">Monthly</p>
              <p className="mt-1 text-base font-semibold sm:text-lg">${vehicle.monthly.toLocaleString()}</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-3">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">Startup (from)</p>
              <p className="mt-1 text-base font-semibold sm:text-lg">${Math.min(...startupCosts.map((x) => x.startupCost)).toLocaleString()}</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-3">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">Terms</p>
              <p className="mt-1 text-sm font-semibold sm:text-base">{orderedTerms.join(" / ") || "—"}</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-3">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">Buyout</p>
              <p className="mt-1 text-sm font-semibold sm:text-base">Available</p>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-6">
          <p className="text-sm text-zinc-500">Subscription Price</p>
          <p className="mt-1 text-3xl font-semibold text-zinc-900">${vehicle.monthly.toLocaleString()}/mo</p>

          <h2 className="mt-5 text-lg font-semibold">Due at Signing</h2>
          <p className="mt-1 text-sm text-zinc-500">Estimated drive-off total. Excludes taxes and registration fees.</p>

          <div className="mt-4 space-y-3 text-sm">
            {startupCosts.map(({ term, startupCost, totalDue }) => (
              <div key={term} className="rounded-lg border border-zinc-200 p-3">
                <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                  <span>{term} option</span>
                  <span>${vehicle.monthly.toLocaleString()}/mo</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span>Startup Cost</span>
                  <strong>${startupCost.toLocaleString()}</strong>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span>Membership Fee</span>
                  <strong>${membershipFee.toLocaleString()}</strong>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span>1st Month Subscription</span>
                  <strong>${vehicle.monthly.toLocaleString()}</strong>
                </div>
                <div className="mt-2 flex items-center justify-between text-base font-semibold">
                  <span>Total Due at Signing</span>
                  <strong>${totalDue.toLocaleString()}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm">
            <p className="text-zinc-600">Deposit to reserve</p>
            <p className="text-xl font-semibold">${deposit.toLocaleString()}</p>
          </div>

          <button className="mt-5 h-12 w-full rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:bg-zinc-800">
            Reserve This Vehicle
          </button>
          <button className="mt-2 h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50">
            Speak to SCG
          </button>
        </aside>
      </section>
    </main>
  );
}
