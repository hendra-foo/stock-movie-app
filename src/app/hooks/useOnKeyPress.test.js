import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useOnKeyPress from "./useOnKeyPress";

it("match on key press", () => {
  const onMatch = jest.fn();
  const escKey = "Escape";

  renderHook(() => useOnKeyPress(document, escKey, onMatch));

  fireEvent.keyDown(document, {
    key: escKey,
    code: escKey,
  });

  expect(onMatch).toHaveBeenCalledTimes(1);
});
