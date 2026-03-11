import Script from "next/script";
import { OwnershipPills } from "@/components/ownership-pills";

export default function ApplyPage() {
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
