import * as React from "react";
import { Form } from "../../atoms/Form";
import { Logo } from "../../atoms/Logo";
import "./index.css";

export const Header = ({ logo, img, userInput, onSearch, onSubmit }: any) => (
  <header className="header">
    <div className="logo logo_circle">
      <Logo logo={logo} />
    </div>
    <Form
      img={img}
      userInput={userInput}
      onSearch={onSearch}
      onSubmit={onSubmit}
    />
  </header>
);
