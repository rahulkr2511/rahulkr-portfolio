"use client";

import { useEffect, useRef, useState } from "react";

export default function TypedLine({
  text,
  className = "",
  as: Tag = "p",
  speedMs = 28,
}: {
  text: string;
  className?: string;
  as?: "p" | "h2" | "h3";
  speedMs?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setTyped(text);
      setDone(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            let i = 0;
            const id = setInterval(() => {
              i += 1;
              setTyped(text.slice(0, i));
              if (i >= text.length) {
                clearInterval(id);
                setDone(true);
              }
            }, speedMs);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, speedMs]);

  return (
    // @ts-expect-error dynamic tag, className/ref are valid on all three
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {typed}
        {!done && <span className="type-cursor" />}
      </span>
    </Tag>
  );
}
