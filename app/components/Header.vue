<template>
  <header class="flex items-center justify-between px-6 py-4 bg-blue-600 text-white shadow-md">


    <!-- Desktop Nav -->
    <nav class="hidden md:flex space-x-6">
<NuxtLink to="/" class="flex items-center space-x-1 hover:text-gray-200">
  <UIcon name="i-heroicons-home" class="w-5 h-5" />
  <span>Home</span>
</NuxtLink>

<NuxtLink to="/vehicles" class="flex items-center space-x-1 hover:text-gray-200">
  <UIcon name="i-heroicons-truck" class="w-5 h-5" />
  <span>Vehicles</span>
</NuxtLink>

<NuxtLink to="/reports" class="flex items-center space-x-1 hover:text-gray-200">
  <UIcon name="i-heroicons-chart-bar" class="w-5 h-5" />
  <span>Reports</span>
</NuxtLink>

<NuxtLink to="/settings" class="flex items-center space-x-1 hover:text-gray-200">
  <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5" />
  <span>Settings</span>
</NuxtLink>
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

        <!-- Logo / Title -->
  <NuxtLink to="/" class="text-2xl font-bold flex-grow text-center md:text-right">
    StoloSys
  </NuxtLink>

  </header>

  <!-- Mobile Menu -->
  <div v-if="isOpen" class="md:hidden bg-blue-500 text-white px-6 py-4 space-y-4">
<NuxtLink to="/" class="flex items-center space-x-1 hover:text-gray-200" @click="isOpen = false">
  <UIcon name="i-heroicons-home" class="w-5 h-5" />
  <span>Home</span>
</NuxtLink>

<NuxtLink to="/vehicles" class="flex items-center space-x-1 hover:text-gray-200" @click="isOpen = false">
  <UIcon name="i-heroicons-truck" class="w-5 h-5" />
  <span>Vehicles</span>
</NuxtLink>

<NuxtLink to="/reports" class="flex items-center space-x-1 hover:text-gray-200" @click="isOpen = false">
  <UIcon name="i-heroicons-chart-bar" class="w-5 h-5" />
  <span>Reports</span>
</NuxtLink>

<NuxtLink to="/settings" class="flex items-center space-x-1 hover:text-gray-200" @click="isOpen = false">
  <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5" />
  <span>Settings</span>
</NuxtLink>
  </div>
  
</template>

<script setup>
const isOpen = ref(false)
</script>

