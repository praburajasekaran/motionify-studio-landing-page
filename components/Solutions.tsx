import React from 'react';
import { Target, Rocket, GraduationCap, Users, Building, Lightbulb } from 'lucide-react';

const solutions = [
  { 
    icon: Target, 
    title: 'Brand Awareness', 
    description: 'Build your identity and capture attention with powerful visual storytelling.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  { 
    icon: Rocket, 
    title: 'Product Launch', 
    description: 'Generate buzz and showcase your innovation with a high-impact launch video.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  { 
    icon: GraduationCap, 
    title: 'Training & Education', 
    description: 'Simplify complex topics and engage learners with clear, concise content.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  { 
    icon: Users, 
    title: 'Customer Engagement', 
    description: 'Foster loyalty and build community with authentic stories and testimonials.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  { 
    icon: Building, 
    title: 'Corporate Communication', 
    description: 'Align your team and stakeholders with professional, polished internal videos.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center">
            <span className="text-sm font-bold text-cyant tracking-widest slide-up">3. SMART VIDEO SOLUTIONS</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-night mt-6 flex items-center justify-center slide-up stagger-1">
              <Rocket className="w-12 h-12 mr-4 text-clourk-orange transform -rotate-45 hover-wiggle magnetic" />
              Solutions, Not Just Services.
            </h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-unpop slide-up stagger-2">
              Every brand is unique. Our goal is to craft video experiences that fit your journey — from awareness to engagement to conversions.
            </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                    <div key={solution.title} className={`p-8 rounded-xl text-center flex flex-col items-center transition-all duration-500 hover:elevate-lg hover:-translate-y-2 ${solution.bgColor} elevate-sm card-interactive bounce-in ${`stagger-${index + 1}`}`}>
                        <div className={`flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center ${solution.color} bg-white mb-6 elevate-sm hover-glow magnetic`}>
                            <Icon className="w-10 h-10 hover-wiggle" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-gray-800 text-pop group-hover:gradient-text">{solution.title}</h4>
                            <p className="text-gray-600 mt-3 text-unpop">{solution.description}</p>
                        </div>
                        {/* Dan Mall-style floating particles effect */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-cyant rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 float-element"></div>
                        <div className="absolute bottom-2 left-2 w-1 h-1 bg-clourk-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 float-element" style={{animationDelay: '0.5s'}}></div>
                    </div>
                )
            })}
        </div>

        <div className="text-center mt-20">
            <a href="#" role="button" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold btn-orange hover-lift btn-magic shimmer">
                <Lightbulb className="w-5 h-5 mr-3 hover-wiggle" />
                Explore Solutions by Goal
            </a>
        </div>

      </div>
    </section>
  );
}
