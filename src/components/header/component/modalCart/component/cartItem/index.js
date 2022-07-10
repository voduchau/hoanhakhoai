import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const CartItem = ({ item, cartItems, setCart }) => {
  const handleDeleteItem = () => {
    setCart([...cartItems].filter((it) => it.id !== item.id));
  };
  return (
    <div className="cart_item">
      <div className="flex items-center relative">
        <div className="w-100 h-100 position-absolute overflow-hidden">
          <a href="" className="d-block h-100 w-100"></a>
        </div>
        <div className="dc-image">
          <img src={item.image} className="img-fluid" alt="" />
        </div>
        <div className="dc-content">
          <span className="block dc-product-name mb-1 font-semibold">
            {item.name}
          </span>
          <span className="dc-quantity">x{item.quantity}</span>
          <span className="dc-price">{item.price} ₫ </span>
        </div>
        <div className="dc-actions">
          <button onClick={handleDeleteItem}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
