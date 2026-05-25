type StatCardProps = {
  label: string;
  value: number;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <article className="rounded-3xl bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <strong className="mt-2 block text-3xl text-ink">{value}</strong>
    </article>
  );
}
