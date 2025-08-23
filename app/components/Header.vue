<template>
  <header class="flex items-center justify-between px-6 py-4 bg-violet-700 text-white shadow-md">
    <!-- Logo / Title -->
    <h1 class="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
      StoloSys
    </h1>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex space-x-6">
      <NuxtLink to="/" class="hover:text-gray-200">Home</NuxtLink>
      <NuxtLink to="/cars" class="hover:text-gray-200">Vehicles</NuxtLink>
      <NuxtLink to="/reports" class="hover:text-gray-200">Reports</NuxtLink>
      <NuxtLink to="/settings" class="hover:text-gray-200">Settings</NuxtLink>
    </nav>

    <!-- Mobile Burger -->
    <button 
      class="md:hidden focus:outline-none" 
      aria-label="Toggle menu"
      @click="isOpen = !isOpen"
    >
      <svg
v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg
v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </header>

  <!-- Mobile Menu -->
  <div v-if="isOpen" class="md:hidden bg-violet-600 text-white px-6 py-4 space-y-4">
    <NuxtLink to="/" class="block hover:text-gray-200" @click="isOpen=false">Home</NuxtLink>
    <NuxtLink to="/cars" class="block hover:text-gray-200" @click="isOpen=false">Vehicles</NuxtLink>
    <NuxtLink to="/reports" class="block hover:text-gray-200" @click="isOpen=false">Reports</NuxtLink>
    <NuxtLink to="/settings" class="block hover:text-gray-200" @click="isOpen=false">Settings</NuxtLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

