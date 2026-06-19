export function StatCard({
  label,
  value,
  hint,
  emoji,
}: {
  label: string;
  value: string | number;
  hint?: string;
  emoji?: string;
}) {
  return (
    <div className="rounded-2xl border border-[#105D9E]/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-sm text-[#6B7A8D]">
        {emoji && <span aria-hidden>{emoji}</span>}
        <span>{label}</span>
      </div>
      <p className="mt-2 text-2xl font-bold text-[#1A2332]">{value}</p>
      {hint && <p className="mt-1 text-xs text-[#6B7A8D]">{hint}</p>}
    </div>
  );
}

export function StatGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{children}</div>;
}
