import { onMounted, onUnmounted, computed, reactive } from "vue";
import { throttle } from "./utils";
/**
 * 檢查元素是否有在螢幕框範圍內
 * @param element 要檢查的元素或選擇器字串
 * @returns  是否在螢幕內的響應式布林
 */
export function useBoundingCheck(element: string | Element, refreshTime = 300) {
  const rectRef = reactive({ top: 0, left: 0, bottom: 0, right: 0 });

  const update = throttle((element: HTMLElement) => {
    const { top, left, bottom, right } = element.getBoundingClientRect();
    Object.assign(rectRef, { top, left, bottom, right });
  }, refreshTime);

  onMounted(() => {
    const elm = typeof element === "string" ? document.querySelector(element) : element;
    if (!(elm instanceof HTMLElement)) throw new Error(`${element} is not HTMLElement`);
    update(elm);
    window.addEventListener("wheel", () => update(elm));
  });
  onUnmounted(() => window.removeEventListener("wheel", update));

  const isInViewPort = computed(
    () =>
      Math.floor(rectRef.top) >= 0 &&
      Math.floor(rectRef.left) >= 0 &&
      Math.floor(rectRef.bottom) <= window.innerHeight &&
      Math.floor(rectRef.right) <= window.innerWidth
  );
  return isInViewPort;
}
