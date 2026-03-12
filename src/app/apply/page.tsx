import Script from "next/script";
import { OwnershipPills } from "@/components/ownership-pills";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <section className="border-b border-zinc-800 bg-[radial-gradient(circle_at_30%_20%,#1d1d1d_0%,#0a0a0a_50%)]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-700" />
            <p className="text-[13px] font-semibold uppercase tracking-[0.34em] text-zinc-400">Dealhaus</p>
            <span className="h-px w-8 bg-zinc-700" />
          </div>
          <h1 className="font-display mt-4 max-w-5xl text-[2.2rem] leading-[1.03] tracking-[-0.02em] text-white sm:text-[4rem]">Apply.</h1>
        </div>
      </section>

      <section className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#0a0a0a]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 py-3 sm:px-6">
          <OwnershipPills active="apply" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-5 sm:px-6 sm:py-6">
        <div className="max-w-5xl rounded-2xl border border-zinc-800 bg-[#111] p-4 shadow-sm sm:p-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Reserve Request</p>
          <div data-tf-live="01KKA3DY6M02S2NW3H707ES59Y" />
          <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive" />
        </div>
      </section>
    </main>
  );
}
