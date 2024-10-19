import React, { useState, useEffect } from "react";

export function authenticatedFetch(uri) {
  return fetch(uri, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      Accept: "application/vnd.github.v3+json",
    },
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
