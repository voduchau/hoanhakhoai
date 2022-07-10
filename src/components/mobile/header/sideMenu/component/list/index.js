import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import UserMenu from "./component/userMenu/index.js";
import SellerMenu from "./component/sellerMenu/index.js";
import "./styles.css";

const SideMenuList = () => {
  return (
    <div className="side-menu-list px-3">
      <UserMenu />
      <div className="sidebar-widget-title py-0 flex">
        <span>Categories</span>
      </div>
      <SellerMenu />
    </div>
  );
};

export default SideMenuList;
