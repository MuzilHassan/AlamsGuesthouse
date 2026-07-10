import type { Stat } from "@/data/siteConfig";

export default function StatBadge({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-beige-300 bg-beige-50 px-6 py-5 text-center shadow-sm">
      <span className="font-serif text-3xl font-semibold text-terracotta-500">
        {stat.value}
      </span>
      <span className="mt-1 text-sm font-medium uppercase tracking-wide text-navy-700">
        {stat.label}
      </span>
    </div>
  );
}
