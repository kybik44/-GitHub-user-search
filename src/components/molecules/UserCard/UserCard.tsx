import * as React from "react";
import { FollowInformation } from "../../atoms/FollowInformation";
import { RepositoryList } from "../RepositoryList/RepositoryList";
import followingImg from "../../../img/following.svg";
import followersImg from "../../../img/followers.svg";
import "./index.css";
interface IRepository {
  name: string;
  description: string;
  html_url: string;
}
interface IUserInfo {
  avatar_url: string;
  name: string;
  login: string;
  followers: string;
  following: string;
  html_url: string;
  public_repos: number;
}
interface IUserCard extends IUserInfo {
  loading: boolean;
  repositories: any[];
}
export const UserCard = ({
  avatar_url,
  name,
  login,
  followers,
  following,
  html_url,
  public_repos,
  loading,
  repositories,
}: IUserCard) => (
  <div className="user">
    <div className="user-card">
      <img src={avatar_url} alt="userPhoto" className="user-card__image" />
      <p className="user-card__user-name">{name}</p>
      <a className="user-card__nickname" href={html_url} target="_blank">
        {login}
      </a>
      <div className="user-card__user-information">
        <FollowInformation follow={followers} followImg={followersImg} />
        <FollowInformation follow={following} followImg={followingImg} />
      </div>
    </div>
    {/* <RepositoryList
      repositories={repositories}
      loading={loading}
      countRepos={public_repos}
    /> */}
  </div>
);
