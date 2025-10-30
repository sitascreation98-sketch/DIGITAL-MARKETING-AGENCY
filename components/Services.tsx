import React from 'react';
import { Page } from '../App';
import { ArrowRightIcon, CheckCircleIcon, CodeIcon, MegaphoneIcon, WebDesignIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

const serviceData = [
  {
    title: 'Web Design',
    icon: <WebDesignIcon />,
    image: 'https://picsum.photos/seed/service1/400/250',
    description: 'There are many variation of passages of Lorem Ipsum available form.',
    features: ['Fully Responsive', 'Creativity in Designs', 'SEO Optimized Content']
  },
  {
    title: 'Web Development',
    icon: <CodeIcon />,
    image: 'https://picsum.photos/seed/service2/400/250',
    description: 'There are many variation of passages of Lorem Ipsum available form.',
    features: ['Fully Responsive', 'Creativity in Designs', 'SEO Optimized Content']
  },
  {
    title: 'Digital Marketing',
    icon: <MegaphoneIcon />,
    image: 'https://picsum.photos/seed/service3/400/250',
    description: 'There are many variation of passages of Lorem Ipsum available form.',
    features: ['Fully Responsive', 'Creativity in Designs', 'SEO Optimized Content']
  }
];

// Fix: Use a type alias with an intersection type instead of extending with an interface, which cannot extend a complex type like `typeof`. This resolves the compilation errors.
type ServiceCardProps = (typeof serviceData)[0] & {
    onNavigate: (page: Page) => void;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, image, description, features, onNavigate }) => (
  <div className="bg-[#10052a] text-white rounded-3xl p-8 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
    <div className="relative mb-6">
      <img src={image} alt={title} className="rounded-2xl" />
      <div className="absolute -bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-bold mt-6">{title}</h3>
    <p className="mt-4 text-gray-400 flex-grow">{description}</p>
    <ul className="mt-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <CheckCircleIcon className="text-orange-500 mr-2" /> {feature}
        </li>
      ))}
    </ul>
    <button onClick={() => onNavigate('services')} className="mt-8 text-orange-400 font-semibold flex items-center space-x-2 group">
      <span>DISCOVER MORE</span> <ArrowRightIcon className="group-hover:translate-x-1 transition-transform"/>
    </button>
  </div>
);

interface ServicesProps {
    onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 relative fade-in-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-purple-600 font-semibold mb-2 flex items-center justify-center">
            <span className="w-3 h-3 bg-purple-200 rounded-full mr-2"></span> OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Services We're Offering to Customers</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} onNavigate={onNavigate} />
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full left-0 px-4 md:px-0 pointer-events-none">
             <button className="bg-[#10052a] text-white p-3 rounded-full shadow-lg -ml-16 hover:bg-purple-800 transition-colors pointer-events-auto"><ChevronLeftIcon /></button>
             <button className="bg-[#10052a] text-white p-3 rounded-full shadow-lg -mr-16 hover:bg-purple-800 transition-colors pointer-events-auto"><ChevronRightIcon /></button>
        </div>
      </div>
    </section>
  );
};

export default Services;
