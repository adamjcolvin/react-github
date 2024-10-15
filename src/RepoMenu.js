import React, { useEffect } from "react";
import { useIterator } from "./hooks/useIterator";
import RepositoryReadme from "./RepositoryReadme";

export function RepoMenu({ repositories, login, onSelect }) {
  const [repo, previous, next] = useIterator(repositories);

  if (!repo) return;
  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt;</button>
        <p>{repo.name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={repo} />
    </>
  );
}
