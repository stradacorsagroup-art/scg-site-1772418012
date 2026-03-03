import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main className="min-h-screen bg-[#0b0b0c] text-white">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-6 sm:gap-8 sm:px-6 sm:py-10 lg:grid-cols-[1.45fr_1fr]">
        <div>
          <Link href="/" className="inline-flex text-sm text-white/70 hover:text-white">
            ← Back to inventory
          </Link>

          <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#131317] sm:mt-4">
            {vehicle.video ? (
              <video src={vehicle.video} className="h-60 w-full object-contain bg-black sm:h-96" controls playsInline />
            ) : vehicle.images?.[0] ? (
              <div className="relative h-60 sm:h-96">
                <Image src={vehicle.images[0]} alt={vehicle.car} fill className="object-contain bg-black" sizes="(max-width: 1024px) 100vw, 60vw" />
              </div>
            ) : (
              <div className="h-60 bg-gradient-to-br from-zinc-700/40 via-zinc-800/40 to-black sm:h-96" />
            )}
          </div>

          {vehicle.images && vehicle.images.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
              {vehicle.images.slice(0, 8).map((img) => (
                <div key={img} className="relative h-20 overflow-hidden rounded-lg border border-white/10 sm:h-24">
                  <Image src={img} alt={vehicle.car} fill className="object-contain bg-black" sizes="(max-width: 1024px) 33vw, 20vw" />
                </div>
              ))}
            </div>
          )}

          <h1 className="mt-5 text-2xl font-semibold tracking-tight sm:mt-6 sm:text-4xl">{vehicle.car}</h1>
          <p className="mt-2 text-sm text-white/70 sm:text-base">Private access structure • {vehicle.location}</p>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-wide text-white/60">Monthly</p>
              <p className="mt-1 text-base font-semibold sm:text-lg">${vehicle.monthly.toLocaleString()}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-wide text-white/60">Startup (from)</p>
              <p className="mt-1 text-base font-semibold sm:text-lg">${Math.min(...startupCosts.map((x) => x.startupCost)).toLocaleString()}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-wide text-white/60">Terms</p>
              <p className="mt-1 text-sm font-semibold sm:text-base">{orderedTerms.join(" / ")}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-wide text-white/60">Buyout</p>
              <p className="mt-1 text-sm font-semibold sm:text-base">Available</p>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-white/10 bg-[#131317] p-4 sm:p-5 lg:sticky lg:top-6">
          <p className="text-sm text-white/60">Starting at</p>
          <p className="mt-1 text-3xl font-semibold">${vehicle.monthly.toLocaleString()}/mo</p>

          <h2 className="mt-5 text-lg font-semibold">Due at Signing</h2>
          <p className="mt-1 text-sm text-white/60">Estimated drive-off total. Excludes taxes and registration fees.</p>

          <div className="mt-4 space-y-3 text-sm">
            {startupCosts.map(({ term, startupCost, totalDue }) => (
              <div key={term} className="rounded-lg border border-white/10 p-3">
                <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-white/60">
                  <span>{term} option</span>
                  <span>${vehicle.monthly.toLocaleString()}/mo</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Startup Cost</span>
                  <strong>${startupCost.toLocaleString()}</strong>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Membership Fee</span>
                  <strong>${membershipFee.toLocaleString()}</strong>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-white/10 pb-2">
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

          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
            <p className="text-white/70">Deposit to reserve</p>
            <p className="text-xl font-semibold">${deposit.toLocaleString()}</p>
          </div>

          <button className="mt-5 h-11 w-full rounded-lg bg-white px-4 text-sm font-semibold text-black hover:bg-zinc-200">
            Reserve This Vehicle
          </button>
          <button className="mt-2 h-11 w-full rounded-lg border border-white/20 px-4 text-sm font-semibold text-white hover:border-white/40">
            Speak to SCG
          </button>
        </aside>
      </section>
    </main>
  );
}
