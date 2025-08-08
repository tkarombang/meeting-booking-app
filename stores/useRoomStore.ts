import { defineStore } from "pinia";
import { ref } from "vue";

interface Room {
  id: string;
  name: string;
  capacity: number;
  location: string;
}

export const useRoomStore = defineStore("room", () => {
  const rooms = ref<Room[]>([
    { id: "R-01", name: "Room A", capacity: 6, location: "Lantai 1" },
    { id: "R-02", name: "Room B", capacity: 10, location: "Lantai 2" },
    { id: "R-03", name: "Room C", capacity: 4, location: "Lantai 3" },
  ]);

  return { rooms };
});
