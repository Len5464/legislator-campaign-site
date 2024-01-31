<script setup lang="ts">
  import { types } from "@/types/data";

  const props = defineProps<types.Event>();
</script>

<template>
  <article class="hstack gap-4 rounded">
    <img
      :src="props.imgUrl"
      alt="活動照片"
    />
    <div class="align-self-start">
      <time class="mb-2 d-block">
        <small class="text-body-secondary">{{ props.date }}</small>
      </time>
      <h6 class="mb-2">{{ props.title }}</h6>
      <span class="truncate-line-2">
        {{ props.content }}
      </span>
    </div>
  </article>
</template>
<style scoped lang="scss">
  @import "../../node_modules/bootstrap/scss/bootstrap-utilities.scss";
  img {
    width: 200px;
    height: 135px;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: 16/9;
    @include media-breakpoint-down(lg) {
      width: 110px;
      height: 100px;
    }
  }
</style>
