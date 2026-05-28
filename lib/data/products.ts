import { Product } from '@/types';

export const products: Product[] = [
  { 
    id: 1,
    name: "Heavy Duty Coolant", 
    category: "coolant",
    description: "Advanced brown formula for heavy-duty applications and commercial vehicles.",
    image: "/images/boss-coolant-brown-front.png",
    features: ["High-performance formula", "Extended life", "Superior protection", "Racing approved"],
    specifications: {
      "Volume": "Available in multiple sizes",
      "Type": "OAT Technology",
      "Color": "Brown",
      "Freezing Point": "-40°C",
      "Boiling Point": "110°C"
    }
  },
  { 
    id: 2,
    name: "High Coolant", 
    category: "coolant",
    description: "Premium yellow coolant for superior engine protection with advanced heat transfer properties.",
    image: "/images/boss-coolant-yellow-front.png",
    features: ["Long-lasting protection", "All engine types", "Temperature resistant", "Corrosion prevention"],
    specifications: {
      "Volume": "Available in multiple sizes",
      "Type": "Ethylene Glycol Based",
      "Color": "Yellow",
      "Freezing Point": "-37°C",
      "Boiling Point": "108°C"
    }
  },
  { 
    id: 3,
    name: "Coolant", 
    category: "coolant",
    description: "Classic green coolant for all vehicle types with proven reliability.",
    image: "/images/boss-coolant-green-front.png",
    features: ["Commercial grade", "Heavy duty protection", "Extended intervals", "Fleet approved"],
    specifications: {
      "Volume": "Available in multiple sizes",
      "Type": "Hybrid Technology",
      "Color": "Green",
      "Freezing Point": "-42°C",
      "Boiling Point": "112°C"
    }
  },
  { 
    id: 4,
    name: "Ready to Use Coolant", 
    category: "coolant",
    description: "High-performance red coolant for modern engines and extreme conditions.",
    image: "/images/boss-coolant-red-front.png",
    features: ["All-weather protection", "Year-round use", "Versatile formula", "Cost-effective"],
    specifications: {
      "Volume": "Available in multiple sizes",
      "Type": "Universal",
      "Color": "Red",
      "Freezing Point": "-38°C",
      "Boiling Point": "109°C"
    }
  },
  { 
    id: 5,
    name: "1 Liter Bottle", 
    category: "packaging",
    description: "Convenient 1L bottle perfect for personal vehicles and easy storage.",
    image: "/images/1ltr bottle.png",
    features: ["99.9% pure water", "Zero mineral content", "Battery safe", "Prevents corrosion"],
    specifications: {
      "Volume": "1 Liter",
      "Type": "Distilled Water",
      "Packaging": "Plastic Bottle",
      "Purity": "99.9%",
      "pH Level": "6.0 - 9.0",
      "Shelf Life": "1 Year"
    }
  },
  { 
    id: 6,
    name: "5 Liter Bottle", 
    category: "packaging",
    description: "Economy 5L bottle for cost-effective battery maintenance.",
    image: "/images/5ltr bottle.png",
    features: ["High purity", "Non-toxic", "Eco-friendly", "Safe for batteries"],
    specifications: {
      "Volume": "5 Liters",
      "Type": "Distilled Water",
      "Packaging": "Plastic Bottle",
      "Purity": "99.9%",
      "pH Level": "6.0 - 9.0",
      "Shelf Life": "1 Year"
    }
  },
  { 
    id: 7,
    name: "5 Liter Can", 
    category: "packaging",
    description: "Industrial 5L plastic can designed for commercial and workshop use.",
    image: "/images/5ltr-can.png",
    features: ["Industrial grade", "Extended purity", "Low maintenance", "Cost savings"],
    specifications: {
      "Volume": "5 Liters",
      "Type": "Distilled Water",
      "Packaging": "Plastic Can",
      "Purity": "99.9%",
      "pH Level": "6.0 - 9.0",
      "Shelf Life": "1 Year"
    }
  },
  { 
    id: 8,
    name: "1000 Liter Tank", 
    category: "packaging",
    description: "Bulk 1000L tank for fleet operations and large-scale industrial applications.",
    image: "/images/1000ltr tank.png",
    features: ["Bulk supply", "Fleet operations", "Cost-effective", "Industrial grade"],
    specifications: {
      "Volume": "1000 Liters",
      "Type": "Distilled Water",
      "Packaging": "Plastic Tank",
      "Purity": "99.9%",
      "pH Level": "6.0 - 9.0",
      "Shelf Life": "6 Months"
    }
  },
  { 
    id: 9,
    name: "Battery Acid", 
    category: "acid",
    description: "High-grade battery acid for automotive and industrial battery applications.",
    image: "/images/product-9.png",
    features: ["High purity", "Optimal concentration", "Battery performance", "Industrial grade"],
    specifications: {
      "Volume": "Available in multiple sizes",
      "Type": "Sulfuric Acid",
      "Concentration": "Specific Gravity 1.280",
      "Purity": "Battery Grade",
      "pH Level": "< 1.0",
      "Shelf Life": "1 Year"
    }
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};
