import Link from "next/link";
import { expandedPages } from "@/data/pages";
export default function SiteIndexPage() {
  return (
    <section className="container-pfr py-12">
      <div className="card p-8">
        <h1 className="text-3xl font-bold">Project Expansion Map</h1>
        <p className="mt-3 text-white/70">This page helps you track the 50+ page build plan.</p>
        <div className="mt-6 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
          {expandedPages.map((name) => <div key={name} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">{name}</div>)}
        </div>
        <div className="mt-8"><Link href="/admin/dashboard" className="rounded-full bg-blue-500 px-5 py-3 font-medium text-white">Open Admin</Link></div>
      </div>
    </section>
  );
}
