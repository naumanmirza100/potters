# ARRAISH.COM - PRODUCT EXPORT ANALYSIS
## Complete Summary Report

Generated from: `products_export_1 (3).csv`
Total Records: 462

---

## OVERVIEW STATISTICS

| Metric | Value |
|--------|-------|
| **Total Products** | 462 |
| **Unique Categories** | 84 |
| **Main Category Groups** | 11 |
| **Products with Images** | 462 (100%) |
| **Products with Pricing** | 462 (100%) |
| **Products on Sale** | 0 |

---

## PRICING ANALYSIS

| Metric | Value |
|--------|-------|
| **Minimum Price** | $4.82 |
| **Maximum Price** | $460.00 |
| **Average Price** | $48.92 |
| **Median Price** | $45.00 |

### Price Distribution
- **Under $20**: 25 products (5.4%)
- **$20 - $50**: 259 products (56.1%)
- **$50 - $100**: 153 products (33.1%)
- **$100+**: 25 products (5.4%)

---

## CATEGORY DISTRIBUTION

### Main Categories (by product count)
1. **Home & Garden** - 414 products (89.6%)
2. **Apparel & Accessories** - 18 products (3.9%)
3. **Office Supplies** - 14 products (3.0%)
4. **Arts & Entertainment** - 3 products (0.6%)
5. **Food, Beverages & Tobacco** - 3 products (0.6%)
6. **Toys & Games** - 3 products (0.6%)
7. **Health & Beauty** - 3 products (0.6%)
8. **Religious & Ceremonial** - 1 product
9. **Vehicles & Parts** - 1 product
10. **Animals & Pet Supplies** - 1 product
11. **Hardware** - 1 product

### Top 15 Detailed Categories
1. **Home & Garden > Decor > Vases** - 58 products
2. **Home & Garden > Kitchen & Dining > Tableware > Serveware** - 46 products
3. **Home & Garden > Kitchen & Dining > Tableware > Serveware > Serving Platters** - 29 products
4. **Home & Garden > Kitchen & Dining > Tableware > Dinnerware > Plates** - 21 products
5. **Home & Garden > Decor > Decorative Trays** - 21 products
6. **Home & Garden > Kitchen & Dining > Tableware > Dinnerware > Dinnerware Sets** - 19 products
7. **Home & Garden > Kitchen & Dining > Tableware > Dinnerware > Bowls** - 18 products
8. **Home & Garden > Kitchen & Dining > Tableware > Coffee & Tea Sets > Tea Sets** - 17 products
9. **Home & Garden > Decor > Decorative Plates** - 14 products
10. **Home & Garden > Lighting > Lamps** - 12 products
11. **Apparel & Accessories > Jewelry > Watches** - 12 products
12. **Home & Garden > Smoking Accessories > Ashtrays** - 11 products
13. **Home & Garden > Decor** - 9 products
14. **Home & Garden > Lighting > Lamps > Table Lamps** - 8 products
15. **Office Supplies > Filing & Organization > Desk Organizers > Pen Holders** - 8 products

---

## DATA FIELDS EXTRACTED

For each product, the following information was extracted:

1. **Product Title/Name** - Full product name
2. **Handle/Slug** - URL-friendly product identifier
3. **Variant Price** - Current selling price
4. **Variant Compare At Price** - Original/sale comparison price (if available)
5. **Image Src** - Full image URL from Shopify CDN
6. **Product Category** - Complete category hierarchy
7. **SKU** - Stock Keeping Unit (if available)
8. **Type** - Product type classification (if available)

---

## SAMPLE PRODUCTS

### 1. Mug Large - Set of 2
- **Handle**: mug-large-set-of-2
- **Price**: $28.00
- **Category**: Home & Garden > Kitchen & Dining > Tableware > Coffee & Tea Sets > Tea Sets
- **Image**: https://cdn.shopify.com/s/files/1/0864/7006/6210/files/MugLarge-Setof2.jpg

### 2. Antique Small Bowl - Set of 2
- **Handle**: antique-small-bowl-set-of-2
- **Price**: $44.00
- **Category**: Home & Garden > Kitchen & Dining > Tableware > Dinnerware > Bowls
- **Image**: https://cdn.shopify.com/s/files/1/0864/7006/6210/files/4BFB1262-9788-4195-8636-72C96A19B9B6.jpg

### 3. Blue Pattern Large Square Dish
- **Handle**: blue-pattern-large-square-dish
- **Price**: $30.00
- **Category**: Home & Garden > Kitchen & Dining > Tableware > Serveware > Serving Platters
- **Image**: https://cdn.shopify.com/s/files/1/0864/7006/6210/files/987276C9-CD89-406B-A775-371A0EBBDCB6.jpg

---

## KEY FINDINGS

### Product Focus
- **89.6%** of products fall under the Home & Garden category
- Primary focus is on kitchen and dining tableware (vases, plates, bowls, serving dishes)
- Strong emphasis on decorative and functional home items

### Pricing Strategy
- **56.1%** of products are priced between $20-$50 (mid-range focus)
- Average price point of $48.92 indicates premium/artisanal positioning
- No current sale pricing - all products at regular price
- Price range includes both budget items ($4.82) and premium pieces ($460)

### Image Coverage
- **100%** product coverage with images
- All images hosted on Shopify CDN with consistent URL structure
- Good data quality with no missing image URLs

### Data Quality
- Complete pricing data for all products
- All products have unique handles for URL identification
- Comprehensive category taxonomy with up to 5 levels of hierarchy
- No missing critical product information

---

## EXPORT FILES GENERATED

The following files have been created with product data:

1. **products_export.json** - All 462 products in JSON format
2. **products_detailed.json** - Detailed product information with parsed prices
3. **products_summary.csv** - Summary CSV with key fields for quick reference
4. **products_by_category.json** - Products organized by category hierarchy
5. **analyze_products.py** - Analysis script used for this report

---

## CATEGORY CLASSIFICATION NOTES

Products are classified based on the Shopify Google Shopping taxonomy:

- **Vases** (most popular): Category for decorative and functional flower/plant containers
- **Serveware**: Platters, bowls, dishes for serving food
- **Dinnerware**: Place settings, plates, bowls for dining
- **Tableware**: Complete dining category including drinkware, serveware, dinnerware
- **Decorative Items**: Trays, plates, figurines, sculptures for home decoration
- **Lighting**: Lamps, fixtures, and lighting accessories
- **Jewelry**: Watches and accessories in the apparel category

---

## RECOMMENDATIONS

### For Integration
- Use the `Handle` field for URL slugs and system identifiers
- Leverage the 5-level category hierarchy for comprehensive filtering
- Image URLs are all active and ready for display
- Prices are pre-formatted as currency values

### For Marketing
- Strong positioning in home & garden market
- Opportunity to emphasize artisanal/decorative home category
- Mid-range pricing ($20-$50) appeals to middle-market consumers
- Wide price range ($4.82-$460) allows for upselling strategies

### Data Files Location
All extracted and analysis files are saved in the workspace:
- `/workspace/products_detailed.json`
- `/workspace/products_summary.csv`
- `/workspace/products_by_category.json`

