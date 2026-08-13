import { awards, education } from "@/lib/data";
import TypedLine from "@/components/TypedLine";

export default function Credentials() {
  return (
    <section className="max-w-content mx-auto px-6 py-20 border-t border-line">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <TypedLine as="h2" text="$ cat ./education.md" className="font-mono text-sm text-mute mb-1" />
          <p className="text-paper font-medium mt-3">{education.school}</p>
          <p className="text-mute text-sm mt-1">{education.degree}</p>
          <p className="text-mute text-sm font-mono mt-1">{education.period}</p>
        </div>
        <div>
          <TypedLine as="h2" text="$ cat ./awards.md" className="font-mono text-sm text-mute mb-1" />
          <ul className="mt-3 space-y-2">
            {awards.map((a) => (
              <li key={a} className="text-mute text-sm flex gap-2">
                <span className="text-signal shrink-0">✓</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
