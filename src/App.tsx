import React, { FormEvent, useEffect, useState } from "react";
import logo from "./img/logo.svg";
import search from "./img/search.svg";
import initialStateImage from "./img/big-search.svg";
import notfound from "./img/notfound.svg";

import "./App.css";
import { StatePage } from "./components/atoms/StatePage";
import { Header } from "./components/molecules/Header";
import { UserCard } from "./components/molecules/UserCard";
import { Pagination } from "./components/molecules/Pagination";

function App() {
  const [userName, setUserName] = useState("");
  const [userNickName, setNickUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState([]);
  const [countRepos, setCountRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [reposUrl, setReposUrl] = useState("");
  const [userUrl, setUserUrl] = useState("");
  const [error, setError] = useState(null);
  const [init, setInit] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios = require("axios");
  useEffect(() => {
    Promise.all([getUserRepositories(), getUserInfo()]).then(
      (results) => {
        setLoading(true);
        const repositories = results[0].data;
        setRepos(repositories);
        const data = results[1].data;
        // setDataFields(data)
        setData(data);
        setLoading(false);
      },
      (error) => {
        setError(error);
      }
    );
  }, [data]);
  // const setReposFields = ({html_url}:any) => {
  //   setReposUrl(html_url);
  // };
  // const setDataFields = ({
  //   name,
  //   login,
  //   followers,
  //   following,
  //   public_repos,
  //   avatar_url,
  //   html_url
  // }: any) => {
  //   setUserName(name);
  //   setNickUserName(login);
  //   setFollowers(followers);
  //   setFollowing(following);
  //   setCountRepos(public_repos);
  //   setAvatar(avatar_url);
  //   setUserUrl(html_url);
  // };
  function getUserRepositories() {
    return axios.get(`https://api.github.com/users/${userInput}/repos`);
  }
  function getUserInfo() {
    return axios.get(`https://api.github.com/users/${userInput}`);
  }
  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setUserInput(target.value);
    if (!userInput.length) {
      setInit(false);
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Promise.all([getUserRepositories(), getUserInfo()]).then(
      (results) => {
        const repositories = results[0].data;
        setRepos(repositories);
        const data = results[1].data;
        setData(data);
        setInit(true);
      },
      (error) => {
        setError(error);
      }
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(4);
  // Get current Repos
  const indexOfLastRepos = currentPage * reposPerPage;
  const indexOfFirstRepos = indexOfLastRepos - reposPerPage;
  const [currentRepos, setCurrentRepos] = useState([]);
  setCurrentRepos(repos.slice(indexOfFirstRepos, indexOfLastRepos));
  // Change page
  const paginate = (pageNumber: number, event: MouseEvent) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };
  const handleArrow = (target: any) => {
    const field = target.closest("a").dataset.direction;

    const lastPage = Math.ceil(repos.length / reposPerPage);

    if (field === "left") {
      if (currentPage === 1) {
        return;
      }
      setCurrentPage(currentPage - 1);
    }
    if (field === "right") {
      if (currentPage === lastPage) {
        return;
      }
      setCurrentPage(currentPage + 1);
    }

    return;
  };
  console.log(currentRepos);
  return (
    <div className="App">
      <Header
        logo={logo}
        img={search}
        userInput={userInput}
        onSearch={handleSearch}
        onSubmit={handleSubmit}
      />
      {init ? (
        repos.length ? (
          <main>
            <UserCard {...data} repositories={currentRepos} loading={loading} />

            <Pagination
              reposPerPage={reposPerPage}
              totalRepos={repos.length}
              paginate={paginate}
              indexOfLastRepos={indexOfLastRepos}
              indexOfFirstRepos={indexOfFirstRepos}
              currentPage={currentPage}
              onClickArrow={handleArrow}
            />
          </main>
        ) : (
          <StatePage img={notfound} title="User not found" />
        )
      ) : (
        <StatePage
          img={initialStateImage}
          title="Start with searching a GitHub user"
        />
      )}
    </div>
  );
}

export default App;
function axios(arg0: string) {
  throw new Error("Function not implemented.");
}
