import { useState, useCallback } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    let json;
    try {
      setLoading(true);
      const response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
    }
    return { json };
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
