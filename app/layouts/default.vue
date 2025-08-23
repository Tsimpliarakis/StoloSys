<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 px-6 py-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>
