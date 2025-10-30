import React from 'react';
import { ChevronRightIcon } from './icons';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumb }) => {
  return (
    <section className="relative bg-[#10052a] text-white py-24">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pageheader/1920/1080')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        <div className="flex items-center justify-center space-x-2 mt-4 text-lg">
          <span>Home</span>
          <ChevronRightIcon />
          <span className="text-purple-400">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
