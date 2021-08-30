import * as React from "react";
import "./index.css";

export const StatePage = ({ img, title }: any) => (
  <div className="state-page">
    <img src={img} className="state-page__img" alt="" />
    <p className="state-page__text">{title}</p>
  </div>
);
