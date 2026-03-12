"use client";

import { useEffect, useRef } from "react";

const TYPEFORM_EMBED_SRC = "https://embed.typeform.com/next/embed.js";

export function TypeformEmbed({ formId }: { formId: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const init = () => {
      // Uses Typeform's auto-scan for data-tf-live containers
      (window as any).tf?.load?.();
    };

    if ((window as any).tf?.load) {
      init();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${TYPEFORM_EMBED_SRC}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener("load", init, { once: true });
      return () => existingScript.removeEventListener("load", init);
    }

    const script = document.createElement("script");
    script.src = TYPEFORM_EMBED_SRC;
    script.async = true;
    script.addEventListener("load", init, { once: true });
    document.body.appendChild(script);

    return () => script.removeEventListener("load", init);
  }, [formId]);

  return <div ref={containerRef} data-tf-live={formId} className="min-h-[720px]" />;
}
