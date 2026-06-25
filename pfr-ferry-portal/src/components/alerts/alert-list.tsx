export function AlertList({ items }: { items: Array<{ title: string; level: string; text: string }> }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div key={item.title} className="card p-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-semibold">{item.title}</h3>
            <span className="rounded-full px-3 py-1 text-xs uppercase tracking-wide bg-white/5">{item.level}</span>
          </div>
          <p className="mt-3 text-sm text-white/70">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
