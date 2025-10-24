import React from 'react';
import { Languages, Globe, BookOpen, Users, Clapperboard } from 'lucide-react';

const globalFeatures = [
    { icon: Languages, text: 'Multilingual voiceovers & subtitles.' },
    { icon: Globe, text: 'Expertise across regions & industries.' },
    { icon: BookOpen, text: 'Case studies from brands worldwide.' },
    { icon: Users, text: 'Culturally attuned storytelling for every market.' },
];

export function GlobalReach() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-1/4 -left-1/4 w-[50rem] h-[50rem] bg-gray-200/50 rounded-full" aria-hidden="true"></div>
      <div className="absolute -bottom-1/2 -right-1/4 w-[60rem] h-[60rem] bg-gray-200/50 rounded-full" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[70rem] border-4 border-gray-200/50 rounded-full" aria-hidden="true"></div>

      <div className="container mx-auto px-8 text-center relative z-10">
        <div className="inline-block bg-orange-100 text-clourk-orange text-sm font-bold px-6 py-2 rounded-full">
            6. GLOBAL REACH. LOCAL RELEVANCE.
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-night mt-6">Stories that Speak Every Language.</h2>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-unpop">
          Our videos travel across borders — and so do our ideas. We collaborate with clients around the world, creating culturally relevant, multilingual videos that resonate anywhere.
        </p>
        
        <div className="mt-16 max-w-3xl mx-auto bg-white p-12 rounded-2xl elevate text-left">
            <h3 className="text-3xl font-bold text-night mb-8 flex items-center text-pop">
                <Globe className="w-8 h-8 mr-4 text-cyant"/>
                What Makes Us Global:
            </h3>
            <ul className="space-y-6">
                {globalFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <li key={index} className="flex items-start">
                             <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-cyan-50 text-cyant rounded-full mr-6 mt-1 elevate-sm">
                                <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-gray-700 text-xl text-unpop">{feature.text}</span>
                        </li>
                    );
                })}
            </ul>
        </div>

        <div className="mt-16">
            <p className="text-xl font-semibold text-gray-700 flex items-center justify-center text-pop">
                <Clapperboard className="w-6 h-6 mr-4 text-clourk-orange" />
                Video is universal. We help you speak it beautifully.
            </p>
        </div>
      </div>
    </section>
  );
}