import * as React from "react";
import { Form } from "../../atoms/Form";
import { IForm } from "../../atoms/Form/Form";
import { Logo } from "../../atoms/Logo";
import "./index.css";
interface IHeader extends IForm {
  logo: string;
}
export const Header = ({
  logo,
  img,
  userInput,
  onSearch,
  onSubmit,
}: IHeader) => (
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
