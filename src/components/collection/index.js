import React from "react";
import ProductBox from "../productBox";

const Collection = ({colection}) => {
  return (
    <section className="mb-4">
      <div className="container xl:max-w-[1200px]">
        <div className="px-2 py-4 xl:p-6 bg-white shadow-md">
          <div className="section-title-1 relative flex pb-2 mb-5 border-b border-[#e0e0e0]">
            <a
              href="https://flowerstore.vn/collection/B%C3%A1n+Ch%E1%BA%A1y+Nh%E1%BA%A5t"
              className="flex-1"
            >
              <h3 className="xl:mb-0 font-bold text-[1.125rem] text-[#343a40]">
                <span className="mr-6">{colection.name}</span>
              </h3>
            </a>
            <a
              href="https://flowerstore.vn/collection/B%C3%A1n+Ch%E1%BA%A1y+Nh%E1%BA%A5t"
              className="text-[#F79F8E]"
            >
              {" "}
              Xem thêm
            </a>
          </div>
          <div className="tab-pane">
            <div className="flex flex-wrap mx-[-5px]">
              {colection.products.map((product,index) => (
                <div key={index} className="product_wrapper basis-3/6 xl:flex-1 xl:px-[5px] xl:mb-2 xl:mt-2 xl:basis-1/6 xl:max-w-[188px]">
                  <ProductBox product={product}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
