import React from "react";
import "./styles.css";

const HeaderLogo = ({ toggleSideMenu }) => {
  return (
    <div className="pb-3 sm:py-0 flex items-center">
      <div className="block xl:hidden py-1 mr-4" onClick={toggleSideMenu}>
        <a href="#">
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
      <a
        className="navbar_wrap_flowerstore-logo flex-1 flex justify-center mr-16 sm:mr-3"
        href=""
      >
        <img
          className="h-6 sm:h-10"
          src="https://assets.flowerstore.vn/frontend/images/fs_vn_logo.svg"
          alt="flowerstore.ph"
        />
      </a>
    </div>
  );
};

export default HeaderLogo;
