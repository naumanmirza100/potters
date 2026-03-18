export type Category = {
  title: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  description?: string;
  href: string;
};

export const CATEGORIES: Category[] = [
  {
    title: "Plates And Platters",
    slug: "plates-platters",
    imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_8-min_3345d8b7-6f29-4d6d-9b57-61e27a6d8143.jpg?v=1706691880&width=533",
    imageAlt: "Plates And Platters",
    description: "Plates and Platters That Bring Style to Your Table. Handcrafted with care, these plates blend timeless blue pottery artistry with everyday functionality.",
    href: "/collections/plates-platters",
  },
  {
    title: "Ceramic Blue Pottery Karahi",
    slug: "ceramic-blue-pottery-karahies",
    imageSrc: "https://arraish.com/cdn/shop/files/DSC_0045_a2c114f0-466f-4a00-8354-f58c49e7943c.jpg?v=1708453418&width=533",
    imageAlt: "Blue Pottery Karahi",
    description: "Blue Pottery Karahi Designs That Add Tradition to Every Table. Serve your favourite dishes in authentic Multani style.",
    href: "/collections/ceramic-blue-pottery-karahies",
  },
  {
    title: "Blue Pottery Tea Sets",
    slug: "tea-sets-blue-pottery",
    imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_8-min_3345d8b7-6f29-4d6d-9b57-61e27a6d8143.jpg?v=1706691880&width=800",
    imageAlt: "Multani Blue Pottery Tea Sets",
    description: "Unique Designs for Your Perfect Tea Time. Exquisite tea sets that make every cup a ritual.",
    href: "/collections/tea-sets-blue-pottery",
  },
  {
    title: "Bowls",
    slug: "bowls",
    imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_61-min.jpg?v=1706693730&width=533",
    imageAlt: "Multani Blue Pottery Ceramic Bowls",
    description: "Handcrafted Ceramic Bowls for Every Meal. Bring charm to your table with our stunning range of bowls.",
    href: "/collections/bowls",
  },
  {
    title: "Serving Dishes",
    slug: "serving-dishes",
    imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_37-min.jpg?v=1706692775&width=533",
    imageAlt: "Blue Pottery Serving Dishes",
    description: "Serving Dishes That Add Warmth to Every Meal. Present your meals beautifully with our artisan serving collection.",
    href: "/collections/serving-dishes",
  },
  {
    title: "Table Decoration",
    slug: "table-decoration",
    imageSrc: "https://arraish.com/cdn/shop/files/Blue_Felicity_Aromatic_Warmer_1_360x.jpg?v=1680516596",
    imageAlt: "Table Decoration",
    description: "Decorate your table with stunning hand-painted blue pottery pieces that captivate every guest.",
    href: "/collections/table-decoration",
  },
];

export const TABLEWARE_SUBCATEGORIES = [
  { label: "Dinner Sets",                 slug: "dinner-sets",                 count: 8,  priceRange: "Rs. 19,999 – 79,999" },
  { label: "Tea Sets",                    slug: "tea-sets-blue-pottery",       count: 12, priceRange: "Rs. 5,999 – 22,999" },
  { label: "Serving Dishes",              slug: "serving-dishes",              count: 66, priceRange: "Rs. 3,999 – 7,999" },
  { label: "Plates & Platters",           slug: "plates-platters",             count: 22, priceRange: "Rs. 1,199 – 7,499" },
  { label: "Bowls",                       slug: "bowls",                       count: 33, priceRange: "Rs. 3,099 – 6,999" },
  { label: "Blue Pottery",                slug: "blue-pottery",                count: null, priceRange: null },
  { label: "Karahi Handies & Cover Pots", slug: "ceramic-blue-pottery-karahies", count: 19, priceRange: "Rs. 2,499 – 4,999" },
  { label: "Pottery Jars",                slug: "pottery-jars",                count: 22, priceRange: "Rs. 1,499 – 3,499" },
  { label: "Tea Mugs",                    slug: "tea-mugs",                    count: 8,  priceRange: "Rs. 1,199 – 4,499" },
  { label: "Tea Coasters",                slug: "tea-coasters",                count: 3,  priceRange: "Rs. 1,999" },
];

export const DECOR_SUBCATEGORIES = [
  { label: "Planters",         slug: "planters",         count: 5,  priceRange: "Rs. 2,999 – 4,499" },
  { label: "Vases",            slug: "vases",            count: 16, priceRange: "Rs. 1,499 – 6,499" },
  { label: "Aromatic Warmers", slug: "aromatic-warmers", count: 2,  priceRange: "Rs. 1,999" },
  { label: "Table Decoration", slug: "table-decoration", count: 14, priceRange: "Rs. 999 – 8,499" },
  { label: "Lamps",            slug: "lamps",            count: 7,  priceRange: "Rs. 4,999 – 8,499" },
];

export const DESIGN_FAMILY = [
  { label: "Blue Felicity",   slug: "blue-felicity",   count: 48, priceRange: "Rs. 999 – 54,999", imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_8-min_3345d8b7-6f29-4d6d-9b57-61e27a6d8143.jpg?v=1706691880&width=533",  showBadge: true,  primaryIconSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-26.svg" },
  { label: "Blue Pattern",    slug: "blue-pattern",    count: 12, priceRange: "Rs. 999 – 49,999", imageSrc: "https://arraish.com/cdn/shop/files/DSC_0073_02a8062e-9892-497c-ad44-6330ce148962.jpg?v=1708453629&width=533",  showBadge: true,  primaryIconSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-26.svg" },
  { label: "Tranquility",     slug: "tranquility",     count: 28, priceRange: "Rs. 999 – 47,999", imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_2-min_813c9e66-681b-4235-86ef-d79040ffc567.jpg?v=1706691605&width=533",  showBadge: false, primaryIconSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-25.svg" },
  { label: "Serina",          slug: "serina",          count: 45, priceRange: "Rs. 1,999 – 47,999", imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_18-min.jpg?v=1706691632&width=533",  showBadge: false, primaryIconSrc: "" },
  { label: "Blue Flower",     slug: "blue-flower",     count: 26, priceRange: "Rs. 999 – 19,999", imageSrc: "https://arraish.com/cdn/shop/files/Arraish_Product_Shots_14-min_a1506456-6512-4c27-a006-258d4a796a46.jpg?v=1706691924&width=533",  showBadge: true,  primaryIconSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-26.svg" },
  { label: "Blue Celico",     slug: "blue-celico",     count: 12, priceRange: "Rs. 1,199 – 4,999", imageSrc: "https://arraish.com/cdn/shop/files/DSC_0109_739c9430-8041-4c12-9c4c-283158c9735a.jpg?v=1708453880&width=533",  showBadge: false, primaryIconSrc: "" },
  { label: "Spring Pattern",  slug: "spring-pattern",  count: 2,  priceRange: "Rs. 3,999 – 4,499", imageSrc: "https://arraish.com/cdn/shop/files/DSC_0116_ea597400-9854-4734-b26a-9f5b66d489b0.jpg?v=1708453913&width=533",  showBadge: false, primaryIconSrc: "" },
  { label: "Slightly Broken", slug: "slightly-broken", count: 0,  priceRange: null,               imageSrc: "https://arraish.com/cdn/shop/files/DSC_0137_62c5b7df-e1c9-4402-be5c-f05051919864.jpg?v=1708454045&width=533",  showBadge: false, primaryIconSrc: "" },
];
