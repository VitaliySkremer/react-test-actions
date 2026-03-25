export const debounce = (fn: () => void, ms = 500) => {
  let timer: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, ms);
  };
};
