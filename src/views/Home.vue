<script setup lang="ts">
  import IconFB from "@/assets/icons/IconFB.vue";
  import Card from "@/components/Card.vue";
  import CardList from "@/components/CardList.vue";
  import Footer from "@/layout/Footer.vue";
  import Marquee from "@/components/Marquee.vue";
  import Modal from "@/components/Modal.vue";
  import Navbar from "@/layout/Navbar.vue";
  import IconIG from "@/assets/icons/IconIG.vue";
  import IconLine from "@/assets/icons/IconLine.vue";
  import { reactive } from "vue";
  import ArticlePost from "@/layout/ArticlePost.vue";
  import { data } from "@/types/type";
  import ModalDonate from "@/layout/ModalDonate.vue";
  import ModalFeedBack from "@/layout/ModalFeedBack.vue";
  import { useFetch } from "@/helpers/fetch";

  const state = reactive({
    modal: {
      event1: false,
      event2: false,
      event3: false,
      policy1: false,
      policy2: false,
      policy3: false,
      donate: false,
      feedback: false,
    },
  });

  export type ModalFlag = keyof typeof state.modal;

  const { data: eventData, error: eventFetchError } = useFetch<data.Event[]>(
    "/legislator-campaign-site/data/events.json"
  );
  const { data: policyData, error: policyFetchError } = useFetch<data.Policy[]>(
    "/legislator-campaign-site/data/policy.json"
  );

  if (eventFetchError.value) throw eventFetchError.value;
  if (policyFetchError.value) throw policyFetchError.value;

  function closeAllModal() {
    for (let key in state.modal) {
      state.modal[key as ModalFlag] = false;
    }
  }
  function openRelatedModal(key: string) {
    closeAllModal();
    if (isModalFlag(key)) state.modal[key] = true;
  }
  function isModalFlag(key: string): key is ModalFlag {
    return key in state.modal;
  }
</script>

<template>
  <Navbar />
  <header
    id="header"
    class="border min-svh-100 vstack justify-content-end align-items-center position-relative overflow-x-hidden"
  >
    <div class="text-center pt-24">
      <h1
        class="d-flex flex-column flex-lg-row justify-content-center bg-primary-light font-display text-primary-gradient mb-4"
      >
        <span class="me-lg-4">台灣的明天</span>
        <span>喵先鋪路</span>
      </h1>
      <div class="hstack flex-wrap gap-lg-4 justify-content-center mb-4">
        <h5 class="text-bg-dark fs-lg-3 px-4 py-3 rounded-4">2024 立委參選人</h5>
        <h2 class="hstack gap-4 text-primary fs-3 fs-lg-1 shadow-lg px-4 py-3 rounded-4">
          <span class="circle-mark fs-2">3</span>
          喵立翰 Miao Li-Han
        </h2>
      </div>
    </div>
    <Transition
      :appear="true"
      name="bounce"
    >
      <img
        srcset="/images/portrait-1.png 723w, /images/portrait-1-sm.png 480w"
        sizes="(max-width: 992px) 480px, 723px"
        alt="我是喵立翰"
      />
    </Transition>
    <Marquee>
      <span class="me-6">為喵星人，護台灣！</span>
      <span class="me-6">從喵的眼中，看見台灣</span>
      <span class="me-6">喵的未來，人的希望</span>
    </Marquee>
    <ul class="d-flex d-sm-none list-unstyled gap-4 py-2 px-10 bg-white rounded-3 position-absolute bottom-0 mb-20">
      <li>
        <a href="#">
          <IconFB />
        </a>
      </li>
      <li>
        <a href="#">
          <IconIG />
        </a>
      </li>
      <li>
        <a href="#">
          <IconLine />
        </a>
      </li>
    </ul>
  </header>
  <main>
    <!-- 主張 -->
    <section
      id="advocate"
      class="bg-primary-light py-26"
    >
      <div class="container">
        <div class="grid gap-6 bg-white rounded overflow-hidden">
          <div class="g-col-12 g-col-lg-6 vstack align-items-center gap-8 py-10 py-lg-16 px-6 px-lg-10 rounded-5">
            <div class="vstack align-items-center">
              <span class="badge bg-dark fs-6">ADVOCATE</span>
              <h2 class="font-display text-primary-gradient">候選人主張</h2>
            </div>
            <h4>
              我堅信 ! 藉由推動更完善的<a href="#policyIssues">貓咪福利</a>和相關政策，更是間接地投資於<a href="#"
                >台灣的未來</a
              >。
            </h4>
            <p>
              畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP
              經濟帶來巨大效益。
              因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
            </p>
          </div>
          <img
            class="g-col-12 g-col-lg-6 w-100 h-100 object-fit-cover"
            src="/images/proposition.png"
            alt="我的主張"
          />
        </div>
      </div>
    </section>
    <section
      id="latestEvents"
      class="container py-16 py-lg-26"
    >
      <div class="vstack align-items-center mb-10 mb-lg-16">
        <span class="badge bg-dark fs-6">LATEST EVENTS</span>
        <h2 class="font-display text-primary-gradient">最新活動</h2>
      </div>
      <div class="grid gap-6">
        <a
          href="#latestEvents"
          class="g-col-12 g-col-lg-6 link-dark"
          @click="state.modal.event3 = true"
        >
          <Card
            v-if="eventData"
            v-bind="eventData[2]"
          />
          <Card
            v-else
            img-url="/images/img-empty.svg"
          />
        </a>
        <ul class="list-unstyled g-col-12 g-col-lg-6">
          <li class="mb-6">
            <Modal
              v-if="eventData"
              :show="state.modal.event1"
              :title="eventData[0].category"
              @close="closeAllModal"
            >
              <ArticlePost
                name="event1"
                :post-data="eventData"
                @open-related-modal="openRelatedModal"
              >
              </ArticlePost>
            </Modal>
            <a
              href="#latestEvents"
              class="link-dark"
              @click="state.modal.event1 = true"
            >
              <CardList
                v-if="eventData"
                v-bind="eventData[0]"
              />
            </a>
          </li>
          <li class="mb-6">
            <Modal
              v-if="eventData"
              :show="state.modal.event2"
              :title="eventData[1].category"
              @close="closeAllModal"
            >
              <ArticlePost
                name="event2"
                :post-data="eventData"
                @open-related-modal="openRelatedModal"
              >
              </ArticlePost>
            </Modal>
            <a
              href="#latestEvents"
              class="link-dark"
              @click="state.modal.event2 = true"
            >
              <CardList
                v-if="eventData"
                v-bind="eventData[1]"
              />
            </a>
          </li>
          <li class="mb-6">
            <Modal
              v-if="eventData"
              :show="state.modal.event3"
              :title="eventData[2].category"
              @close="closeAllModal"
            >
              <ArticlePost
                name="event3"
                :post-data="eventData"
                @open-related-modal="openRelatedModal"
              >
              </ArticlePost>
            </Modal>
            <a
              href="#latestEvents"
              class="link-dark"
              @click="state.modal.event3 = true"
            >
              <CardList
                v-if="eventData"
                v-bind="eventData[2]"
              />
            </a>
          </li>
          <a
            href="#latestEvents"
            class="btn btn-light icon-link icon-link-hover"
            >查看更多
            <span
              class="bi material-symbols-rounded"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </a>
        </ul>
      </div>
    </section>
    <section
      id="policyIssues"
      class="container py-16 py-lg-26"
    >
      <div class="vstack align-items-center mb-10 mb-lg-16">
        <span class="badge bg-dark fs-6">POLICY ISSUES</span>
        <h2 class="font-display text-primary-gradient">政策議題</h2>
      </div>
      <ul class="list-unstyled grid row-gap-16 column-gap-6 column-gap-lg-16">
        <li class="g-col-12 g-col-md-6 g-col-lg-4">
          <Modal
            v-if="policyData"
            :show="state.modal.policy1"
            :title="policyData[0].category"
            @close="closeAllModal"
          >
            <ArticlePost
              name="policy1"
              :post-data="policyData"
              @open-related-modal="openRelatedModal"
            >
            </ArticlePost>
          </Modal>
          <a
            href="#policyIssues"
            class="link-dark"
            @click="state.modal.policy1 = true"
          >
            <h4 class="px-4 mb-4">為毛孩子謀福利！ 推動寵物醫療保障方案</h4>

            <img
              class="w-100 rounded-5"
              src="/images/policy-1.png"
              alt="政策1"
            />
          </a>
        </li>
        <li class="g-col-12 g-col-md-6 g-col-lg-4">
          <Modal
            v-if="policyData"
            :show="state.modal.policy2"
            :title="policyData[1].category"
            @close="closeAllModal"
          >
            <ArticlePost
              name="policy2"
              :post-data="policyData"
              @open-related-modal="openRelatedModal"
            >
            </ArticlePost>
          </Modal>
          <a
            href="#policyIssues"
            class="link-dark"
            @click="state.modal.policy2 = true"
          >
            <h4 class="px-4 mb-4">打造休閒天堂！ 推廣寵物休閒與娛樂場所</h4>

            <img
              class="w-100 rounded-5"
              src="/images/policy-2.png"
              alt="政策2"
            />
          </a>
        </li>
        <li class="g-col-12 g-col-md-6 g-col-lg-4">
          <Modal
            v-if="policyData"
            :show="state.modal.policy3"
            :title="policyData[2].category"
            @close="closeAllModal"
          >
            <ArticlePost
              name="policy3"
              :post-data="policyData"
              @open-related-modal="openRelatedModal"
            >
            </ArticlePost>
          </Modal>
          <a
            href="#policyIssues"
            class="link-dark"
            @click="state.modal.policy3 = true"
          >
            <h4 class="px-4 mb-4">推廣寵物飼養教育，讓愛更加專業</h4>

            <img
              class="w-100 rounded-5"
              src="/images/policy-3.png"
              alt="政策3"
            />
          </a>
        </li>
      </ul>
    </section>
    <section
      id="callToAction"
      class="container py-16 py-lg-26 grid"
    >
      <div class="g-col-12 g-col-md-6 py-10 px-6 p-lg-24 bg-primary text-white rounded-5">
        <h3 class="font-display fs-40px fs-lg-52px mb-4">小額支持喵喵</h3>
        <p class="fs-5 fw-semibold mb-6">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
        <div class="hstack justify-content-between gap-10">
          <a
            href="#callToAction"
            class="btn btn-white icon-link icon-link-hover align-self-lg-end text-nowrap"
            @click="state.modal.donate = true"
            >小額捐款
            <span
              class="bi material-symbols-rounded"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </a>
          <img
            class="min-w-100px"
            src="/images/donate.png"
            alt="捐款圖"
          />
        </div>
      </div>
      <ModalDonate
        :show="state.modal.donate"
        @close="closeAllModal"
      />
      <div class="g-col-12 g-col-md-6 vstack py-10 px-6 p-lg-24 bg-dark text-white rounded-5">
        <h3 class="font-display fs-40px fs-lg-52px mb-4">民眾服務信箱</h3>
        <p class="fs-5 fw-semibold mb-16 mb-md-auto">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</p>
        <a
          href="#callToAction"
          class="btn btn-white icon-link icon-link-hover align-self-start mt-auto text-nowrap"
          @click="state.modal.feedback = true"
          >填寫表單
          <span
            class="bi material-symbols-rounded"
            aria-hidden="true"
          >
            arrow_forward
          </span>
        </a>
      </div>
      <ModalFeedBack
        :show="state.modal.feedback"
        @close="closeAllModal"
      />
    </section>
    <section
      id="slogan"
      class="container vstack text-center pb-26 pt-42 pt-lg-52"
    >
      <h1
        class="d-flex flex-column flex-lg-row justify-content-center bg-primary-light font-display text-primary-gradient mb-6 mb-lg-4"
      >
        <span class="me-lg-4">台灣的明天</span>
        <span>喵先鋪路</span>
      </h1>
      <div class="hstack flex-wrap gap-lg-4 justify-content-center mb-4">
        <h4 class="hstack gap-4 text-primary fs-lg-1 shadow-lg-lg px-lg-4 py-lg-3 rounded-4">
          <span class="circle-mark fs-2">3</span>
          喵立翰 Miao Li-Han
        </h4>
      </div>
    </section>
  </main>

  <Footer />
</template>
<style>
  .bounce-enter-active {
    animation: bounce-in 1.3s;
  }
  .bounce-leave-active {
    animation: bounce-in 1.3s reverse;
  }
</style>
