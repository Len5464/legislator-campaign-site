<script setup lang="ts">
  import IconFB from "@/assets/icons/IconFB.vue";
  import IconIG from "@/assets/icons/IconIG.vue";
  import IconLine from "@/assets/icons/IconLine.vue";
  import IconTwitter from "@/assets/icons/IconTwitter.vue";
  import { data } from "@/types/type";
  import { ModalFlag } from "@/views/Home.vue";

  export type PostProps = {
    postData: data.Event[] | data.Policy[];
    name: ModalFlag;
  };
  const props = defineProps<PostProps>();
  const emit = defineEmits<{
    openRelatedModal: [key: string];
  }>();
  function findPostByID(id: string): data.Event | data.Policy | undefined {
    return props.postData.find((post) => post.id === id);
  }
  const thisPost = findPostByID(props.name);
  const date = thisPost && "date" in thisPost ? thisPost.date : "";
</script>
<template>
  <div
    v-if="thisPost"
    class="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-start gap-8"
  >
    <aside class="min-w-340px min-w-xxl-507px">
      <img
        class="mb-4 mx-auto rounded-4 w-100 aspect-ratio-16x10 object-fit-cover"
        :src="thisPost.imgUrl"
        alt="活動照片"
      />
      <p class="mb-2">{{ thisPost.title }}</p>
      <ul class="hstack gap-4 list-unstyled ps-0">
        分享
        <li>
          <a href="">
            <IconFB />
          </a>
        </li>
        <li>
          <a href="">
            <IconIG />
          </a>
        </li>
        <li>
          <a href="">
            <IconLine />
          </a>
        </li>
        <li>
          <a href="">
            <IconTwitter />
          </a>
        </li>
      </ul>
    </aside>
    <article class="">
      <h4 class="text-primary mb-2">{{ thisPost.title }}</h4>
      <time
        class="text-secondary mb-10 d-block"
        :datetime="date"
      >
        {{ date }}
      </time>
      <p
        v-if="thisPost.category === '最新活動'"
        class="mb-24"
      >
        {{ thisPost.content }}
      </p>
      <p
        v-else-if="thisPost.category === '政策議題'"
        class="mb-24"
      >
        <template
          v-for="content in (thisPost.content as data.PolicyContent[])"
          :key="content.description"
        >
          <ul class="list-unstyled">
            <h5 class="mb-2">{{ content.policy }}</h5>
            <li class="mb-6">
              <span>{{ content.description }}</span>
            </li>
          </ul>
        </template>
      </p>
      <ul
        v-if="thisPost.relatedID.length"
        class="bg-light-subtle rounded-3 list-unstyled p-4 mt-24 grid gap-4"
      >
        <h6 class="g-col-12">更多{{ thisPost.category }}</h6>

        <template
          v-for="id of thisPost.relatedID"
          :key="id"
        >
          <li class="g-col-6 g-col-sm-4">
            <a
              class="link-dark cursor-pointer"
              @click="emit('openRelatedModal', id)"
            >
              <img
                class="mb-3 w-100 rounded-1 object-fit-cover aspect-ratio-1x1 aspect-ratio-lg-16x9"
                :src="findPostByID(id)?.imgUrl"
                alt="活動照片"
              />
              {{ findPostByID(id)?.title }}
            </a>
          </li>
        </template>
      </ul>
    </article>
  </div>
  <h1 v-else>找不到 Post id</h1>
</template>
