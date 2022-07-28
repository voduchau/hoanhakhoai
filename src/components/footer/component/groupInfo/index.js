import React from "react";

const GroupFooter = ({ group }) => {
  return (
    <div className="basis-2/12 xl:px-[15px] xl:max-w-[205px]">
      <div className="text-center xl:text-left xl:px-[15px]">
        <h6 className="text-uppercase mb-3 font-bold uppercase">
          <b>{group.title}</b>
        </h6>
        <ul className="footer-links">
          {group.items.map((item, index) => (
            <li key={index}>
              <a
                className="py-[0.25rem] leading-[2]"
                href="/page/about-us"
                title=""
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupFooter;
