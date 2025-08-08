# 🏢 Mini Booking System for Meeting Rooms

![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Nuxt](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![Pinia](https://img.shields.io/badge/Pinia-FFD02F?style=for-the-badge&logo=pinia&logoColor=000000)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

A modern meeting room booking system built with Vue 3, Nuxt, and Pinia, featuring real-time availability checks and booking management.

## ✨ Features

- 📋 View list of meeting rooms with details (name, capacity, location)
- 📅 Check room availability by selected date
- ⏱️ Book rooms with time conflict validation
- ❌ Cancel existing bookings
- 💾 Data persistence using browser's localStorage

## 🏗️ Project Structure

```
mini-booking-app/
├── app/
│ ├── assets/
│ │ └── css/
│ │     └── main.css # Additional Tailwind CSS styles
│ ├── components/
│ │ ├── Availability.vue # Room availability component
│ │ └── RoomList.vue # Room listing component
│ │ └── BookingForm.vue # UI Test Data component
│ │
│ ├── pages/
│ │ └── index.vue # Main application page
│ └── app.vue # Root application component
│
├── stores/
│ ├── useBookingStore.ts # Pinia store for booking operations
│ └── useRoomStore.ts # Pinia store for room management
│
├── public/ # (Currently unused)
├── .gitignore
├── nuxt.config.ts # Nuxt configuration
├── package.json
├── README.md
└── tsconfig.json # TypeScript configuration
```

## 📦 Pinia Stores

### `useRoomStore.ts`

- Manages meeting room data (CRUD operations)
- Contains room information (name, capacity, location)
- Handles room availability checks

### `useBookingStore.ts`

- Manages booking operations (create, read, delete)
- Handles booking validation to prevent time conflicts
- Stores booking information (user, room, time slots)

## 🚀 Getting Started

### Prerequisites

- Node.js v22.18 or higher
- npm or yarn
- Docker (optional)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build the Docker image
docker build -t mini-booking-system .

# Run the container
docker run -p 3000:3000 mini-booking-system
```

Access the application at http://localhost:3000

### Dependencies

- pinia/nuxt 0.11.2
- tailwindcss/vite 4.1.11
- nuxt 4.0.1
- pinia 3.0.3
- vue 3.5.18
- vue-router 4.5.1

## 🛠️ Tech Stack

- <img src="https://cdn.worldvectorlogo.com/logos/vue-9.svg" width="16" height="16" alt="Vue"/> **Vue 3** - Progressive JavaScript framework
- <img src="https://api.iconify.design/logos:nuxt-icon.svg" width="16" height="16" alt="Nuxt"/> **Nuxt** - Vue framework for server-side rendering
- <img src="https://pinia.vuejs.org/logo.svg" width="16" height="16" alt="Pinia"/> **Pinia** - State management library
- <img src="https://vitejs.dev/logo.svg" width="16" height="16" alt="Vite"/> **Vite** - Next generation frontend tooling
- <img src="https://tailwindcss.com/favicons/favicon-16x16.png" width="16" height="16" alt="Tailwind"/> **Tailwind CSS** - Utility-first CSS framework

- <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="16" height="16" alt="TypeScript"/> **TypeScript** - Typed JavaScript superset

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
Beberapa penyesuaian yang saya buat:

1. Menambahkan ikon teknologi menggunakan badge shields.io dan ikon inline
2. Menyesuaikan struktur folder sesuai proyek Anda
3. Menambahkan penjelasan khusus untuk store Pinia
4. Menyederhanakan bagian instalasi dan penggunaan
5. Menambahkan emoji untuk meningkatkan visual readability
6. Mempertahankan bagian Docker seperti requirement tugas
