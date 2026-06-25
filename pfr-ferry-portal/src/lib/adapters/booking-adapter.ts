import { bookings, type BookingItem } from "@/data/domain";

export async function getBookings(): Promise<BookingItem[]> {
  return bookings;
}

export async function getBookingById(id: string): Promise<BookingItem | null> {
  return bookings.find((item) => item.id === id) ?? null;
}
