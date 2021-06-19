/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosPromise, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

type Options<TParams, TReturnType> = {
  manual?: boolean;
  params?: TParams;
  onSuccess?: (res: TReturnType) => void;
  onError?: (err: unknown) => void;
  refreshDeps?: unknown[];
};

type DefaultState = {
  loading: boolean;
  data?: any;
  error?: any;
};

type useRequestFn = <TParams extends any[], TReturnType>(
  service: (...args: TParams) => AxiosPromise<TReturnType>,
  options?: Options<TParams, AxiosResponse<TReturnType>>,
) => {
  run: () => void;
  loading: boolean;
  data: AxiosResponse<TReturnType>;
  error: unknown;
};

export const useRequest: useRequestFn = (
  service,
  { manual, params = [], onSuccess, onError, refreshDeps = [] } = {},
) => {
  const [{ loading, data, error }, setState] = useState<DefaultState>({
    loading: manual ? false : true,
    data: undefined,
    error: undefined,
  });

  const run = useCallback(
    (...args: any) => {
      setState((s) => ({ ...s, loading: true }));
      service(...args)
        .then((res) => {
          onSuccess?.(res);
          setState((s) => ({ ...s, loading: false, data: res }));
        })
        .catch((err) => {
          onError?.(err);
          setState((s) => ({ ...s, loading: false, error: err }));
        });
    },
    [service, onSuccess, onError],
  );

  useEffect(() => {
    if (!manual) run(...params);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...refreshDeps]);

  return {
    run,
    loading,
    data,
    error,
  };
};
