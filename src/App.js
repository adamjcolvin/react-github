import React, { useState } from "react";
import SearchForm from "./SearchForm";
import GitHubUser from "./GitHubUser";
import UserRepositories from "./UserRepositories";
import "./App.css";

export default function App() {
  const [login, setLogin] = useState("adamjcolvin");
  const [repo, setRepo] = useState("adamjcolvin");

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
      <UserRepositories login={login} repo={repo} onSelect={setRepo} />
    </>
  );
}
