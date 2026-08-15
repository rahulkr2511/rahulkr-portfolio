"use client";

import Link from "next/link";
import { CaseStudy } from "@/lib/case-studies";
import TypedLine from "@/components/TypedLine";
import { useEffect, useState } from "react";


export default function CaseStudyView({ study }: { study: CaseStudy }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <main className="max-w-content mx-auto px-6 py-16 md:py-24">
      <Link href="/#projects" className="font-mono text-sm text-mute hover:text-signal transition-colors">
        ← back to projects
      </Link>

      <h1 className="font-mono text-3xl md:text-5xl font-semibold text-paper mt-6">{study.name}</h1>
      <p className="text-mute mt-4 max-w-2xl leading-relaxed">{study.tagline}</p>

      {study.heroImage && (
        <div className="rounded-lg overflow-hidden border border-line mt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={study.heroImage} alt={study.name} className="w-full h-auto block" />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-6">
        {study.stack.map((s) => (
          <span key={s} className="text-xs font-mono text-mute border border-line rounded px-2 py-0.5">
            {s}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        {study.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded border border-signal px-4 py-2 text-sm font-mono text-signal hover:bg-signal hover:text-ink transition-colors"
          >
            {l.label} ↗
          </a>
        ))}
      </div>

      <section className="mt-14 border-t border-line pt-10">
        <TypedLine as="h2" text="$ cat ./overview.md" className="font-mono text-sm text-mute mb-3" onDone={() => setRevealed(true)} />
        <p className={`text-paper/90 leading-relaxed max-w-3xl transition-opacity duration-700 delay-500 ${revealed ? "opacity-100" : "opacity-0"}`}>{study.overview}</p>
      </section>

      <section className="mt-14 border-t border-line pt-10">
        <TypedLine as="h2" text="$ cat ./architecture.md" className="font-mono text-sm text-mute mb-4" onDone={() => setRevealed(true)} />
        <div className={`space-y-8 transition-opacity duration-700 delay-500 ${revealed ? "opacity-100" : "opacity-0"}`}>
          {study.diagrams.map((d) => (
            <figure key={d.src}>
              <div className="rounded-lg overflow-hidden border border-line bg-paper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.src} alt={d.caption} className="w-full h-auto block" />
              </div>
              <figcaption className="text-xs text-mute font-mono mt-2">{d.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-line pt-10 pb-10">
        <TypedLine as="h2" text="$ cat ./highlights.md" className="font-mono text-sm text-mute mb-4" onDone={() => setRevealed(true)} />
        <ul className={`space-y-3 transition-opacity duration-700 delay-500 ${revealed ? "opacity-100" : "opacity-0"}`}>
          {study.highlights.map((h) => (
            <li key={h} className="text-paper/90 text-sm leading-relaxed flex gap-2">
              <span className="text-signal shrink-0">›</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}