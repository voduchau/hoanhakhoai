import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./component/cartItem/index.js";
import EmptyCart from "./component/emptyCart/index.js";
import { useOutsideModal } from "../../../../utils/index.js";
import "./styles.css";

const ModalCart = ({
  cartItems,
  openCartItem,
  setOpenCartItem,
  groupCartRef,
  setCart,
}) => {
  const containerModalRef = useRef(null);
  const [totalPrice, setTotalPrice] = useState(0);
  useOutsideModal({modalRef: containerModalRef, setOpenModal: setOpenCartItem, parentRef: groupCartRef});

  useEffect(() => {
    if (openCartItem) {
      containerModalRef.current.style.display = "flex";
    } else {
      containerModalRef.current.style.display = "none";
    }
  }, [openCartItem]);

  useEffect(() => {
    const total = cartItems.reduce((total, item) => {
      return total + item.price;
    }, 0);
    setTotalPrice(total);
  }, [cartItems.length]);

  return (
    <ul
      ref={containerModalRef}
      className="dropdown_cart_item pl-0 pr-0 lg:opacity-100 lg:visible lg:z-1000 sm:right-0"
    >
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <li>
          <div className="dropdown_cart_item__group px-0 w-80 sm:w-96">
            <div className="dropdown_cart_item__group_header">
              <h3 className="font-bold">Sản phẩm trong giỏ hàng</h3>
            </div>
            <div className="dropdown_cart_item__group_items">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  cartItems={cartItems}
                  setCart={setCart}
                />
              ))}
            </div>
            <div className="cart_item py-3 justify-between flex">
              <span className="subtotal_text">Tổng tiền</span>
              <span className="subtotal_amount">{totalPrice} ₫ </span>
            </div>
            <div className="flex justify-center text-center cart_info py-2">
              <ul>
                <li className="px-1">
                  <a
                    href=""
                    className="flex cart_info_link bg-primary px-4 py-1 h-7 items-center"
                  >
                    <FontAwesomeIcon className="pr-2" icon={faCartShopping} />
                    Xem giỏ hàng
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      )}
    </ul>
  );
};

export default ModalCart;
