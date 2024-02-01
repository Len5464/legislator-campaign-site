<script setup lang="ts">
  import { useBoundingCheck } from "@/helpers/boundingChecker";

  const isHeaderShown = useBoundingCheck("#header");
  const isFooterShown = useBoundingCheck("#footer");
</script>

<template>
  <nav class="navbar bg-white-blur position-fixed w-100 px-9 py-4 z-1">
    <div class="container-fluid">
      <a
        class="navbar-brand hstack gap-2"
        href="#"
      >
        <img
          src="@icon/logo.svg"
          alt="Logo"
          width="52"
          height="43"
          class="d-inline-block align-text-top"
        />
        <h4 class="text-primary mb-0">喵立翰 Miao Li-Han</h4>
      </a>
      <ul class="gap-4 list-unstyled d-none d-xl-flex">
        <li class="p-2">
          <a
            class="link-dark"
            href="#advocate"
            >候選人主張</a
          >
        </li>
        <li class="p-2">
          <a
            class="link-dark"
            href="#latestEvents"
            >最新活動</a
          >
        </li>
        <li class="p-2">
          <a
            class="link-dark"
            href="#policyIssues"
            >政策議題</a
          >
        </li>
        <li class="p-2">
          <a
            class="link-dark"
            href="#callToAction"
            >小額捐款</a
          >
        </li>
        <li class="p-2">
          <a
            class="link-dark"
            href="#callToAction"
            >民眾服務信箱</a
          >
        </li>
      </ul>
      <!-- social links -->
      <ul class="d-none d-sm-flex list-unstyled gap-4">
        <li>
          <a
            class="icon icon-fb"
            href="#"
          >
          </a>
        </li>
        <li>
          <a
            class="icon icon-ig"
            href="#"
          >
          </a>
        </li>
        <li>
          <a
            class="icon icon-yt"
            href="#"
          >
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <Transition name="slide">
    <ul
      v-show="!isHeaderShown && !isFooterShown"
      class="w-100 hstack py-4 justify-content-center gap-4 list-unstyled fs-10px bg-white-blur position-fixed bottom-0 z-2 d-xl-none"
    >
      <li>
        <a
          href="#advocate"
          class="d-flex flex-column align-items-center link-dark gap-1"
        >
          <img
            width="24"
            height="24"
            src="@icon/icon-user.svg"
            alt="候選人主張"
          />
          候選人主張
        </a>
      </li>
      <li>
        <a
          href="#latestEvents"
          class="d-flex flex-column align-items-center justify-content-center link-dark gap-1"
        >
          <img
            width="24"
            height="24"
            src="@icon/icon-topic.svg"
            alt="最新活動"
          />
          最新活動
        </a>
      </li>
      <li>
        <a
          href="#policyIssues"
          class="d-flex flex-column align-items-center justify-content-center link-dark gap-1"
        >
          <img
            width="24"
            height="24"
            src="@icon/icon-event.svg"
            alt="政策議題"
          />
          政策議題
        </a>
      </li>
      <li>
        <a
          href="#callToAction"
          class="d-flex flex-column align-items-center justify-content-center link-dark gap-1"
        >
          <img
            width="24"
            height="24"
            src="@icon/icon-donate.svg"
            alt="小額捐款"
          />
          小額捐款
        </a>
      </li>
      <li>
        <a
          href="#callToAction"
          class="d-flex flex-column align-items-center justify-content-center link-dark gap-1"
        >
          <img
            width="24"
            height="24"
            src="@icon/icon-contact.svg"
            alt="服務信箱"
          />
          服務信箱
        </a>
      </li>
    </ul>
  </Transition>
</template>
<style scoped>
  .bg-white-blur {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(100%);
  }
</style>
