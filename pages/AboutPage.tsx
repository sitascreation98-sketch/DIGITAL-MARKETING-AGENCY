import React from 'react';
import { Page } from '../App';
import PageHeader from '../components/PageHeader';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <>
      <PageHeader title="About Us" breadcrumb="About" />
      <AboutUs onNavigate={onNavigate} />
      <WhyChooseUs onNavigate={onNavigate} />
      <Team />
      <Testimonials />
    </>
  );
};

export default AboutPage;
