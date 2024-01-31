import { general } from "@/types/type";
import { ref, watchEffect, toValue, MaybeRefOrGetter } from "vue";

export function useFetch<T>(url: MaybeRefOrGetter | string): general.FetchResult<T> {
  const data = ref(null);
  const error = ref<Error | null>(null);

  watchEffect(async () => {
    data.value = null;
    error.value = null;
    const urlValue = toValue(url);

    try {
      const res = await fetch(urlValue);
      data.value = await res.json();
    } catch (e) {
      if (e instanceof Error) error.value = e;
    }
  });

  return { data, error };
}
