import { useCallback, useEffect } from "react";

const useOnKeyPress = (element, key, onMatch) => {
  const handleKeyPress = useCallback((e) => (e.key === key ? onMatch?.() : null), [key, onMatch]);

  useEffect(() => {
    if (!element) return;
    element.addEventListener("keydown", handleKeyPress, false);
    return () => {
      element.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [element, handleKeyPress]);
};

export default useOnKeyPress;
