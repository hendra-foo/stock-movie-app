import { useCallback, useEffect } from "react";

const useOnKeyPress = (element, keyCode, onMatch) => {
  const handleKeyPress = useCallback(
    (e) => (e.keyCode === keyCode ? onMatch?.() : null),
    [keyCode, onMatch],
  );

  useEffect(() => {
    if (!element) return;
    console.log("relisten");
    element.addEventListener("keydown", handleKeyPress, false);
    return () => {
      element.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [element, handleKeyPress]);
};

export default useOnKeyPress;
