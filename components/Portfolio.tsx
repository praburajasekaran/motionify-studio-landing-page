import React from 'react';
import { Play, Tag, Clapperboard } from 'lucide-react';

const portfolioItems = [
    {
        id: 1,
        title: 'Fitch Learning',
        category: 'Educational Video Series',
        imageUrl: 'https://picsum.photos/seed/fitch/800/600',
    },
    {
        id: 2,
        title: 'Indospace',
        category: '3D Simulation Walkthrough',
        imageUrl: 'https://picsum.photos/seed/indospace/800/600',
    },
    {
        id: 3,
        title: 'TVS Credit',
        category: 'Financial Product Explainer',
        imageUrl: 'https://picsum.photos/seed/tvs/800/600',
    },
    {
        id: 4,
        title: 'Wild Watches',
        category: 'Animated Brand Promo',
        imageUrl: 'https://picsum.photos/seed/wild/800/600',
    },
    {
        id: 5,
        title: 'Dopplr',
        category: 'SaaS Launch Story',
        imageUrl: 'https://picsum.photos/seed/dopplr/800/600',
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-gray-50">
            <div className="container mx-auto px-8">
                <div className="text-center">
                    <span className="text-sm font-bold text-cyant tracking-widest slide-up">2. PORTFOLIO SHOWCASE</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-night mt-4 sparkle slide-up">✨ See Creativity in Motion.</h2>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-unpop slide-up stagger-1">
                        A showcase of our best stories, crafted with emotion, design, and storytelling finesse.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {portfolioItems.map((item, index) => (
                        <div key={item.id} className={`group relative overflow-hidden rounded-xl cursor-pointer aspect-video card-interactive bounce-in ${`stagger-${index + 1}`}`}>
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 text-overlay flex flex-col justify-end p-8">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <Play className="w-24 h-24 text-white drop-shadow-2xl hover-wiggle" fill="currentColor" />
                                </div>
                                <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                                    <h3 className="text-2xl font-bold text-white text-pop group-hover:gradient-text">{item.title}</h3>
                                    <div className="flex items-center text-sm font-semibold text-orange-300 mt-2">
                                        <Tag className="w-4 h-4 mr-2 hover-wiggle" />
                                        <span>{item.category}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Dan Mall-style hover glow effect */}
                            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyant/20 to-clourk-orange/20"></div>
                        </div>
                    ))}
                    {/* Placeholder for grid alignment if needed */}
                     <div className="hidden lg:block"></div>
                </div>

                <div className="text-center mt-20">
                    <a href="#" role="button" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold btn-cyan hover-lift btn-magic">
                        <Clapperboard className="w-5 h-5 mr-3 hover-wiggle" />
                        Explore Full Portfolio
                    </a>
                </div>
            </div>
        </section>
    );
}