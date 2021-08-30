import * as React from "react";
import { Repository } from "../../atoms/Repository";
import { IRepository } from "../../atoms/Repository/Repository";
import "./index.css";
interface IRepositoryList{
  countRepos: string;
   repositories: IRepository[];
   loading: boolean
}
export const RepositoryList = ({ countRepos, repositories, loading }: IRepositoryList) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="repositories">
      <h2 className="repositories__title">Repositories ({countRepos})</h2>
      <div className="repositories__content">
        {repositories.map((repos: IRepository) => (
          <Repository {...repos} />
        ))}
      </div>
    </div>
  );
};
