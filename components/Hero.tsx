"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";


export default function Hero() {
  const command = "whoami";
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(command.slice(0, i));
      if (i >= command.length) {
        clearInterval(id);
        setTimeout(() => setDone(true), 200);
      }
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="max-w-content mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <p className="font-mono text-sm text-mute">
        <span className="text-pass">rahul@portfolio</span>
        <span className="text-mute">:~$ </span>
        <span className="text-paper">{typed}</span>
        {!done && <span className="type-cursor" />}
      </p>

      <h1
        className={`mt-6 font-mono font-semibold text-4xl md:text-6xl tracking-tight text-paper transition-opacity duration-700 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        {profile.name}
      </h1>

      <p
        className={`mt-3 text-xl md:text-2xl text-signal font-medium transition-opacity duration-700 delay-150 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        {profile.role}
      </p>

      <p
        className={`mt-6 max-w-2xl text-mute leading-relaxed transition-opacity duration-700 delay-300 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        {profile.summary}
      </p>

      <div
        className={`mt-8 flex flex-wrap gap-3 transition-opacity duration-700 delay-500 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href={profile.resumeUrl}
          className="rounded border border-signal px-5 py-2.5 text-sm font-mono text-signal hover:bg-signal hover:text-ink transition-colors"
        >
          Download resume
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded border border-line px-5 py-2.5 text-sm font-mono text-paper hover:border-mute transition-colors"
        >
          Email me
        </a>
        <a
          href={profile.github}
          className="rounded border border-line px-5 py-2.5 text-sm font-mono text-paper hover:border-mute transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}