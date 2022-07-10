import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const IconSearchMobile = ({ handleClickSearchMobile }) => {
  return (
    <div className="flex items-center px-3 sm:hidden">
      <div className="nav-search-box">
        <a href="#" onClick={handleClickSearchMobile} className="nav-box-link">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
      </div>
    </div>
  );
};

export default IconSearchMobile;
