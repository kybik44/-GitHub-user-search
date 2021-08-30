import * as React from "react";
import "./index.css";

export const FollowInformation = ({ followImg, follow }: any) => (
  <div className="user-information__follow">
    <img src={followImg} alt="follow" className="follow__img" />
    <p className="follow__text">{follow} following</p>
  </div>
);
