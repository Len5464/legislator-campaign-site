<script setup lang="ts">
  import { onMounted, ref } from "vue";
  defineProps<{ message: string }>();
  const emit = defineEmits(["close"]);
  const isReady = ref(false);

  function onclick(event: Event) {
    event.preventDefault();
    emit("close");
  }
  onMounted(() => {
    isReady.value = true;
  });
</script>
<template>
  <div class="vstack align-items-center justify-content-center gap-8">
    <h3>{{ message }}</h3>
    <Transition
      name="flip"
      type="animation"
    >
      <div
        v-show="isReady"
        class="position-relative"
      >
        <img
          src="@/assets/icons/paw.svg"
          :alt="message"
          width="187"
        />
        <span class="material-symbols-rounded position-absolute top-25 start-50 translate-middle text-white fs-52px">
          check_circle
        </span>
      </div>
    </Transition>
    <a
      href="#"
      class="btn btn-secondary-light rounded-pill px-24"
      @click="onclick"
      >關閉
    </a>
  </div>
</template>
<style>
  .flip-enter-active {
    animation: flipInY 1.2s;
  }
</style>
