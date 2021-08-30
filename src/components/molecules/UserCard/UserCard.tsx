import * as React from "react";
import { FollowInformation } from "../../atoms/FollowInformation";
import { StatePage } from "../../atoms/StatePage";
import { RepositoryList } from "../RepositoryList/RepositoryList";
import listIsEmpty from "../../../img/listisempty.svg";
import followingImg from "../../../img/following.svg";
import followersImg from "../../../img/followers.svg";
import "./index.css";
import { IRepository } from "../../atoms/Repository/Repository";
interface IUserCard{
  avatar: string;
  userName: string;
  userNickName: string;
  followers: string;
  following: string;
  userUrl: string;
  countRepos: string;
  repositories: IRepository[];
  loading: boolean
}
export const UserCard = ({
  avatar,
  userName,
  userNickName,
  followers,
  following,
  userUrl,
  countRepos,
  repositories,
  loading

}: IUserCard) => (
  <div className="user">
    <div className="user-card">
      <img src={avatar} alt="userPhoto" className="user-card__image" />
      <p className="user-card__user-name">{userName}</p>
      <a className="user-card__nickname" href={userUrl} rel="noreferrer" target="_blank">{userNickName}</a>
      <div className="user-card__user-information">
        <FollowInformation follow={followers} followImg={followersImg} />
        <FollowInformation follow={following} followImg={followingImg} />
      </div>
    </div>
    {repositories.length ? (<RepositoryList repositories={repositories} loading={loading} countRepos={countRepos} />) : (<StatePage img={listIsEmpty} title="Repository list is empty" itsReposList={true}/>)}
  </div>
);
