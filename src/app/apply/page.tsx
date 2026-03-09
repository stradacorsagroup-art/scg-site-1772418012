import Script from "next/script";
import { OwnershipPills } from "@/components/ownership-pills";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="border-b border-zinc-200/80 bg-gradient-to-b from-white to-[#f6f7f9]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">The Exotic Marketplace</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.02em] text-zinc-900 sm:text-5xl">Luxury Vehicle Ownership, Redefined for Discerning Drivers.</h1>
          <p className="mt-4 max-w-2xl text-sm text-zinc-600 sm:text-base">Curated inventory. Transparent terms. Zero guesswork. Browse live inventory—with flexible ownership built for a lifestyle that moves with you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6">
        <div className="mb-6">
          <OwnershipPills active="apply" />
        </div>

        <div className="max-w-5xl rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Reserve Request</p>
          <div data-tf-live="01KKA3DY6M02S2NW3H707ES59Y" />
          <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive" />
        </div>
      </section>
    </main>
  );
}
