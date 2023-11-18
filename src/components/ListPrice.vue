<script setup lang="ts">
  defineProps<{
    title: string;
    price: number;
    sponsor: number;
  }>();
</script>
<template>
  <a
    href="#"
    class="d-block d-lg-flex align-items-center justify-content-between bg-white rounded py-6 px-4"
  >
    <h4 class="">{{ title }}</h4>
    <div class="d-flex align-items-center justify-content-between gap-6">
      <span class="text-dark"
        >NT$<strong class="ms-2 fs-4">{{ price }}</strong></span
      >
      <span class="text-secondary">已有 {{ sponsor }} 人贊助</span>
    </div>
  </a>
</template>
