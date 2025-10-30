import React from 'react';
import { Page } from '../App';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Ticker from '../components/Ticker';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <TrustedBy />
      <AboutUs onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <WhyChooseUs onNavigate={onNavigate} />
      <Stats />
      <Projects />
      <Ticker />
      <Testimonials />
      <Pricing onNavigate={onNavigate} />
      <Contact />
    </>
  );
};

export default HomePage;
