import Link from "next/link";

function pillClass(active: boolean) {
  return active
    ? "inline-flex h-9 items-center rounded-full border border-zinc-900 bg-zinc-900 px-4 text-xs font-semibold text-white"
    : "inline-flex h-9 items-center rounded-full border border-zinc-300 bg-white px-4 text-xs font-semibold text-zinc-900 hover:bg-zinc-100";
}

export function OwnershipPills({ active }: { active: "membership" | "sale" | "apply" }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Path to ownership</p>
      <div className="mt-2 flex flex-wrap gap-2">
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
