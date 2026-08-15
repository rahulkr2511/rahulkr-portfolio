"use client";

import { awards, education } from "@/lib/data";
import TypedLine from "@/components/TypedLine";
import { useEffect, useState } from "react";


export default function Credentials() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="max-w-content mx-auto px-6 py-20 border-t border-line">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <TypedLine as="h2" text="$ cat ./education.md" className="font-mono text-sm text-mute mb-1" onDone={() => setRevealed(true)}  />
          <div className={`transition-opacity duration-700 delay-500 ${revealed ? "opacity-100" : "opacity-0"}`}>
            <p className="text-paper font-medium mt-3">{education.school}</p>
            <p className="text-mute text-sm mt-1">{education.degree}</p>
            <p className="text-mute text-sm font-mono mt-1">{education.period}</p>
          </div>
        </div>
        <div>
          <TypedLine as="h2" text="$ cat ./awards.md" className="font-mono text-sm text-mute mb-1" onDone={() => setRevealed(true)}  />
          <ul className={`mt-3 space-y-2 transition-opacity duration-700 delay-500 ${revealed ? "opacity-100" : "opacity-0"}`}>
            {awards.map((award) => (
              <li key={award.text} className="text-mute text-sm leading-relaxed">
                {award.text}
                {award.link && (
                  <>
                    <br />
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-signal underline underline-offset-2 hover:text-paper whitespace-nowrap"
                    >
                      {award.linkLabel ?? "View source"} →
                    </a>
                  </>
                )}
              </li>
            ))}

          </ul>
        </div>
      </div>
    </section>
  );
}