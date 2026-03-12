import Link from "next/link";

function pillClass(active: boolean) {
  return active
    ? "inline-flex h-10 shrink-0 items-center rounded-full border border-zinc-100 bg-zinc-100 px-4 text-[13px] font-semibold text-zinc-900 sm:h-11 sm:px-5 sm:text-sm"
    : "inline-flex h-10 shrink-0 items-center rounded-full border border-zinc-700 bg-transparent px-4 text-[13px] font-semibold text-zinc-300 hover:border-zinc-400 hover:text-zinc-100 sm:h-11 sm:px-5 sm:text-sm";
}

export function OwnershipPills({ active }: { active: "membership" | "sale" | "apply" }) {
  return (
    <div>
      <div className="h-[1px] w-full bg-zinc-800" />
      <div className="mt-4 -mx-1 overflow-x-auto pb-1 sm:mx-0 sm:overflow-visible sm:pb-0">
        <div className="flex w-max gap-2 px-1 sm:w-auto sm:flex-wrap sm:gap-3 sm:px-0">
          <Link href="/#membership-inventory" className={pillClass(active === "membership")}>
            Drive to Own
          </Link>
          <Link href="/cars-for-sale" className={pillClass(active === "sale")}>
            Cars for Sale
          </Link>
          <Link href="/apply" className={pillClass(active === "apply")}>
            Source a Vehicle
          </Link>
        </div>
      </div>
    </div>
  );
}
