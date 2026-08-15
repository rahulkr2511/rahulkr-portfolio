"use client";


import { profile } from "@/lib/data";
import TypedLine from "@/components/TypedLine";
import { useEffect, useState } from "react";


export default function Contact() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="contact" className="max-w-content mx-auto px-6 py-20 border-t border-line">
      <TypedLine as="h2" text="$ echo $CONTACT" className="font-mono text-sm text-mute mb-1" onDone={() => setRevealed(true)} />
        <div className={`transition-opacity duration-700 delay-500 ${revealed ? "opacity-100" : "opacity-0"}`}>
          <p className="text-2xl font-mono font-semibold text-paper mb-6">Get in touch</p>
          <p className="text-mute max-w-lg leading-relaxed">
            Open to senior frontend and full-stack roles. The fastest way to reach me is email.
          </p>
          <p className="text-signal text-sm font-mono mt-3">{profile.availability}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href={`mailto:${profile.email}`}
              className="rounded border border-signal px-5 py-2.5 text-sm font-mono text-signal hover:bg-signal hover:text-ink transition-colors"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              className="rounded border border-line px-5 py-2.5 text-sm font-mono text-paper hover:border-mute transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              className="rounded border border-line px-5 py-2.5 text-sm font-mono text-paper hover:border-mute transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-xs text-mute font-mono mt-16">{profile.location}</p>
        </div>

    </section>
  );
}