import * as React from "react";
import "./index.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Arrow = ({ onClickArrow, arrowDirection, icon }: any) => (
  <a
    className="pagination__arrow"
    onClick={(e) => onClickArrow(e.target)}
    data-direction={arrowDirection}
  >
    {arrowDirection === "left" ? (
      <FontAwesomeIcon className="arrow" icon={faChevronLeft} />
    ) : (
      <FontAwesomeIcon className="arrow" icon={faChevronRight} />
    )}
  </a>
);
