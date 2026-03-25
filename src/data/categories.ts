import blueFelicityRoundPlatterLarge from '@/assets/images/royalimages/blue_pattern_large_serving_dish.jpg';
import blueFelicityKarahiSet from '@/assets/images/royalimages/serina_blue_large_ceramic_karahi.webp';
import blueFelicityTeaSet from '@/assets/images/royalimages/serina_blue_tea_set.webp';
import arraishTranquilityBowl from '@/assets/images/royalimages/serina_blue_large_bowl.webp';
import blueFelicityFlatDish from '@/assets/images/royalimages/blue_felicity_flat_dish.webp';
import blueFelicityAromaticWarmer from '@/assets/images/royalimages/blue_pottery_table_decor_platter.webp';
import arraishProduct1 from '@/assets/images/royalimages/blue_pattern_large_square_dish.jpg';
import arraishProduct2 from '@/assets/images/royalimages/blue_pattern_medium_serving_dish.jpg';
import arraishProduct3 from '@/assets/images/royalimages/blue_pattern_quarter_plate.jpg';
import arraishProduct4 from '@/assets/images/royalimages/blue_flower_large_serving_dish.webp';
import arraishProduct5 from '@/assets/images/royalimages/serina_blue_round_serving_dish.webp';
import arraishProduct6 from '@/assets/images/royalimages/blue_flower_big_round_platter.webp';

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
    imageSrc: blueFelicityRoundPlatterLarge,
    imageAlt: "Plates And Platters",
    description: "Plates and Platters That Bring Style to Your Table. Handcrafted with care, these plates blend timeless blue pottery artistry with everyday functionality.",
    href: "/collections/plates-platters",
  },
  {
    title: "Ceramic Blue Pottery Karahi",
    slug: "ceramic-blue-pottery-karahies",
    imageSrc: blueFelicityKarahiSet,
    imageAlt: "Blue Pottery Karahi",
    description: "Blue Pottery Karahi Designs That Add Tradition to Every Table. Serve your favourite dishes in authentic Multani style.",
    href: "/collections/ceramic-blue-pottery-karahies",
  },
  {
    title: "Blue Pottery Tea Sets",
    slug: "tea-sets-blue-pottery",
    imageSrc: blueFelicityTeaSet,
    imageAlt: "Multani Blue Pottery Tea Sets",
    description: "Unique Designs for Your Perfect Tea Time. Exquisite tea sets that make every cup a ritual.",
    href: "/collections/tea-sets-blue-pottery",
  },
  {
    title: "Bowls",
    slug: "bowls",
    imageSrc: arraishTranquilityBowl,
    imageAlt: "Multani Blue Pottery Ceramic Bowls",
    description: "Handcrafted Ceramic Bowls for Every Meal. Bring charm to your table with our stunning range of bowls.",
    href: "/collections/bowls",
  },
  {
    title: "Serving Dishes",
    slug: "serving-dishes",
    imageSrc: blueFelicityFlatDish,
    imageAlt: "Blue Pottery Serving Dishes",
    description: "Serving Dishes That Add Warmth to Every Meal. Present your meals beautifully with our artisan serving collection.",
    href: "/collections/serving-dishes",
  },
  {
    title: "Table Decoration",
    slug: "table-decoration",
    imageSrc: blueFelicityAromaticWarmer,
    imageAlt: "Table Decoration",
    description: "Decorate your table with stunning hand-painted blue pottery pieces that captivate every guest.",
    href: "/collections/table-decoration",
  },
];

export const TABLEWARE_SUBCATEGORIES = [
  { label: "Dinner Sets",                 slug: "dinner-sets",                 count: 8,  priceRange: "£19,999 – 79,999" },
  { label: "Tea Sets",                    slug: "tea-sets-blue-pottery",       count: 12, priceRange: "£5,999 – 22,999" },
  { label: "Serving Dishes",              slug: "serving-dishes",              count: 66, priceRange: "£3,999 – 7,999" },
  { label: "Plates & Platters",           slug: "plates-platters",             count: 22, priceRange: "£1,199 – 7,499" },
  { label: "Bowls",                       slug: "bowls",                       count: 33, priceRange: "£3,099 – 6,999" },
  { label: "Blue Pottery",                slug: "blue-pottery",                count: null, priceRange: null },
  { label: "Karahi Handies & Cover Pots", slug: "ceramic-blue-pottery-karahies", count: 19, priceRange: "£2,499 – 4,999" },
  { label: "Pottery Jars",                slug: "pottery-jars",                count: 22, priceRange: "£1,499 – 3,499" },
  { label: "Tea Mugs",                    slug: "tea-mugs",                    count: 8,  priceRange: "£1,199 – 4,499" },
  { label: "Tea Coasters",                slug: "tea-coasters",                count: 3,  priceRange: "£1,999" },
];

export const DECOR_SUBCATEGORIES = [
  { label: "Planters",         slug: "planters",         count: 5,  priceRange: "£2,999 – 4,499" },
  { label: "Vases",            slug: "vases",            count: 16, priceRange: "£1,499 – 6,499" },
  { label: "Aromatic Warmers", slug: "aromatic-warmers", count: 2,  priceRange: "£1,999" },
  { label: "Table Decoration", slug: "table-decoration", count: 14, priceRange: "£999 – 8,499" },
  { label: "Lamps",            slug: "lamps",            count: 7,  priceRange: "£4,999 – 8,499" },
];

export const DESIGN_FAMILY = [
  { label: "Blue Felicity",   slug: "blue-felicity",   count: 48, priceRange: "£999 – 54,999", imageSrc: blueFelicityRoundPlatterLarge,  showBadge: true,  primaryIconSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-26.svg" },
  { label: "Blue Pattern",    slug: "blue-pattern",    count: 12, priceRange: "£999 – 49,999", imageSrc: arraishProduct2,  showBadge: true,  primaryIconSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-26.svg" },
  { label: "Tranquility",     slug: "tranquility",     count: 28, priceRange: "£999 – 47,999", imageSrc: arraishTranquilityBowl,  showBadge: false, primaryIconSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-25.svg" },
  { label: "Serina",          slug: "serina",          count: 45, priceRange: "£1,999 – 47,999", imageSrc: arraishProduct5,  showBadge: false, primaryIconSrc: "" },
  { label: "Blue Flower",     slug: "blue-flower",     count: 26, priceRange: "£999 – 19,999", imageSrc: arraishProduct6,  showBadge: true,  primaryIconSrc: "https://c.animaapp.com/mmu1yta2SFboEj/assets/icon-26.svg" },
  { label: "Blue Celico",     slug: "blue-celico",     count: 12, priceRange: "£1,199 – 4,999", imageSrc: arraishProduct3,  showBadge: false, primaryIconSrc: "" },
  { label: "Spring Pattern",  slug: "spring-pattern",  count: 2,  priceRange: "£3,999 – 4,499", imageSrc: arraishProduct4,  showBadge: false, primaryIconSrc: "" },
  { label: "Slightly Broken", slug: "slightly-broken", count: 8,  priceRange: "£3 – £15",               imageSrc: blueFelicityKarahiSet,  showBadge: false, primaryIconSrc: "" },
];
