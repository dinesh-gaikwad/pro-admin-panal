export function BookingForm() {
  return (
    <form className="card grid gap-4 p-6">
      <div className="grid gap-2">
        <label className="text-sm text-white/70">Passenger name</label>
        <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" placeholder="Enter name" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-white/70">Route</label>
        <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none">
          <option>Ward's Island</option>
          <option>Centre Island</option>
          <option>Hanlan's Point</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-white/70">Travel date</label>
        <input type="date" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none" />
      </div>
      <button type="submit" className="rounded-xl bg-blue-500 px-4 py-3 font-medium text-white">
        Confirm Booking
      </button>
    </form>
  );
}
