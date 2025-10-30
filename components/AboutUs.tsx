import React from 'react';
import { Page } from '../App';
import { ArrowRightIcon, CheckCircleIcon } from './icons';

interface AboutUsProps {
    onNavigate: (page: Page) => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-white overflow-hidden fade-in-section">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <img src="https://picsum.photos/seed/aboutus/600/650" alt="Team working" className="rounded-3xl w-full" />
                    <div className="absolute bottom-8 left-8 bg-gradient-to-br from-orange-400 to-yellow-500 text-white p-8 rounded-full flex flex-col items-center justify-center w-48 h-48 shadow-xl">
                        <span className="text-6xl font-bold">28</span>
                        <span className="text-center font-semibold leading-tight">YEARS OF EXPERIENCE</span>
                    </div>
                </div>
                <div>
                    <p className="text-purple-600 font-semibold mb-2 flex items-center"><span className="w-3 h-3 bg-purple-200 rounded-full mr-2"></span> ABOUT US</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Welcome to Our Smart Digital Agency</h2>
                    <p className="mt-4 text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <div className="mt-6 flex space-x-4">
                        <button className="bg-white border border-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Quality Services</button>
                        <button className="bg-white border border-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">Innovation Ideas</button>
                    </div>
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-gray-800">Digital Marketing</span>
                            <span className="font-semibold text-purple-600">90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center text-gray-600"><CheckCircleIcon className="text-purple-600 mr-2" /> Many variations of passages of Lorem Ipsum</li>
                        <li className="flex items-center text-gray-600"><CheckCircleIcon className="text-purple-600 mr-2" /> Many variations of passages of Lorem</li>
                    </ul>
                    <button onClick={() => onNavigate('services')} className="mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
                        <span>DISCOVER MORE</span>
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutUs;
