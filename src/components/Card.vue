<script setup lang="ts">
  defineProps<{
    title: string;
    date: string;
  }>();
</script>
<template>
  <article>
    <header class="mb-4">
      <slot name="image">
        <img src="@images/img-empty.svg" />
      </slot>
    </header>
    <date class="text-secondary mb-2 d-block">
      <small>{{ date || "text" }}</small>
    </date>
    <h5 class="mb-2">{{ title || "title" }}</h5>
    <slot>slot default</slot>
  </article>
</template>
<style scoped>
  :slotted(img) {
    width: 100%;
    border-radius: 24px;
    object-fit: cover;
  }
</style>
