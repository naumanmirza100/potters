// Image utility for finding the best available image for a product

const categoryImageMap: Record<string, string[]> = {
  plate: [
    'blue-pattern-quarter-plate.jpg',
    'blue-pattern-dinner-plate.jpg',
    'ayat_plate.webp',
    'decorative-plate-iznik-art-with-floral-design.jpg',
    'decorative-plate-iznik-art-with-flower-design.jpg',
    'ecorate-plate-iznik-art.jpg',
    'decorative-plate-iznik-art-in-blue.jpg',
    'iconic_blue_medium_round_platter_pizza_plate_blue_pottery.webp',
    'white_floral_large_round_platter_pizza_plate_blue_pottery.webp',
  ],
  platter: [
    'antique_dark_blue_platter_large.jpg',
    'blue_flower_big_round_platter.webp',
    'blue_pottery_triangle_platter_01.webp',
    'ocean_blue_deep_pizza_platter.webp',
    'ocean_blue_large_pizza_platter.webp',
    'special_large_platter_calligraphy_v.webp',
  ],
  bowl: [
    'blue_felicity_large_bowl.webp',
    'blue_flower_bowl_with_cap.jpg',
    'blue_pottery_curry_bowl.webp',
    'deep_square_bowl.webp',
    'handmade_blue_pottery_bowls.webp',
    'handmade_ceramics_curry_bowl_with_lid.webp',
    'onyx_bowl.webp',
    'yogurt_bowl.webp',
  ],
  serving: [
    'blue-pattern-large-serving-dish.jpg',
    'blue-pattern-medium-serving-dish.jpg',
    'blue-pattern-small-serving-dish.jpg',
    'blue_celico_round_serving_dish.webp',
    'blue_celico_serving_dish.webp',
    'blue_felicity_long_serving_dish.webp',
    'blue_felicity_serving_dish.webp',
    'blue_flower_large_serving_dish.webp',
    'ocean_blue_serving_dish.webp',
  ],
  karahi: [
    'classic_blue_karahi_traditional_wok_blue_pottery.webp',
    'jungle_flower_ceramic_large_karahi.webp',
    'jungle_flower_ceramic_small_karahi.webp',
    'tranquility_large_ceramic_karahi.webp',
    'white_floral_karahi_traditional_wok_blue_pottery.webp',
  ],
  tea_set: [
    'breeze_blue_tea_set.webp',
    'serina_blue_tea_set.webp',
    'serina_blue_tea_set_1.webp',
    'tranquility_tea_set.webp',
    'traditional_blue_pottery_tea_set.webp',
  ],
};

function getRandomImage(imageList: string[]): string {
  if (imageList.length === 0) return '/assets/images/royalimages/blue-pattern-quarter-plate.jpg';
  return '/assets/images/royalimages/' + imageList[Math.floor(Math.random() * imageList.length)];
}

export function resolveProductImage(productName: string, imageAttempt?: string): string {
  const lowerName = productName.toLowerCase();

  // If provided image exists in public folder, use it
  if (imageAttempt && imageAttempt.includes('/assets/images/royalimages/')) {
    // For now, assume it's valid - the browser will handle 404
    return imageAttempt;
  }

  // Determine category from product name
  if (lowerName.includes('plate') || lowerName.includes('platter')) {
    if (lowerName.includes('platter')) {
      return getRandomImage(categoryImageMap.platter);
    }
    return getRandomImage(categoryImageMap.plate);
  }

  if (lowerName.includes('bowl')) {
    return getRandomImage(categoryImageMap.bowl);
  }

  if (lowerName.includes('serving') || (lowerName.includes('dish') && !lowerName.includes('platter'))) {
    return getRandomImage(categoryImageMap.serving);
  }

  if (lowerName.includes('karahi') || lowerName.includes('handi')) {
    return getRandomImage(categoryImageMap.karahi);
  }

  if (lowerName.includes('tea set') || lowerName.includes('tea') && lowerName.includes('set')) {
    return getRandomImage(categoryImageMap.tea_set);
  }

  // Default fallback
  return getRandomImage(categoryImageMap.plate);
}
