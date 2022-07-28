import {
  faHouseChimney,
  faGauge,
  faFileLines,
  faCartShopping,
  faUser,
  faCakeCandles,
  faWineGlassEmpty,
  faFan,
  faGift,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

export const LOCATIONS = [
  { label: "Tp. Ho Chi Minh", value: "hcm" },
  { label: "Tp. Buon Ma Thuot", value: "daklak" },
  { label: "Tp. Bao Loc", value: "lamdong" },
  { label: "Ha Noi", value: "hanoi" },
  { label: "Nha Trang", value: "nhatrang" },
];

export const CATEGORYS = [
  { label: "Tất cả sản phẩm", value: "all", items: [] },
  {
    label: "Ngày sinh nhật",
    value: "birthday",
    items: [
      {
        label: "Tất cả hoa và quà tặng sinh nhật",
        value: "all",
      },
      {
        label: "Bạn bè",
        value: "friend",
      },
      {
        label: "Bạn gái",
        value: "girlFriend",
      },
      {
        label: "Bạn trai",
        value: "boyFriend",
      },
      {
        label: "Trẻ em",
        value: "childrent",
      },
      {
        label: "Mẹ",
        value: "mother",
      },
      {
        label: "Bố",
        value: "father",
      },
      {
        label: "Anh/ Chị em",
        value: "sister",
      },
    ],
    icon: faCakeCandles,
  },
  {
    label: "Chủ đề",
    value: "topic",
    items: [
      {
        label: "Sinh nhật",
        value: "birthday",
      },
      {
        label: "Lãng mạn",
        value: "friend",
      },
      {
        label: "Hoa cưới",
        value: "girlFriend",
      },
      {
        label: "Chúc mừng",
        value: "boyFriend",
      },
      {
        label: "Chúc sức khoẻ",
        value: "childrent",
      },
      {
        label: "Cảm ơn",
        value: "mother",
      },
      {
        label: "Xin lỗi",
        value: "father",
      },
      {
        label: "Khai trương",
        value: "sister",
      },
      {
        label: "Chia buồn",
        value: "Chia buồn",
      },
    ],
    icon: faWineGlassEmpty,
  },
  {
    label: "Loại hoa",
    value: "flower-category",
    items: [
      {
        label: "Hoa hồng",
        value: "all",
      },
      {
        label: "Hoa hướng dương",
        value: "friend",
      },
      {
        label: "Hoa cẩm chướng",
        value: "girlFriend",
      },
      {
        label: "Hoa cẩm tú cầu",
        value: "boyFriend",
      },
      {
        label: "Hoa baby",
        value: "childrent",
      },
      {
        label: "Hoa cúc",
        value: "mother",
      },
      {
        label: "Cây xương rồng",
        value: "father",
      },
      {
        label: "Hoa cát tường",
        value: "sister",
      },
      {
        label: "Hoa đồng tiền",
        value: "childrent",
      },
      {
        label: "Hoa Lan",
        value: "mother",
      },
      {
        label: "Hoa Ly",
        value: "father",
      },
      {
        label: "Hoa vĩnh cửu",
        value: "sister",
      },
      {
        label: "Hoa giả",
        value: "father",
      },
      {
        label: "Tulip",
        value: "sister",
      },
    ],
    icon: faFan,
  },
  {
    label: "Loại sản phẩm",
    value: "product-category",
    items: [
      {
        label: "Tất cả hoa và quà tặng sinh nhật",
        value: "all",
      },
      {
        label: "Bạn bè",
        value: "friend",
      },
      {
        label: "Bạn gái",
        value: "girlFriend",
      },
      {
        label: "Bạn trai",
        value: "boyFriend",
      },
      {
        label: "Trẻ em",
        value: "childrent",
      },
      {
        label: "Mẹ",
        value: "mother",
      },
      {
        label: "Bố",
        value: "father",
      },
      {
        label: "Anh/ Chị em",
        value: "sister",
      },
    ],
    icon: faGift,
  },
  {
    label: "Sản phẩm khác",
    value: "other",
    items: [
      {
        label: "Tất cả hoa và quà tặng sinh nhật",
        value: "all",
      },
      {
        label: "Bạn bè",
        value: "friend",
      },
      {
        label: "Bạn gái",
        value: "girlFriend",
      },
      {
        label: "Bạn trai",
        value: "boyFriend",
      },
      {
        label: "Trẻ em",
        value: "childrent",
      },
      {
        label: "Mẹ",
        value: "mother",
      },
      {
        label: "Bố",
        value: "father",
      },
      {
        label: "Anh/ Chị em",
        value: "sister",
      },
    ],
    icon: faEllipsis,
  },
];

export const CART_ITEMS = [
  {
    id: 1,
    image:
      "https://assets.flowerstore.vn/uploads/products/photos/omoyRrEHu3y891wNidg9WTfto7v2cVXAJZonzhhQ.jpeg",
    name: "Cool Breeze",
    quantity: 1,
    price: 249000,
  },
  {
    id: 2,
    image:
      "https://assets.flowerstore.vn/uploads/products/photos/E6ajoswS1ATxMexIXPa9gmI5gdlZM2riqYeZJKSb.jpeg",
    name: "Bong bóng trái tim",
    quantity: 1,
    price: 120000,
  },
];

export const USER_IMAGE = "https://www.engazcrm.com/uploads/images/default.png";

export const USER_MENUS = [
  {
    name: "Trang chủ",
    icon: faHouseChimney,
  },
  {
    name: "Bảng điều khiển",
    icon: faGauge,
  },
  {
    name: "Lịch sử mua hàng",
    icon: faFileLines,
  },
  {
    name: "Giỏ hàng",
    icon: faCartShopping,
    cart: true,
  },
  {
    name: "Quản lý thông tin cá nhân",
    icon: faUser,
  },
];

export const SELLER_MENUS = [
  {
    name: "Ngày sinh nhật",
    icon: faCakeCandles,
  },
  {
    name: "Chủ đề",
    icon: faWineGlassEmpty,
  },
  {
    name: "Loại hoa",
    icon: faFan,
  },
  {
    name: "Loại sản phẩm",
    icon: faGift,
  },
  {
    name: "Sản phẩm khác",
    icon: faEllipsis,
  },
];

export const COLLECTIONS = [
  {
    name: "Bán chạy nhất",
    products: [
      {
        name: "First date",
        img: "https://assets.flowerstore.vn/uploads/products/photos/ERKpUpaLU3FAv0PL1obsALzvf29EC0OL4mlHMzdo.jpeg",
        oldPrice: "399,000đ",
        currentPrice: "249,000đ"
      },
      {
        name: "Under The Blue Sky",
        img: "https://assets.flowerstore.vn/uploads/products/photos/oqDyHI9G1uTYW5mAfUcprEUkV6IKBts1Xxu5Zgcr.jpeg",
        oldPrice: "399,000đ",
        currentPrice: "249,000đ"
      },
      {
        name: "Fecility",
        img: "https://assets.flowerstore.vn/uploads/products/photos/ar9MVqQawsxuxSEkocsN6o3bVBd3C47MRUIy1wsn.jpeg",
        oldPrice: "399,000đ",
        currentPrice: "249,000đ"
      },
      {
        name: "Sunset Love",
        img: "https://assets.flowerstore.vn/uploads/products/photos/gWO9MzyBNF88uJhmad0hWWVciUat1geV5mBlYrYV.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Forever 18 (18 bông hồng)",
        img: "https://assets.flowerstore.vn/uploads/products/photos/cwYfIa3sexXLuFfOEym1C98UA2zxQAPl1Gq9i5kU.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Summer delight",
        img: "https://assets.flowerstore.vn/uploads/products/photos/BECMXkRk50fQWI0bgyEkJI1QWYR4nlgrrLecgy28.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Day Dreamer",
        img: "https://assets.flowerstore.vn/uploads/products/photos/b0RomhEIATFYL28oGXzh38EYoGZUadsE9ef3L8vC.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Serendipity",
        img: "https://assets.flowerstore.vn/uploads/products/photos/Q9uLUHL9KVFwtQ70A1UudSYG6vDlGkxHypZhTXZn.jpeg",
        oldPrice: null,
        currentPrice: "449,000đ"
      },
      {
        name: "Carla",
        img: "https://assets.flowerstore.vn/uploads/products/photos/hk2okSbWyo9B1QIJJt7eu1El9fOLtsZKRQ9Mr2Te.jpeg",
        oldPrice: "649,000đ",
        currentPrice: "499,000đ"
      },
      {
        name: "Shiny Baby",
        img: "https://assets.flowerstore.vn/uploads/products/photos/OhVwLbErDTVBDwa0O0TVzxVsI0LllQnAkG8bIW1B.jpeg",
        oldPrice: null,
        currentPrice: "449,000đ"
      },
      {
        name: "Fall For You",
        img: "https://assets.flowerstore.vn/uploads/products/photos/NwpNm0SDX0Ir3zqtaYQJDgxrwA9fzvKQVj5VJCta.jpeg",
        oldPrice: null,
        currentPrice: "449,000đ"
      },
      {
        name: "Combo Watsons Beautiful you",
        img: "https://assets.flowerstore.vn/uploads/products/photos/pupoJP83OeBvJcxE2bwxqBnpn8YGBW2gAbHuWF9i.jpeg",
        oldPrice: null,
        currentPrice: "799,000đ"
      }
    ]
  },
  {
    name: "Bộ Sưu Tập Sắc Hồng | Ưu Đãi Đến 40%",
    products: [
      {
        name: "First date",
        img: "https://assets.flowerstore.vn/uploads/products/photos/ERKpUpaLU3FAv0PL1obsALzvf29EC0OL4mlHMzdo.jpeg",
        oldPrice: "399,000đ",
        currentPrice: "249,000đ"
      },
      {
        name: "Under The Blue Sky",
        img: "https://assets.flowerstore.vn/uploads/products/photos/oqDyHI9G1uTYW5mAfUcprEUkV6IKBts1Xxu5Zgcr.jpeg",
        oldPrice: "399,000đ",
        currentPrice: "249,000đ"
      },
      {
        name: "Fecility",
        img: "https://assets.flowerstore.vn/uploads/products/photos/ar9MVqQawsxuxSEkocsN6o3bVBd3C47MRUIy1wsn.jpeg",
        oldPrice: "399,000đ",
        currentPrice: "249,000đ"
      },
      {
        name: "Sunset Love",
        img: "https://assets.flowerstore.vn/uploads/products/photos/gWO9MzyBNF88uJhmad0hWWVciUat1geV5mBlYrYV.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Forever 18 (18 bông hồng)",
        img: "https://assets.flowerstore.vn/uploads/products/photos/cwYfIa3sexXLuFfOEym1C98UA2zxQAPl1Gq9i5kU.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Summer delight",
        img: "https://assets.flowerstore.vn/uploads/products/photos/BECMXkRk50fQWI0bgyEkJI1QWYR4nlgrrLecgy28.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Day Dreamer",
        img: "https://assets.flowerstore.vn/uploads/products/photos/b0RomhEIATFYL28oGXzh38EYoGZUadsE9ef3L8vC.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Serendipity",
        img: "https://assets.flowerstore.vn/uploads/products/photos/Q9uLUHL9KVFwtQ70A1UudSYG6vDlGkxHypZhTXZn.jpeg",
        oldPrice: null,
        currentPrice: "449,000đ"
      },
      {
        name: "Carla",
        img: "https://assets.flowerstore.vn/uploads/products/photos/hk2okSbWyo9B1QIJJt7eu1El9fOLtsZKRQ9Mr2Te.jpeg",
        oldPrice: "649,000đ",
        currentPrice: "499,000đ"
      },
      {
        name: "Shiny Baby",
        img: "https://assets.flowerstore.vn/uploads/products/photos/OhVwLbErDTVBDwa0O0TVzxVsI0LllQnAkG8bIW1B.jpeg",
        oldPrice: null,
        currentPrice: "449,000đ"
      },
      {
        name: "Fall For You",
        img: "https://assets.flowerstore.vn/uploads/products/photos/NwpNm0SDX0Ir3zqtaYQJDgxrwA9fzvKQVj5VJCta.jpeg",
        oldPrice: null,
        currentPrice: "449,000đ"
      },
      {
        name: "Combo Watsons Beautiful you",
        img: "https://assets.flowerstore.vn/uploads/products/photos/pupoJP83OeBvJcxE2bwxqBnpn8YGBW2gAbHuWF9i.jpeg",
        oldPrice: null,
        currentPrice: "799,000đ"
      }
    ]
  },
  {
    name: "Chúc Mừng Tốt Nghiệp",
    products: [
      {
        name: "First date",
        img: "https://assets.flowerstore.vn/uploads/products/photos/ERKpUpaLU3FAv0PL1obsALzvf29EC0OL4mlHMzdo.jpeg",
        oldPrice: "399,000đ",
        currentPrice: "249,000đ"
      },
      {
        name: "Under The Blue Sky",
        img: "https://assets.flowerstore.vn/uploads/products/photos/oqDyHI9G1uTYW5mAfUcprEUkV6IKBts1Xxu5Zgcr.jpeg",
        oldPrice: "399,000đ",
        currentPrice: "249,000đ"
      },
      {
        name: "Fecility",
        img: "https://assets.flowerstore.vn/uploads/products/photos/ar9MVqQawsxuxSEkocsN6o3bVBd3C47MRUIy1wsn.jpeg",
        oldPrice: "399,000đ",
        currentPrice: "249,000đ"
      },
      {
        name: "Sunset Love",
        img: "https://assets.flowerstore.vn/uploads/products/photos/gWO9MzyBNF88uJhmad0hWWVciUat1geV5mBlYrYV.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Forever 18 (18 bông hồng)",
        img: "https://assets.flowerstore.vn/uploads/products/photos/cwYfIa3sexXLuFfOEym1C98UA2zxQAPl1Gq9i5kU.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Summer delight",
        img: "https://assets.flowerstore.vn/uploads/products/photos/BECMXkRk50fQWI0bgyEkJI1QWYR4nlgrrLecgy28.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Day Dreamer",
        img: "https://assets.flowerstore.vn/uploads/products/photos/b0RomhEIATFYL28oGXzh38EYoGZUadsE9ef3L8vC.jpeg",
        oldPrice: "499,000đ",
        currentPrice: "349,000đ"
      },
      {
        name: "Serendipity",
        img: "https://assets.flowerstore.vn/uploads/products/photos/Q9uLUHL9KVFwtQ70A1UudSYG6vDlGkxHypZhTXZn.jpeg",
        oldPrice: null,
        currentPrice: "449,000đ"
      },
      {
        name: "Carla",
        img: "https://assets.flowerstore.vn/uploads/products/photos/hk2okSbWyo9B1QIJJt7eu1El9fOLtsZKRQ9Mr2Te.jpeg",
        oldPrice: "649,000đ",
        currentPrice: "499,000đ"
      },
      {
        name: "Shiny Baby",
        img: "https://assets.flowerstore.vn/uploads/products/photos/OhVwLbErDTVBDwa0O0TVzxVsI0LllQnAkG8bIW1B.jpeg",
        oldPrice: null,
        currentPrice: "449,000đ"
      },
      {
        name: "Fall For You",
        img: "https://assets.flowerstore.vn/uploads/products/photos/NwpNm0SDX0Ir3zqtaYQJDgxrwA9fzvKQVj5VJCta.jpeg",
        oldPrice: null,
        currentPrice: "449,000đ"
      },
      {
        name: "Combo Watsons Beautiful you",
        img: "https://assets.flowerstore.vn/uploads/products/photos/pupoJP83OeBvJcxE2bwxqBnpn8YGBW2gAbHuWF9i.jpeg",
        oldPrice: null,
        currentPrice: "799,000đ"
      }
    ]
  }
]

export const FLASH_SALE = {
  name: "name",
  img: "https://assets.flowerstore.vn/uploads/products/photos/ERKpUpaLU3FAv0PL1obsALzvf29EC0OL4mlHMzdo.jpeg",
  oldPrice: "399,000đ",
  currentPrice: "249,000đ",
  flashSale: true
}
