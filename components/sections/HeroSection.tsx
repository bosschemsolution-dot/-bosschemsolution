import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image 
          src="/images/home-banner.png" 
          alt="Boss Chem Solution Products" 
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 animate-pulse"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <Container className="relative z-10 text-center text-white py-12 lg:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-md border border-blue-400/40 text-white px-5 py-2.5 rounded-full text-sm font-semibold lg:mb-8 mb-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <i className="fas fa-trophy text-yellow-400"></i>
            <span>Surat&apos;s Leading Coolant Brand</span>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold lg:mb-8 mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-fadeInUp">
              Best Engine Coolant
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Manufacturer in Surat
            </span>
            <span className="block mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-100 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Premium Radiator Coolant & Antifreeze Solutions
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl lg:mb-10 mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            Leading engine coolant manufacturer in Surat, Gujarat. Premium radiator coolant, antifreeze coolant, and distilled water for all vehicles. 
            <span className="block mt-2 text-blue-200 font-semibold">ISO certified with 15+ years of excellence</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:mb-16 mb-12 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="group shadow-2xl hover:shadow-blue-500/50" asChild>
              <a href="#products" className="relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <i className="fas fa-rocket mr-2 group-hover:rotate-12 transition-transform"></i>
                  Discover Products
                </span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group shadow-2xl hover:shadow-white/30 hover:bg-white/20" asChild>
              <a href="tel:+918980211051" className="flex items-center">
                <i className="fas fa-phone mr-2 group-hover:rotate-12 transition-transform"></i>
                Call Us Now
              </a>
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '1s' }}>
            {[
              { value: '1000+', label: 'Happy Customers', icon: 'users' },
              { value: '15+', label: 'Years Experience', icon: 'calendar-check' },
              { value: '99.9%', label: 'Purity Level', icon: 'certificate' },
              { value: '24/7', label: 'Support', icon: 'headset' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 lg:p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <i className={`fas fa-${stat.icon} text-blue-300 text-2xl mb-2 group-hover:scale-110 transition-transform`}></i>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-blue-100 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#products" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
          <span className="text-xs mb-2">Scroll Down</span>
          <i className="fas fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  );
}
