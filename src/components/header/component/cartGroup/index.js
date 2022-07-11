import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ModalCart from "../modalCart/index.js";
import { CART_ITEMS } from "../../../../constant/index.js";
import "./styles.css";

const GroupCartHeader = () => {
  const [openCartItem, setOpenCartItem] = useState(false);
  const [cart, setCart] = useState(CART_ITEMS);
  const groupCartRef = useRef(null);

  const handleClickCartHeader = () => {
    setOpenCartItem(!openCartItem);
  };
  return (
    <div
      className="cart_group_header"
      ref={groupCartRef}
      onClick={handleClickCartHeader}
    >
      <a
        className="cart_group_header_link relative mr-2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <FontAwesomeIcon
          className="pr-2 text-lg md:text-2xl"
          icon={faCartShopping}
        />
        <span className="cart_group_header_link--text hidden md:inline">
          Giỏ hàng
        </span>
        <span className="cart_group_header_link--count sm:text-xs bg-primary md:left-10 sm:h-4 md:px-2.5">
          {cart.length}
        </span>
      </a>
      <ModalCart
        openCartItem={openCartItem}
        setOpenCartItem={setOpenCartItem}
        groupCartRef={groupCartRef}
        cartItems={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default GroupCartHeader;
