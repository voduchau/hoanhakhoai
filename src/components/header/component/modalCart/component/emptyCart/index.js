import React from "react";
import "./styles.css";

const EmptyCart = () => {
  return (
    <li>
      <div className="dropdown_cart_item__group px-0 sm:min-w-fit">
        <div className="dropdown_cart_item__group_header">
          <h3 className="font-bold">Không có sản phẩm nào trong giỏ hàng</h3>
        </div>
      </div>
    </li>
  );
};

export default EmptyCart;
