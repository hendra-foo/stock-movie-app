import { useCallback, useEffect, useState } from "react";

export const useRequest = (service, { manual, defaultParams, onSuccess, onError, formatResult } = {}) => {
  const [{ loading, data, error }, setState] = useState({
    loading: manual ? false : true,
    data: undefined,
    error: undefined,
  });

  const run = useCallback(
    (...args) => {
      setState((s) => ({ ...s, loading: true }));
      service(...args)
        .then((res) => {
          onSuccess?.(res);
          setState((s) => ({ ...s, loading: false, data: formatResult?.(res) ?? res }));
        })
        .catch((err) => {
          onError?.(err);
          setState((s) => ({ ...s, loading: false, error: err }));
        });
    },
    [service, onSuccess, onError, formatResult]
  );

  useEffect(() => {
    if (!manual) run(defaultParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    run,
    loading,
    data,
    error,
  };
};
