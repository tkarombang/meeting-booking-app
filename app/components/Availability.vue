<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoomStore } from '../../stores/useRoomStore'
import { useBookingStore } from '../../stores/useBookingStore';

const roomStore = useRoomStore();
const bookingStore = useBookingStore();

onMounted(() => {
  bookingStore.loadBookings();
  const dummyBookings = [
    {
      id: '1',
      roomId: 'R-01', // Pastikan ID ini cocok dengan ID ruangan yang ada
      user: 'Andi Nugraha',
      date: '2025-08-08',
      startTime: '09:00',
      endTime: '10:00'
    },
    {
      id: '2',
      roomId: 'R-02',
      user: 'Budi Santoso',
      date: '2025-08-08',
      startTime: '10:30',
      endTime: '12:00'
    },
    {
      id: '3',
      roomId: 'R-01',
      user: 'Citra Kirana',
      date: '2025-08-09',
      startTime: '14:00',
      endTime: '15:30'
    }
  ];

  localStorage.setItem('bookings', JSON.stringify(dummyBookings));

  console.log('Bookings:', bookingStore.bookings);
})


const rooms = roomStore.rooms;
const selectedDate = ref('')

const checkAvailability = (roId: string): boolean => {
  return bookingStore.bookings.some(
    (b) => b.date === selectedDate.value && b.roomId === roId
  )
}

const statusClass = (roId: string) => checkAvailability(roId) ? 'text-rose-600 font-semibold' : 'text-green-600 font-semibold'

</script>
<template>
  <div class="mt-8">
    <h2 class="text-xl font-bold mb-4">Cek Ketersediaan Ruangan</h2>

    <!-- TANGGAL -->
    <input type="date" v-model="selectedDate" class="border px-3 py-2 rounded mb-6" />

    <!-- DAFTAR RUNAG DAN STATUS -->
    <div v-for="room in rooms" :key="room.id" class="border p-4 rounded mb-4">
      <p><strong>{{ room.name }}</strong> {{ room.capacity }} org - {{ room.location }}</p>
      <p>Status: <span :class="statusClass(room.id)"> {{ checkAvailability(room.id) ? 'Booked' : 'Available' }}</span>
      </p>
    </div>

  </div>
</template>