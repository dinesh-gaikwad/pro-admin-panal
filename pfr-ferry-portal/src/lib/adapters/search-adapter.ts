import { alerts, bookings, ferryRoutes } from "@/data/domain";

export async function searchAll(query: string) {
  const q = query.trim().toLowerCase();
  return {
    ferries: ferryRoutes.filter((item) => [item.id, item.name, item.terminal, item.status].join(" ").toLowerCase().includes(q)),
    alerts: alerts.filter((item) => [item.id, item.title, item.message, item.severity].join(" ").toLowerCase().includes(q)),
    bookings: bookings.filter((item) => [item.id, item.passengerName, item.routeId, item.status].join(" ").toLowerCase().includes(q)),
  };
}
