import Link from "next/link";

function pillClass(active: boolean) {
  return active
    ? "inline-flex h-11 items-center rounded-full border border-zinc-900 bg-zinc-900 px-5 text-sm font-semibold text-white"
    : "inline-flex h-11 items-center rounded-full border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50";
}

export function OwnershipPills({ active }: { active: "membership" | "sale" | "apply" }) {
  return (
    <div>
      <p className="text-[15px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Path to ownership</p>
      <div className="mt-3 flex flex-wrap gap-3">
        <Link href="/#membership-inventory" className={pillClass(active === "membership")}>
          Membership Inventory (No Credit)
        </Link>
        <Link href="/cars-for-sale" className={pillClass(active === "sale")}>
          Cars for Sale (Cash / Financing)
        </Link>
        <Link href="/apply" className={pillClass(active === "apply")}>
          Apply for a specific car
        </Link>
      </div>
    </div>
  );
}
