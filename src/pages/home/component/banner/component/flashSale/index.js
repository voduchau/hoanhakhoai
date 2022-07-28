import React from "react";
import "./styles.css";
import ProductBox from "../../../../../../components/productBox";
import CountDown from "../countDown";
import { FLASH_SALE } from "../../../../../../constant";

const FlashSale = () => {
  return (
    <div className="order-3 px-[15px] xl:flex xl:flex-col xl:max-w-176 xl:px-0">
      <div
        className="bg-white shadow-lg py-[24px] px-[8px] xl:px-0 xl:py-0 xl:shadow-none"
        id="flash_product_box"
      >
        <div className="flex border-b border-b-[#e0e0e0] mb-[20px] pb-[8px] xl:pb-0 xl:mb-0 xl:border-0 xl:pt-0">
          <div className="flex grow items-center">
            <span className="strong font-bold text-[1.125rem] xl:text-[13px]">
              SALE SỐC
            </span>
          </div>
          <CountDown />
        </div>
        <div className="flex items-end justify-center" id="flash_deal">
          <ProductBox product={FLASH_SALE} />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
