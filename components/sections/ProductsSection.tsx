'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SectionHeader from "@/components/SectionHeader";
import { sectionContent } from "@/config/sectionContent";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper Product Card
function SimpleProductCard({ product, index }: { product: any; index: number }) {
  const productImages = [
    '/images/boss-coolant-brown-front.png',
    '/images/boss-coolant-yellow-front.png',
    '/images/boss-coolant-green-front.png',
    '/images/boss-coolant-red-front.png',
    '/images/1ltr bottle.png',
    '/images/5ltr bottle.png',
    '/images/5ltr-can.png',
    '/images/1000ltr tank.png',
    '/images/product-9.png'
  ];
  const imagePath = productImages[index] || productImages[0];

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden h-full flex flex-col">
      {/* Image container */}
      <div className="relative bg-gray-50 pt-[60%] overflow-hidden">
        <Image
          src={imagePath}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md">
          Premium
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{product.description}</p>

        {/* Features */}
        <div className="flex gap-2 mb-4">
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Eco-Friendly</span>
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">ISO Certified</span>
        </div>

        {/* Button - Always at bottom */}
        <button
          onClick={() => window.location.href = `/product/${index + 1}`}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-full mt-auto cursor-pointer"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const additionalProducts = [
    { name: "Heavy Duty Coolant", description: "Advanced brown formula for heavy-duty applications." },
    { name: "High Coolant", description: "Premium yellow coolant for superior engine protection." },
    { name: "Coolant", description: "Classic green coolant for all vehicle types." },
    { name: "Ready to Use Coolant", description: "High-performance red coolant for modern engines." },
    { name: "1 Liter Bottle", description: "Convenient 1L bottle for personal vehicles." },
    { name: "5 Liter Bottle", description: "Economy 5L bottle for multiple refills." },
    { name: "5 Liter Can", description: "Industrial 5L can for commercial use." },
    { name: "1000 Liter Tank", description: "Bulk 1000L tank for fleet and industrial operations." },
    { name: "Battery Acid", description: "High-grade battery acid for automotive and industrial applications." }
  ];

  return (
    <>
      {/* Premium Products Section */}
      <section id="products" className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge={sectionContent.products.badge}
            title={sectionContent.products.title}
            highlightText={sectionContent.products.highlightText}
            description={sectionContent.products.description}
          />

          {/* Main Products - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pure Distilled Water */}
            <div className="bg-white rounded-2xl xl:p-6 p-4 shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
              {/* Title */}
              <div className="flex md:flex-row flex-col border-b border-gray-200 mb-4 pb-4 gap-3">
                <div className="md:w-1/2">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Industrial Grade</span>
                  <h3 className="text-xl font-bold text-gray-900 my-3">Pure Distilled Water</h3>
                  <p className="text-gray-800 leading-relaxed">
                  Premium grade distilled water with 99.9% purity. Completely free from minerals, salts, and impurities that damage battery performance.
                </p>
                </div>
                  <div className="relative md:w-1/2 md:pt-[30%] pt-[60%]">
                    <Image
                      src="/images/product-details01.jpg"
                      alt="Pure Distilled Water"
                      fill
                      className="object-contain"
                    />
                  </div>
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col">
                {/* Technical Specifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Specs:</h4>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="grid grid-cols-2 sm:gap-3 gap-2 text-xs">
                      <div><span className="font-medium">Purity:</span> 99.9%</div>
                      <div><span className="font-medium">pH:</span> 6.5-7.5</div>
                      <div><span className="font-medium">Conductivity:</span> Less than 5 uS/cm</div>
                      <div><span className="font-medium">TDS:</span> Less than 0 ppm</div>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-4 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className=" grid sm:grid-cols-2 gap-2 grid-cols-1">
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-green-600 mr-2"></i>
                      Zero mineral content
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-green-600 mr-2"></i>
                      Prevents sulfation
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-green-600 mr-2"></i>
                      Extends battery life
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-green-600 mr-2"></i>
                      Temperature stable
                    </li>
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <div className="grid grid-cols-2 sm:gap-3 gap-2">
                    <div className="bg-green-50 p-2 rounded-lg text-center">
                      <i className="fas fa-car text-green-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Automotive</p>
                      <p className="text-xs text-gray-800">Cars, Trucks</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded-lg text-center">
                      <i className="fas fa-industry text-green-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Industrial</p>
                      <p className="text-xs text-gray-800">UPS, Generators</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded-lg text-center">
                      <i className="fas fa-solar-panel text-green-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Renewable</p>
                      <p className="text-xs text-gray-800">Solar, Wind</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded-lg text-center">
                      <i className="fas fa-truck text-green-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Commercial</p>
                      <p className="text-xs text-gray-800">Trucks, Tractors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Premium Engine Coolant */}
            <div className="bg-white rounded-2xl xl:p-6 p-4 shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
              {/* Title */}
              <div className="flex md:flex-row flex-col border-b border-gray-200 mb-4 pb-4 gap-3">
                <div className="md:w-1/2">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Engine Protection</span>
                <h3 className="text-xl font-bold text-gray-900 my-3">Premium Engine Coolant</h3>
                <p className="text-gray-800 leading-relaxed">
                  Advanced formula engineered for superior heat transfer and engine protection. Long-lasting performance for all vehicle types.
                </p>
                </div>
                <div className="relative md:w-1/2 md:pt-[30%] pt-[60%]">
                    <Image
                      src="/images/product-details02.jpg"
                      alt="Premium Engine Coolant"
                      fill
                      className="object-contain"
                    />
                  </div>
              </div>

    
              {/* Product Details */}
              <div className="flex-1 flex flex-col">
                {/* Technical Specifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Specs:</h4>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="grid grid-cols-2 sm:gap-3 gap-2 text-xs">
                      <div><span className="font-medium">Type:</span> Ethylene Glycol</div>
                      <div><span className="font-medium">Boiling Point:</span> 108°C</div>
                      <div><span className="font-medium">Freezing Point:</span> -37°C</div>
                      <div><span className="font-medium">Service Life:</span> 1 Years</div>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className=" grid sm:grid-cols-2 gap-2 grid-cols-1">
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                      Superior heat properties
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                      Corrosion and rust protection
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                      Extended engine life
                    </li>
                    <li className="flex items-center text-gray-600 text-sm">
                      <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                      All-weather performance
                    </li>
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Perfect For:</h4>
                  <div className="grid grid-cols-2 sm:gap-3 gap-2">
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <i className="fas fa-car text-blue-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Automotive</p>
                      <p className="text-xs text-gray-800">Cars, Bikes</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <i className="fas fa-truck text-blue-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Commercial</p>
                      <p className="text-xs text-gray-800">Trucks, Buses</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <i className="fas fa-industry text-blue-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Industrial</p>
                      <p className="text-xs text-gray-800">Generators, Machinery</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg text-center">
                      <i className="fas fa-tractor text-blue-600 mb-1 text-lg"></i>
                      <p className="text-xs font-medium text-gray-700">Agricultural</p>
                      <p className="text-xs text-gray-800">Tractors, Harvesters</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Products Section */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center md:mb-10 mb-6">
            <div className="section-badge">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Complete Product Range
            </div>
            <h3 className="section-title">
              Explore More <span className="section-highlight">Products</span>
            </h3>
            <p className="section-description">
              Browse through our complete collection of specialized automotive solutions designed for every vehicle type and requirement.
            </p>
          </div>

          {/* Engine Coolants Section */}
          <div className="mb-12">
            <div className="flex items-center lg:mb-6 mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              <div className="px-6">
                <h4 className="md:text-2xl text-xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-tint text-blue-600"></i>
                  </span>
                  Engine Coolants
                </h4>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            </div>
            <p className="text-center text-gray-600 lg:mb-8 mb-5 max-w-3xl mx-auto">
              Premium coolants engineered for superior heat transfer and engine protection. Available in multiple formulations to suit different vehicle types and operating conditions.
            </p>
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".coolant-next-btn",
                  prevEl: ".coolant-prev-btn"
                }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 }
                }}
              >
                {additionalProducts.slice(0, 4).map((product, index) => (
                  <SwiperSlide key={index} className="!h-auto">
                    <SimpleProductCard product={product} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                className="coolant-prev-btn absolute xl:-left-4 -left-3 top-1/2 transform -translate-y-1/2 md:w-10 md:h-10 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl z-20 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
              </button>
              <button
                className="coolant-next-btn absolute xl:-right-4 -right-3 top-1/2 transform -translate-y-1/2 md:w-10 md:h-10 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl hover:shadow-2xl z-20 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Distilled Water Section */}
          <div>
            <div className="flex items-center lg:mb-6 mb-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
              <div className="px-6">
                <h4 className="md:text-2xl text-xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-droplet text-green-600"></i>
                  </span>
                  Distilled Water
                </h4>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            </div>
            <p className="text-center text-gray-600 lg:mb-8 mb-5 max-w-3xl mx-auto">
              99.9% pure distilled water for optimal battery performance and longevity. Available in convenient packaging sizes from 1L bottles to 1000L bulk tanks for all applications.
            </p>
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".water-next-btn",
                  prevEl: ".water-prev-btn"
                }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 }
                }}
              >
                {additionalProducts.slice(4, 8).map((product, index) => (
                  <SwiperSlide key={index} className="!h-auto">
                    <SimpleProductCard product={product} index={index + 4} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                className="water-prev-btn absolute xl:-left-4 -left-3 top-1/2 transform -translate-y-1/2 md:w-10 md:h-10 w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full shadow-xl hover:shadow-2xl z-20 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
              </button>
              <button
                className="water-next-btn absolute xl:-right-4 -right-3 top-1/2 transform -translate-y-1/2 md:w-10 md:h-10 w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full shadow-xl hover:shadow-2xl z-20 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
