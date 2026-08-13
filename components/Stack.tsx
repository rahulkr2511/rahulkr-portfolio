import { stack } from "@/lib/data";
import TypedLine from "@/components/TypedLine";

export default function Stack() {
  return (
    <section id="stack" className="max-w-content mx-auto px-6 py-20 border-t border-line">
      <TypedLine as="h2" text="$ cat ./stack.yml" className="font-mono text-sm text-mute mb-1" />
      <p className="text-2xl font-mono font-semibold text-paper mb-10">How I build</p>

      <div className="space-y-3">
        {stack.map((layer, i) => (
          <div
            key={layer.layer}
            className="rounded-lg border border-line bg-surface px-6 py-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-8"
            style={{ marginLeft: `${i * 0}px` }}
          >
            <p className="font-mono text-signal text-sm w-32 shrink-0">{layer.layer}</p>
            <div className="flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <span key={item} className="text-sm text-paper/90 font-mono">
                  {item}
                  <span className="text-line mx-2">/</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
