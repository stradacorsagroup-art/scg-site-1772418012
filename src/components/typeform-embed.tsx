"use client";

import { useEffect, useRef } from "react";


export function TypeformEmbed({ formId }: { formId: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const init = () => {
      const tf = (window as any).tf;
      if (!containerRef.current || !tf?.createWidget) return;
      containerRef.current.innerHTML = "";
      tf.createWidget(formId, {
        container: containerRef.current,
        inlineOnMobile: true,
      });
    };

    const existing = document.getElementById("typeform-embed-script") as HTMLScriptElement | null;

    if (existing) {
      const tf = (window as any).tf;
      if (tf?.createWidget) init();
      else existing.addEventListener("load", init, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "typeform-embed-script";
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [formId]);

  return <div ref={containerRef} className="min-h-[720px]" />;
}
