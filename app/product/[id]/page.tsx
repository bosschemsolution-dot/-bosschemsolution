'use client';

import { useParams } from 'next/navigation';
import { ArrowLeft, Shield, Truck, Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function ProductDetails() {
  const params = useParams();
  const id = params.id as string;
  
  const products = [
    { 
      name: "Heavy Duty Coolant", 
      description: "Advanced brown formula for heavy-duty applications and commercial vehicles.",
      image: "/images/boss-coolant-brown-front.png",
      features: ["High-performance formula", "Extended life", "Superior protection", "Racing approved"],
      specifications: {
        "Volume": "Available in multiple sizes",
        "Type": "OAT Technology",
        "Color": "Green, Red, Blue, Yellow",
        "Freezing Point": "-40°C",
        "Boiling Point": "110°C"
      }
    },
    { 
      name: "High Coolant", 
      description: "Premium yellow coolant for superior engine protection with advanced heat transfer properties.",
      image: "/images/boss-coolant-yellow-front.png",
      features: ["Long-lasting protection", "All engine types", "Temperature resistant", "Corrosion prevention"],
      specifications: {
        "Volume": "Available in multiple sizes",
        "Type": "Ethylene Glycol Based",
        "Color": "Green, Red, Blue, Yellow",
        "Freezing Point": "-37°C",
        "Boiling Point": "108°C"
      }
    },
    { 
      name: "Coolant", 
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
      name: "Ready to Use Coolant", 
      description: "High-performance red coolant for modern engines and extreme conditions.",
      image: "/images/boss-coolant-red-front.png",
      features: ["All-weather protection", "Year-round use", "Versatile formula", "Cost-effective"],
      specifications: {
        "Volume": "Available in multiple sizes",
        "Type": "Universal",
        "Color": "green",
        "Freezing Point": "-38°C",
        "Boiling Point": "109°C"
      }
    },
    { 
      name: "1 Liter Bottle", 
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
      name: "5 Liter Bottle", 
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
      name: "5 Liter Can", 
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
      name: "1000 Liter Tank", 
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
      name: "Battery Acid", 
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

  const product = products[parseInt(id) - 1] || products[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-6">
            {/* Product Image */}
            <div className="p-8">
              <div className="bg-gray-50 rounded-xl p-8 mb-4 relative h-96">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Premium Quality</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name} - Premium Engine Coolant</h1>
              
              {/* Quality Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-2 rounded-full flex items-center">
                  <CheckCircle size={14} className="mr-1" />
                  Premium Quality
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-2 rounded-full">
                  ISO Certified
                </span>
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-2 rounded-full">
                  Eco-Friendly
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Key Features:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <CheckCircle size={16} className="text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-8">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center cursor-pointer">
                  <Shield size={18} className="mr-2" />
                  Request Quote
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:+918980211051" className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm text-center">
                    📞 Call Now
                  </a>
                  <a href="mailto:bossandcoolant@gmail.com" className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors text-sm text-center">
                    📧 Email Us
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Quality Assured</p>
                  <p className="text-xs text-gray-800">Premium Grade</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Fast Delivery</p>
                  <p className="text-xs text-gray-800">Within 150km</p>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">ISO Certified</p>
                  <p className="text-xs text-gray-800">International Standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="border-t border-gray-200 p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Engine Coolant Technical Specifications</h2>
            <div className="bg-white rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <span className="text-sm font-medium text-gray-500 block mb-1">{key}</span>
                    <span className="text-lg font-semibold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
