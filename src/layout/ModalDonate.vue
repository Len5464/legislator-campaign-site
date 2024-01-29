<script setup lang="ts">
  import CardPlanList from "@/components/CardPlanList.vue";
  import Modal from "@/components/Modal.vue";
  import ThanksNotice from "@/components/ThanksNotice.vue";
  import { ref } from "vue";

  const isFormSubmitted = ref(false);
  const planCase = ref("");
  const customPrice = ref(null);

  function onFormSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      isFormSubmitted.value = true;
    } else {
      event.stopPropagation();
    }

    form.classList.add("was-validated");
    customPrice.value = null;
  }
</script>
<template>
  <Modal
    title="小額捐款"
    :show="true"
  >
    <div class="d-flex flex-column flex-xl-row align-items-center align-items-xl-start gap-8 w-100">
      <aside
        class="d-flex flex-row flex-xl-column justify-content-between align-items-center bg-primary-light rounded-5 p-6 p-xl-15 w-100 mw-730px"
      >
        <div class="">
          <h1 class="fs-6 fs-xl-1 text-primary mb-4 lh-base">您的小筆捐款<br />是每隻毛孩未來的大大動力！</h1>
          <small class="fs-xl-6">目前小額贊助總金額</small>
          <h2 class="fs-5 fs-xl-2">987,655,873</h2>
        </div>
        <picture class="my-xl-14 w-auto">
          <source
            media="(min-width: 1200px)"
            srcset="/images/donate.png"
          />
          <img
            class="mh-350px"
            src="/images/donate-sm.png"
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
          class="mt-8"
          message="感謝您的捐款"
          @close="isFormSubmitted = false"
        />
        <form
          v-else
          action=""
          class="vstack gap-4 needs-validation"
          novalidate
          @submit="onFormSubmit"
        >
          <h5>捐款方案</h5>
          <input
            id="donatePlan1"
            class="d-none"
            type="radio"
            name="donatePlan"
            value="level-1"
            v-model="planCase"
            required
            aria-required="true"
          />

          <label
            for="donatePlan1"
            class="border border-secondary-light border-primary-on-checked cursor-pointer rounded-3"
          >
            <CardPlanList
              title="喵星人之友"
              :price="600"
              :sponsor="9957"
            />
          </label>

          <input
            id="donatePlan2"
            class="d-none"
            type="radio"
            name="donatePlan"
            value="level-2"
            v-model="planCase"
            required
            aria-required="true"
          />
          <label
            for="donatePlan2"
            class="border border-secondary-light border-primary-on-checked cursor-pointer rounded-3"
          >
            <CardPlanList
              title="喵星大使"
              :price="6000"
              :sponsor="2000"
            />
          </label>

          <input
            id="donatePlan3"
            class="d-none"
            type="radio"
            name="donatePlan"
            value="level-3"
            v-model="planCase"
            required
            aria-required="true"
          />
          <label
            for="donatePlan3"
            class="border border-secondary-light border-primary-on-checked cursor-pointer rounded-3"
          >
            <CardPlanList
              title="喵星傳奇"
              :price="60000"
              :sponsor="999"
            />
          </label>

          <input
            id="donatePlanCustomize"
            class="d-none"
            type="radio"
            name="donatePlan"
            value="customization"
            v-model="planCase"
            required
            aria-required="true"
          />
          <label
            for="donatePlanCustomize"
            class="border border-secondary-light border-primary-on-checked rounded-3 cursor-pointer py-6 px-4"
          >
            <h4 class="mb-2 text-primary">自訂贊助金額</h4>
            <div class="d-flex gap-10px align-items-center text-dark bg-secondary-light p-4 rounded rounded-1">
              NT$
              <input
                class="border-0 bg-transparent w-100"
                type="number"
                placeholder="輸入金額"
                :required="planCase === 'customization'"
                aria-required="true"
                min="1"
                v-model="customPrice"
                @focus="planCase = 'customization'"
              />
              <h5 class="m-0 invalid-feedback text-end w-auto text-nowrap">金額必須大於0</h5>
            </div>
          </label>

          <button
            class="btn btn-primary px-8 py-6 rounded-pill"
            type="submit"
          >
            前往捐款
          </button>
          <h5 class="invalid-feedback text-center">請選擇一個方案</h5>
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
