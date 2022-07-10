import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const SideMenuHeader = ({ handleCloseSideMenu }) => {
  return (
    <div className="side-menu-header bg-primary">
      <div className="side-menu-close" onClick={handleCloseSideMenu}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="widget-profile-box px-3 py-4 d-flex align-items-center">
        <div
          className={`image bg-[url("https://assets.flowerstore.vn/frontend/images/icons/user-placeholder.jpg")]`}
        ></div>
      </div>
      <div className="side-login px-3 pb-3">
        <a href="https://flowerstore.vn/users/login">Đăng nhập</a>
        <a href="https://flowerstore.vn/users/registration">Đăng ký</a>
      </div>
    </div>
  );
};

export default SideMenuHeader;
