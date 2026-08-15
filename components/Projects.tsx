"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import TypedLine from "@/components/TypedLine";
import { useEffect, useState } from "react";


export default function Projects() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="projects" className="max-w-content mx-auto px-6 py-20 border-t border-line">
      <TypedLine as="h2" text="$ ls ./projects" className="font-mono text-sm text-mute mb-1" onDone={() => setRevealed(true)}  />
      <p className={`text-2xl font-mono font-semibold text-paper mb-10 transition-opacity duration-700 delay-500 ${revealed ? "opacity-100" : "opacity-0"}`}>Selected work</p>

      <div className={`grid md:grid-cols-2 gap-5 transition-opacity duration-700 delay-500 ${revealed ? "opacity-100" : "opacity-0"}`}>
        {projects.map((p) => (
          <div
            key={p.slug}
            className="group rounded-lg border border-line bg-surface overflow-hidden hover:border-signal transition-colors"
          >
            {p.images && p.images.length > 0 && (
              <div className={`grid gap-px bg-line ${p.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                {p.images.map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={p.name}
                    className={`w-full object-cover object-top ${p.images!.length > 1 ? "h-32" : "h-44"}`}
                  />
                ))}
              </div>
            )}
            <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              {p.caseStudySlug ? (
                <Link
                  href={`/case-studies/${p.caseStudySlug}`}
                  className="font-mono text-paper font-medium group-hover:text-signal transition-colors"
                >
                  {p.name}
                </Link>
              ) : (
                <a
                  href={p.link}
                  target={p.link.endsWith(".pdf") ? "_blank" : undefined}
                  rel={p.link.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                  className="font-mono text-paper font-medium group-hover:text-signal transition-colors"
                >
                  {p.name}
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  className="shrink-0 text-xs font-mono text-pass border border-pass/40 rounded px-2 py-0.5 hover:bg-pass hover:text-ink transition-colors"
                >
                  Live demo ↗
                </a>
              )}
            </div>
            <p className="text-mute text-sm mt-2 leading-relaxed">{p.blurb}</p>
            <p className="text-xs text-pass mt-4 font-mono">{p.impact}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono text-mute border border-line rounded px-2 py-0.5"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              {p.caseStudySlug && (
                <Link
                  href={`/case-studies/${p.caseStudySlug}`}
                  className="text-xs font-mono text-signal underline underline-offset-2 hover:text-paper"
                >
                  View case study →
                </Link>
              )}
              <a
                href={p.link}
                target={p.link.endsWith(".pdf") ? "_blank" : undefined}
                rel={p.link.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                className="text-xs font-mono text-mute underline underline-offset-2 hover:text-paper"
              >
                {p.linkLabel ?? "View source"} →
              </a>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}