import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useIsMobile } from '../hooks/useIsMobile';

export function Profile() {
  const isMobile = useIsMobile();
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('八女郡広川町久泉485-5')}`;

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-2">
          {siteConfig.schoolName}
        </h1>
        <a 
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 hover:text-blue-600 group"
        >
          <MapPin className="h-5 w-5 mr-2 text-gray-400 group-hover:text-blue-600" />
          <span className="border-b border-gray-400 group-hover:border-blue-600">
            八女郡広川町久泉485-5
          </span>
        </a>
      </div>
      <p className="text-lg text-gray-600 bg-white p-6 rounded-lg shadow-md mt-4">
        広川町で創業から35年。各生徒の個性やモチベーションに合わせたコーチングが特徴で、短期間での英検合格、留学サポート実績も豊富です。テスト対策等、ほか科目の授業もリクエストに応じて実施しております。
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
        <button 
          onClick={scrollToContact}
          className="flex items-center justify-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          <Mail className="h-5 w-5" />
          <span>お問い合わせフォーム</span>
        </button>
        {isMobile ? (
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center justify-center space-x-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="h-5 w-5" />
            <span>{siteConfig.contact.phone}</span>
          </a>
        ) : (
          <div className="flex items-center justify-center space-x-2 px-8 py-3 bg-red-600 text-white rounded-lg whitespace-nowrap">
            <Phone className="h-5 w-5" />
            <span>{siteConfig.contact.phone}</span>
          </div>
        )}
      </div>
    </section>
  );
}