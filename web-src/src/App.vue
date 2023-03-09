<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template >
  <div class="h-full w-full flex flex-col font-sans">
    <NavBar class="h-1/15" />
    <RouterView />
  </div>
</template>
