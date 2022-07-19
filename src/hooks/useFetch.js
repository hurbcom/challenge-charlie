import axios from "axios";
import { useState, useCallback } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResults] = useState([]);

  const fetchUrl = useCallback(
    async (url) => {
      setLoading(true);
      setError(null);
      try {
        const data = await axios.get(url);
        setResults({ ...data.data });
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    },
    [url]
  );

  return { result, error, loading, fetchUrl };
};

export default useFetch;
