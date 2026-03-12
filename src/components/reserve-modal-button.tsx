"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    tf?: {
      load?: () => void;
    };
  }
}

const TYPEFORM_EMBED_SRC = "https://embed.typeform.com/next/embed.js";

export function ReserveModalButton({ car }: { car: string }) {
  const [open, setOpen] = useState(false);
  const embedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const loadTypeform = () => {
      window.tf?.load?.();
    };

    if (window.tf?.load) {
      loadTypeform();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${TYPEFORM_EMBED_SRC}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener("load", loadTypeform, { once: true });
      return () => existingScript.removeEventListener("load", loadTypeform);
    }

    const script = document.createElement("script");
    script.src = TYPEFORM_EMBED_SRC;
    script.async = true;
    script.addEventListener("load", loadTypeform, { once: true });
    document.body.appendChild(script);

    return () => script.removeEventListener("load", loadTypeform);
  }, [open, car]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-xl bg-white px-4 text-sm font-semibold text-zinc-900 shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-zinc-100"
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

            <div className="h-full w-full overflow-auto p-3 sm:p-4">
              <p className="mb-2 text-xs text-zinc-500">Reserve request for: {car}</p>
              <div ref={embedRef} key={car} data-tf-live="01KKA3DY6M02S2NW3H707ES59Y" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
