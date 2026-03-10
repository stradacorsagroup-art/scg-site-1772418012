"use client";

import { useState } from "react";

export function ReserveModalButton({ car }: { car: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:bg-zinc-800"
      >
        Reserve This Vehicle
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 sm:p-6">
          <div className="relative h-[88vh] w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close reservation form"
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-lg text-zinc-700 hover:bg-zinc-100"
            >
              ×
            </button>

            <iframe
              title="SCG Vehicle Reservation"
              src={`https://form.typeform.com/to/01KKA3DY6M02S2NW3H707ES59Y?typeform-medium=embed-snippet&car=${encodeURIComponent(car)}`}
              className="h-full w-full"
              loading="lazy"
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        </div>
      )}
    </>
  );
}
