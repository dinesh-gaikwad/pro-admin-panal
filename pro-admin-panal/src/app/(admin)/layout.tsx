import Link from "next/link";
const items = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/ferries", label: "Ferries" },
  { href: "/admin/routes", label: "Routes" },
  { href: "/admin/alerts", label: "Alerts" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/users", label: "Users" },
];
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container-pfr grid gap-6 py-8 lg:grid-cols-[240px_1fr]">
        <aside className="card h-fit p-4">
          <h2 className="px-2 pb-4 text-lg font-semibold">Admin Panel</h2>
          <nav className="grid gap-2">
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}
