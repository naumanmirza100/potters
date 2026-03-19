import csv
import json
from collections import defaultdict

# Read CSV
products = []
with open('c:\\Users\\HP\\Downloads\\products_export_1 (3).csv', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        products.append(row)

# Analyze categories
categories = defaultdict(int)
main_categories = defaultdict(int)
prices = []

for p in products:
    cat = p['Product Category']
    categories[cat] += 1
    
    main_cat = cat.split(' > ')[0]
    main_categories[main_cat] += 1
    
    if p['Variant Price']:
        try:
            prices.append(float(p['Variant Price']))
        except:
            pass

print('=' * 80)
print('PRODUCT EXPORT - COMPREHENSIVE ANALYSIS')
print('=' * 80)
print()
print('OVERVIEW:')
print(f'  Total Products: {len(products)}')
print(f'  Total Unique Categories: {len(categories)}')
print(f'  Products with Pricing: {len(prices)}')
print()

if prices:
    print('PRICING STATISTICS:')
    print(f'  Min Price: ${min(prices):.2f}')
    print(f'  Max Price: ${max(prices):.2f}')
    print(f'  Average Price: ${sum(prices)/len(prices):.2f}')
    prices_sorted = sorted(prices)
    median = prices_sorted[len(prices_sorted)//2]
    print(f'  Median Price: ${median:.2f}')
    print()
    
    print('PRICE DISTRIBUTION:')
    under_20 = len([p for p in prices if p < 20])
    price_20_50 = len([p for p in prices if 20 <= p < 50])
    price_50_100 = len([p for p in prices if 50 <= p < 100])
    over_100 = len([p for p in prices if p >= 100])
    print(f'  Under $20: {under_20} products')
    print(f'  $20-$50: {price_20_50} products')
    print(f'  $50-$100: {price_50_100} products')
    print(f'  $100+: {over_100} products')
    print()

print('TOP 15 MAIN CATEGORIES:')
for cat, count in sorted(main_categories.items(), key=lambda x: x[1], reverse=True)[:15]:
    print(f'  {cat}: {count} products')
print()

print('TOP 15 DETAILED CATEGORIES:')
for cat, count in sorted(categories.items(), key=lambda x: x[1], reverse=True)[:15]:
    print(f'  {cat}: {count} products')
print()

# Check for discounts
discounted = 0
for p in products:
    if p['Variant Compare At Price'] and p['Variant Compare At Price'].strip():
        discounted += 1

print('DISCOUNT INFORMATION:')
print(f'  Products with Sale Price: {discounted}')
print(f'  Regular Priced Products: {len(products) - discounted}')
print()

# Check images
with_images = len([p for p in products if p['Image Src'] and p['Image Src'].strip()])
print('IMAGE COVERAGE:')
print(f'  Products with Images: {with_images}')
print(f'  Products without Images: {len(products) - with_images}')
print()

# Sample products
print('SAMPLE PRODUCTS (First 10):')
print('-' * 80)
for i, p in enumerate(products[:10], 1):
    print(f'{i}. {p["Title"]}')
    print(f'   Handle: {p["Handle"]}')
    print(f'   Price: ${p["Variant Price"]}')
    if p['Variant Compare At Price']:
        print(f'   Compare At Price: ${p["Variant Compare At Price"]}')
    print(f'   Category: {p["Product Category"]}')
    print(f'   Image: {p["Image Src"][:70]}...' if len(p['Image Src']) > 70 else f'   Image: {p["Image Src"]}')
    print()
