import csv
import json

# Read CSV
products = []
with open('c:\\Users\\HP\\Downloads\\products_export_1 (3).csv', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        products.append(row)

# Create detailed product list
detailed_products = []
for p in products:
    detailed_products.append({
        'title': p['Title'],
        'handle': p['Handle'],
        'price': float(p['Variant Price']) if p['Variant Price'] else None,
        'compare_at_price': float(p['Variant Compare At Price']) if p['Variant Compare At Price'] and p['Variant Compare At Price'].strip() else None,
        'image_url': p['Image Src'],
        'category': p['Product Category'],
        'sku': p.get('Variant SKU', ''),
        'type': p.get('Type', ''),
    })

# Save to JSON
with open('products_detailed.json', 'w', encoding='utf-8') as f:
    json.dump(detailed_products, f, indent=2, ensure_ascii=False)

print(f"Created products_detailed.json with {len(detailed_products)} products")

# Also create a CSV summary
with open('products_summary.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=['Title', 'Handle', 'Price', 'Original_Price', 'Category', 'Image_URL'])
    writer.writeheader()
    for p in products:
        writer.writerow({
            'Title': p['Title'],
            'Handle': p['Handle'],
            'Price': p['Variant Price'],
            'Original_Price': p['Variant Compare At Price'],
            'Category': p['Product Category'],
            'Image_URL': p['Image Src'][:100] + '...' if len(p['Image Src']) > 100 else p['Image Src']
        })

print("Created products_summary.csv")

# Create category analysis
from collections import defaultdict

categories_detail = defaultdict(list)
for p in products:
    categories_detail[p['Product Category']].append({
        'title': p['Title'],
        'handle': p['Handle'],
        'price': float(p['Variant Price']) if p['Variant Price'] else None,
    })

# Save category analysis
with open('products_by_category.json', 'w', encoding='utf-8') as f:
    cat_dict = {}
    for cat, prods in sorted(categories_detail.items()):
        cat_dict[cat] = {
            'count': len(prods),
            'products': prods
        }
    json.dump(cat_dict, f, indent=2, ensure_ascii=False)

print("Created products_by_category.json")
print(f"Total categories: {len(categories_detail)}")
