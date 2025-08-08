<script setup lang="ts">
import { ref } from 'vue';
import { useRoomStore } from "../../stores/useRoomStore";
import { useBookingStore } from "../../stores/useBookingStore";

const roomStore = useRoomStore();
const bookingStore = useBookingStore();

const rooms = roomStore.rooms;

const form = ref({
  date: '',
  roomId: '',
  user: '',
  startTime: '',
  endTime: ''
})

const message = ref('');
const messageClass = ref('');

const submitBooking = () => {
  const newBooking = {
    id: Date.now().toString(),
    ...form.value,
  }

  const isConflict = bookingStore.bookings.some((b) => {
    return (
      b.date === newBooking.date &&
      b.roomId === newBooking.roomId &&
      (
        (newBooking.startTime >= b.startTime && newBooking.startTime < b.endTime) ||
        (newBooking.startTime > b.endTime && newBooking.endTime <= b.endTime) ||
        (newBooking.startTime <= b.startTime && newBooking.endTime >= b.endTime)
      )
    )
  })

  if (isConflict) {
    message.value = 'Booking Gagal: Waktu tersebut  sudah dibooking orang lain.'
    messageClass.value = 'text-rose-600 font-semibold'
    return;
  }

  bookingStore.addBooking(newBooking);
  message.value = 'Booking Berhasil! Yeeeeh'
  messageClass.value = 'text-green-600 font-semibold'

  form.value = {
    date: '',
    roomId: '',
    user: '',
    startTime: '',
    endTime: ''
  }
}


</script>

<template>
  <div class="mt-8">
    <h2 class="text-xl font-bold mb-4">Form Booking Ruangan</h2>

    <form @submit.prevent="submitBooking" class="space-y-4">
      <div>
        <label class="block font-medium">Tanggal</label>
        <input v-model="form.date" type="date" class="border px-3 py-2 rounded w-full" required />
      </div>

      <div>
        <label class="block font-medium">Pilih Ruangan</label>
        <select v-model="form.roomId" class="border px-3 py-4  rounded w-full text-stone-700" required>
          <option disabled value="">--Pilih Ruangan</option>
          <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name }} | {{ room.capacity }} | {{
            room.location }}</option>
        </select>
      </div>

      <div>
        <label class="block font-medium">Nama Anda</label>
        <input v-model="form.user" type="text" class="border px-3 py-2 rounded w-full" required />
      </div>

      <div class="flex gap-4">
        <div class="flex-1">
          <label class="block font-medium">Jam Mulai</label>
          <input v-model="form.startTime" type="time" class="border px-3 py-2 rounded w-full" required />
        </div>
        <div class="flex-1">
          <label class="block font-medium">Jam Selesai</label>
          <input v-model="form.endTime" type="time" class="border px-3 py-2 rounded w-full" required />
        </div>
      </div>

      <div>
        <button type="submit"
          class="bg-slate-500 text-stone-800 px-4 py-2 rounded hover:bg-slate-300 cursor-pointer">Booking
          Now</button>
      </div>
    </form>

    <p v-if="message" :class="messageClass" class="mt-4 font-medium">{{ message }}</p>

  </div>
</template>