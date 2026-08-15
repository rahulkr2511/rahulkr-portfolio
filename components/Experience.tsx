"use client";

import { experience } from "@/lib/data";
import TypedLine from "@/components/TypedLine";
import { useEffect, useState } from "react";


export default function Experience() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="experience" className="max-w-content mx-auto px-6 py-20 border-t border-line">
      <TypedLine as="h2" text="$ git log --author=rahul --oneline" className="font-mono text-sm text-mute mb-1"  onDone={() => setRevealed(true)} />
      <p className={`text-2xl font-mono font-semibold text-paper mb-10 transition-opacity duration-700 delay-500 ${revealed ? "opacity-100" : "opacity-0"}`}>Experience</p>

      <div className={`space-y-8 transition-opacity duration-700 delay-500 ${revealed ? "opacity-100" : "opacity-0"}`}>
        {experience.map((entry) => (
          <div key={entry.hash} className="flex gap-4 md:gap-6">
            <div className="hidden md:flex flex-col items-center pt-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-pass shrink-0" />
              <span className="w-px flex-1 bg-line mt-1" />
            </div>
            <div className="pb-2">
              <p className="font-mono text-xs text-mute">
                <span className="text-pass">{entry.hash}</span> · {entry.period}
              </p>
              <p className="font-mono text-paper mt-1">
                <span className="text-signal">{entry.message}</span>
              </p>
              <p className="text-paper font-medium mt-2">
                {entry.title} <span className="text-mute font-normal">— {entry.company}</span>
              </p>
              <ul className="mt-2 space-y-1">
                {entry.details.map((d) => (
                  <li key={d} className="text-mute text-sm flex gap-2">
                    <span className="text-line">·</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}