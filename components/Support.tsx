import React from 'react';
import { Brush, Lightbulb, MessageSquare, Handshake } from 'lucide-react';

const supportFeatures = [
    { icon: Brush, text: 'Creative consultation for your project.' },
    { icon: Lightbulb, text: 'Expert video recommendations.' },
    { icon: MessageSquare, text: 'Instant live chat support.' },
    { icon: Handshake, text: 'A human touch — from start to finish.' },
];

export function Support() {
  return (
    <section id="support" className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <span className="text-sm font-bold text-cyant tracking-widest slide-up">7. ALWAYS HERE FOR YOU</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-night mt-6 slide-up stagger-1">Support That Feels Human.</h2>
            <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0 text-unpop slide-up stagger-2">
              Behind every great video is a great team. Our dedicated support and sales experts ensure your creative journey is smooth, informed, and inspiring.
            </p>

            <div className="mt-12 text-left inline-block">
                <h3 className="font-bold text-2xl text-night mb-6 text-pop slide-up stagger-3">You'll Get:</h3>
                <ul className="space-y-6">
                  {supportFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <li key={index} className={`flex items-center slide-up ${`stagger-${index + 4}`}`}>
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-50 text-cyant rounded-full mr-6 elevate-sm hover-glow magnetic">
                                <Icon className="w-6 h-6 hover-wiggle" />
                            </div>
                            <span className="text-gray-700 text-xl text-unpop">{feature.text}</span>
                        </li>
                    );
                  })}
                </ul>
            </div>
            
            <div className="mt-12">
                <a href="#" role="button" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold btn-cyan hover-lift btn-magic shimmer">
                    <MessageSquare className="w-5 h-5 mr-3 hover-wiggle" />
                    Talk to a Creative Expert
                </a>
            </div>
          </div>
          
          {/* Visual Element - Team Avatars with Dan Mall-style animations */}
          <div className="flex justify-center items-center relative h-96 lg:h-auto">
            <div className="absolute w-80 h-80 bg-orange-100 rounded-full -top-12 -left-12 float-element" aria-hidden="true"></div>
            <div className="absolute w-96 h-96 bg-cyan-100 rounded-full -bottom-12 -right-12 float-element" style={{animationDelay: '1s'}} aria-hidden="true"></div>
            
            <div className="relative flex -space-x-12">
                <img className="w-40 h-40 rounded-full ring-4 ring-white object-cover elevate transform hover:scale-110 transition-all duration-300 hover-wiggle magnetic bounce-in stagger-1" src="https://picsum.photos/seed/support1/200/200" alt="Support team member 1"/>
                <img className="w-48 h-48 rounded-full ring-4 ring-white object-cover elevate-lg z-10 transform hover:scale-110 transition-all duration-300 hover-wiggle magnetic bounce-in stagger-2" src="https://picsum.photos/seed/support2/200/200" alt="Support team member 2"/>
                <img className="w-40 h-40 rounded-full ring-4 ring-white object-cover elevate transform hover:scale-110 transition-all duration-300 hover-wiggle magnetic bounce-in stagger-3" src="https://picsum.photos/seed/support3/200/200" alt="Support team member 3"/>
            </div>
            {/* Dan Mall-style floating particles around team */}
            <div className="absolute top-8 left-8 w-2 h-2 bg-cyant rounded-full opacity-60 float-element"></div>
            <div className="absolute bottom-8 right-8 w-1 h-1 bg-clourk-orange rounded-full opacity-60 float-element" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-cyant rounded-full opacity-40 float-element" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}