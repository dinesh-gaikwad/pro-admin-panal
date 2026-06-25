export function SearchBox() {
  return (
    <div className="card p-6">
      <label className="text-sm text-white/70">Search services</label>
      <div className="mt-3 flex gap-3">
        <input
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none"
          placeholder="Search ferries, parks, alerts, bookings..."
        />
        <button className="rounded-xl bg-blue-500 px-5 py-3 font-medium text-white">Search</button>
      </div>
    </div>
  );
}
