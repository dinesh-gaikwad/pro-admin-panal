type Props = { name: string; status: string; capacity: number; terminal: string; };
export function FerryCard({ name, status, capacity, terminal }: Props) {
  return (
    <article className="card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="mt-1 text-sm text-white/65">{terminal}</p>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">{status}</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/75">
        <div className="rounded-xl bg-white/5 p-3"><p className="text-white/50">Capacity</p><p className="mt-1 text-lg font-semibold">{capacity}</p></div>
        <div className="rounded-xl bg-white/5 p-3"><p className="text-white/50">Live</p><p className="mt-1 text-lg font-semibold">Ready</p></div>
      </div>
    </article>
  );
}
