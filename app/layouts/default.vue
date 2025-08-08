<template>
  <div>
    <header class="bg-stone-800 text-stone-200 p-4">
      <nav class="max-w-6xl mx-auto flex justify between items-center">
        <h1 class="text-lg font-bold mr-5">Mini Booking App</h1>
        <div class="space-x-5">
          <NuxtLink to="/" class="hover:text-stone-400">Home</NuxtLink>
          <NuxtLink to="/my-bookings" class="hover:text-stone-400">My Bookings</NuxtLink>
        </div>
      </nav>
    </header>

    <main class="max-w-6xl mx-auto p-4">
      <slot />
    </main>


    <footer class="bg-stone-100 text-center p-4 text-sm text-stone-600 mt-64">
      &copy; {{ new Date().getFullYear() }} Mini Booking System. All rights reserved. | Muhammad Azwar Anas
    </footer>
  </div>
</template>