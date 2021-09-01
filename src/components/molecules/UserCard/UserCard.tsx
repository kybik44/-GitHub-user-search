import * as React from "react";
import { FollowInformation } from "../../atoms/FollowInformation";
import { StatePage } from "../../atoms/StatePage";
import { RepositoryList } from "../RepositoryList/RepositoryList";
import listIsEmpty from "../../../img/listisempty.svg";
import followingImg from "../../../img/following.svg";
import followersImg from "../../../img/followers.svg";
import "./index.css";
import { IRepository } from "../../atoms/Repository/Repository";
import { Loading } from "../../atoms/Loading/Loading";

export interface IUserInfo {
  login: string;
  avatar_url: string;
  name: string;
  html_url: string;
  followers: string;
  following: string;
  public_repos: string;
}

interface IUserCard {
  userInfo: IUserInfo;
  repositories: IRepository[];
  isFetchingRepos: boolean;
}
export const UserCard = ({ userInfo, repositories, isFetchingRepos }: IUserCard) => (
  <div className="user">
    <div className="user-card">
      <img
        src={userInfo.avatar_url}
        alt="userPhoto"
        className="user-card__image"
      />
      <p className="user-card__user-name">{userInfo.name}</p>
      <a
        className="user-card__nickname"
        href={userInfo.html_url}
        rel="noreferrer"
        target="_blank"
      >
        {userInfo.login}
      </a>
      <div className="user-card__user-information">
        <FollowInformation
          follow={userInfo.followers}
          followImg={followersImg}
        />
        <FollowInformation
          follow={userInfo.following}
          followImg={followingImg}
        />
      </div>
    </div>
    {repositories.length ? (
      !isFetchingRepos ? (
        <RepositoryList
          repositories={repositories}
          countRepos={userInfo.public_repos}
        />
      ) : (
        <Loading />
      )
    ) : (
      <StatePage
        img={listIsEmpty}
        title="Repository list is empty"
        itsReposList={true}
      />
    )}
  </div>
);
