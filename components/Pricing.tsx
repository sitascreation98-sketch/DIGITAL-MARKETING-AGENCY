import React from 'react';
import { Page } from '../App';
import { ArrowRightIcon, CheckCircleIcon, BasicPlanIcon, StandardPlanIcon, PremiumPlanIcon } from './icons';

interface PricingProps {
    onNavigate: (page: Page) => void;
}

const pricingData = [
  {
    title: 'Basic Plan',
    price: '29',
    icon: <BasicPlanIcon />,
    features: ['Fully Responsive', 'Creativity in Designs', 'SEO Optimized Content']
  },
  {
    title: 'Standard Plan',
    price: '39',
    icon: <StandardPlanIcon />,
    features: ['Fully Responsive', 'Creativity in Designs', 'SEO Optimized Content']
  },
  {
    title: 'Premium Plan',
    price: '49',
    icon: <PremiumPlanIcon />,
    features: ['Fully Responsive', 'Creativity in Designs', 'SEO Optimized Content']
  }
];

const PricingCard: React.FC<(typeof pricingData)[0] & { onNavigate: (page: Page) => void }> = ({ title, price, icon, features, onNavigate }) => (
  <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <p className="text-lg font-semibold text-gray-500">{title}</p>
    <p className="text-4xl font-bold text-gray-800 my-2">₹{price}<span className="text-lg font-normal text-gray-500">/Month</span></p>
    <p className="text-gray-600 mb-6">There are many variation of passages of Lorem Ipsum available form.</p>
    <ul className="space-y-3 mb-8 text-left">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <CheckCircleIcon className="text-orange-500 mr-3" /> {feature}
        </li>
      ))}
    </ul>
    <button onClick={() => onNavigate('contact')} className="mt-auto bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center space-x-2 w-full justify-center hover:opacity-90 transition-opacity">
      <span>DISCOVER MORE</span>
      <ArrowRightIcon />
    </button>
  </div>
);

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 fade-in-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-purple-600 font-semibold mb-2 flex items-center justify-center">
            <span className="w-3 h-3 bg-purple-200 rounded-full mr-2"></span> OUR PLANS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Make Brand Pricing Plans Identities</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
