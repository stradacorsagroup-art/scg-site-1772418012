import Link from "next/link";

function pillClass(active: boolean) {
  return active
    ? "inline-flex h-10 shrink-0 items-center rounded-full border border-zinc-900 bg-zinc-900 px-4 text-[13px] font-semibold text-white sm:h-11 sm:px-5 sm:text-sm"
    : "inline-flex h-10 shrink-0 items-center rounded-full border border-zinc-300 bg-white px-4 text-[13px] font-semibold text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 sm:h-11 sm:px-5 sm:text-sm";
}

export function OwnershipPills({ active }: { active: "membership" | "sale" | "apply" }) {
  return (
    <div>
      <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:text-[15px] sm:tracking-[0.18em]">Path to ownership</p>
      <div className="mt-3 -mx-1 overflow-x-auto pb-1 sm:mx-0 sm:overflow-visible sm:pb-0">
        <div className="flex w-max gap-2 px-1 sm:w-auto sm:flex-wrap sm:gap-3 sm:px-0">
          <Link href="/#membership-inventory" className={pillClass(active === "membership")}>
Private Access
          </Link>
          <Link href="/cars-for-sale" className={pillClass(active === "sale")}>
            Cars for Sale (Cash / Financing)
          </Link>
          <Link href="/apply" className={pillClass(active === "apply")}>
            Apply for a specific car
          </Link>
        </div>
      </div>
    </div>
  );
}
