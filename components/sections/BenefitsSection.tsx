import { benefits } from '@/lib/data/benefits';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

const colorClasses = {
  blue: { 
    bg: "bg-gradient-to-br from-blue-50 to-blue-100", 
    icon: "bg-gradient-to-br from-blue-500 to-blue-600",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:border-blue-400 hover:shadow-blue-200"
  },
  green: { 
    bg: "bg-gradient-to-br from-green-50 to-green-100", 
    icon: "bg-gradient-to-br from-green-500 to-green-600",
    text: "text-green-600",
    border: "border-green-200",
    hover: "hover:border-green-400 hover:shadow-green-200"
  },
  red: { 
    bg: "bg-gradient-to-br from-red-50 to-red-100", 
    icon: "bg-gradient-to-br from-red-500 to-red-600",
    text: "text-red-600",
    border: "border-red-200",
    hover: "hover:border-red-400 hover:shadow-red-200"
  },
  purple: { 
    bg: "bg-gradient-to-br from-purple-50 to-purple-100", 
    icon: "bg-gradient-to-br from-purple-500 to-purple-600",
    text: "text-purple-600",
    border: "border-purple-200",
    hover: "hover:border-purple-400 hover:shadow-purple-200"
  },
  yellow: { 
    bg: "bg-gradient-to-br from-yellow-50 to-yellow-100", 
    icon: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    text: "text-yellow-600",
    border: "border-yellow-200",
    hover: "hover:border-yellow-400 hover:shadow-yellow-200"
  },
  gray: { 
    bg: "bg-gradient-to-br from-gray-50 to-gray-100", 
    icon: "bg-gradient-to-br from-gray-500 to-gray-600",
    text: "text-gray-600",
    border: "border-gray-200",
    hover: "hover:border-gray-400 hover:shadow-gray-200"
  },
};

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <Container className="relative z-10">
        <SectionTitle
          badge="Why Choose Us"
          title="Why Choose Boss Chem Solution - Best Engine Coolant in"
          highlightText="Surat"
          description="Premium engine coolant and radiator coolant manufacturer offering superior automotive cooling solutions for cars, bikes, trucks, and industrial vehicles. ISO certified quality guaranteed."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const color = colorClasses[benefit.color];
            return (
              <div 
                key={index}
                className={`group relative bg-white rounded-2xl p-6 lg:p-8 border-2 ${color.border} ${color.hover} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 ${color.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="relative inline-block mb-6">
                    <div className={`w-20 h-20 ${color.icon} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <i className={`fas fa-${benefit.icon} text-white text-3xl`}></i>
                    </div>
                    {/* Icon Glow */}
                    <div className={`absolute inset-0 ${color.icon} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${color.text} group-hover:scale-105 transition-transform duration-300`}>
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className={`mt-6 h-1 w-16 ${color.icon} rounded-full mx-auto group-hover:w-24 transition-all duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-6 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <i className="fas fa-phone-volume text-3xl"></i>
              <div className="text-left">
                <p className="text-sm opacity-90">Need Help Choosing?</p>
                <p className="text-xl font-bold">Call +91 8980211051</p>
              </div>
            </div>
            <a href="tel:+918980211051" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Now
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
