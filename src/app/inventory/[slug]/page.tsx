import Link from "next/link";
import { notFound } from "next/navigation";
import { ReserveModalButton } from "@/components/reserve-modal-button";
import { VehicleGallery } from "@/components/vehicle-gallery";
import { deposit, getInventoryBySlug } from "@/data/inventory";

export default async function InventoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getInventoryBySlug(slug);

  if (!vehicle) notFound();

  const noteText = `Miles: ${vehicle.mileage || "—"}${vehicle.notes ? ` • ${vehicle.notes}` : ""}`;

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
              <p>{noteText}</p>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-zinc-800 bg-[#111] p-4 shadow-sm sm:p-5 lg:sticky lg:top-4">
          <h1 className="text-[1.85rem] font-semibold leading-tight tracking-[-0.02em] text-zinc-100 sm:text-[2.25rem]">{vehicle.car}</h1>
          <p className="mt-3 text-sm font-medium text-zinc-400">Monthly Price</p>
          <p className="mt-1 text-3xl font-semibold text-zinc-100">${vehicle.monthly.toLocaleString()}/month</p>

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
