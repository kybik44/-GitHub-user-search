import * as React from "react";
import "./index.css";

import { Arrow } from "../../atoms/Arrow";
export const Pagination = ({
  reposPerPage,
  totalRepos,
  paginate,
  indexOfFirstRepos,
  indexOfLastRepos,
  currentPage,
  onClickArrow,
  arrowDirection,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <div className="pagination__info">
        {indexOfFirstRepos + 1}-{indexOfLastRepos} of {totalRepos} items
      </div>
      <Arrow onClickArrow={onClickArrow} arrowDirection="left" />
      <ul className="pagination__row">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__item">
            <a
              onClick={(e) => paginate(number, e)}
              className={
                currentPage === number
                  ? "pagination__link active"
                  : "pagination__link"
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <Arrow onClickArrow={onClickArrow} arrowDirection="right" />
    </nav>
  );
};
