import { alerts, type AlertItem } from "@/data/domain";
export async function getAlerts(): Promise<AlertItem[]> { return alerts; }
export async function getAlertById(id: string): Promise<AlertItem | null> {
  return alerts.find((item) => item.id === id) ?? null;
}
