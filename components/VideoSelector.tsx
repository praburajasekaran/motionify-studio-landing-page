


import React, { useState, useEffect, ChangeEvent } from 'react';
import { Building2, Users, Palette, Smile, Clock, Target, WandSparkles, ChevronDown } from 'lucide-react';

const filters = [
    {
        name: 'industry',
        label: 'Industry',
        icon: Building2,
        options: ['Any', 'Tech', 'Healthcare', 'Retail', 'Real Estate', 'Education']
    },
    {
        name: 'niche',
        label: 'Niche',
        icon: Target,
        options: ['Any', 'Startups', 'SaaS', 'Corporate', 'E-commerce', 'Local Businesses']
    },
    {
        name: 'audience',
        label: 'Target Audience',
        icon: Users,
        options: ['Any', 'B2B', 'B2C', 'Custom']
    },
    {
        name: 'style',
        label: 'Style',
        icon: Palette,
        options: ['Any', '2D', '3D', 'Motion Graphics', 'Live Action', 'Mixed Media']
    },
    {
        name: 'mood',
        label: 'Mood & Tone',
        icon: Smile,
        options: ['Any', 'Professional', 'Fun', 'Emotional', 'Informative']
    },
    {
        name: 'duration',
        label: 'Duration',
        icon: Clock,
        options: ['Any', 'Reels (<1 min)', 'Explainers (1-2 min)', 'Demos (2-5 min)']
    },
];

const suggestions = [
    { id: 1, style: '2D Motion Graphics', tone: 'Informative & Clean', direction: 'Use brand colors with clear iconography and kinetic typography to explain complex SaaS features.', criteria: { industry: 'Tech', niche: 'SaaS' } },
    { id: 2, style: 'Live Action Testimonial', tone: 'Authentic & Trustworthy', direction: 'Film real customers in their environment. Focus on emotional storytelling and genuine experiences.', criteria: { industry: 'Healthcare', audience: 'B2C' } },
    { id: 3, style: '3D Product Showcase', tone: 'Premium & Sleek', direction: 'Create a high-end, detailed 3D render of the product, highlighting its features with dynamic camera movements.', criteria: { niche: 'E-commerce', style: '3D' } },
    { id: 4, style: 'Fun Social Reels', tone: 'Engaging & Trendy', direction: 'Create short, snappy vertical videos with trending audio and quick cuts for maximum social media impact.', criteria: { mood: 'Fun', duration: 'Reels (<1 min)' } },
    { id: 5, style: 'Corporate Brand Story', tone: 'Professional & Inspiring', direction: 'A high-production value video showcasing the company\'s mission, values, and team. Polished and cinematic.', criteria: { niche: 'Corporate', mood: 'Professional' } },
    { id: 6, style: 'Mixed Media Explainer', tone: 'Dynamic & Engaging', direction: 'Combine live-action footage with motion graphics overlays to create a vibrant and informative video that holds attention.', criteria: 'default' }
];

interface FilterSelectProps {
    filter: {
        name: string;
        label: string;
        icon: React.ElementType;
        options: string[];
    };
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

// Erik Kennedy Heuristic #9: ABD - Anything But Dropdowns
// Replaced dropdown with radio button group for better UX
interface RadioGroupProps {
    filter: {
        name: string;
        label: string;
        icon: React.ElementType;
        options: string[];
    };
    value: string;
    onChange: (field: string, value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ filter, value, onChange }) => {
    const Icon = filter.icon;
    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm font-semibold text-gray-700 mb-4">
                <Icon className="w-5 h-5 text-cyant" />
                <span>{filter.label}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {filter.options.map(option => (
                    <label
                        key={option}
                        className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:elevate-sm ${
                            value === option 
                                ? 'border-cyant bg-cyan-50 text-cyant' 
                                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        <input
                            type="radio"
                            name={filter.name}
                            value={option}
                            checked={value === option}
                            onChange={(e) => onChange(filter.name, e.target.value)}
                            className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                            value === option 
                                ? 'border-cyant bg-cyant' 
                                : 'border-gray-300'
                        }`}>
                            {value === option && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                        </div>
                        <span className="text-sm font-medium">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};


export function VideoSelector() {
    const [selections, setSelections] = useState<{ [key: string]: string }>({
        industry: '',
        niche: '',
        audience: '',
        style: '',
        mood: '',
        duration: '',
    });

    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        budget: '',
        timeline: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [suggestion, setSuggestion] = useState(suggestions.find(s => s.criteria === 'default'));

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelections(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleContactChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleNextStep = () => {
        setCurrentStep(2);
    };

    const handlePrevStep = () => {
        setCurrentStep(1);
    };

    const handleSelectionChange = (field: string, value: string) => {
        setSelections(prev => ({ ...prev, [field]: value }));
    };

    const handleNextQuestion = () => {
        if (currentQuestion < filters.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setCurrentStep(2);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const handleQuestionSelection = (field: string, value: string) => {
        setSelections(prev => ({ ...prev, [field]: value }));
        // Auto-advance to next question after selection
        setTimeout(() => {
            handleNextQuestion();
        }, 500);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Here you would typically send the data to your backend
        const formData = {
            videoRequirements: selections,
            contactInfo: contactInfo,
            timestamp: new Date().toISOString()
        };
        
        console.log('Form submitted:', formData);
        
        // Simulate form submission
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setSelections({
                industry: '',
                niche: '',
                audience: '',
                style: '',
                mood: '',
                duration: '',
            });
            setContactInfo({
                name: '',
                email: '',
                company: '',
                phone: '',
                budget: '',
                timeline: '',
                message: ''
            });
        }, 3000);
    };

    useEffect(() => {
        const getSuggestion = () => {
            const activeFilters = Object.entries(selections).filter(([, value]) => value !== '' && value !== 'Any');
            
            if (activeFilters.length === 0) {
                 return suggestions.find(s => s.criteria === 'default');
            }

            let bestMatch = null;
            let maxScore = -1;

            for (const s of suggestions) {
                if(s.criteria === 'default') continue;

                let currentScore = 0;
                for (const [key, value] of Object.entries(s.criteria)) {
                    if (selections[key] === value) {
                        currentScore++;
                    }
                }
                
                if (currentScore > maxScore) {
                    maxScore = currentScore;
                    bestMatch = s;
                }
            }

            return bestMatch || suggestions.find(s => s.criteria === 'default');
        };

        setSuggestion(getSuggestion());
    }, [selections]);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-8 text-center">
                <span className="text-sm font-bold text-cyant tracking-widest">1. TELL US ABOUT YOUR PROJECT</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-night mt-6">Find. Filter. Create.</h2>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-unpop">
                    Share your vision and we'll bring it to life with the perfect video solution.
                </p>
                
                <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl p-12 mt-16 text-left elevate">
                    {/* Step Indicator */}
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center space-x-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                currentStep >= 1 ? 'bg-cyant text-white' : 'bg-gray-300 text-gray-600'
                            }`}>
                                1
                            </div>
                            <div className="w-12 h-0.5 bg-gray-300"></div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                currentStep >= 2 ? 'bg-cyant text-white' : 'bg-gray-300 text-gray-600'
                            }`}>
                                2
                            </div>
                        </div>
                    </div>

                    {/* Question Progress Indicator */}
                    {currentStep === 1 && (
                        <div className="flex items-center justify-center mb-8">
                            <div className="flex items-center space-x-2">
                                {filters.map((_, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className={`w-3 h-3 rounded-full ${
                                            index <= currentQuestion ? 'bg-cyant' : 'bg-gray-300'
                                        }`}></div>
                                        {index < filters.length - 1 && (
                                            <div className={`w-8 h-0.5 ${
                                                index < currentQuestion ? 'bg-cyant' : 'bg-gray-300'
                                            }`}></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 1 ? (
                        <div className="transition-all duration-500 ease-in-out">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-night mb-4 text-pop">
                                    {filters[currentQuestion].label}
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    {currentQuestion === 0 && "What industry are you in?"}
                                    {currentQuestion === 1 && "What's your business niche?"}
                                    {currentQuestion === 2 && "Who is your target audience?"}
                                    {currentQuestion === 3 && "What video style appeals to you?"}
                                    {currentQuestion === 4 && "What mood should your video convey?"}
                                    {currentQuestion === 5 && "How long should your video be?"}
                                </p>
                            </div>
                            
                            <div className="max-w-2xl mx-auto">
                                <RadioGroup
                                    filter={filters[currentQuestion]}
                                    value={selections[filters[currentQuestion].name]}
                                    onChange={handleQuestionSelection}
                                />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-2xl font-bold text-night mb-4 text-pop">Step 2: Contact Information</h3>
                            <p className="text-gray-700 mb-8 text-lg">
                                Share your contact details and project requirements. Our team will review and get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={contactInfo.name}
                                    onChange={handleContactChange}
                                    required
                                    className="w-full bg-white border-2 border-gray-200 rounded-lg py-4 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyant focus:border-cyant transition-colors elevate-sm"
                                    placeholder="Your full name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={contactInfo.email}
                                    onChange={handleContactChange}
                                    required
                                    className="w-full bg-white border-2 border-gray-200 rounded-lg py-4 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyant focus:border-cyant transition-colors elevate-sm"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={contactInfo.company}
                                    onChange={handleContactChange}
                                    className="w-full bg-white border-2 border-gray-200 rounded-lg py-4 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyant focus:border-cyant transition-colors elevate-sm"
                                    placeholder="Your company name"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={contactInfo.phone}
                                    onChange={handleContactChange}
                                    className="w-full bg-white border-2 border-gray-200 rounded-lg py-4 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyant focus:border-cyant transition-colors elevate-sm"
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={contactInfo.budget}
                                    onChange={handleContactChange}
                                    className="w-full bg-white border-2 border-gray-200 rounded-lg py-4 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyant focus:border-cyant transition-colors elevate-sm"
                                >
                                    <option value="">Select budget range</option>
                                    <option value="under-5k">Under $5,000</option>
                                    <option value="5k-10k">$5,000 - $10,000</option>
                                    <option value="10k-25k">$10,000 - $25,000</option>
                                    <option value="25k-50k">$25,000 - $50,000</option>
                                    <option value="50k-plus">$50,000+</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">Timeline</label>
                                <select
                                    id="timeline"
                                    name="timeline"
                                    value={contactInfo.timeline}
                                    onChange={handleContactChange}
                                    className="w-full bg-white border-2 border-gray-200 rounded-lg py-4 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyant focus:border-cyant transition-colors elevate-sm"
                                >
                                    <option value="">Select timeline</option>
                                    <option value="asap">ASAP (Rush job)</option>
                                    <option value="1-2-weeks">1-2 weeks</option>
                                    <option value="1-month">1 month</option>
                                    <option value="2-3-months">2-3 months</option>
                                    <option value="flexible">Flexible</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-8">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                            <textarea
                                id="message"
                                name="message"
                                value={contactInfo.message}
                                onChange={handleContactChange}
                                rows={4}
                                className="w-full bg-white border-2 border-gray-200 rounded-lg py-4 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyant focus:border-cyant transition-colors elevate-sm"
                                placeholder="Tell us more about your project, goals, and any specific requirements..."
                            />
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Recommendation Display - Show after all questions are answered */}
                    {currentStep === 1 && currentQuestion === filters.length - 1 && (
                        <div className="mb-12 bg-gradient-to-r from-cyan-50 to-orange-50 p-8 rounded-xl border-2 border-cyan-200 elevate-sm">
                            <h4 className="font-bold text-gray-800 flex items-center text-xl">
                                <WandSparkles className="w-6 h-6 mr-3 text-cyant"/>
                                Our Recommendation
                            </h4>
                            <div className="mt-6">
                                <p className="font-bold text-xl text-orange-600 text-pop">{suggestion!.style}</p>
                                <p className="font-semibold text-gray-700 mt-2 text-lg">{suggestion!.tone}</p>
                                <p className="text-gray-600 mt-3 text-unpop">{suggestion!.direction}</p>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                        {currentStep === 2 && (
                            <button
                                onClick={handlePrevStep}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold btn-secondary hover-lift btn-magic"
                            >
                                ← Back to Questions
                            </button>
                        )}
                        
                        {currentStep === 1 && currentQuestion > 0 && (
                            <button
                                onClick={handlePrevQuestion}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold btn-secondary hover-lift btn-magic"
                            >
                                ← Previous
                            </button>
                        )}
                        
                        {currentStep === 1 && currentQuestion === filters.length - 1 && (
                            <div className="ml-auto">
                                <button
                                    onClick={handleNextStep}
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold btn-orange hover-lift btn-magic"
                                >
                                    Continue to Contact Info →
                                </button>
                            </div>
                        )}
                        
                        {currentStep === 1 && currentQuestion < filters.length - 1 && (
                            <div className="ml-auto">
                                <button
                                    onClick={handleNextQuestion}
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold btn-orange hover-lift btn-magic"
                                >
                                    Next Question →
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}