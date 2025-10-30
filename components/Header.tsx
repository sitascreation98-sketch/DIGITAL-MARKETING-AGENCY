import React, { useState } from 'react';
import { Page } from '../App';
import { MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon, ChevronDownIcon, SearchIcon, UserIcon } from './icons';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const NavLink: React.FC<{
    onNavigate: (page: Page) => void;
    page: Page;
    children: React.ReactNode;
    currentPage: Page;
    dropdown?: { page: Page, label: string }[];
    menuKey: string;
    openMenu: string | null;
    setOpenMenu: (key: string | null) => void;
}> = ({ onNavigate, page, children, currentPage, dropdown, menuKey, openMenu, setOpenMenu }) => {
    const isActive = currentPage === page;
    return (
        <div className="relative" onMouseEnter={() => setOpenMenu(menuKey)} onMouseLeave={() => setOpenMenu(null)}>
            <button
                onClick={() => onNavigate(page)}
                className={`text-gray-800 font-semibold hover:text-purple-600 flex items-center transition-colors ${isActive ? 'text-purple-600' : ''}`}
            >
                {children} <ChevronDownIcon />
            </button>
            {dropdown && openMenu === menuKey && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    {dropdown.map(item => (
                        <button
                            key={item.page}
                            onClick={() => onNavigate(item.page)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};


const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    
    const pageDropdown = [
        { page: 'about' as Page, label: 'About Us' },
        { page: 'pricing' as Page, label: 'Our Pricing' },
        { page: 'services' as Page, label: 'Services' },
        { page: 'projects' as Page, label: 'Projects' },
    ];

  return (
    <header className="bg-white relative z-40">
      {/* Top Bar */}
      <div className="bg-[#10052a] text-white text-sm hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPinIcon />
              <span>30 Commercial Road Fratton, Australia</span>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon />
              <span>needhelp@company.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon />
              <span>+(61)-8000</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-purple-400"><FacebookIcon /></a>
            <a href="#" aria-label="Twitter" className="hover:text-purple-400"><TwitterIcon /></a>
            <a href="#" aria-label="Pinterest" className="hover:text-purple-400"><PinterestIcon /></a>
            <a href="#" aria-label="Instagram" className="hover:text-purple-400"><InstagramIcon /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div className="text-3xl font-bold text-gray-800 cursor-pointer" onClick={() => onNavigate('home')}>Sita's Design Studio</div>
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink onNavigate={onNavigate} page="home" currentPage={currentPage} menuKey="home" openMenu={openMenu} setOpenMenu={setOpenMenu}>HOME</NavLink>
            <NavLink onNavigate={onNavigate} page="about" currentPage={currentPage} dropdown={pageDropdown} menuKey="pages" openMenu={openMenu} setOpenMenu={setOpenMenu}>PAGES</NavLink>
            <NavLink onNavigate={onNavigate} page="projects" currentPage={currentPage} menuKey="project" openMenu={openMenu} setOpenMenu={setOpenMenu}>PROJECT</NavLink>
            <NavLink onNavigate={onNavigate} page="services" currentPage={currentPage} menuKey="service" openMenu={openMenu} setOpenMenu={setOpenMenu}>SERVICE</NavLink>
            <NavLink onNavigate={onNavigate} page="blog" currentPage={currentPage} menuKey="blog" openMenu={openMenu} setOpenMenu={setOpenMenu}>BLOG</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Get in Touch
            </button>
            <div className="hidden lg:flex items-center space-x-4">
              <SearchIcon />
              <UserIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
