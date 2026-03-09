import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { VehicleGallery } from "@/components/vehicle-gallery";
import { deposit, getInventoryBySlug, membershipFee } from "@/data/inventory";
import { getMembershipCostForCar } from "@/data/membership-costs";

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

  const costs = getMembershipCostForCar(vehicle.car);

  const startupCosts = orderedTerms.map((term) => {
    const isThreeMo = term === "3 mo";
    const isTwelveMo = term === "12 mo";

    const scgDown =
      (isThreeMo ? costs?.threeMo?.scgDown : isTwelveMo ? costs?.twelveMo?.scgDown : undefined) ??
      vehicle.down[term] ??
      0;

    const scgMonthly =
      (isThreeMo ? costs?.threeMo?.scgMonthly : isTwelveMo ? costs?.twelveMo?.scgMonthly : undefined) ??
      vehicle.scgMonthlyByTerm?.[term] ??
      vehicle.monthly;

    const scgBuyout =
      (isThreeMo ? costs?.threeMo?.scgBuyout : isTwelveMo ? costs?.twelveMo?.scgBuyout : undefined) ??
      vehicle.scgBuyoutByTerm?.[term];

    return {
      term,
      scgDown,
      scgMonthly,
      scgBuyout,
      totalDue: scgDown + scgMonthly + membershipFee,
    };
  });

  return (
    <>
      <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive" />
      <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 py-7 sm:gap-9 sm:px-6 sm:py-11 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Link href="/" className="inline-flex text-sm text-zinc-600 hover:text-zinc-900">
            ← Back to inventory
          </Link>

          <VehicleGallery car={vehicle.car} images={vehicle.images} video={vehicle.video} />

          <h1 className="mt-6 text-2xl font-semibold tracking-[-0.02em] sm:text-[2.45rem]">{vehicle.car}</h1>

        </div>

        <aside className="h-fit rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-6">
          <p className="text-sm text-zinc-500">Subscription Price</p>
          <p className="mt-1 text-3xl font-semibold text-zinc-900">${vehicle.monthly.toLocaleString()}/mo</p>

          <h2 className="mt-5 text-lg font-semibold">Due at Signing</h2>
          <p className="mt-1 text-sm text-zinc-500">Estimated drive-off total. Excludes taxes and registration fees.</p>

          <div className="mt-4 space-y-3 text-sm">
            {startupCosts.map(({ term, scgDown, scgMonthly, scgBuyout, totalDue }) => (
              <div key={term} className="rounded-lg border border-zinc-200 p-3">
                <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                  <span>{term} option</span>
                  <span>${scgMonthly.toLocaleString()}/mo</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span>{term} SCG Down</span>
                  <strong>${scgDown.toLocaleString()}</strong>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span>{term} SCG Monthly</span>
                  <strong>${scgMonthly.toLocaleString()}</strong>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span>{term} SCG Buyout</span>
                  <strong>{typeof scgBuyout === "number" ? `$${scgBuyout.toLocaleString()}` : "On request"}</strong>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span>Membership Fee</span>
                  <strong>${membershipFee.toLocaleString()}</strong>
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

          <button
            data-tf-popup="01KKA3DY6M02S2NW3H707ES59Y"
            data-tf-opacity="100"
            data-tf-size="80"
            data-tf-iframe-props="title=SCG Vehicle Reservation"
            data-tf-transitive-search-params
            data-tf-medium="snippet"
            className="mt-5 h-12 w-full rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:bg-zinc-800"
          >
            Reserve This Vehicle
          </button>
          <button className="mt-2 h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50">
            Speak to SCG
          </button>
        </aside>
      </section>
      </main>
    </>
  );
}
