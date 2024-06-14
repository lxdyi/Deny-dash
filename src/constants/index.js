import { RxDashboard } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiHouse } from "react-icons/pi";
import { MdInsertChart } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import { TbGiftCardFilled } from "react-icons/tb";

export const mashaeerLinks = [
  {
    label: "Dashboard",
    path: "/marhel",
    icon: RxDashboard,
  },
  {
    label: "Products",
    path: "marhel/Products",
    icon: HiOutlineShoppingBag,
  },
  {
    label: "Stock",
    path: "marhel/stock",
    icon: PiHouse,
  },
  {
    label: "Sales",
    path: "marhel/salles",
    icon: MdInsertChart,
    subItems: [
      {
        label: "Salles",
        path: "marhel/salles",
      },
      {
        label: "Returns",
        subItems: [
          { label: "Valid", path: "marhel/valid" },
          { label: "Invalid", path: "marhel/invalid" },
        ],
      },
    ],
  },
  {
    label: "Invoices",
    path: "marhel/Invios",
    icon: HiOutlineTicket,
  },
  {
    label: "Gifts",
    path: "marhel/gifts",
    icon: TbGiftCardFilled,
  },
];
export const ClothsLinks = [
  {
    label: "Dashboard",
    path: "/cloths",
    icon: RxDashboard,
  },
  {
    label: "Products",
    path: "cloths/Products",
    icon: HiOutlineShoppingBag,
  },
  {
    label: "Sales",
    path: "cloths/Sales",
    icon: PiHouse,
  },
  {
    label: "Invoices",
    path: "cloths/Invioce",
    icon: HiOutlineTicket,
  },
  {
    label: "Refund",
    path: "cloths/Refund",
    icon: TbGiftCardFilled,
  },
];

export const choices = [
  { src: "/src/assets/Masher.png", id: 0, name: "Marshel" },
  { src: "/src/assets/lobby.png", id: 1, name: "Lobby" },
  { src: "/src/assets/Logo.png", id: 2, name: "Cloths" },
];

export const marshelData = [
  {
    name: {
      firstName: "Christopher",
      lastName: "Lee",
    },
    address: "555 Cedar Street",
    city: "Seattle",
    state: "Washington",
  },
  {
    name: {
      firstName: "Rachel",
      lastName: "Anderson",
    },
    address: "987 Walnut Court",
    city: "New York",
    state: "New York",
  },
  {
    name: {
      firstName: "David",
      lastName: "Garcia",
    },
    address: "654 Maple Avenue",
    city: "Los Angeles",
    state: "California",
  },
  {
    name: {
      firstName: "Zachary",
      lastName: "Davis",
    },
    address: "261 Battle Ford",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Robert",
      lastName: "Smith",
    },
    address: "566 Brakus Inlet",
    city: "Westerville",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Yan",
    },
    address: "7777 Kuhic Knoll",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "John",
      lastName: "Upton",
    },
    address: "722 Emie Stream",
    city: "Huntington",
    state: "Washington",
  },
];

export const ProductsHeadCells = [
  { id: "name", label: "Perfume" },
  { id: "orderId", label: "Order Id" },
  { id: "total", label: "Total", disableSorting: true },
  { id: "action", label: "Action", disableSorting: true },
];

function createProductData(id, name, orderId, total, action) {
  return { id, name, orderId, total, action };
}

export const productsRows = [
  createProductData(1, "Cupcake", "#1000", "- 500 +", true),
  createProductData(2, "Donut", "#1001", "- 600 +", true),
  createProductData(3, "Eclair", "#1002", "- 700 +", true),
  createProductData(4, "Frozen Yogurt", "#1003", "- 800 +", true),
  createProductData(5, "Gingerbread", "#1004", "- 900 +", true),
  createProductData(6, "Gingerbread", "#1005", "- 900 +", true),
  createProductData(7, "Gingerbread", "#1006", "- 900 +", true),
];

export const orderHeadCells = [
  { id: "orderNo", label: "Order No" },
  { id: "quantity", label: "Quantity" },
  { id: "date", label: "Date" },
  { id: "type", label: "Type" },
  { id: "total", label: "Total", disableSorting: true },
  { id: "action", label: "Action", disableSorting: true },
];

function createOrderData(id, orderNo, quantity, date, type, total, action) {
  return { id, orderNo, quantity, date, type, total, action };
}

export const ordersRows = [
  createOrderData(1, "#112578", "400", "22-11-2023", "Kuwait", "$1000", false),
  createOrderData(2, "#112579", "400", "22-11-2023", "Aramex", "$1000", false),
  createOrderData(3, "#112580", "400", "22-11-2023", "Kuwait", "$1000", false),
  createOrderData(4, "#112581", "400", "22-11-2023", "Aramex", "$1000", false),
  createOrderData(5, "#112582", "400", "22-11-2023", "Kuwait", "$1000", false),
  createOrderData(6, "#112583", "400", "22-11-2023", "Aramex", "$1000", false),
  createOrderData(7, "#112584", "400", "22-11-2023", "Kuwait", "$1000", false),
  createOrderData(8, "#112585", "400", "22-11-2023", "Aramex", "$1000", false),
];

export const validHeadCells = [
  { id: "Perfume", label: "Perfume" },
  { id: "orderNo", label: "Order No" },
  { id: "quantity", label: "Quantity" },
  { id: "date", label: "Date" },
  { id: "type", label: "Type" },
  { id: "total", label: "Total", disableSorting: true },
  { id: "action", label: "Action", disableSorting: true },
];

function createValidData(
  id,
  Perfume,
  orderNo,
  quantity,
  date,
  type,
  total,
  action
) {
  return { id, Perfume, orderNo, quantity, date, type, total, action };
}

export const validRows = [
  createValidData(
    1,
    "cloud",
    "#112578",
    "400",
    "22-11-2023",
    "Kuwait",
    "$1000",
    false
  ),
  createValidData(
    2,
    "cloud",
    "#112579",
    "400",
    "22-11-2023",
    "Aramex",
    "$1000",
    false
  ),
  createValidData(
    2,
    "cloud",
    "#112579",
    "400",
    "22-11-2023",
    "Aramex",
    "$1000",
    false
  ),
];

export const inValidHeadCells = [
  { id: "Perfume", label: "Perfume" },
  { id: "orderNo", label: "Order No" },
  { id: "quantity", label: "Quantity" },
  { id: "date", label: "Date" },
  { id: "type", label: "Type" },
  { id: "total", label: "Total", disableSorting: true },
  { id: "action", label: "Action", disableSorting: true },
];

function createInValidData(
  id,
  Perfume,
  orderNo,
  quantity,
  date,
  type,
  total,
  action
) {
  return { id, Perfume, orderNo, quantity, date, type, total, action };
}

export const inValidRows = [
  createInValidData(
    1,
    "cloud",
    "#112578",
    "400",
    "22-11-2023",
    "Kuwait",
    "$1000",
    false
  ),
  createInValidData(
    2,
    "cloud",
    "#112579",
    "400",
    "22-11-2023",
    "Aramex",
    "$1000",
    false
  ),
  createInValidData(
    2,
    "cloud",
    "#112579",
    "400",
    "22-11-2023",
    "Aramex",
    "$1000",
    false
  ),
];

export const marshelGiftsHeadCells = [
  { id: "Perfume", label: "Perfume" },
  { id: "orderNo", label: "Order No" },
  { id: "quantity", label: "Quantity" },
  { id: "date", label: "Date" },
  { id: "type", label: "Type" },
  { id: "total", label: "Total", disableSorting: true },
  { id: "action", label: "Action", disableSorting: true },
];

function createMarshelGiftsData(
  id,
  Perfume,
  orderNo,
  quantity,
  date,
  type,
  total,
  action
) {
  return { id, Perfume, orderNo, quantity, date, type, total, action };
}

export const marshelGiftsRows = [
  createMarshelGiftsData(
    1,
    "cloud",
    "#112578",
    "400",
    "22-11-2023",
    "Kuwait",
    "$1000",
    false
  ),
  createMarshelGiftsData(
    2,
    "cloud",
    "#112579",
    "400",
    "22-11-2023",
    "Aramex",
    "$1000",
    false
  ),
  createMarshelGiftsData(
    3,
    "cloud",
    "#112579",
    "400",
    "22-11-2023",
    "Aramex",
    "$1000",
    false
  ),
];

export const recentOrdersCells = [
  { id: "ProductName", label: "Product Name" },

  { id: "date", label: "Date" },
  { id: "TotalOrder", label: "Total Order" },
  { id: "Statu", label: "Status" },
  { id: "action", label: "Action", disableSorting: true },
];

function createRecentOrdersData(
  id,
  ProductName,
  date,
  TotalOrder,
  Statu,
  action
) {
  return { id, ProductName, date, TotalOrder, Statu, action };
}

export const recentOrdersRows = [
  createRecentOrdersData(
    1,
    "Cloud",

    "Jun 29,2023",
    "325",
    "Delivered",
    false
  ),
  createRecentOrdersData(
    2,
    "Cloud",

    "Jun 29,2023",
    "325",
    "Canceled",
    false
  ),
  createRecentOrdersData(
    3,
    "Cloud",

    "Jun 29,2023",
    "325",
    "Pending",
    false
  ),
  createRecentOrdersData(
    4,
    "Cloud",

    "Jun 29,2023",
    "325",
    "Delivered",
    false
  ),
];
export const StockCards = [
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#0194FF24] dark:bg-[#0194FF]",
  },
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#878787] dark:bg-[#FFFFFF75] ",
  },
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#0194FF24] dark:bg-[#0194FF]",
  },
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#878787] dark:bg-[#FFFFFF75]",
  },
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#0194FF24] dark:bg-[#0194FF]",
  },
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#878787] dark:bg-[#FFFFFF75]",
  },
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#0194FF24] dark:bg-[#0194FF]",
  },
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#878787] dark:bg-[#FFFFFF75]",
  },
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#0194FF24] dark:bg-[#0194FF]",
  },
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#878787] dark:bg-[#FFFFFF75]",
  },
  {
    lable: "Total valid return",
    number: "239K",
    rase: false,
    color: "bg-[#0194FF24] dark:bg-[#0194FF]",
  },
];

export const stockReportHeadCells = [
  { id: "ProductName", label: "Product Name" },
  { id: "ProductiD", label: "Product iD" },
  { id: "date", label: "Date" },
  { id: "quantity", label: "Quantity" },
  { id: "StockStatus", label: "Stock Status" },
];

function createStockReportData(
  id,
  ProductName,
  ProductiD,
  date,
  quantity,
  StockStatus
) {
  return { id, ProductName, ProductiD, date, quantity, StockStatus };
}

export const stockReportRows = [
  createStockReportData(1, "cloud", "#10000", "Jun 29,2023", "325", "In Stock"),
  createStockReportData(
    2,
    "cloud",
    "#10000",
    "Jun 29,2023",
    "325",
    "out Stock"
  ),
  createStockReportData(3, "cloud", "#10000", "Jun 29,2023", "325", "In Stock"),
  createStockReportData(
    4,
    "cloud",
    "#10000",
    "Jun 29,2023",
    "325",
    "out Stock"
  ),
];
export const ClosthsHeadCells = [
  { id: "ProductName", label: "Producs" },
  { id: "ProductiD", label: "Product iD" },
  { id: "date", label: "Date" },
  { id: "Statu", label: "Status" },
  { id: "Amount", label: "Amount" },
  { id: "action", label: "Action", disableSorting: true },
];

function createClosthsHeadCellstData(
  id,
  ProductName,
  ProductiD,
  date,
  Amount,
  Statu,
  action
) {
  return { id, ProductName, ProductiD, date, Amount, Statu, action };
}

export const ClosthsRows = [
  createClosthsHeadCellstData(
    1,
    "Jeans XL",
    "#11232",
    "Jun 29,2023",
    "$400.00",
    "Pending",
    false
  ),
  createClosthsHeadCellstData(
    2,
    "T-shirt XL - blue",
    "#11232",
    "Jun 29,2023",
    "$400.00",
    "Delivered",
    false
  ),
  createClosthsHeadCellstData(
    3,
    "Cap Black",
    "#11232",
    "Jun 29,2023",
    "$400.00",
    "Canceled",
    false
  ),
  createClosthsHeadCellstData(
    4,
    "Cap white",
    "#11232",
    "Jun 29,2023",
    "$400.00",
    "Canceled",
    false
  ),
];
export const clothsItems = [
  { img: "/src/assets/jeans-1.png", item: "Jeans", price: "$85" },
  { img: "/src/assets/jeans-2.png", item: "Jeans", price: "$90" },
  { img: "/src/assets/jeans-3.png", item: "Shirt", price: "$80" },
  { img: "/src/assets/jeans-4.png", item: "Shirt", price: "$60" },
  { img: "/src/assets/jeans-5.png", item: "Cap", price: "$30" },
  { img: "/src/assets/jeans-6.png", item: "Cap", price: "$50" },
];

export const ClosthsOrdersHeadCells = [
  { id: "OrderNo", label: "Order No" },
  { id: "CompanyName", label: "Company Name" },
  { id: "date", label: "Date" },
  { id: "Status", label: "Status" },
  { id: "Invoiced", label: "Invoiced" },
  { id: "Total", label: "Total" },
];

function createClosthsOrdersData(
  id,
  OrderNo,
  CompanyName,
  date,
  Status,
  Invoiced,
  Total
) {
  return { id, OrderNo, CompanyName, date, Status, Invoiced, Total };
}

export const ClosthsOrdersRows = [
  createClosthsOrdersData(
    1,
    "#112578",
    "Clothes",
    "22-11-2023",
    "Failled",
    true,
    "$1000"
  ),
  createClosthsOrdersData(
    2,
    "#112578",
    "Clothes",
    "22-11-2023",
    "Complete",
    false,
    "$1000"
  ),
  createClosthsOrdersData(
    3,
    "#112578",
    "Clothes",
    "22-11-2023",
    "Failled",
    true,
    "$1000"
  ),
  createClosthsOrdersData(
    4,
    "#112578",
    "Clothes",
    "22-11-2023",
    "Complete",
    false,
    "$1000"
  ),
];
export const ClosthsRefundsHeadCells = [
  { id: "product", label: "Product" },
  { id: "receiptId", label: "Receipt ID" },
  { id: "date", label: "Date" },
  { id: "quantity", label: "Quantity" },
  { id: "total", label: "Total" },
];

function createClosthsRefundsData(
  id,
  product,
  receiptId,
  date,
  quantity = 1,
  total
) {
  return { id, product, receiptId, date, quantity, total };
}

export const ClosthsRefundsRows = [
  createClosthsRefundsData(1, "Jeans", "#112578", "22-11-2023", 10, "$1000"),
  createClosthsRefundsData(2, "Cap", "#112578", "22-11-2023", 10, "$1000"),
  createClosthsRefundsData(3, "Cap", "#112578", "22-11-2023", 10, "$1000"),
];
