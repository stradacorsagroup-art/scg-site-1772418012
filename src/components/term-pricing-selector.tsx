"use client";

import { useMemo, useState } from "react";

type StartupCost = {
  term: string;
  scgDown: number;
  scgMonthly: number;
  scgBuyout?: number;
  totalDue: number;
};

function prettyTerm(term: string) {
  return term.replace(" mo", " months");
}

function money(value: number) {
  return `$${value.toLocaleString()}`;
}

const ORDER: Record<string, number> = { "3 mo": 1, "6 mo": 2, "12 mo": 3 };

export function TermPricingSelector({
  startupCosts,
  membershipFee,
}: {
  startupCosts: StartupCost[];
  membershipFee: number;
}) {
  const ordered = useMemo(
    () => [...startupCosts].sort((a, b) => (ORDER[a.term] ?? 99) - (ORDER[b.term] ?? 99)),
    [startupCosts],
  );

  const [selectedTerm, setSelectedTerm] = useState(ordered[0]?.term ?? "");
  const active = ordered.find((item) => item.term === selectedTerm) ?? ordered[0];

  if (!active) {
    return (
      <div className="mt-4 rounded-lg border border-zinc-700 bg-[#151515] p-4 text-sm text-zinc-300">
        Term pricing coming soon.
      </div>
    );
  }

  return (
    <div className="mt-4 text-sm">
      {ordered.length > 1 && (
        <div className="mb-3 grid grid-cols-2 gap-2">
          {ordered.map((option) => {
            const activeButton = option.term === active.term;
            return (
              <button
                key={option.term}
                type="button"
                onClick={() => setSelectedTerm(option.term)}
                className={`rounded-lg border px-3 py-2 text-left transition ${
                  activeButton
                    ? "border-zinc-100 bg-zinc-100 text-zinc-900"
                    : "border-zinc-700 bg-[#101010] text-zinc-300 hover:border-zinc-500"
                }`}
              >
                <div className="text-[11px] uppercase tracking-[0.08em]">{prettyTerm(option.term)}</div>
                <div className="mt-1 text-sm font-semibold">{money(option.scgMonthly)}/month</div>
              </button>
            );
          })}
        </div>
      )}

      <div className="rounded-lg border border-zinc-700 bg-[#101010] p-3">
        <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.08em] text-zinc-400">
          <span>{prettyTerm(active.term)} option</span>
          <span>{money(active.scgMonthly)}/month</span>
        </div>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <span>{prettyTerm(active.term)} Down</span>
          <strong>{money(active.scgDown)}</strong>
        </div>
        <div className="mt-2 flex items-center justify-between border-b border-zinc-800 pb-2">
          <span>{prettyTerm(active.term)} Monthly</span>
          <strong>{money(active.scgMonthly)}</strong>
        </div>
        <div className="mt-2 flex items-center justify-between border-b border-zinc-800 pb-2">
          <span>{prettyTerm(active.term)} Buyout</span>
          <strong>{typeof active.scgBuyout === "number" ? money(active.scgBuyout) : "On request"}</strong>
        </div>
        <div className="mt-2 flex items-center justify-between border-b border-zinc-800 pb-2">
          <span>Membership Fee</span>
          <strong>{money(membershipFee)}</strong>
        </div>
        <div className="mt-2 flex items-center justify-between text-base font-semibold">
          <span>Total Due at Signing</span>
          <strong>{money(active.totalDue)}</strong>
        </div>
      </div>

    </div>
  );
}
