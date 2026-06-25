import { ferryRoutes, type FerryRoute } from "@/data/domain";
export async function getFerries(): Promise<FerryRoute[]> { return ferryRoutes; }
export async function getFerryById(id: string): Promise<FerryRoute | null> {
  return ferryRoutes.find((item) => item.id === id) ?? null;
}
