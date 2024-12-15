import { useCallback, useRef } from 'react';

export const useInfiniteScroll = (callback: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback((node: HTMLElement | null) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, {
      threshold: 0.1,
    });

    if (node) observer.current.observe(node);
  }, [callback]);

  return { lastElementRef };
};