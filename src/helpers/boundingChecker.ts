import { onMounted, onUnmounted, computed, reactive } from "vue";
import { throttle } from "./utils";

export function useBoundingCheck(element: string | Element, refreshTime = 300) {
  const rect = reactive({ top: 0, left: 0, bottom: 0, right: 0 });

  const isInViewPort = computed(() => {
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  });

  onMounted(() => {
    const elm = typeof element === "string" ? document.querySelector(element) : element;
    if (!(elm instanceof HTMLElement)) throw new Error(`${element} is not HTMLElement`);

    const update = throttle((element: HTMLElement) => {
      const { top, left, bottom, right } = element.getBoundingClientRect();
      Object.assign(rect, { top, left, bottom, right });
    }, refreshTime);

    const onScroll = () => update(elm);
    window.addEventListener("scroll", onScroll);

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });
  });

  return isInViewPort;
}
