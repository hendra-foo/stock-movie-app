import { useCallback, useEffect } from "react";

const useOnKeyPress = (keyCode, onMatch) => {
  const handleKeyPress = useCallback(
    (e) => (e.keyCode === keyCode ? onMatch?.() : null),
    [keyCode, onMatch],
  );

  useEffect(() => {
    if (!document) return;
    document.addEventListener("keydown", handleKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [handleKeyPress]);
};

export default useOnKeyPress;
