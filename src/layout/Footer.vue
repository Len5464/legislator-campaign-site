<script setup lang="ts">
  import IconFB from "@/assets/icons/IconFB.vue";
  import IconIG from "@/assets/icons/IconIG.vue";
  import IconYT from "@/assets/icons/IconYT.vue";
</script>
<template>
  <footer
    id="footer"
    class="bg-primary-light py-16"
  >
    <div class="container grid">
      <div class="g-col-12 g-col-lg-6 vstack gap-4">
        <h2 class="hstack gap-2 text-primary fs-3">
          <span class="circle-mark fs-2">3</span>
          喵立翰 Miao Li-Han
        </h2>
        <ul class="list-unstyled hstack gap-2">
          <li class="p-10px bg-white rounded rounded-circle">
            <a href="https://www.facebook.com">
              <IconFB />
            </a>
          </li>
          <li class="p-10px bg-white rounded rounded-circle">
            <a href="https://www.instagram.com">
              <IconIG />
            </a>
          </li>
          <li class="p-10px bg-white rounded rounded-circle">
            <a href="https://www.youtube.com">
              <IconYT />
            </a>
          </li>
        </ul>
        <small>© 2023 喵立翰 Miao Li-Han 版權所有</small>
      </div>
      <ul class="g-col-12 g-col-lg-6 list-unstyled">
        <h4 class="mb-4">競選總部</h4>
        <li>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</li>
        <li>電話：(02) 888-5678</li>
        <li>
          電子郵件地址：
          <a
            class="link-dark"
            href="mailto:meowoffice@linmeow.tw"
            >meowoffice@linmeow.tw</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>
