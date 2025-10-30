import React from 'react';
import { Page } from '../App';
import { ArrowRightIcon, FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon, PaperPlaneIcon } from './icons';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#10052a] text-gray-300">
      {/* Top Banner */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-lg">Recognized as One of the Leading Company!</h2>
            <button onClick={() => onNavigate('about')} className="mt-6 bg-white text-purple-600 font-bold px-8 py-3 rounded-lg flex items-center space-x-2 mx-auto md:mx-0 hover:bg-gray-100 transition-colors">
              <span>DISCOVER MORE</span>
              <ArrowRightIcon />
            </button>
          </div>
          <div className="relative mt-8 md:mt-0">
            <img src="https://picsum.photos/seed/footer-lady/300/300" alt="Professional pointing" className="relative z-10 rounded-full" />
            <div className="absolute inset-0 bg-purple-500/30 rounded-full transform scale-125 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4 cursor-pointer" onClick={() => onNavigate('home')}>Sita's Design Studio</h3>
            <p className="text-gray-400">Empowering brands with cutting-edge digital solutions to drive growth and innovation.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="hover:text-white"><FacebookIcon /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white"><TwitterIcon /></a>
              <a href="#" aria-label="Pinterest" className="hover:text-white"><PinterestIcon /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><InstagramIcon /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white">About</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white">Our Services</button></li>
              <li><button onClick={() => onNavigate('projects')} className="hover:text-white">Recent Projects</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white">Upcoming News</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white">Meet the Team</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white">Support</button></li>
              <li><button className="hover:text-white">Privacy Policy</button></li>
              <li><button className="hover:text-white">Terms of Use</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Newsletter</h4>
            <div className="relative">
              <input type="email" placeholder="Email Address" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 pl-4 pr-12" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-400 p-2" aria-label="Subscribe"><PaperPlaneIcon /></button>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">I agree to all your terms and policies</label>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; Copyright 2024 by SitasDesign.Studio</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="hover:text-white">Terms & Conditions</button>
            <button className="hover:text-white">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
