import React from 'react';
import { CheckCircle, KeyRound, Clock, MessageSquare, Download, Paperclip } from 'lucide-react';

const dashboardFeatures = [
    { icon: Clock, text: 'Track project milestones in real time.' },
    { icon: MessageSquare, text: 'Share feedback and request revisions easily.' },
    { icon: Clock, text: 'Monitor timelines and delivery progress.' },
    { icon: Download, text: 'Download your final deliverables anytime, anywhere.' },
];

export function Dashboard() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center">
            <span className="text-sm font-bold text-cyant tracking-widest">5. YOUR DASHBOARD, YOUR PROJECT</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-night mt-6">Stay in the Loop. Every Frame of the Way.</h2>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-unpop">
              Once your order is placed, you get access to your own Client Dashboard — your creative control room.
            </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard Mockup */}
          <div className="bg-gray-800 rounded-2xl p-4 lg:p-6 elevate-lg">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="font-bold text-white text-2xl text-pop">Explainer Video - Series A Launch</h3>
                        <p className="text-sm text-cyant mt-1">Status: In Review</p>
                    </div>
                    <div className="flex -space-x-3">
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-800" src="https://picsum.photos/seed/avatar2/100/100" alt="User"/>
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-800" src="https://picsum.photos/seed/avatar3/100/100" alt="User"/>
                    </div>
                </div>

                {/* Progress Bar */}
                <div>
                    <span className="text-sm font-semibold text-gray-400">Progress</span>
                    <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
                        <div className="brand-gradient h-3 rounded-full" style={{width: '75%'}}></div>
                    </div>
                </div>

                {/* Chat Interaction */}
                <div className="mt-8 bg-gray-800 p-6 rounded-xl elevate-sm">
                    <h4 className="text-lg font-bold text-white mb-6">Project Chat</h4>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <img className="w-10 h-10 rounded-full" src="https://picsum.photos/seed/pm/100/100" alt="PM avatar"/>
                            <div className="flex flex-col gap-2 w-full max-w-[320px]">
                                <div className="flex items-center space-x-3">
                                    <span className="text-sm font-semibold text-white">Sarah (PM)</span>
                                    <span className="text-xs font-normal text-gray-400">11:46</span>
                                </div>
                                <div className="leading-1.5 p-4 border-gray-600 bg-gray-700 rounded-e-xl rounded-es-xl">
                                    <p className="text-sm font-normal text-gray-300">Hey team! The first draft of the script is ready for your review. Let me know your thoughts!</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 justify-end">
                            <div className="flex flex-col gap-2 w-full max-w-[320px]">
                                 <div className="flex items-center space-x-3 justify-end">
                                    <span className="text-sm font-semibold text-white">You</span>
                                    <span className="text-xs font-normal text-gray-400">11:47</span>
                                </div>
                                <div className="leading-1.5 p-4 border-gray-600 bg-cyant rounded-s-xl rounded-ee-xl">
                                    <p className="text-sm font-normal text-white">Awesome! Taking a look now. Thanks, Sarah!</p>
                                </div>
                            </div>
                             <img className="w-10 h-10 rounded-full" src="https://picsum.photos/seed/avatar2/100/100" alt="Your avatar"/>
                        </div>
                    </div>
                     <div className="mt-6 flex items-center p-3 bg-gray-700 rounded-xl">
                        <input type="text" placeholder="Type your message..." className="bg-transparent text-sm text-white focus:outline-none w-full"/>
                        <Paperclip className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer"/>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-left">
            <h3 className="text-3xl font-bold text-night mb-8 text-pop">Here's what you can do:</h3>
            <ul className="space-y-6">
              {dashboardFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-50 text-clourk-orange rounded-full mr-6 mt-1 elevate-sm">
                            <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-gray-600 text-xl text-unpop">{feature.text}</span>
                    </li>
                );
              })}
            </ul>
            <p className="mt-10 text-gray-700 font-semibold text-xl">
                Your project, your pace — all in one place.
            </p>
            <div className="mt-12">
                <a href="#" role="button" className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold btn-orange hover-lift btn-magic shimmer">
                    <KeyRound className="w-5 h-5 mr-3 hover-wiggle" />
                    Access Dashboard
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}