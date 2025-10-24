import React from 'react';
import { Linkedin, Youtube, Instagram, Dribbble, Sparkles, Mail } from 'lucide-react';

const footerLinks = [
    { name: 'Video Solutions', href: '#solutions' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Support', href: '#support' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Behance', icon: Dribbble, href: '#' }, // Using Dribbble as a proxy icon for Behance
];

export function Footer() {
    return (
        <footer id="contact" className="bg-night text-gray-300">
            <div className="container mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                            <Sparkles className="w-8 h-8 text-clourk-orange" />
                            <span className="text-2xl font-bold text-white">Motionify.Studio</span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-sm">
                            Human-centered video that blends emotional storytelling with conversion strategy.
                        </p>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-6">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {footerLinks.map(link => (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    className="text-gray-400 hover:text-cyant transition-colors text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Contact & Social */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-6">Get In Touch</h3>
                        <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                            <Mail className="w-4 h-4 text-cyant" />
                            <span className="text-gray-400">hello@motionify.studio</span>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {socialLinks.map(link => {
                                const Icon = link.icon;
                                return (
                                    <a 
                                        key={link.name} 
                                        href={link.href} 
                                        className="text-gray-400 hover:text-cyant transition-colors p-2 rounded-lg hover:bg-gray-800"
                                        aria-label={link.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Motionify.Studio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}