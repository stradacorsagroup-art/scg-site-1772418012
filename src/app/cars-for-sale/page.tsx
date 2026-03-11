import Image from "next/image";
import Link from "next/link";
import { OwnershipPills } from "@/components/ownership-pills";
import { carsForSaleInventory } from "@/data/cars-for-sale";
import { inventory } from "@/data/inventory";

function money(v: number) {
  return `$${v.toLocaleString()}`;
}

function displayVal(v?: string | number | null) {
  if (v === null || v === undefined || v === "") return "—";
  return String(v);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function norm(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export default function CarsForSalePage() {
  const mediaByCar = new Map(inventory.map((i) => [norm(i.car), i]));

  const items = carsForSaleInventory.map((item) => {
    const t3 = item.threeMo || {};
    const t12 = item.twelveMo || {};
    const price = Number(t12.buyout ?? t3.buyout ?? 0);

    const media = mediaByCar.get(norm(item.car));
    const detailSlug = media?.slug ?? slugify(item.car);

    return {
      ...item,
      price,
      image: media?.images?.[0],
      detailHref: media ? `/inventory/${detailSlug}` : "/apply",
    };
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <section className="border-b border-zinc-800 bg-[radial-gradient(circle_at_30%_20%,#1d1d1d_0%,#0a0a0a_50%)]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-700" />
            <p className="text-[13px] font-semibold uppercase tracking-[0.34em] text-zinc-400">Dealhaus</p>
            <span className="h-px w-8 bg-zinc-700" />
          </div>
          <h1 className="font-display mt-4 max-w-5xl text-[2.2rem] leading-[1.03] tracking-[-0.02em] text-white sm:text-[4rem]">Cars for sale.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6">
        <div className="mb-6">
          <OwnershipPills active="sale" />
        </div>

        <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">Cars for Sale</h1>
            <p className="mt-1 text-sm text-zinc-400">{items.length} vehicles currently listed</p>
          </div>
          <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100">
            ← Back to home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.car}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#111] transition duration-200 hover:-translate-y-0.5 hover:border-zinc-600"
            >
              <div className="relative h-44 border-b border-zinc-800 bg-zinc-900 sm:h-48">
                {item.image ? (
                  <Image src={item.image} alt={item.car} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.12em] text-zinc-500">
                    <span>Media coming soon</span>
                  </div>
                )}

              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-100">{item.car}</h3>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between border-b border-dashed border-zinc-800 pb-1">
                    <span className="text-zinc-400">Miles</span>
                    <span className="font-semibold text-zinc-100">{displayVal(item.miles)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-dashed border-zinc-800 pb-1">
                    <span className="text-zinc-400">MSRP</span>
                    <span className="font-semibold text-zinc-100">{money(item.price || 0)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-dashed border-zinc-800 pb-1">
                    <span className="text-zinc-400">VIN</span>
                    <span className="font-semibold text-zinc-100">{displayVal(item.vin)}</span>
                  </div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-zinc-400">Price</span>
                    <span className="font-semibold text-zinc-100">{money(item.price || 0)}</span>
                  </div>
                </div>

                <Link
                  href={item.detailHref}
                  className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-xl bg-zinc-100 px-3 text-sm font-semibold text-zinc-900 transition hover:bg-white"
                >
                  View Sale Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
