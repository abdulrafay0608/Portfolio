type StatItemProps = {
  value: string;
  label: string;
};

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div>
      <p className="text-2xl font-bold tracking-[-0.03em] text-zinc-950 dark:text-white">{value}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">{label}</p>
    </div>
  );
}
