import React, { useState, useEffect } from "react";

export function authenticatedFetch(uri) {
  const token = "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"
  return fetch(uri, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  });
}

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    authenticatedFetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
}
