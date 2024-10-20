import React, { useState, useEffect, useCallback } from "react";
import Markdown from "react-markdown";
import { authenticatedFetch } from "./hooks/useFetch";

export default function RepositoryReadme({ repo, login }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState("");

  const loadReadme = useCallback(async (login, repo) => {
    setLoading(true);
    const uri = `https://api.github.com/repos/${login}/${repo.name}/readme`;
    const { download_url } = await authenticatedFetch(uri).then((res) => res.json());
    const markdown = await fetch(download_url).then((res) => res.text());
    setMarkdown(markdown);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!repo || !login) return;
    loadReadme(login, repo).catch(setError);
  }, [repo]);

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <p>Loading...</p>;
  return <Markdown>{markdown}</Markdown>;
}
