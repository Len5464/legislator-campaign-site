<script setup lang="ts">
  import Modal from "@/components/Modal.vue";
  import ThanksNotice from "@/components/ThanksNotice.vue";
  import { ref } from "vue";

  const isFormSubmitted = ref(false);
  function onFormSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      isFormSubmitted.value = true;
      /* send data */
    } else {
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  }
</script>
<template>
  <Modal
    title="小額捐款"
    :show="true"
  >
    <div class="d-flex flex-column flex-xl-row align-items-center align-items-xl-start gap-8 w-100">
      <aside
        class="d-flex flex-row flex-xl-column justify-content-between align-items-center bg-info rounded-5 p-6 p-xl-15 w-100 mw-730px position-relative overflow-hidden"
      >
        <h1 class="fs-6 fs-xl-1 mb-10 lh-base">
          分享您的想法 <br />一同為我們的未來<br class="d-sm-none" />打造更美好！
        </h1>
        <hr
          class="border-0 m-0 d-none d-xl-block"
          style="height: 500px"
        />
        <picture class="position-absolute bottom-0 end-0">
          <source
            media="(min-width: 1200px)"
            srcset="/images/feedback.png"
          />
          <img
            class=""
            src="/images/feedback-sm.png"
            alt="捐款示意圖"
          />
        </picture>
      </aside>
      <Transition
        name="fade"
        mode="out-in"
      >
        <ThanksNotice
          v-if="isFormSubmitted"
          message="感謝您的意見"
          @close="isFormSubmitted = false"
        />
        <form
          v-else
          action=""
          class="vstack needs-validation"
          novalidate
          @submit="onFormSubmit"
        >
          <label
            for="feedback-name"
            class="form-label"
          >
            您的姓名
          </label>
          <input
            id="feedback-name"
            class="form-control mb-6"
            type="text"
            placeholder="姓名"
            required
            aria-required="true"
            maxlength="20"
            autocomplete="name"
            name="user"
          />
          <h5 class="ms-4 mb-6 invalid-feedback">不能空白</h5>

          <label
            for="feedback-email"
            class="form-label"
          >
            Email
          </label>
          <input
            id="feedback-email"
            class="form-control mb-6"
            type="email"
            placeholder="email"
            required
            aria-required="true"
            autocomplete="email"
            name="email"
          />
          <h5 class="ms-4 mb-6 invalid-feedback">請確認格式正確</h5>

          <label
            for="feedback-phone"
            class="form-label"
          >
            手機
          </label>
          <input
            id="feedback-phone"
            class="form-control mb-6"
            type="tel"
            pattern="[0-9]{4}\s*[0-9]{3}\s*[0-9]{3}"
            placeholder="手機號碼"
            required
            aria-required="true"
            autocomplete="tel"
            name="phone"
          />
          <h5 class="ms-4 mb-6 invalid-feedback">必須是10碼數字 XXXX XXX XXX</h5>

          <label
            for="feedback-suggestion"
            class="form-label"
          >
            您的建言
          </label>
          <textarea
            class="form-control mb-6"
            id="feedback-suggestion"
            placeholder="最多500字"
            rows="6"
            required
            aria-required="true"
            maxlength="500"
            name="suggestion"
          ></textarea>
          <button
            class="btn btn-primary px-8 py-6 rounded-pill"
            type="submit"
          >
            送出意見
          </button>
        </form>
      </Transition>
    </div>
  </Modal>
</template>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
