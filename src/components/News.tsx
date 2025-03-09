import React, { useState, useEffect } from 'react';
import { getNewsItems, NewsItem } from '../utils/content';

export function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNewsItems() {
      try {
        const items = await getNewsItems();
        setNewsItems(items);
      } catch (error) {
        console.error('Failed to load news items:', error);
      } finally {
        setLoading(false);
      }
    }

    loadNewsItems();
  }, []);
  return (
    <section id="news" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">ニュース</h2>
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : newsItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            ニュースはありません
          </div>
        ) : (
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:w-48 object-cover"
                      src={item.image || 'https://placehold.co/600x400/e2e8f0/1e293b?text=No+Image'}
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
        )}
      </div>
    </section>
  );
}