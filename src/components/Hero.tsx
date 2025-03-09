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
              <span className="text-yellow-300">37年</span>の実績と信頼のエリザベス<br />
              学び、成長するあなたとともに。<br />
              <span className="text-blue-300">子どもから大人まで大歓迎です。</span>
            </h2>
            <div className="flex items-center mt-6">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg transition-colors duration-300 shadow-lg"
              >
                体験レッスン予約
              </a>
              {/* モバイル版の先生の写真 - ボタンの右側に配置（PC版では非表示） */}
              <div className="md:hidden ml-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img
                    src={teachersImageUrl}
                    alt="エリザベス外国語研究所の先生方"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* PC版の先生の写真 - 右側に大きく配置（モバイルでは非表示） */}
      <div className="hidden md:block absolute top-1/2 right-12 transform -translate-y-1/2 z-10">
        <div className="w-128 h-128 rounded-full overflow-hidden border-4 border-white shadow-xl">
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