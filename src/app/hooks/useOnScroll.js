import { useCallback } from "react";

const useOnScroll = (onMatch, { match = "bottom" } = {}) => {
  const handleScroll = useCallback(
    (e) => {
      const container = e.target;
      const content = e.target.children?.[0];
      switch (match) {
        case "up":
          if (container.scrollTop <= 0) onMatch?.();
          break;
        default:
          if (container.clientHeight + container.scrollTop >= content.offsetHeight) onMatch?.();
          break;
      }
    },
    [match, onMatch],
  );

  return {
    handleScroll,
  };
};

export default useOnScroll;
