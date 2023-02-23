type DebounceProps<T> = {
  action: T;
  timeout?: number;
};

export function debounce<T, F>({ action, timeout = 500 }: DebounceProps<T>) {
  let timer: NodeJS.Timeout;

  return (...args: [F]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      (action as Function).apply(null, args);
    }, timeout);
  };
}
