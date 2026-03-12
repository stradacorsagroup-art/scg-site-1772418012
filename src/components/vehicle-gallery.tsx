"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

function getImagePosition(car: string, src: string) {
  if (car.includes("2020 McLaren 720S Spider")) {
    if (
      src.includes("/images/cars/2020-mclaren-720s-spider/2.jpg") ||
      src.includes("/images/cars/2020-mclaren-720s-spider/hero.jpg")
    ) {
      return "50% 85%";
    }
  }
  return "50% 50%";
}

export function VehicleGallery({ car, images = [], video }: { car: string; images?: string[]; video?: string }) {
  const media = useMemo(() => {
    const seen = new Set<string>();
    const arr: GalleryMedia[] = [];

    for (const img of images) {
      const key = `image:${img}`;
      if (!seen.has(key)) {
        seen.add(key);
        arr.push({ type: "image", src: img });
      }
    }

    if (video) {
      const key = `video:${video}`;
      if (!seen.has(key)) {
        seen.add(key);
        arr.push({ type: "video", src: video });
      }
    }

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
        <div className="relative h-60 bg-black sm:h-[430px]">
          {current.type === "image" ? (
            <Image
              src={current.src}
              alt={car}
              fill
              className="object-cover"
              style={{ objectPosition: getImagePosition(car, current.src) }}
              sizes="(max-width: 1024px) 100vw, 65vw"
              quality={95}
            />
          ) : (
            <video key={current.src} className="h-full w-full object-cover bg-black" controls playsInline preload="metadata">
              <source src={current.src} />
              Your browser does not support the video tag.
            </video>
          )}
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
                {m.type === "image" ? (
                  <Image src={m.src} alt={car} fill className="object-cover" sizes="120px" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                    Video
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
