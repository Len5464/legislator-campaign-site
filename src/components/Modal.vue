<script setup lang="ts">
  import { watchEffect } from "vue";

  const props = defineProps<{ title: string; show: boolean }>();
  const emit = defineEmits(["close"]);
  const close = (event: Event) => {
    if (event.target === event.currentTarget) emit("close");
  };
  watchEffect(() => {
    if (props.show) document.body.style.overflow = "hidden"; // 禁止背景頁面捲動
    else document.body.style.overflow = "";
  });
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        class="mask"
        @click="close"
      >
        <div class="modal-container">
          <header class="header">
            <h2>
              {{ props.title }}
            </h2>
            <button
              class="close-button material-symbols-rounded"
              role="button"
              @click="close"
            >
              cancel
            </button>
          </header>
          <main class="body">
            <slot>loading</slot>
          </main>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
  .mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    padding: 48px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
    @media screen and (max-width: 992px) {
      padding: 0;
    }
  }

  .modal-container {
    background-color: #fff;
    border-radius: 24px;
    width: 80vw;
    max-width: 1400px;
    height: 100%;
    margin: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    @media screen and (max-width: 992px) {
      width: 100vw;
      border-radius: 0px;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 24px 48px;
    @media screen and (max-width: 540px) {
      padding: 16px 16px 8px 16px;
    }
  }

  .close-button {
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: none;
    color: #334155;
  }
  .body {
    padding: 8px 48px 48px 48px;
    flex: 1 1 auto;
    overflow-y: scroll;
    @media screen and (max-width: 1140px) {
      padding: 8px 16px 16px 16px;
    }
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    .modal-container {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }
</style>
