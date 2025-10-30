import React from 'react';
import { Page } from '../App';
import PageHeader from '../components/PageHeader';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';

interface PricingPageProps {
  onNavigate: (page: Page) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <>
      <PageHeader title="Our Pricing" breadcrumb="Pricing" />
      <Pricing onNavigate={onNavigate} />
      <Testimonials />
    </>
  );
};

export default PricingPage;
