import * as React from "react";
import { Repository } from "../../atoms/Repository";
import "./index.css";

export const RepositoryList = ({ countRepos, repositories, loading }: any) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="repositories">
      <h2 className="repositories__title">Repositories ({countRepos})</h2>
      <div className="repositories__content">
        {repositories.map((repos: any) => (
          <Repository {...repos} />
        ))}
      </div>
    </div>
  );
};
