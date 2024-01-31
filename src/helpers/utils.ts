export function throttle(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void {
  let timer: NodeJS.Timeout | undefined;

  return (...args: any[]): void => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = undefined;
    }, delay);
  };
}
