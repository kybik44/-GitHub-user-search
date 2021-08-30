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
  data: any;
  repositories: IRepository[];
  loading: boolean
}
export const UserCard = ({
  data,
  repositories,
  loading

}: IUserCard) => (
  <div className="user">
    <div className="user-card">
      <img src={data.avatar} alt="userPhoto" className="user-card__image" />
      <p className="user-card__user-name">{data.userName}</p>
      <a className="user-card__nickname" href={data.userUrl} rel="noreferrer" target="_blank">{data.userNickName}</a>
      <div className="user-card__user-information">
        <FollowInformation follow={data.followers} followImg={followersImg} />
        <FollowInformation follow={data.following} followImg={followingImg} />
      </div>
    </div>
    {repositories.length ? (<RepositoryList repositories={repositories} loading={loading} countRepos={data.countRepos} />) : (<StatePage img={listIsEmpty} title="Repository list is empty" itsReposList={true}/>)}
  </div>
);
