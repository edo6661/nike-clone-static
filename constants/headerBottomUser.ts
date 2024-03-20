export interface HeaderBottomUserItems {
  title: string;
  items: {
    header: string;
    subItems: string[];
  }[];
  selected: boolean;
}
export const headerBottomUserItems = [
  {
    title: "New & Featured",
    items: [
      {
        header: "New Arrivals",
        subItems: ["Men", "Women", "Kids"],
      },
      {
        header: "Featured",
        subItems: ["Best Sellers", "Trending Now", "Limited Edition"],
        selected: false,
      },
    ],
    selected: false,
  },
  {
    title: "Men",
    items: [
      {
        header: "Clothing",
        subItems: ["T-Shirts", "Jeans", "Jackets", "Shoes"],
      },
      {
        header: "Accessories",
        subItems: ["Hats", "Watches", "Sunglasses"],
        selected: false,
      },
    ],
    selected: false,
  },
  {
    title: "Women",
    items: [
      {
        header: "Clothing",
        subItems: ["Dresses", "Skirts", "Tops", "Shoes"],
      },
      {
        header: "Accessories",
        subItems: ["Bags", "Jewelry", "Scarves"],
      },
    ],
    selected: false,
  },
  // {
  //   title: "Kids",
  //   items: [
  //     {
  //       header: "Clothing",
  //       subItems: ["Boys", "Girls", "Baby"],
  //     },
  //     {
  //       header: "Toys",
  //       subItems: ["Educational", "Outdoor", "Board Games"],
  //     },
  //   ],
  //   selected: false,
  // },
];
