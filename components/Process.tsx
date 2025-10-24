import React from 'react';
import { Palette, FileText, PackagePlus, ClipboardCheck, Download, Package, Film } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    icon: Palette,
    title: 'Choose & Customize',
    description: 'Pick a style and tailor it to your brand.',
  },
  {
    step: 2,
    icon: FileText,
    title: 'Submit Your Brief',
    description: 'Share your goals and creative direction.',
  },
  {
    step: 3,
    icon: PackagePlus,
    title: 'Add-Ons',
    description: 'Scriptwriting, multilingual voiceovers, localization.',
  },
  {
    step: 4,
    icon: ClipboardCheck,
    title: 'Track Progress',
    description: 'Access milestones and updates in real-time.',
  },
  {
    step: 5,
    icon: Download,
    title: 'Download & Shine',
    description: 'Receive final videos ready for your platforms.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center">
          <span className="text-sm font-bold text-clourk-orange tracking-widest slide-up">4. ORDERING PROCESS OVERVIEW</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-night mt-6 flex items-center justify-center slide-up stagger-1">
            <Film className="w-12 h-12 mr-4 text-cyant hover-wiggle magnetic" />
            Your Video Journey, Simplified.
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-unpop slide-up stagger-2">
            From concept to final delivery — every step is transparent, guided, and effortless.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className={`bg-white rounded-xl text-center flex flex-col items-center transition-all duration-500 hover:elevate-lg hover:-translate-y-2 relative elevate-sm card-interactive bounce-in ${`stagger-${index + 1}`}`}>
                  {/* Step Number Strip */}
                  <div className="w-full bg-orange-500 text-white font-bold text-lg py-3 rounded-t-xl flex items-center justify-center pulse-glow">
                    {step.step}
                  </div>
                  <div className="p-8 flex flex-col items-center">
                  <div className="w-20 h-20 flex items-center justify-center bg-cyan-50 text-cyant rounded-full my-6 elevate-sm hover-glow magnetic">
                    <Icon className="w-10 h-10 hover-wiggle"/>
                  </div>
                    <h3 className="font-bold text-xl text-gray-800 text-pop group-hover:gradient-text">{step.title}</h3>
                    <p className="text-gray-600 mt-3 flex-grow text-unpop">{step.description}</p>
                  </div>
                  {/* Dan Mall-style connecting line animation */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyant to-clourk-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </div>
              );
            })}
          </div>

        <div className="text-center mt-20">
            <a href="#" role="button" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold btn-cyan hover-lift btn-magic">
                <Package className="w-5 h-5 mr-3 hover-wiggle" />
                Start Your Order
            </a>
        </div>
      </div>
    </section>
  );
}