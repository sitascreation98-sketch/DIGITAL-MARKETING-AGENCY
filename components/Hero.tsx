import React, { useState } from 'react';
import { Page } from '../App';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, StarIcon } from './icons';

interface HeroProps {
    onNavigate: (page: Page) => void;
}

const slides = [
    {
        headline: <>Grow Your Business Bigger and <span className="text-purple-600">Better</span></>,
        description: "An award-winning CEO agency with disciplines in digital marketing design and website development, focused understanding you.",
        imageSeed: "hero"
    },
    {
        headline: <>We Create Experiences That <span className="text-purple-600">Convert</span></>,
        description: "Our team of experts combines strategy, creativity, and technology to deliver outstanding results for your brand.",
        imageSeed: "hero2"
    },
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slide = slides[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/bgwave/1920/1080')] bg-no-repeat bg-cover opacity-5" style={{ backgroundPosition: 'center' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div key={currentSlide} className="hero-content">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
                {slide.headline}
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                {slide.description}
                </p>
            </div>
            <button onClick={() => onNavigate('about')} className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center space-x-2 mx-auto lg:mx-0 hover:opacity-90 transition-opacity">
              <span>DISCOVER MORE</span>
              <ArrowRightIcon />
            </button>
          </div>
          <div className="relative">
             <div key={currentSlide} className="hero-content">
                <img src={`https://picsum.photos/seed/${slide.imageSeed}/600/700`} alt="Smiling man with phone" className="rounded-3xl shadow-2xl mx-auto" />
             </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-lg flex items-center space-x-3 w-64 z-20">
              <div className="flex -space-x-2">
                <img src="https://picsum.photos/seed/avatar1/40/40" alt="avatar" className="rounded-full border-2 border-white"/>
                <img src="https://picsum.photos/seed/avatar2/40/40" alt="avatar" className="rounded-full border-2 border-white"/>
                <img src="https://picsum.photos/seed/avatar3/40/40" alt="avatar" className="rounded-full border-2 border-white"/>
              </div>
              <div>
                <p className="font-bold text-gray-800">TRUSTED BY</p>
                <p className="text-sm text-purple-600 font-semibold">89,000 BUSINESSES</p>
              </div>
            </div>
            <div className="absolute top-1/4 -right-12 bg-white p-4 rounded-2xl shadow-lg z-20">
                <div className="flex text-yellow-400">
                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                </div>
                <p className="font-bold mt-1">5 Stars</p>
                <p className="text-sm text-gray-500">Read Our Success Stories</p>
            </div>
             <div className="absolute top-20 -left-10 w-20 h-20 animate-bounce z-20">
                <img src="https://img.icons8.com/plasticine/100/000000/rocket.png" alt="Rocket"/>
            </div>
             <div className="absolute bottom-20 -right-10 w-16 h-16 z-20">
                <img src="https://img.icons8.com/plasticine/100/000000/target.png" alt="Target"/>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-4">
          <button onClick={prevSlide} className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100" aria-label="Previous Slide"><ChevronLeftIcon /></button>
          <button onClick={nextSlide} className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100" aria-label="Next Slide"><ChevronRightIcon /></button>
        </div>
      </div>
       <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-gray-800 font-bold p-3 text-center text-lg hidden md:block" style={{clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'}}>
         96% SUCCESS RATE
       </div>
    </section>
  );
};

export default Hero;
