import "./index.css";

export const Repository = ({ name, description, html_url }: any) => (
  <div className="repositories__row">
    <a className="repositories__row-title" href={html_url} target="_blank">
      {name}
    </a>
    <p className="repositories__row-text">{description}</p>
  </div>
);
