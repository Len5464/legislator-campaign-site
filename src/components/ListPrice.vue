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
    class="d-block d-lg-flex align-items-center justify-content-between bg-white rounded border border-secondary-light border-primary-hover py-6 px-4"
  >
    <h4 class="">{{ title }}</h4>
    <div class="d-flex align-items-center text-dark">
      NT$
      <strong class="ms-2 fs-4">{{ price }}</strong>
      <small class="text-secondary ms-10">已有 {{ sponsor }} 人贊助</small>
    </div>
  </a>
</template>
