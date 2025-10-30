
import React from 'react';
import { StarIcon } from './icons';

const Ticker: React.FC = () => {
    const items = ["MARKETING AGENCY", "BRANDING", "MARKETING", "DEVELOPMENT"];
    const repeatedItems = [...items, ...items, ...items, ...items]; // Repeat for seamless loop

    return (
        <div className="bg-white py-4 overflow-hidden">
            <div className="flex animate-scroll">
                {repeatedItems.map((item, index) => (
                    <div key={index} className="flex items-center flex-shrink-0 mx-4">
                        <span className={`text-2xl font-bold ${index % 2 === 0 ? 'text-gray-800' : 'text-orange-500'}`}>{item}</span>
                        <StarIcon className="w-6 h-6 text-purple-500 mx-2" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ticker;
