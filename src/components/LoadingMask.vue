<script setup lang="ts">
  defineProps<{ show: boolean }>();
</script>
<template>
  <div
    v-show="show"
    class="loading-mask"
  >
    <img
      class="loading-icon"
      src="/images/loading.gif"
      alt="loading"
    />
  </div>
</template>
<style scoped>
  .loading-mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    background-color: white;
    z-index: 2;
  }
  .loading-icon {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
