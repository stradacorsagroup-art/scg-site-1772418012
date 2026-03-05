"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export function VehicleGallery({ car, images = [], video }: { car: string; images?: string[]; video?: string }) {
  const media = useMemo(() => {
    const arr: Array<{ type: "image" | "video"; src: string }> = [];
    if (video) arr.push({ type: "video", src: video });
    images.forEach((img) => arr.push({ type: "image", src: img }));
    return arr;
  }, [images, video]);

  const [active, setActive] = useState(0);
  const current = media[active];

  if (!current) {
    return <div className="h-60 bg-zinc-100 sm:h-[430px]" />;
  }

  return (
    <>
      <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        {current.type === "video" ? (
          <video src={current.src} className="h-60 w-full object-contain bg-zinc-100 sm:h-[430px]" controls playsInline />
        ) : (
          <div className="relative h-60 bg-zinc-100 sm:h-[430px]">
            <Image src={current.src} alt={car} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 65vw" />
          </div>
        )}
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
                {m.type === "video" ? (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-xs font-semibold text-white">VIDEO</div>
                ) : (
                  <Image src={m.src} alt={car} fill className="object-cover" sizes="120px" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
