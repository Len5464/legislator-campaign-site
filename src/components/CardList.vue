<script setup lang="ts">
  defineProps<{
    title: string;
    date: string;
    imgURL: string;
  }>();
</script>

<template>
  <div class="hstack gap-4 rounded">
    <img
      :src="imgURL || '/images/img-empty.svg'"
      alt="活動縮圖"
      class="object-fit-cover rounded"
    />

    <div class="">
      <date class="mb-2 d-block">
        <small class="text-body-secondary">{{ date || "date" }}</small>
      </date>
      <h6 class="mb-2">{{ title || "title" }}</h6>
      <span class="truncate-line-2">
        <slot></slot>
      </span>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import "../../node_modules/bootstrap/scss/bootstrap-utilities.scss";
  img {
    width: 200px;
    height: 135px;
    @include media-breakpoint-down(lg) {
      width: 110px;
      height: 100px;
    }
  }
</style>
