import React from 'react';

const clientLogos = [
  { name: 'TechCorp', logo: 'https://picsum.photos/seed/logo1/120/60' },
  { name: 'StartupX', logo: 'https://picsum.photos/seed/logo2/120/60' },
  { name: 'BrandY', logo: 'https://picsum.photos/seed/logo3/120/60' },
  { name: 'CompanyZ', logo: 'https://picsum.photos/seed/logo4/120/60' },
  { name: 'InnovateCo', logo: 'https://picsum.photos/seed/logo5/120/60' },
  { name: 'FutureBrand', logo: 'https://picsum.photos/seed/logo6/120/60' },
];

export function ClientLogos() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase">
            Trusted by leading brands
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {clientLogos.map((client, index) => (
            <div 
              key={client.name} 
              className="flex items-center justify-center hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        {/* Animated underline */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyant to-clourk-orange"></div>
        </div>
      </div>
    </section>
  );
}
