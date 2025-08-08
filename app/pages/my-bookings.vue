<script setup lang="ts">
import { computed } from "vue";
import { useBookingStore } from "../../stores/useBookingStore";
import { useRoomStore } from "../../stores/useRoomStore";

const bookingStore = useBookingStore();
const roomStore = useRoomStore();

const bookings = computed(() => bookingStore.bookings);
const getRoomName = (roId: string) => {
  const room = roomStore.rooms.find((r) => r.id === roId);
  return room ? room.name : 'Tidak Ditemukan';
}

const handleCancelBooking = (booId: string) => {
  if (confirm('KAMU YAKIN INGIN MEMBATALKAN PESANAN..?')) {
    bookingStore.cancelBooking(booId);
    // alert('Booking berhasil Dibatalkan');
  }
}


</script>
<template>
  <div class="max-w-2xl mx-auto mt-10 p-4">
    <div v-if="bookings.length === 0" class="text-center text-stone-500">
      <h1 class="text-3xl font-medium">TIDAK ADA BOOKING</h1>
    </div>

    <div v-else class="space-y-4">
      <div v-for="booking in bookings" :key="booking.id"
        class="border p-4 rounded shadow flex justify-between items-center">
        <div>
          <p><strong>Room:</strong>{{ getRoomName(booking.roomId) }}</p>
          <p><strong>Date:</strong>{{ booking.date }}</p>
          <p><strong>Time:</strong> {{ booking.startTime }} | {{ booking.endTime }}</p>
        </div>

        <button @click="handleCancelBooking(booking.id)"
          class="bg-rose-400 text-white px-3 py-1 rounded hover:bg-rose-600 cursor-pointer">Cancel Booking</button>
      </div>
    </div>

  </div>
</template>