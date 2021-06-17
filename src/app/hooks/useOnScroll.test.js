import { fireEvent, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";
import useOnScroll from "./useOnScroll";

it("trigger match on scroll to bottom", () => {
  const onMatch = jest.fn();

  const { result } = renderHook(() => useOnScroll(onMatch));

  render(
    <div
      style={{ height: "50px", overflow: "auto" }}
      onScroll={result.current.handleScroll}
      data-testid="container"
    >
      <div style={{ height: "200px" }} data-testid="content"></div>
    </div>,
  );

  const container = screen.getByTestId("container");
  fireEvent.scroll(container, {
    scrollY: 200,
  });

  expect(onMatch).toHaveBeenCalledTimes(1);
});
