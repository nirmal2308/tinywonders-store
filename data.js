// data.js - Product Catalog and Store Data for TinyWonders
window.CATEGORIES = [
  "Soft Toys",
  "Puzzles",
  "Board Games",
  "Remote Control",
  "Building Blocks",
  "Educational",
  "Dolls"
];

window.OCCASIONS = [
  "Diwali",
  "Christmas",
  "Pongal",
  "Birthday",
  "Back to School"
];

window.AGE_GROUPS = ["0-2", "3-5", "6-8", "9+"];

window.OCCASION_COLORS = {
  "Diwali": "#FF9933",
  "Christmas": "#C41E3A",
  "Pongal": "#2E8B57",
  "Birthday": "#FF6B9D",
  "Back to School": "#4A90D9"
};

window.PRODUCTS = [
  {
    id: 1,
    name: "Wooden Rainbow Stacker & Arch",
    price: 799,
    originalPrice: 999,
    category: "Building Blocks",
    occasions: ["Birthday", "Back to School"],
    ageGroup: "0-2",
    rating: 4.8,
    reviewCount: 64,
    stock: 15,
    description: "Handcrafted natural pine wood arches finished in child-safe water-based paints. Encourages open-ended sensory play, size sorting, and creative structural balance.",
    tags: ["bestseller", "eco-friendly"],
    images: ["images/p1.jpg", "images/p1_side.jpg", "images/p1_box.jpg", "images/p1_play.jpg"]
  },
  {
    id: 2,
    name: "Plush Baby Elephant Balaram",
    price: 549,
    originalPrice: 699,
    category: "Soft Toys",
    occasions: ["Diwali", "Birthday"],
    ageGroup: "0-2",
    rating: 4.9,
    reviewCount: 112,
    stock: 22,
    description: "Ultra-cuddly organic cotton exterior with gentle rattle bell inside. Perfectly sized for tiny infant hugs and restful naps, embroidered with Indian festive motif.",
    tags: ["bestseller"],
    images: ["images/p2.jpg", "images/p2_side.jpg", "images/p2_box.jpg", "images/p2_play.jpg"]
  },
  {
    id: 3,
    name: "Magnetic Illustrated India Map Puzzle",
    price: 1199,
    originalPrice: 1499,
    category: "Puzzles",
    occasions: ["Back to School", "Birthday"],
    ageGroup: "6-8",
    rating: 4.7,
    reviewCount: 48,
    stock: 14,
    description: "Explore 28 states and 8 union territories with colourful magnetic pieces depicting folk dances, wildlife, and iconic monuments. Sturdy wooden display base.",
    tags: ["educational", "popular"],
    images: ["images/p3.jpg", "images/p3_side.jpg", "images/p3_box.jpg", "images/p3_play.jpg"]
  },
  {
    id: 4,
    name: "Classic Championship Carrom Board 32\"",
    price: 2499,
    originalPrice: 2899,
    category: "Board Games",
    occasions: ["Diwali", "Pongal"],
    ageGroup: "9+",
    rating: 4.6,
    reviewCount: 89,
    stock: 8,
    description: "Tournament grade English Birch plywood surface with thick Assam cane borders. Comes with tournament striker, premium wooden coins, and smooth boric powder.",
    tags: ["festive favorite"],
    images: ["images/p4.jpg", "images/p4_side.jpg", "images/p4_box.jpg", "images/p4_play.jpg"]
  },
  {
    id: 5,
    name: "RC Thunder 4WD Off-Road Monster Buggy",
    price: 1899,
    originalPrice: 2499,
    category: "Remote Control",
    occasions: ["Birthday", "Christmas"],
    ageGroup: "6-8",
    rating: 4.5,
    reviewCount: 76,
    stock: 10,
    description: "High-torque shock-absorbing rubber crawler wheels with 2.4GHz interference-free transmitter. Reaches up to 20 km/h with rechargeable USB Li-ion battery.",
    tags: ["action", "hot deal"],
    images: ["images/p5.jpg", "images/p5_side.jpg", "images/p5_box.jpg", "images/p5_play.jpg"]
  },
  {
    id: 6,
    name: "My First Musical Wooden Alphabet Train",
    price: 649,
    originalPrice: 849,
    category: "Educational",
    occasions: ["Birthday", "Pongal"],
    ageGroup: "3-5",
    rating: 4.8,
    reviewCount: 52,
    stock: 18,
    description: "Interchangeable alphabet carriages with smooth roll-along wheels and melodic bell chime on the steam engine. Teaches phonetics and motor sequencing.",
    tags: ["new"],
    images: ["images/p6.jpg", "images/p6_side.jpg", "images/p6_box.jpg", "images/p6_play.jpg"]
  },
  {
    id: 7,
    name: "Traditional Ananya Fabric Rag Doll",
    price: 499,
    originalPrice: 599,
    category: "Dolls",
    occasions: ["Diwali", "Pongal", "Birthday"],
    ageGroup: "3-5",
    rating: 4.6,
    reviewCount: 39,
    stock: 16,
    description: "Lovingly crafted with spun pure khadi cotton dress, embroidered face, and soft yarn braids. Hypoallergenic, washable, and gentle on sensitive skin.",
    tags: ["handcrafted"],
    images: ["images/p7.jpg", "images/p7_side.jpg", "images/p7_box.jpg", "images/p7_play.jpg"]
  },
  {
    id: 8,
    name: "Master Architect 500-Piece Brick Set",
    price: 1599,
    originalPrice: 1999,
    category: "Building Blocks",
    occasions: ["Christmas", "Birthday"],
    ageGroup: "6-8",
    rating: 4.7,
    reviewCount: 93,
    stock: 25,
    description: "Precision-molded universal interlocking bricks in vivid festive tones. Includes wheels, windows, doors, and mini figurines for unlimited architectural builds.",
    tags: ["stem", "bestseller"],
    images: ["images/p8.jpg", "images/p8_side.jpg", "images/p8_box.jpg", "images/p8_play.jpg"]
  },
  {
    id: 9,
    name: "Musical Crib Mobile with Starry Projector",
    price: 1299,
    originalPrice: 1699,
    category: "Educational",
    occasions: ["Birthday"],
    ageGroup: "0-2",
    rating: 4.9,
    reviewCount: 68,
    stock: 9,
    description: "Gentle Indian classical lullabies combined with soft ceiling star constellations. Auto-shutoff timer with soothing rotating plush cloud figures.",
    tags: ["sensory"],
    images: ["images/p9.jpg", "images/p9_side.jpg", "images/p9_box.jpg", "images/p9_play.jpg"]
  },
  {
    id: 10,
    name: "Motorized Solar System Planetarium Kit",
    price: 1399,
    originalPrice: 1799,
    category: "Educational",
    occasions: ["Back to School", "Birthday"],
    ageGroup: "9+",
    rating: 4.8,
    reviewCount: 81,
    stock: 11,
    description: "Build and paint rotating planetary orbits with central Sun LED lamp. Includes detailed bilingual space exploration booklet and constellation projection dome.",
    tags: ["stem", "featured"],
    images: ["images/p10.jpg", "images/p10_side.jpg", "images/p10_box.jpg", "images/p10_play.jpg"]
  },
  {
    id: 11,
    name: "Carved Sheesham Wood Deluxe Chess Set",
    price: 2199,
    originalPrice: 2699,
    category: "Board Games",
    occasions: ["Diwali", "Christmas"],
    ageGroup: "9+",
    rating: 4.9,
    reviewCount: 104,
    stock: 7,
    description: "14-inch folding wooden chessboard with velvet-lined storage slots for hand-carved weighted Staunton pieces. Heirloom quality Indian craftsmanship.",
    tags: ["collector"],
    images: ["images/p11.jpg", "images/p11_side.jpg", "images/p11_box.jpg", "images/p11_play.jpg"]
  },
  {
    id: 12,
    name: "Diwali Festive Sparkle Art & Diya Painting Kit",
    price: 399,
    originalPrice: 499,
    category: "Educational",
    occasions: ["Diwali"],
    ageGroup: "3-5",
    rating: 4.9,
    reviewCount: 134,
    stock: 35,
    description: "Contains 6 handcrafted terracotta diyas, 12 non-toxic metallic acrylic pots, eco-glitter powder, brushes, and rangoli stencil cards.",
    tags: ["seasonal hit"],
    images: ["images/p12.jpg", "images/p12_side.jpg", "images/p12_box.jpg", "images/p12_play.jpg"]
  },
  {
    id: 13,
    name: "Robo-Rover STEM Programmable Kit",
    price: 2899,
    originalPrice: 3299,
    category: "Educational",
    occasions: ["Back to School", "Christmas"],
    ageGroup: "9+",
    rating: 4.8,
    reviewCount: 41,
    stock: 6,
    description: "Step-by-step modular robotics with ultrasonic obstacle detection and line-following sensors. Program with easy drag-and-drop mobile block coding.",
    tags: ["coding", "stem"],
    images: ["images/p13.jpg", "images/p13_side.jpg", "images/p13_box.jpg", "images/p13_play.jpg"]
  },
  {
    id: 14,
    name: "Eco Organic Cotton Animal Rattle Duo",
    price: 349,
    originalPrice: 449,
    category: "Soft Toys",
    occasions: ["Pongal", "Birthday"],
    ageGroup: "0-2",
    rating: 4.7,
    reviewCount: 57,
    stock: 20,
    description: "Soft tactile sensory teething rings shaped like friendly tiger and deer calves. Natural vegetable dyes, 100% GOTS certified cotton yarn.",
    tags: ["eco-friendly"],
    images: ["images/p14.jpg", "images/p14_side.jpg", "images/p14_box.jpg", "images/p14_play.jpg"]
  },
  {
    id: 15,
    name: "Wonders of India 250-Piece Floor Jigsaw",
    price: 699,
    originalPrice: 899,
    category: "Puzzles",
    occasions: ["Pongal", "Back to School"],
    ageGroup: "6-8",
    rating: 4.6,
    reviewCount: 62,
    stock: 19,
    description: "Extra-thick chipboard pieces depicting the Taj Mahal, Hawa Mahal, Western Ghats biodiversity, and classical Indian arts. Non-glare matte finish.",
    tags: ["educational"],
    images: ["images/p15.jpg", "images/p15_side.jpg", "images/p15_box.jpg", "images/p15_play.jpg"]
  },
  {
    id: 16,
    name: "Little Chef Wooden Kitchen & Spice Pantry",
    price: 2799,
    originalPrice: 3499,
    category: "Dolls",
    occasions: ["Christmas", "Birthday"],
    ageGroup: "3-5",
    rating: 4.8,
    reviewCount: 77,
    stock: 5,
    description: "Complete mini wooden modular kitchen with rolling pin, dosa pan, masala spice box with removable magnetic condiments, and click-turn knobs.",
    tags: ["pretend play"],
    images: ["images/p16.jpg", "images/p16_side.jpg", "images/p16_box.jpg", "images/p16_play.jpg"]
  },
  {
    id: 17,
    name: "Drift King Speed RC Racing Formula Car",
    price: 1499,
    originalPrice: 1799,
    category: "Remote Control",
    occasions: ["Birthday", "Christmas"],
    ageGroup: "6-8",
    rating: 4.4,
    reviewCount: 38,
    stock: 0, // out of stock
    description: "Sleek aerodynamic Formula 1 styling with working LED underglow headlights, smoke mist exhaust effect, and 360-degree high-speed stunt spin.",
    tags: ["popular"],
    images: ["images/p17.jpg", "images/p17_side.jpg", "images/p17_box.jpg", "images/p17_play.jpg"]
  },
  {
    id: 18,
    name: "Jurassic Dino Island Wooden Construction Set",
    price: 999,
    originalPrice: 1299,
    category: "Building Blocks",
    occasions: ["Birthday", "Back to School"],
    ageGroup: "3-5",
    rating: 4.6,
    reviewCount: 51,
    stock: 14,
    description: "Solid rubberwood dinosaur figures and interlocking jungle tree canopy elements. Sparks prehistoric adventures and fine motor coordination.",
    tags: ["adventure"],
    images: ["images/p18.jpg", "images/p18_side.jpg", "images/p18_box.jpg", "images/p18_play.jpg"]
  },
  {
    id: 19,
    name: "Snakes & Ladders + Ludo Double-Sided Board",
    price: 349,
    originalPrice: 449,
    category: "Board Games",
    occasions: ["Diwali", "Pongal"],
    ageGroup: "6-8",
    rating: 4.7,
    reviewCount: 95,
    stock: 30,
    description: "Classic Indian Moksha Patam (Snakes & Ladders) and Pachisi-style Ludo in water-resistant laminated wooden board with solid wooden dice and pawns.",
    tags: ["traditional", "bestseller"],
    images: ["images/p19.jpg", "images/p19_side.jpg", "images/p19_box.jpg", "images/p19_play.jpg"]
  },
  {
    id: 20,
    name: "Channapatna Balancing River Stones Set",
    price: 899,
    originalPrice: 1099,
    category: "Building Blocks",
    occasions: ["Diwali", "Birthday"],
    ageGroup: "3-5",
    rating: 4.9,
    reviewCount: 44,
    stock: 0, // out of stock
    description: "Certified authentic Channapatna lac-turnery craft polished with natural vegetable lacquer. Smooth multi-faceted stones designed for meditative stacking.",
    tags: ["heritage", "artisan"],
    images: ["images/p20.jpg", "images/p20_side.jpg", "images/p20_box.jpg", "images/p20_play.jpg"]
  }
];

window.SAMPLE_REVIEWS = [
  {
    name: "Pooja Krishnamurthy",
    rating: 5,
    date: "12 Oct 2026",
    text: "Ordered this for my daughter's 4th birthday. The wooden finish is so smooth and completely splinter-free! Truly happy to support safe, BIS certified Indian toys.",
    helpful: 24
  },
  {
    name: "Vikram Sengupta",
    rating: 5,
    date: "28 Sep 2026",
    text: "Very well packaged and arrived in Bangalore in just 2 days. The colours are pleasant pastels, no pungent plastic odor. My toddler is hooked on it everyday.",
    helpful: 19
  },
  {
    name: "Ananya Deshmukh",
    rating: 4,
    date: "04 Aug 2026",
    text: "Great quality materials. Much better than generic imported plastic toys. Only wish it came with an extra cotton drawstring storage pouch.",
    helpful: 8
  },
  {
    name: "Rajesh Nair",
    rating: 5,
    date: "18 Jul 2026",
    text: "Sturdy craftsmanship and educational depth. Our family spends every Sunday afternoon playing together. Absolutely worth the price!",
    helpful: 15
  }
];
