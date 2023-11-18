<script setup lang="ts">
  defineProps<{
    imgURL: string;
    title: string;
    date: string;
  }>();
</script>
<template>
  <article>
    <img
      class="w-100 rounded-4 object-fit-cover mb-4"
      :src="imgURL || '/images/img-empty.svg'"
      alt="活動縮圖"
    />
    <date class="text-secondary mb-2 d-block">
      <small>{{ date || "text" }}</small>
    </date>
    <h5 class="mb-2">{{ title || "title" }}</h5>
    <slot></slot>
  </article>
</template>
