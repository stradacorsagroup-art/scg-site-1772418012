import Image from "next/image";
import Link from "next/link";
import { OwnershipPills } from "@/components/ownership-pills";
import { carsForSaleInventory } from "@/data/cars-for-sale";
import { inventory } from "@/data/inventory";

function money(v: number) {
  return `$${v.toLocaleString()}`;
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
    const monthly = Number(t12.scgMonthly ?? t3.scgMonthly ?? 0);
    const downs = [t3.scgDown, t12.scgDown].filter((v) => typeof v === "number") as number[];
    const minDown = downs.length ? Math.min(...downs) : null;
    const terms: string[] = [];
    if (typeof t3.scgDown === "number") terms.push("3 mo");
    if (typeof t12.scgDown === "number") terms.push("12 mo");

    const media = mediaByCar.get(norm(item.car));
    const detailSlug = media?.slug ?? slugify(item.car);

    return {
      ...item,
      monthly,
      minDown,
      terms,
      image: media?.images?.[0],
      video: media?.video,
      detailHref: media ? `/inventory/${detailSlug}` : "/apply",
    };
  });

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-12">
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
                {item.video ? (
                  <video src={item.video} className="h-full w-full object-cover" autoPlay muted loop playsInline />
                ) : item.image ? (
                  <Image src={item.image} alt={item.car} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.12em] text-zinc-500">
                    <span>Media coming soon</span>
                  </div>
                )}

                {!!item.terms.length && (
                  <div className="absolute left-3 top-3 rounded-full border border-zinc-200 bg-white/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-700">
                    {item.terms.join(" • ")}
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="min-h-10 text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-900">{item.car}</h3>
                <p className="mt-3 text-sm font-semibold text-zinc-900">{money(item.monthly)}/mo</p>
                <p className="mt-1 text-sm text-zinc-600">{item.minDown != null ? `From ${money(item.minDown)} down` : "Down payment on request"}</p>
                <p className="mt-3 text-xs text-zinc-500">Cash/Financing • Terms subject to verification</p>

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
