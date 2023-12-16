import { useEffect, useState } from "react";

type ApiCall<T> = {
  data?: T;
  isLoading: boolean;
  isError: boolean;
};

export const useApiFetch = <T>(url: string, init?: RequestInit): ApiCall<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchFunction = (i?: RequestInit) => apiFetch<T>(url, i);
  useEffect(() => {
    setLoading(true);
    setError(false);
    const abortController = new AbortController();
    fetchFunction({ signal: abortController.signal })
      .then((value) => {
        setData(value);
        setLoading(false);
      })
      .catch((e) => {
        if (e.name !== "AbortError") {
          setError(true);
          setData(undefined);
          setLoading(false);
        }
      });
    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, init]);
  return { data, isLoading: loading, isError: error };
};

const apiFetch = async <T>(url: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(`API error. ${JSON.stringify(url)}`);
  }
  return response.json();
};
