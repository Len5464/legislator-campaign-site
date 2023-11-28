<script setup lang="ts">
  import IconFB from "@/assets/icons/IconFB.vue";
  import IconIG from "@/assets/icons/IconIG.vue";
  import IconLine from "@/assets/icons/IconLine.vue";
  import IconTwitter from "@/assets/icons/IconTwitter.vue";

  defineProps<{
    show: boolean;
  }>();
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="mask"
    >
      <div class="modal-container">
        <header class="header">
          <h2 class="">Title</h2>
          <button
            class="close-button material-symbols-rounded"
            role="button"
            @click="$emit('close')"
          >
            cancel
          </button>
        </header>
        <main class="body">
          <div class="side">
            <img
              class="image"
              src="@/assets/images/last-event-3.png"
              alt="活動縮圖"
            />
            <p>參與台北寵物論壇，爭取貓咪友善環境</p>
            <ul class="links">
              分享
              <li>
                <a href="#">
                  <IconFB></IconFB>
                </a>
              </li>
              <li>
                <a href="#">
                  <IconIG></IconIG>
                </a>
              </li>
              <li>
                <a href="#">
                  <IconLine></IconLine>
                </a>
              </li>
              <li>
                <a href="#">
                  <IconTwitter></IconTwitter>
                </a>
              </li>
            </ul>
          </div>
          <article class="main">
            <h2 class="title">參與台北寵物論壇，爭取貓咪友善環境</h2>
            <small class="date">
              <date>2023/12/24</date>
            </small>
            <p class="content">
              炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
              VIP 休憩空間。
            </p>
            <div class="others">
              <h6 class="others-title">更多活動</h6>
              <ul class="others-list">
                <li>
                  <a
                    href="#"
                    class="others-link"
                  >
                    <img
                      src="@/assets/images/last-event-1.png"
                      alt=""
                    />
                    掃街模式開啟！帶著你的貓耳，來和我一起走！
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="others-link"
                  >
                    <img
                      src="@/assets/images/last-event-2.png"
                      alt=""
                    />
                    收容所模特兒大比拼！
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </main>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
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
    height: 80vh;
    height: 80svh;
    margin: auto;
    padding: 48px;
    padding-top: 24px;
    background-color: #fff;
    border-radius: 24px;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  @media screen and (max-width: 540px) {
    .modal-container {
      width: 100vw;
      height: 100vh;
      height: 100svh;
      padding: 16px;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding-bottom: 24px;
  }
  @media screen and (max-width: 540px) {
    .header {
      padding-bottom: 8px;
    }
  }

  .close-button {
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: none;
  }
  .body {
    height: 100%;
    padding-top: 8px;
    display: flex;
    align-items: stretch;
    gap: var(--spacer-32, 32px);
    overflow-y: scroll;
  }
  @media screen and (max-width: 1140px) {
    .body {
      flex-direction: column;
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .side {
    max-width: 507px;
  }
  .date {
    color: var(--gray-500, #94a3b8);
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  .image {
    margin-bottom: 16px;
    width: 100%;
  }

  .links {
    list-style: none;
    padding-left: 0;
    display: flex;
    align-items: center;
    gap: var(--spacer-16, 16px);
  }

  .others {
    padding: var(--spacer-16, 16px);
    margin-bottom: 48px;
    border-radius: var(--spacer-12, 12px);
    background: var(--gray-50, #f8fafc);
  }
  .others-list {
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacer-16, 16px);
  }
  .others-link {
    color: var(--text-primary-700, #334155);
    width: 245px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .others-title {
    font-weight: 600;
    margin-bottom: 16px;
  }
  .title {
    color: var(--primary, #da7d4a);
    font-size: 32px;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 8px;
  }
  .content {
    margin-bottom: 96px;
  }

  /*
 * 对于 transition="modal" 的元素来说
 * 当通过 Vue.js 切换它们的可见性时
 * 以下样式会被自动应用。
 *
 * 你可以简单地通过编辑这些样式
 * 来体验该模态框的过渡效果。
 */
  .modal-enter-from {
    opacity: 0;
  }

  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
</style>
