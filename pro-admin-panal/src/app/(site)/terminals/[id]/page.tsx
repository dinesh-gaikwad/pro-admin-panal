export function generateStaticParams() { return [{ id: "jack-layton" }, { id: "ward" }, { id: "centre" }]; }
export default async function TerminalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <section className="container-pfr py-12"><div className="card p-8"><h1 className="text-3xl font-bold">Terminal {id}</h1></div></section>;
}
