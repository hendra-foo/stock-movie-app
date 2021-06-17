import { renderHook } from "@testing-library/react-hooks";
import { useRequest } from "./useRequest";

it("call service on mount", async () => {
  const onSuccess = jest.fn();
  const res = "Success";
  const fakePromise = () => Promise.resolve(res);

  const { result, waitForNextUpdate } = renderHook(() =>
    useRequest(fakePromise, {
      onSuccess,
    }),
  );

  await waitForNextUpdate();

  expect(result.current.data).toEqual(res);
  expect(onSuccess).toHaveBeenCalledTimes(1);
});
