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
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-white to-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:py-16">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-300" />
            <p className="text-[15px] font-semibold uppercase tracking-[0.34em] text-zinc-600">Dealhaus</p>
            <span className="h-px w-8 bg-zinc-300" />
          </div>
          <h1 className="mt-4 max-w-5xl text-[2.15rem] font-semibold leading-[1.03] tracking-[-0.03em] text-zinc-900 sm:text-[3.8rem]">Luxury cars. Flexible ownership.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6">
        <div className="mb-6">
          <OwnershipPills active="sale" />
        </div>

        <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Cars for Sale</h1>
            <p className="mt-1 text-sm text-zinc-500">Cash / Financing inventory • {items.length} vehicles currently listed</p>
          </div>
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
            ← Back to home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.car}
              className="group overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-44 border-b border-zinc-200 bg-zinc-100 sm:h-48">
                {item.image ? (
                  <Image src={item.image} alt={item.car} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.12em] text-zinc-500">
                    <span>Media coming soon</span>
                  </div>
                )}

              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-900">{item.car}</h3>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between border-b border-dashed border-zinc-200 pb-1">
                    <span className="text-zinc-600">Miles</span>
                    <span className="font-semibold text-zinc-900">{displayVal(item.miles)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-dashed border-zinc-200 pb-1">
                    <span className="text-zinc-600">MSRP</span>
                    <span className="font-semibold text-zinc-900">{money(item.price || 0)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-dashed border-zinc-200 pb-1">
                    <span className="text-zinc-600">VIN</span>
                    <span className="font-semibold text-zinc-900">{displayVal(item.vin)}</span>
                  </div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-zinc-600">Price</span>
                    <span className="font-semibold text-zinc-900">{money(item.price || 0)}</span>
                  </div>
                </div>

                <Link
                  href={item.detailHref}
                  className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-xl bg-zinc-900 px-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
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
