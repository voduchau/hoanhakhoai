import React from "react";
import GroupFooter from "./component/groupInfo";
import "./styles.css";

const GROUP_FOOT = [
  {
    title: "LIÊN KẾT TRANG WEB",
    items: [
      {
        text: "Về chúng tôi",
        link: "",
      },
      {
        text: "Đối tác tiêu biểu",
        link: "",
      },
      {
        text: "Cầu hôn cùng chúng tôi",
        link: "",
      },
      {
        text: "Doanh nghiệp",
        link: "",
      },
      {
        text: "Hướng dẫn chăm sóc hoa",
        link: "",
      },
      {
        text: "Blog",
        link: "",
      },
    ],
  },
  {
    title: "CHĂM SÓC KHÁCH HÀNG",
    items: [
      {
        text: "Liên hệ với chúng tôi",
        link: "",
      },
      {
        text: "Câu hỏi thường gặp",
        link: "",
      },
      {
        text: "Phương thức thanh toán",
        link: "",
      },
      {
        text: "Lưu ý chính",
        link: "",
      },
      {
        text: "Chính sách bảo mật",
        link: "",
      },
      {
        text: "BCác điều khoản chi tiếtlog",
        link: "",
      },
    ],
  },
  {
    title: "BẠN CÓ CÂU HỎI?",
    items: [
      {
        text: "Thứ Hai - Chủ Nhật (9:00 - 18:00)",
        link: "",
      },
      {
        text: "Hotline",
        link: "",
      },
      {
        text: "1900 63 35 37",
        link: "",
      },
      {
        text: "Facebook: flowerstoreVN",
        link: "",
      },
      {
        text: "Email: contact@flowerstore.vn",
        link: "",
      },
      {
        text: "corporate@flowerstore.vn",
        link: "",
      },
      {
        text: "Marketing truyền thông:",
        link: "",
      },
      {
        text: "marketing@flowerstore.vn",
        link: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#ffeff0] text-[#302d6f]">
      <div className="footer-top py-8">
        <div className="px-[15px] xl:p-0 m-auto xl:max-w-1200">
          <div className="flex flex-col xl:flex-row mx-[-15px] flex-wrap">
            <div className="basis-1/3 text-center px-[15px] xl:text-left">
              <div className="px-[15px]">
                <a href="https://flowerstore.vn" className="d-block">
                  <img
                    className="flowerstore-logo-footer h-[40px] xl:h-[50px]"
                    src="https://assets.flowerstore.vn/frontend/images/fs_vn_logo.svg"
                    height="50px"
                  />
                </a>
                <p className="my-4 leading-[1.4rem]">
                  Chỉ từ 199k - Mua hoa tươi không lo về giá. Giao hàng miễn phí
                  trong ngày, khu vực nội thành Hà Nội, TpHCM. Thu tiền mặt tận
                  nơi, chuyển khoản hoặc thanh toán qua thẻ. Lựa chọn hoàn hảo
                  cho những dịp đặc biệt: Sinh Nhật, Kỉ Niệm, Lãng Mạn, Ngày Phụ
                  Nữ, Ngày Valentine, Ngày của Mẹ. Ngoài ra, Flowerstore nhận
                  đặt vòng hoa, kệ hoa khai trương, chúc mừng và cho các dịp
                  khác.
                </p>
                <div className="xl:flex mb-4">
                  <form
                    className="form-inline"
                    method="POST"
                    action="https://flowerstore.vn/subscribers"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="VYFGIAwgFevujqsclbApUwoYIC7cDGIHcMfLgWmZ"
                    />{" "}
                    <div className="flex">
                      <div className="form-group grow-1 mb-0">
                        <input
                          type="email"
                          className="form-control text-[#555555] bg-[#ffffff] rounded-sm border-[1px] border-[#e6e6e6] shadow-none text-base py-[0.375rem] px-[0.75rem]"
                          placeholder="Email của tôi"
                          name="email"
                          required=""
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#9da4d5] text-[#ffffff] border border-[#F79F8E] rounded-sm text-[.875rem] text-center py-[.375rem] px-[.75rem]"
                      >
                        Theo dõi bản tin
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {GROUP_FOOT.map((group, index) => (
              <GroupFooter key={index} group={group} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
