import "./index.css";
import { Arrow } from "../../atoms/Arrow";
import { getLastPage } from "../../../helpers/helpers";

interface IPagination {
  itemsPerPage: number;
  totalRepos: number;
  handlePaginate: (pageNumber: number) => void;
  indexOfFirstItem: number;
  indexOfLastItem: number;
  currentPage: number;
  onClickArrow: (
    target: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const Pagination = ({
  itemsPerPage,
  totalRepos,
  handlePaginate,
  indexOfFirstItem,
  indexOfLastItem,
  currentPage,
  onClickArrow,
}: IPagination) => {

  const pageNumbers = [];
  for (let i = 1; i <= getLastPage(totalRepos, itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <div className="pagination__info">
        {indexOfFirstItem + 1}-{indexOfLastItem} of {totalRepos} items
      </div>
      <Arrow onClickArrow={onClickArrow} arrowDirection="left" />
      <ul className="pagination__row">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__item">
            <button
              onClick={() => handlePaginate(number)}
              className={
                currentPage === number
                  ? "pagination__link active"
                  : "pagination__link"
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <Arrow onClickArrow={onClickArrow} arrowDirection="right" />
    </nav>
  );
};
