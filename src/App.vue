<template>
  <main class="w-full h-screen bg-black">
    <Header />
    <Home />
    <About />
    <Projects />
    <Sidebar />
    <Contact />
    <Hidden />
  </main>
</template>

<script setup lang="ts">
import Sidebar from '@/components/sidebar.vue'
import Header from '@/components/header.vue'
import Home from '@/sections/home.vue'
import About from '@/sections/about_me.vue'
import Projects from '@/sections/my_projects.vue'
import Contact from '@/sections/contact_me.vue'
import Hidden from '@/sections/hidden_images.vue'
</script>

<script lang="ts">
export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    Home,
    About,
    Projects,
    Contact
  }
}
</script>

<style>
@import '@/assets/css/output.css';

::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #7c3aed;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #7c3aed;
}
</style>
