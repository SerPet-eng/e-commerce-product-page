import { useState, useEffect } from 'react';

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed Fetch Data');
        }
        return res.json();
      })
      .then(setData)
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, error };
}
