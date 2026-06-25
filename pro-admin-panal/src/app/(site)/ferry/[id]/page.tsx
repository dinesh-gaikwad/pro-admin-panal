import type { Metadata } from "next";
import { ferries } from "@/data/ferries";
import { notFound } from "next/navigation";

export function generateStaticParams() { return ferries.map((item) => ({ id: item.id })); }

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const ferry = ferries.find((item) => item.id === id);
  return { title: ferry ? ferry.name : "Ferry detail", description: ferry ? `Live details for ${ferry.name}` : "Ferry detail page" };
}

export default async function FerryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ferry = ferries.find((item) => item.id === id);
  if (!ferry) return notFound();
  return (
    <section className="container-pfr py-12">
      <div className="card p-8">
        <h1 className="text-3xl font-bold">{ferry.name}</h1>
        <p className="mt-3 text-white/70">Route: {ferry.route}</p>
        <p className="mt-2 text-white/70">Status: {ferry.status}</p>
        <p className="mt-2 text-white/70">Deck: {ferry.deck}</p>
      </div>
    </section>
  );
}
