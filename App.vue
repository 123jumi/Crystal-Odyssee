<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="d-flex flex-column overflow-x-hidden">
    <header>
      <nav-bar />
    </header>
    <main class="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
      <router-view />
    </main>
    <footer>
     
    </footer>
  </div>
</template>
