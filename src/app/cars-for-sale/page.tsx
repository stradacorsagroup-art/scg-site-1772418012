import Link from "next/link";
import { OwnershipPills } from "@/components/ownership-pills";

export default function CarsForSalePage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-12">
        <div className="mb-6">
          <OwnershipPills active="sale" />
        </div>

        <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Cars for Sale</h1>
            <p className="mt-1 text-sm text-zinc-500">Cash / Financing inventory • 0 vehicles currently listed</p>
          </div>
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">← Back to home</Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <article key={i} className="overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-white">
              <div className="flex h-44 items-center justify-center border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-[0.12em] text-zinc-500 sm:h-48">
                Coming Soon
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="min-h-10 text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-700">Cars for Sale Slot</h3>
                <p className="mt-3 text-sm text-zinc-500">This section is intentionally empty for now.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
