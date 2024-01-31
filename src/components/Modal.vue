<script setup lang="ts">
  const props = defineProps<{ title: string; show: boolean }>();
  const emit = defineEmits(["close"]);
  const close = (event: Event) => {
    if (event.target === event.currentTarget) emit("close");
  };
</script>

<template>
  <Teleport to="body">
    <Transition
      name="modal"
      mode="out-in"
    >
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
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
  }

  .modal-container {
    width: 80vw;
    max-width: 1400px;
    height: calc(100vh - 48px);
    margin: auto;
    background-color: #fff;
    border-radius: 24px;
    transition: all 0.3s ease;
    overflow-y: scroll;
    @media screen and (max-width: 540px) {
      width: 100vw;
      height: 100vh;
      height: 100svh;
      border-radius: 0px;
    }
  }
  .header {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 24px 48px;
    position: sticky;
    top: 0;
    @media screen and (max-width: 540px) {
      padding: 16px 16px 8px 16px;
    }
  }

  .close-button {
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: none;
  }
  .body {
    display: flex;
    align-items: stretch;
    padding: 8px 48px 48px 48px;
    gap: 32px;
    @media screen and (max-width: 1140px) {
      padding: 8px 16px 16px 16px;
      flex-direction: column;
    }
  }

  .modal-enter-from,
  .modal-leave-to {
    .modal-container {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }
</style>
