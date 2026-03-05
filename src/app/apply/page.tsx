import { OwnershipPills } from "@/components/ownership-pills";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-zinc-900">
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-12">
        <div className="mb-6">
          <OwnershipPills active="apply" />
        </div>

        <div className="max-w-3xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Exotic Membership Marketplace</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Apply for Private Access</h1>
          <p className="mt-3 text-sm text-zinc-600 sm:text-base">
            To finalize your subscription structure, contact the SCG team and we’ll match you to available inventory and terms.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:hello@stradacorsagroup.com"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Email SCG
            </a>
            <a
              href="tel:+14045550101"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              Call SCG
            </a>
          </div>

          <p className="mt-5 text-xs text-zinc-500">Prefer text? Share your name, desired vehicle, and ideal term length to get started quickly.</p>
        </div>
      </section>
    </main>
  );
}
