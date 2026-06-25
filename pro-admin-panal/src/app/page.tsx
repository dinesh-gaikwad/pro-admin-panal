import Link from "next/link";
export default function HomePage() {
  return (
    <section className="container-pfr py-12">
      <div className="card p-8 md:p-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-300">Toronto PF&R</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Real-time ferry operations and passenger management portal.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          A modern public-service website for citizens, visitors, and staff to access ferry updates,
          bookings, alerts, parks, events, and support in one place.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/ferry" className="rounded-full bg-blue-500 px-5 py-3 font-medium text-white">Explore Ferry</Link>
          <Link href="/contact" className="rounded-full border border-white/15 px-5 py-3 font-medium text-white/90">Contact Support</Link>
        </div>
      </div>
    </section>
  );
}
