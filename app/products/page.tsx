'use client';

import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';

export default function AllProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, name: "Heavy Duty Coolant", category: "coolant", description: "Advanced brown formula for heavy-duty applications.", image: "/images/boss-coolant-brown-front.png" },
    { id: 2, name: "High Coolant", category: "coolant", description: "Premium yellow coolant for superior engine protection.", image: "/images/boss-coolant-yellow-front.png" },
    { id: 3, name: "Coolant", category: "coolant", description: "Classic green coolant for all vehicle types.", image: "/images/boss-coolant-green-front.png" },
    { id: 4, name: "Ready to Use Coolant", category: "coolant", description: "High-performance red coolant for modern engines.", image: "/images/boss-coolant-red-front.png" },
    { id: 5, name: "1 Liter Bottle", category: "packaging", description: "Convenient 1L bottle for personal vehicles.", image: "/images/1ltr bottle.png" },
    { id: 6, name: "5 Liter Bottle", category: "packaging", description: "Economy 5L bottle for multiple refills.", image: "/images/5ltr bottle.png" },
    { id: 7, name: "5 Liter Can", category: "packaging", description: "Industrial 5L can for commercial use.", image: "/images/5ltr-can.png" },
    { id: 8, name: "1000 Liter Tank", category: "packaging", description: "Bulk 1000L tank for fleet and industrial operations.", image: "/images/1000ltr tank.png" },
    { id: 9, name: "Battery Acid", category: "acid", description: "High-grade battery acid for automotive and industrial applications.", image: "/images/product-9.png" },
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: 'th-large', count: products.length },
    { id: 'coolant', name: 'Engine Coolants', icon: 'tint', count: products.filter(p => p.category === 'coolant').length },
    { id: 'packaging', name: 'Distilled Water', icon: 'droplet', count: products.filter(p => p.category === 'packaging').length },
    { id: 'acid', name: 'Battery Acid', icon: 'battery-full', count: products.filter(p => p.category === 'acid').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        
        <Container className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <i className="fas fa-box"></i>
            <span>Premium Quality Products</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Engine Coolant Products
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Premium engine coolant, radiator coolant, antifreeze coolant, and distilled water for all vehicles. 
            Best coolant manufacturer in Surat offering automotive cooling solutions.
          </p>
        </Container>
      </section>

      <Container className="py-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search products by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <i className={`fas fa-${category.icon}`}></i>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600 font-medium">
            Showing <span className="text-blue-600 font-bold">{filteredProducts.length}</span> of <span className="font-bold">{products.length}</span> products
          </p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              <X size={16} />
              Clear search
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 overflow-hidden h-full flex flex-col hover:scale-105"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 pt-[75%] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Premium
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="fas fa-heart text-red-500"></i>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg group-hover:text-blue-600 transition-colors">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
                
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full font-semibold ${
                    product.category === 'coolant' 
                      ? 'bg-blue-100 text-blue-700' 
                      : product.category === 'acid'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    <i className={`fas fa-${product.category === 'coolant' ? 'tint' : product.category === 'acid' ? 'flask' : 'droplet'}`}></i>
                    {product.category === 'coolant' ? 'Engine Coolant' : product.category === 'acid' ? 'Battery Acid' : 'Distilled Water'}
                  </span>
                </div>
                
                {/* Action Button */}
                <button 
                  onClick={() => window.location.href = `/product/${product.id}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <span>View Details</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <Search size={48} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-8 lg:p-12 mt-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <i className="fas fa-headset text-5xl mb-4"></i>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need Custom Solutions?</h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Contact us for custom automotive cooling solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:bossandcoolant@gmail.com" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <i className="fas fa-envelope"></i>
                Get Quote
              </a>
              <a href="tel:+918980211051" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <i className="fas fa-phone"></i>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
