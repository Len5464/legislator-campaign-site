<script setup lang="ts">
  defineProps<{
    title: string;
    date: string;
  }>();
</script>

<template>
  <article class="hstack gap-4 rounded">
    <slot name="image">
      <img src="@images/img-empty.svg" />
    </slot>
    <div>
      <date class="mb-2 d-block">
        <small class="text-body-secondary">{{ date || "date" }}</small>
      </date>
      <h6 class="mb-2">{{ title || "title" }}</h6>
      <span class="truncate-line-2">
        <slot>default</slot>
      </span>
    </div>
  </article>
</template>
<style scoped lang="scss">
  @import "../../node_modules/bootstrap/scss/bootstrap-utilities.scss";
  :slotted(img) {
    width: 200px;
    height: 135px;
    border-radius: 8px;
    object-fit: cover;
    @include media-breakpoint-down(lg) {
      width: 110px;
      height: 100px;
    }
  }
</style>
