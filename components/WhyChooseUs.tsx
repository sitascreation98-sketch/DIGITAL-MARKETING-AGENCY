import React from 'react';
import { Page } from '../App';
import { ArrowRightIcon, QualityIcon, ExpertsIcon, SuccessIcon } from './icons';

interface WhyChooseUsProps {
    onNavigate: (page: Page) => void;
}

const benefits = [
    {
        icon: <QualityIcon />,
        title: "Quality Services",
        description: "Parturient montes nascetur ridiculus mus is maecenas venenatis, neque in feugiat elementum."
    },
    {
        icon: <ExpertsIcon />,
        title: "Professional Experts",
        description: "Parturient montes nascetur ridiculus mus is maecenas venenatis, neque in feugiat elementum."
    },
    {
        icon: <SuccessIcon />,
        title: "99% Success Rates",
        description: "Parturient montes nascetur ridiculus mus is maecenas venenatis, neque in feugiat elementum."
    }
];

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-white relative overflow-hidden fade-in-section">
             <div className="absolute -right-40 top-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"></div>
             <div className="absolute -left-40 bottom-0 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-4 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <img src="https://picsum.photos/seed/whyus/600/700" alt="Team meeting" className="rounded-3xl w-full" />
                        <div className="absolute -bottom-10 right-0 bg-white p-6 rounded-2xl shadow-lg w-72">
                            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                                {/* Replace with a proper icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                            <p className="text-sm font-semibold text-purple-600 mt-2">GROW BUSINESS</p>
                            <h3 className="text-xl font-bold text-gray-800">We Help Your Business To Become More Stronger</h3>
                        </div>
                    </div>
                    <div>
                        <p className="text-purple-600 font-semibold mb-2 flex items-center"><span className="w-3 h-3 bg-purple-200 rounded-full mr-2"></span> OUR BENEFITS</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Why You Should Choose Our Agency</h2>
                        <p className="mt-4 text-gray-600">The primary goal of business market is to help organizations improve their performance.</p>
                        <div className="mt-8 space-y-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800">{benefit.title}</h4>
                                        <p className="text-gray-600 mt-1">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                         <button onClick={() => onNavigate('services')} className="mt-10 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
                            <span>DISCOVER MORE</span>
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
