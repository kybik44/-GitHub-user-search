import "./index.css";
import { Arrow } from "../../atoms/Arrow";
import { getLastPage } from "../../../helpers/helpers";
interface IPagination {
  reposPerPage: number;
  totalRepos: number;
  handlePaginate: (pageNumber: number, event: any) => void;
  indexOfFirstRepos: number;
  indexOfLastRepos: number;
  currentPage: number;
  onClickArrow: (target: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
export const Pagination = ({
  reposPerPage,
  totalRepos,
  handlePaginate,
  indexOfFirstRepos,
  indexOfLastRepos,
  currentPage,
  onClickArrow,
}: IPagination) => {
  const pageNumbers = [];

  for (let i = 1; i <= getLastPage(totalRepos, reposPerPage); i++) {
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
              onClick={(event: any) => handlePaginate(number, event)}
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
