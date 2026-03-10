import Link from "next/link";
import Script from "next/script";
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

  const prettyTerm = (term: string) => term.replace(" mo", " months");

  const startupCosts = orderedTerms.map((term) => {
    const isThreeMo = term === "3 mo";
    const isTwelveMo = term === "12 mo";

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
          <p className="mt-4 text-sm text-zinc-500">Subscription Price</p>
          <p className="mt-1 text-3xl font-semibold text-zinc-900">${vehicle.monthly.toLocaleString()}/month</p>

          <h2 className="mt-5 text-lg font-semibold">Due at Signing</h2>
          <p className="mt-1 text-sm text-zinc-500">Estimated drive-off total. Excludes taxes and registration fees.</p>

          <div className="mt-4 space-y-3 text-sm">
            {startupCosts.map(({ term, scgDown, scgMonthly, scgBuyout, totalDue }) => (
              <div key={term} className="rounded-lg border border-zinc-200 p-3">
                <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-zinc-500">
                  <span>{prettyTerm(term)} option</span>
                  <span>${scgMonthly.toLocaleString()}/month</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span>{prettyTerm(term)} Down</span>
                  <strong>${scgDown.toLocaleString()}</strong>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span>{prettyTerm(term)} Monthly</span>
                  <strong>${scgMonthly.toLocaleString()}</strong>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-zinc-100 pb-2">
                  <span>{prettyTerm(term)} Buyout</span>
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

          <a
            href="#reserve-form"
            className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:bg-zinc-800"
          >
            Reserve This Vehicle
          </a>

        </aside>
      </section>

      <section id="reserve-form" className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm sm:p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Reserve This Vehicle</p>
          <div data-tf-live="01KKA3DY6M02S2NW3H707ES59Y" />
          <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive" />
        </div>
      </section>
    </main>
  );
}
