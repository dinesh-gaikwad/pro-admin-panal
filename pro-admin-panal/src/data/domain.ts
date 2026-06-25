export type FerryRoute = {
  id: string;
  name: string;
  terminal: string;
  status: "On time" | "Delayed" | "Cancelled";
  capacity: number;
  nextDeparture: string;
};

export type AlertItem = {
  id: string;
  title: string;
  severity: "info" | "warning" | "critical";
  message: string;
  updatedAt: string;
};

export type BookingItem = {
  id: string;
  passengerName: string;
  routeId: string;
  date: string;
  status: "Pending" | "Confirmed" | "Cancelled";
};

export const ferryRoutes: FerryRoute[] = [
  { id: "ward", name: "Ward's Island", terminal: "Jack Layton Ferry Terminal", status: "On time", capacity: 342, nextDeparture: "08:30" },
  { id: "centre", name: "Centre Island", terminal: "Jack Layton Ferry Terminal", status: "Delayed", capacity: 342, nextDeparture: "09:00" },
  { id: "hanlan", name: "Hanlan's Point", terminal: "Jack Layton Ferry Terminal", status: "On time", capacity: 250, nextDeparture: "09:30" },
];

export const alerts: AlertItem[] = [
  { id: "a1", title: "Peak hour advisory", severity: "info", message: "High passenger volume expected after 4:30 PM.", updatedAt: "2026-06-25T14:10:00Z" },
  { id: "a2", title: "Centre Island delay", severity: "warning", message: "Departures running 15 minutes late.", updatedAt: "2026-06-25T14:22:00Z" },
  { id: "a3", title: "Weather impact", severity: "critical", message: "Wind conditions may affect sailings.", updatedAt: "2026-06-25T14:30:00Z" },
];

export const bookings: BookingItem[] = [
  { id: "BK-1001", passengerName: "Aman", routeId: "ward", date: "2026-06-26", status: "Confirmed" },
  { id: "BK-1002", passengerName: "Riya", routeId: "centre", date: "2026-06-26", status: "Pending" },
  { id: "BK-1003", passengerName: "John", routeId: "hanlan", date: "2026-06-27", status: "Cancelled" },
];
