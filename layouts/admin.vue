<script setup>
import AdminNavbar from '../components/navbar/AdminNavbar.vue';
import AdminSidebar from '../components/sidebar/AdminSidebar.vue';


</script>

<template>
  <div>
    <AdminSidebar />
    <AdminNavbar />
    <transition name="slide-panel" mode="out-in">
      <slot />
    </transition>
  </div>
</template>

<style>
.slide-panel-enter-active,
.slide-panel-leave-active {
  transition: all 0.3s ease;
}

.slide-panel-enter-from,
.slide-panel-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
