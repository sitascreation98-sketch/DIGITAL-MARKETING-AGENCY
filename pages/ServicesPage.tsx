import React from 'react';
import { Page } from '../App';
import PageHeader from '../components/PageHeader';
import { ArrowRightIcon, CheckCircleIcon, CodeIcon, MegaphoneIcon, WebDesignIcon, SeoIcon, ContentIcon, SocialIcon } from '../components/icons';

interface ServicesPageProps {
    onNavigate: (page: Page) => void;
}

const serviceData = [
  {
    title: 'Web Design',
    icon: <WebDesignIcon />,
    image: 'https://picsum.photos/seed/service1/400/250',
    description: 'Creating visually stunning and user-friendly websites that capture your brand essence and engage your audience.',
    features: ['Responsive Design', 'UI/UX Prototyping', 'Custom Graphics']
  },
  {
    title: 'Web Development',
    icon: <CodeIcon />,
    image: 'https://picsum.photos/seed/service2/400/250',
    description: 'Building robust, scalable, and high-performance websites and applications tailored to your business needs.',
    features: ['Frontend & Backend', 'E-commerce Solutions', 'CMS Integration']
  },
  {
    title: 'Digital Marketing',
    icon: <MegaphoneIcon />,
    image: 'https://picsum.photos/seed/service3/400/250',
    description: 'Driving growth and increasing your online presence through strategic, data-driven marketing campaigns.',
    features: ['PPC Advertising', 'Email Marketing', 'Conversion Rate Optimization']
  },
  {
    title: 'SEO Optimization',
    icon: <SeoIcon />,
    image: 'https://picsum.photos/seed/service4/400/250',
    description: 'Improving your search engine rankings to attract more organic traffic and generate qualified leads.',
    features: ['Keyword Research', 'On-Page & Off-Page SEO', 'Technical SEO Audits']
  },
  {
    title: 'Content Creation',
    icon: <ContentIcon />,
    image: 'https://picsum.photos/seed/service5/400/250',
    description: 'Crafting compelling content that resonates with your audience and establishes your brand as an authority.',
    features: ['Blog Writing', 'Video Production', 'Infographics & E-books']
  },
  {
    title: 'Social Media',
    icon: <SocialIcon />,
    image: 'https://picsum.photos/seed/service6/400/250',
    description: 'Building and engaging your community on social platforms to enhance brand loyalty and drive conversions.',
    features: ['Strategy Development', 'Community Management', 'Paid Social Campaigns']
  },
];

const ServiceCard: React.FC<(typeof serviceData)[0] & { onNavigate: (page: Page) => void }> = ({ title, icon, image, description, features, onNavigate }) => (
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
    <button onClick={() => onNavigate('contact')} className="mt-8 text-orange-400 font-semibold flex items-center space-x-2 group">
      <span>GET A QUOTE</span> <ArrowRightIcon className="group-hover:translate-x-1 transition-transform"/>
    </button>
  </div>
);


const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <>
      <PageHeader title="Our Services" breadcrumb="Services" />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map((service, index) => (
                <ServiceCard key={index} {...service} onNavigate={onNavigate} />
            ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
