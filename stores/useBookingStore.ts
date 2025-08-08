import { defineStore } from "pinia";
import { ref } from "vue";

interface Booking {
  id: string;
  roomId: string;
  user: string;
  date: string;
  startTime: string;
  endTime: string;
}

export const useBookingStore = defineStore("booking", () => {
  const bookings = ref<Booking[]>([]);

  const loadBookings = () => {
    const data = localStorage.getItem("bookings");
    bookings.value = data ? JSON.parse(data) : [];
  };

  const saveBookings = () => {
    localStorage.setItem("bookings", JSON.stringify(bookings.value));
  };

  const addBooking = (booking: Booking) => {
    bookings.value.push(booking);
    saveBookings();
  };

  const cancelBooking = (id: string) => {
    bookings.value = bookings.value.filter((b) => b.id !== id);
    saveBookings();
  };

  const isConflict = (room: string, date: string, start: string, end: string) => {
    return bookings.value.some((b) => b.roomId === room && b.date === date && ((start >= b.startTime && start < b.endTime) || (end > b.startTime && end <= b.endTime) || (start <= b.startTime && end >= b.endTime)));
  };

  return { bookings, loadBookings, addBooking, cancelBooking, isConflict, saveBookings };
});
