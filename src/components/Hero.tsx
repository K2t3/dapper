import React from 'react';

export function Hero() {
  // 画像のURL（実際の実装では、これらの画像をNetlify CMSを通じてアップロードし、そのURLを使用する）
  const buildingImageUrl = '/uploads/building.jpg'; // 建物の外観の写真
  const teachersImageUrl = '/uploads/teachers.jpg'; // 2人の先生の写真
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* 背景画像：建物の外観 */}
      <img
        src={buildingImageUrl}
        alt="エリザベス外国語研究所の外観"
        className="w-full h-full object-cover"
      />
      
      {/* 明るい色彩のグラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-indigo-500/30">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              家族のような暖かい雰囲気で<br />
              英語を学びませんか？
            </h2>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg transition-colors duration-300 shadow-lg"
            >
              体験レッスンを予約する
            </a>
          </div>
        </div>
      </div>
      
      {/* 先生の写真 - モバイルでは上部に、PCでは右側に大きく配置 */}
      <div className="absolute top-8 right-8 md:top-1/2 md:right-12 md:transform md:-translate-y-1/2 z-10">
        <div className="w-32 h-32 md:w-128 md:h-128 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src={teachersImageUrl}
            alt="エリザベス外国語研究所の先生方"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}