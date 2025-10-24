import React from 'react';
import { LogoIcon } from './components/Icons';
import { Heart, Play, Quote, Signal, Clapperboard, Rocket } from 'lucide-react';
import { VideoSelector } from './components/VideoSelector';
import { Portfolio } from './components/Portfolio';
import { Solutions } from './components/Solutions';
import { Process } from './components/Process';
import { Dashboard } from './components/Dashboard';
import { GlobalReach } from './components/GlobalReach';
import { Support } from './components/Support';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ClientLogos } from './components/ClientLogos';
import { Footer } from './components/Footer';

function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <LogoIcon className="h-10 w-10 text-night" />
            <div>
              <h1 className="text-xl font-bold text-night">Motionify.Studio</h1>
              <p className="text-xs text-gray-500 tracking-widest">HUMAN-CENTERED VIDEO</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-night hover:text-cyant transition-colors font-medium">Solutions</a>
            <a href="#portfolio" className="text-night hover:text-cyant transition-colors font-medium">Portfolio</a>
            <a href="#process" className="text-night hover:text-cyant transition-colors font-medium">Process</a>
            <a href="#support" className="text-night hover:text-cyant transition-colors font-medium">Support</a>
            <a href="#contact" className="text-night hover:text-cyant transition-colors font-medium">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold btn-orange hover-lift btn-magic">
              Start Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-night hover:text-cyant transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative container mx-auto px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Decorative Lines with Dan Mall-style animations */}
      <div className="absolute top-1/4 left-0 w-1/4 h-px bg-gray-300 slide-up"></div>
      <div className="absolute top-1/2 right-0 w-1/3 h-px bg-gray-300 slide-up stagger-1"></div>
      <div className="absolute top-1/2 left-1/2 w-px h-1/4 bg-gray-300 transform -translate-x-1/2 slide-up stagger-2"></div>
      <div className="absolute top-1/3 right-[48%] w-px h-1/4 bg-gray-300 slide-up stagger-3"></div>
      <div className="absolute bottom-1/4 left-[48%] w-[15%] h-px bg-clourk-orange pulse-glow"></div>

      <div className="z-10">
        <h2 className="balance text-5xl md:text-6xl font-extrabold text-night leading-tight slide-up">
          Crafting stories that <span className="text-cyant text-pop gradient-text hover-wiggle">connect</span> & <span className="text-clourk-orange text-pop gradient-text hover-wiggle">convert</span>
        </h2>
        <p className="mt-8 text-gray-600 max-w-lg text-unpop slide-up stagger-1">
          Human-centered video that blends emotional storytelling with conversion strategy.
        </p>
        <p className="mt-6 text-gray-600 max-w-lg text-unpop slide-up stagger-2">
          We partner with teams from startup to enterprise to move people — and metrics.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6 slide-up stagger-3">
          <a href="#" role="button" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold btn-secondary hover-lift btn-magic">
            <Clapperboard className="w-5 h-5 mr-3 hover-wiggle" />
            Find Your Video Style
          </a>
          <a href="#" role="button" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold btn-orange hover-lift btn-magic shimmer">
            <Rocket className="w-5 h-5 mr-3 hover-wiggle" />
            Start Your Project
          </a>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full z-10">
        {/* Video Player Mockup */}
        <div className="relative w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden elevate-lg">
            {/* Video Player Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-white text-sm font-medium">Motionify.Studio</span>
              </div>
            </div>
            
            {/* Video Content */}
            <div className="relative bg-gradient-to-br from-cyan-50 to-orange-50 p-8 text-center">
              <div className="w-20 h-20 bg-cyant rounded-full flex items-center justify-center mx-auto mb-6 hover-glow magnetic">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <h3 className="text-xl font-bold text-night mb-2">Sample Video</h3>
              <p className="text-gray-600 text-sm">See our work in action</p>
              
              {/* Video Thumbnail */}
              <div className="mt-6 relative group cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/video-thumbnail/300/200" 
                  alt="Video thumbnail" 
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-clourk-orange rounded-full flex items-center justify-center text-white text-sm font-bold pulse-glow float-element">
            ✨
          </div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyant rounded-full flex items-center justify-center text-white text-xs font-bold float-element" style={{animationDelay: '1s'}}>
            🎬
          </div>
        </div>
        
        {/* Stats Counter */}
        <div className="mt-12 grid grid-cols-2 gap-8 w-full max-w-sm">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyant">500+</div>
            <div className="text-sm text-gray-600">Videos Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-clourk-orange">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}



function App() {
  return (
    <div className="bg-white antialiased">
      <Header />
      <div className="relative bg-gray-50 overflow-hidden">
        <Hero />
        <ClientLogos />
        <VideoSelector />
        <Portfolio />
        <Solutions />
        <Process />
        <Dashboard />
        <GlobalReach />
        <Support />
        <WhyChooseUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;