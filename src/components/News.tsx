import React from 'react';

const newsItems = [
  {
    date: '2024年3月15日',
    title: '春期講習のお知らせ',
    content: '4月からの新学期に向けて、春期講習を開催します。早期申込割引実施中！',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: '2024年3月1日',
    title: '新コース開講のお知らせ',
    content: 'ビジネス英語コースを新設。4月より開講予定です。',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: '2024年2月15日',
    title: 'オンラインレッスン開始',
    content: 'ご自宅からでも受講可能なオンラインレッスンをスタートしました。',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800'
  }
];

export function News() {
  return (
    <section id="news" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">ニュース</h2>
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 transition-colors">
                    詳しく見る →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}