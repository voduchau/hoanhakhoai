import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const TopNavBar = () => {
  return (
    <div className="hidden xl:flex sm:justify-end top-navbar d-none d-lg-block bg-top-navbar">
      <div className="text-right mx-80 px-1">
        <ul className="inline-links">
          <li>
            <a href="#" className="py-2.5 inline-block">
              Đăng nhập
            </a>
          </li>
          <li>
            <a href="#" className="py-2.5 inline-block">
              Đăng ký
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
