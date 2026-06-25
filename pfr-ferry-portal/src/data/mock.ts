export const ferryRoutes = [
  { id: "ward", name: "Ward's Island", status: "On time", capacity: 342, terminal: "Jack Layton Ferry Terminal" },
  { id: "centre", name: "Centre Island", status: "Delayed", capacity: 342, terminal: "Jack Layton Ferry Terminal" },
  { id: "hanlan", name: "Hanlan's Point", status: "On time", capacity: 250, terminal: "Jack Layton Ferry Terminal" },
];

export const alerts = [
  { id: 1, title: "Peak hour advisory", level: "info", text: "Expect longer wait times after 4:30 PM." },
  { id: 2, title: "Route delay", level: "warning", text: "Centre Island departures delayed by 15 minutes." },
  { id: 3, title: "Weather watch", level: "danger", text: "Service may change based on wind conditions." },
];

export const bookings = [
  { id: "BK-1001", route: "Ward's Island", time: "08:30", status: "Confirmed" },
  { id: "BK-1002", route: "Centre Island", time: "10:00", status: "Pending" },
  { id: "BK-1003", route: "Hanlan's Point", time: "12:15", status: "Checked in" },
];
