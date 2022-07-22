import { useState } from 'react';

export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (text) => {
    setIsLoading(true);
    setError(null);
    try {
      callback(text);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return { isLoading, error, fetchData };
};
