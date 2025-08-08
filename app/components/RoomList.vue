<script setup lang="ts">
import { useRoomStore } from '../../stores/useRoomStore'

const roomStore = useRoomStore()
const rooms = roomStore.rooms

</script>

<template>
  <div>
    <h2 class="text-2xl text-center font-bold mb-4">Daftar Ruang Meeting</h2>
    <div v-for="room in rooms" :key="room.id" class="border p-4 rounded mb-4">
      <p><strong>Nama: </strong>{{ room.name }}</p>
      <p><strong>Kapasitas: </strong>{{ room.capacity }}</p>
      <p><strong>Lokasi: </strong>{{ room.location }}</p>
    </div>
  </div>
</template>
