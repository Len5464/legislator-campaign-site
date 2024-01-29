<script setup lang="ts">
  defineProps<{
    title: string;
    price: number;
    sponsor: number;
  }>();
</script>
<template>
  <div class="d-block d-lg-flex align-items-center justify-content-between py-6 px-4">
    <h5 class="fs-xl-4 text-primary text-nowrap me-4">{{ title }}</h5>
    <div class="d-flex align-items-center text-dark">
      NT$
      <strong class="ms-2 fs-4">{{ price }}</strong>
      <small class="text-secondary ms-auto ms-lg-10 text-nowrap">已有 {{ sponsor }} 人贊助</small>
    </div>
  </div>
</template>
