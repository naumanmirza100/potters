import csv
import json
from pathlib import Path
from urllib.parse import urlparse
from collections import defaultdict

# Existing Arraish image URLs (what's already in the system)
existing_arraish_images = {
    'arraishProduct1', 'arraishProduct2', 'arraishProduct3', 'arraishProduct4',
    'arraishProduct5', 'arraishProduct6', 'arraishProduct7', 'arraishProduct8',
    'arraishProduct9', 'arrayishImage1', 'arrayishImage2', 'arrayishImage3',
    'arrayishImage4', 'arrayishImage5', 'arrayishImage6', 'arrayishImage7',
    'arrayishImage8', 'arrayishImage9', 'arrayishImage10', 'arrayishImage11',
    'arrayishImage12', 'arraishTranquilityBowl', 'arraishDinnerSet',
    'blueFelicityRoundPlatterLarge', 'blueFelicityDinnerPlate', 'blueFelicityBowlWithCap',
    'blueFelicityFlatDish', 'blueFelicityRaitaDish', 'blueFelicityTeaSet',
    'blueFelicityBigPlanter', 'blueFelicityAromaticWarmer', 'blueFelicityKarahiSet',
    'blueFelicityHandiSmall', 'MugLargeSetof2'
}

# Category mapping for the Arraish system
category_mapping = {
    'Bowls': 'Bowls',
    'Plates & Platters': 'Plates & Platters',
    'Tea Sets': 'Tea Sets',
    'Karahis': 'Karahis',
    'Dinner Sets': 'Dinner Sets',
    'Serving Dishes': 'Serving Dishes',
    'Coffee Mugs': 'Tea Sets',
    'Plates': 'Plates & Platters',
    'Platters': 'Plates & Platters',
    'Ceramics': 'Serving Dishes',
    'Kitchen & Dining': 'Serving Dishes',
}

csv_file = r"c:\Users\HP\Downloads\products_export_1 (3).csv"

# Track seen image URLs to identify unique ones
seen_images = {}
unique_products = []
image_url_count = defaultdict(list)

print(f"Reading CSV file: {csv_file}")
print("Extracting products with unique image URLs...\n")

try:
    with open(csv_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        
        for idx, row in enumerate(reader, 1):
            if idx > 1 and idx % 1000 == 0:
                print(f"Processed {idx} rows...")
            
            try:
                title = row.get('Title', '').strip()
                image_src = row.get('Image Src', '').strip()
                product_category = row.get('Product Category', '').strip()
                price = row.get('Variant Price', '').strip()
                
                # Skip if essential fields are missing
                if not title or not image_src or not price:
                    continue
                
                # Extract filename from URL for comparison
                url_filename = urlparse(image_src).path.split('/')[-1]
                
                # Check if this image is unique (not in existing Arraish collection)
                is_unique = True
                for existing_img in existing_arraish_images:
                    if existing_img.lower() in image_src.lower() or image_src.lower() in existing_img.lower():
                        is_unique = False
                        break
                
                # Track this image
                if image_src not in seen_images:
                    seen_images[image_src] = {
                        'title': title,
                        'category': product_category,
                        'price': price,
                        'is_unique': is_unique
                    }
                    image_url_count[image_src].append(title)
                    
                    # Add to unique if not previously used
                    if is_unique:
                        # Map category
                        mapped_category = category_mapping.get(product_category, product_category)
                        
                        unique_products.append({
                            'title': title,
                            'imageUrl': image_src,
                            'category': mapped_category,
                            'originalCategory': product_category,
                            'price': price,
                            'collectionType': 'Blue Pattern' if 'blue' in title.lower() else 
                                            'Antique' if 'antique' in title.lower() else
                                            'Other Collections'
                        })
                else:
                    image_url_count[image_src].append(title)
                    
            except Exception as e:
                print(f"Error processing row {idx}: {e}")
                continue
    
    # Filter for products from Blue Pattern, Antique, and other collections
    filtered_products = []
    for product in unique_products:
        if product['collectionType'] in ['Blue Pattern', 'Antique', 'Other Collections']:
            filtered_products.append(product)
    
    # Group by category
    products_by_category = defaultdict(list)
    for product in filtered_products:
        products_by_category[product['category']].append(product)
    
    # Create final JSON output
    output = {
        'summary': {
            'total_unique_products': len(filtered_products),
            'categories_found': list(products_by_category.keys()),
            'collections': ['Blue Pattern', 'Antique', 'Other Collections']
        },
        'productsByCategory': dict(products_by_category),
        'allUniqueProducts': filtered_products
    }
    
    print(f"\n✓ Successfully extracted {len(filtered_products)} unique products")
    print(f"Categories found: {', '.join(products_by_category.keys())}\n")
    
    # Save to JSON file
    output_file = Path(r"d:\download\www.arraish.com_uairke\extracted_unique_products.json")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"✓ Saved to: {output_file}")
    
    # Print summary
    print("\n" + "="*70)
    print("UNIQUE PRODUCTS SUMMARY BY CATEGORY")
    print("="*70)
    
    for category in sorted(products_by_category.keys()):
        products = products_by_category[category]
        print(f"\n{category}: ({len(products)} products)")
        print("-" * 70)
        for prod in products[:5]:  # Show first 5 per category
            print(f"  • {prod['title'][:60]}")
            print(f"    Price: {prod['price']}")
            print(f"    Collection: {prod['collectionType']}")
        if len(products) > 5:
            print(f"  ... and {len(products) - 5} more")
    
except Exception as e:
    print(f"Error reading CSV: {e}")
    import traceback
    traceback.print_exc()
