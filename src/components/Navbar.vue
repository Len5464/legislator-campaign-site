<template>
  <nav class="navbar bg-white-blur position-fixed w-100 px-9 py-4 z-1">
    <div class="container-fluid">
      <a
        class="navbar-brand hstack gap-2"
        href="#"
      >
        <img
          src="@images/logo.svg"
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
            href="#"
            >小額捐款</a
          >
        </li>
        <li class="p-2">
          <a
            class="link-dark"
            href="#"
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
  <ul
    class="w-100 hstack border py-4 justify-content-center gap-4 list-unstyled fs-10px bg-white-blur position-fixed bottom-0 z-1 d-xl-none"
  >
    <li>
      <a
        href="#advocate"
        class="d-flex flex-column align-items-center link-dark gap-1"
      >
        <img
          width="24"
          height="24"
          src="@images/icon-user.svg"
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
          src="@images/icon-topic.svg"
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
          src="@images/icon-event.svg"
          alt="政策議題"
        />
        政策議題
      </a>
    </li>
    <li>
      <a
        href="#"
        class="d-flex flex-column align-items-center justify-content-center link-dark gap-1"
      >
        <img
          width="24"
          height="24"
          src="@images/icon-donate.svg"
          alt="小額捐款"
        />
        小額捐款
      </a>
    </li>
    <li>
      <a
        href="#"
        class="d-flex flex-column align-items-center justify-content-center link-dark gap-1"
      >
        <img
          width="24"
          height="24"
          src="@images/icon-contact.svg"
          alt="服務信箱"
        />
        服務信箱
      </a>
    </li>
  </ul>
</template>
<style scoped>
  .bg-white-blur {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
  }
</style>
