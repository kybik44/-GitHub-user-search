import * as React from "react";
import { FollowInformation } from "../../atoms/FollowInformation";
import { StatePage } from "../../atoms/StatePage";
import { RepositoryList } from "../RepositoryList/RepositoryList";
import listIsEmpty from "../../../img/listisempty.svg";
import followingImg from "../../../img/following.svg";
import followersImg from "../../../img/followers.svg";
import "./index.css";
import { IRepository } from "../../atoms/Repository/Repository";

interface IData {
  login: string;
  avatar_url: string;
  name: string;
  html_url: string;
  followers: string;
  following: string;
  public_repos: string;
}

interface IUserCard {
  data: any;
  repositories: IRepository[];
}
export const UserCard = ({ data, repositories }: IUserCard) => (
  <div className="user">
    <div className="user-card">
      <img src={data.avatar_url} alt="userPhoto" className="user-card__image" />
      <p className="user-card__user-name">{data.name}</p>
      <a
        className="user-card__nickname"
        href={data.html_url}
        rel="noreferrer"
        target="_blank"
      >
        {data.login}
      </a>
      <div className="user-card__user-information">
        <FollowInformation follow={data.followers} followImg={followersImg} />
        <FollowInformation follow={data.following} followImg={followingImg} />
      </div>
    </div>
    {repositories.length ? (
      <RepositoryList
        repositories={repositories}
        countRepos={data.public_repos}
      />
    ) : (
      <StatePage
        img={listIsEmpty}
        title="Repository list is empty"
        itsReposList={true}
      />
    )}
  </div>
);
