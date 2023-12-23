<script setup lang="ts">
  defineProps<{
    imgUrl?: string;
    title?: string;
    date?: string;
    content?: string;
  }>();
</script>
<template>
  <article>
    <header
      v-if="imgUrl"
      class="mb-4"
    >
      <img
        :src="imgUrl"
        alt="活動照片"
      />
    </header>
    <time
      v-if="date"
      class="text-secondary mb-2 d-block"
    >
      <small>{{ date }}</small>
    </time>
    <h5 class="mb-2">{{ title ?? "no data" }}</h5>
    {{ content ?? "no data" }}
  </article>
</template>
<style scoped>
  img {
    width: 100%;
    border-radius: 24px;
    object-fit: cover;
    aspect-ratio: 16/10;
  }
</style>
