import Image from "next/image";
import { OwnershipPills } from "@/components/ownership-pills";
import { TypeformEmbed } from "@/components/typeform-embed";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <section className="relative overflow-hidden border-b border-zinc-800 bg-[#0a0a0a]">
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/images/hero/home-hero.jpg"
            alt="SCG hero garage"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute right-0 top-0 hidden h-full w-[50vw] lg:block">
          <Image
            src="/images/hero/home-hero.jpg"
            alt="SCG hero garage"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-24 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-stretch lg:gap-12 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-zinc-700" />
              <p className="text-[13px] font-semibold uppercase tracking-[0.34em] text-zinc-300">Dealhaus</p>
              <span className="h-px w-8 bg-zinc-700" />
            </div>

            <h1 className="font-display mt-6 max-w-4xl text-[2.2rem] leading-[1.02] tracking-[-0.02em] text-white sm:text-[4.1rem]">
              Apply.
            </h1>

            <div className="mt-8 hidden lg:block">
              <OwnershipPills active="apply" />
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>

        <div className="relative z-20 translate-y-2 px-5 pb-4 lg:hidden sm:px-6">
          <OwnershipPills active="apply" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-6 sm:py-10">

        <div className="max-w-5xl rounded-2xl border border-zinc-800 bg-[#111] p-4 shadow-sm sm:p-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">Reserve Request</p>
          <TypeformEmbed formId="01KKA3DY6M02S2NW3H707ES59Y" />
        </div>
      </section>
    </main>
  );
}
