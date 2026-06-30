type Props = {
  index: string;
  label: string;
};

export default function SectionHeader({ index, label }: Props) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <span className="font-mono text-xs text-blue-electric uppercase tracking-wide">{index}</span>
      <div className="h-px max-w-[60px] flex-1 bg-blue-glow/40" />
      <span className="font-mono text-xs uppercase tracking-wide text-ink-dim">{label}</span>
    </div>
  );
}
