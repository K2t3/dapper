import React, { useState } from 'react';
import { Phone, Mail, Menu, X, Home, Newspaper, MapPin, BanknoteIcon } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useIsMobile } from '../hooks/useIsMobile';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('八女郡広川町久泉485-5')}`;

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={siteConfig.logo.url}
              alt={siteConfig.logo.alt}
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
            <span className="text-lg md:text-xl font-bold tracking-wider uppercase bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 whitespace-nowrap">
              {siteConfig.schoolName}
            </span>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#" className="hover:text-blue-300 transition-colors flex items-center space-x-2">
                  <Home className="h-4 w-4" />
                  <span>ホーム</span>
                </a>
              </li>
              <li>
                <button onClick={scrollToPricing} className="hover:text-blue-300 transition-colors flex items-center space-x-2">
                  <BanknoteIcon className="h-4 w-4" />
                  <span>料金プラン</span>
                </button>
              </li>
              <li>
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-blue-300 transition-colors flex items-center space-x-2"
                >
                  <MapPin className="h-4 w-4" />
                  <span>アクセス</span>
                </a>
              </li>
              <li>
                <button onClick={scrollToContact} className="hover:text-blue-300 transition-colors flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>お問い合わせ</span>
                </button>
              </li>
              <li>
                <div className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  <Phone className="h-4 w-4 text-red-500" />
                  <span>{siteConfig.contact.phone}</span>
                </div>
              </li>
            </ul>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <a 
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden fixed inset-0 top-[72px] bg-gray-800 z-50">
            <ul className="flex flex-col items-center justify-center h-full space-y-8">
              <li className="w-full">
                <a 
                  href="#" 
                  className="flex items-center justify-center space-x-2 py-4 hover:bg-gray-700 transition-colors w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="h-6 w-6" />
                  <span className="text-xl">ホーム</span>
                </a>
              </li>
              <li className="w-full">
                <button 
                  onClick={scrollToPricing}
                  className="flex items-center justify-center space-x-2 py-4 hover:bg-gray-700 transition-colors w-full"
                >
                  <BanknoteIcon className="h-6 w-6" />
                  <span className="text-xl">料金プラン</span>
                </button>
              </li>
              <li className="w-full">
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-4 hover:bg-gray-700 transition-colors w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MapPin className="h-6 w-6" />
                  <span className="text-xl">アクセス</span>
                </a>
              </li>
              <li className="w-full">
                <button 
                  onClick={scrollToContact}
                  className="flex items-center justify-center space-x-2 py-4 hover:bg-gray-700 transition-colors w-full"
                >
                  <Mail className="h-6 w-6" />
                  <span className="text-xl">お問い合わせ</span>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}