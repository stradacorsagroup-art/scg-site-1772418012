"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export function VehicleGallery({ car, images = [] }: { car: string; images?: string[]; video?: string }) {
  const media = useMemo(() => {
    const seen = new Set<string>();
    const arr: Array<{ type: "image"; src: string }> = [];

    for (const img of images) {
      const key = `image:${img}`;
      if (!seen.has(key)) {
        seen.add(key);
        arr.push({ type: "image", src: img });
      }
    }

    return arr;
  }, [images]);

  const [active, setActive] = useState(0);
  const current = media[active];

  if (!current) {
    return <div className="h-60 bg-zinc-100 sm:h-[430px]" />;
  }

  return (
    <>
      <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="relative h-60 bg-zinc-100 sm:h-[430px]">
          <Image src={current.src} alt={car} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 65vw" />
        </div>
      </div>

      {media.length > 1 && (
        <div className="mt-3 overflow-x-auto pb-1">
          <div className="flex min-w-max gap-2">
            {media.slice(0, 12).map((m, idx) => (
              <button
                key={`${m.type}-${m.src}`}
                onClick={() => setActive(idx)}
                className={`relative h-16 w-24 overflow-hidden rounded-lg border bg-white sm:h-[72px] sm:w-28 ${idx === active ? "border-zinc-900 ring-1 ring-zinc-900/10" : "border-zinc-200"}`}
                aria-label={`Show media ${idx + 1}`}
              >
                <Image src={m.src} alt={car} fill className="object-cover" sizes="120px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
