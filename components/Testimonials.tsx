import React, { useState } from 'react';
import { QuoteIcon, ArrowLeftIcon, ArrowRightIcon } from './icons';

const testimonialsData = [
    {
        quote: "Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard McClintock And Its Symbolist Charity Lorem Ipsum I.",
        name: "Cameron Williamson",
        title: "Business Owner",
        avatars: ["test1", "test2", "test3"],
        imageSeed: "testimonial-lady"
    },
    {
        quote: "The team's dedication and creativity are unparalleled. They took our vision and turned it into a stunning reality. Highly recommended for any digital marketing needs!",
        name: "Jane Doe",
        title: "Marketing Director",
        avatars: ["test4", "test5", "test6"],
        imageSeed: "testimonial-man"
    }
];

const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => setActiveIndex(prev => (prev + 1) % testimonialsData.length);
    const prevTestimonial = () => setActiveIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length);

    const activeTestimonial = testimonialsData[activeIndex];

    return (
        <section className="py-24 bg-white fade-in-section">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-purple-600 font-semibold mb-2 flex items-center"><span className="w-3 h-3 bg-purple-200 rounded-full mr-2"></span> TESTIMONIALS</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">What They're Talking About Company?</h2>
                        <div key={activeIndex} className="hero-content">
                            <div className="mt-8 relative">
                                <QuoteIcon className="text-gray-100 w-24 h-24 absolute -top-8 -left-8" />
                                <p className="text-lg text-gray-600 relative z-10">{activeTestimonial.quote}</p>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-xl font-bold text-gray-800">{activeTestimonial.name}</h4>
                                <p className="text-gray-500">{activeTestimonial.title}</p>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-between items-center">
                            <div className="flex -space-x-3">
                                {activeTestimonial.avatars.map(seed => (
                                     <img key={seed} src={`https://picsum.photos/seed/${seed}/60/60`} alt="testimonial avatar" className="rounded-full border-4 border-white shadow-md"/>
                                ))}
                            </div>
                            <div className="flex space-x-3">
                                <button onClick={prevTestimonial} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><ArrowLeftIcon/></button>
                                <button onClick={nextTestimonial} className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:opacity-90 transition-opacity"><ArrowRightIcon/></button>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="absolute -inset-4 bg-purple-100 rounded-full transform rotate-6"></div>
                        <div className="absolute -inset-4 bg-purple-200/50 rounded-full transform -rotate-6"></div>
                        <div key={activeIndex} className="hero-content">
                            <img src={`https://picsum.photos/seed/${activeTestimonial.imageSeed}/500/600`} alt="Business person" className="rounded-full relative z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
