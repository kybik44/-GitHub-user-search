import * as React from "react";
import "./index.css";


export const Form = ({img, userInput, onSearch, onSubmit}:any) => (
    <form className="search-form"  onSubmit={onSubmit} method="GET">
    <button className="search-form__button">
      <img className="search-form__img" src={img} alt="Search" />
    </button>
    <input className="search-form__input" value={userInput} onChange={onSearch}></input>
  </form>
);
