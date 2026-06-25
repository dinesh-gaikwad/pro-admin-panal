import Link from "next/link";

const cards = [
  { title: "Real-time ferry status", desc: "Check service alerts, delays, cancellations, and peak-hour updates.", href: "/status" },
  { title: "Routes and schedules", desc: "Explore terminals, sailing times, and route details.", href: "/routes" },
  { title: "Bookings and tickets", desc: "Reserve seats and track ticket status with capacity controls.", href: "/booking" },
  { title: "Parks and trails", desc: "Find park details, recreation spaces, and city information.", href: "/parks" },
];

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
          <Link href="/ferry" className="rounded-full bg-blue-500 px-5 py-3 font-medium text-white">
            Explore Ferry Module
          </Link>
          <Link href="/contact" className="rounded-full border border-white/15 px-5 py-3 font-medium text-white/90">
            Contact Support
          </Link>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="card p-6 hover:border-blue-400/40">
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">{card.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
