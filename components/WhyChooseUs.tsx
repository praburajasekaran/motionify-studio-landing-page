import React from 'react';
import { Film, Palette, Lightbulb, Globe, Zap, Rocket, Sparkles } from 'lucide-react';

const strengths = [
    { icon: Film, text: 'End-to-End Video Solutions' },
    { icon: Palette, text: 'Creative & Strategic Expertise' },
    { icon: Lightbulb, text: 'Data-Driven Recommendations' },
    { icon: Globe, text: 'Global Delivery, Local Insight' },
    { icon: Zap, text: 'Fast Turnaround, Flawless Quality' },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-8">
                <div className="text-center">
                    <span className="text-sm font-bold text-clourk-orange tracking-widest">8. WHY CHOOSE MOTIONIFY.STUDIO</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-night mt-6 flex items-center justify-center gap-4">
                        <Sparkles className="w-12 h-12 text-clourk-orange" />
                        We Don't Just Make Videos — We Create Experiences.
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-unpop">
                        Trusted by global brands for creativity, reliability, and results.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {strengths.map((strength) => {
                        const Icon = strength.icon;
                        return (
                            <div key={strength.text} className="group bg-white p-8 rounded-xl text-center flex flex-col items-center transition-all duration-300 hover:elevate-lg hover:-translate-y-2 elevate-sm">
                                <div className="w-20 h-20 flex items-center justify-center bg-cyan-50 text-cyant rounded-full my-6 transition group-hover:bg-cyan-100 elevate-sm">
                                    <Icon className="w-10 h-10"/>
                                </div>
                                <h3 className="font-bold text-xl text-night flex-grow transition group-hover:text-cyant text-pop">{strength.text}</h3>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-20">
                    <a href="#" role="button" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold btn-orange hover-lift btn-magic shimmer">
                        <Rocket className="w-5 h-5 mr-3 hover-wiggle" />
                        Work With Us
                    </a>
                </div>
            </div>
        </section>
    );
}