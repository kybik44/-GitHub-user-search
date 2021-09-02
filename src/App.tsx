import React, { FormEvent, useState } from "react";
import logo from "./img/logo.svg";
import search from "./img/search.svg";
import initialStateImage from "./img/big-search.svg";
import notfound from "./img/notfound.svg";
import "./App.css";
import { StatePage } from "./components/atoms/StatePage";
import { Header, UserCard, Pagination } from "./components/molecules";
import {
  getCurrentReposList,
  getLastPage,
  getNewPage,
  getUserInfo,
  getUserRepositories,
} from "./helpers/helpers";


function App() {
  const [repos, setRepos] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [init, setInit] = useState(false);
  const [data, setData] = useState([]);

  const axios = require("axios");

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setUserInput(target.value);
    if (!userInput.length) {
      setInit(false);
    }
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    Promise.all([
      getUserRepositories(axios, userInput),
      getUserInfo(axios, userInput),
    ]).then(
      (results) => {
        const repositories = results[0].data;
        setRepos(repositories);
        const data = results[1].data;
        setData(data);
        setInit(true);
        setError(null);
      },
      (error) => {
        setError(error);
      }
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  // Get current Repos
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentRepos = getCurrentReposList(
    indexOfFirstItem,
    indexOfLastItem,
    repos
  );
  // Change page
  const handlePaginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleArrow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as any;
    const field = target.closest("button").dataset.direction;
    const lastPage = getLastPage(repos.length, itemsPerPage);
    const newPage: any = getNewPage(field, currentPage, lastPage);
    setCurrentPage(newPage);
  };

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
        !error ? (
          <main>
            <UserCard data={data} repositories={currentRepos} />
            {repos.length ? (
              <Pagination
                itemsPerPage={itemsPerPage}
                totalRepos={repos.length}
                handlePaginate={handlePaginate}
                indexOfLastItem={indexOfLastItem}
                indexOfFirstItem={indexOfFirstItem}
                currentPage={currentPage}
                onClickArrow={handleArrow}
              />
            ) : (
              ""
            )}
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
