import React, { useState, useEffect } from 'react';
import { getNewsItems, NewsItem } from '../utils/content';
import { X } from 'lucide-react';

export function News() {
  // 本文を制限するヘルパー関数
  const truncateContent = (content: string) => {
    // 38文字以下の場合はそのまま返す
    if (content.length <= 38) {
      return content;
    }
    
    // 38文字で切り取り、「...」を追加
    return content.substring(0, 38) + '...';
  };
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

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
                    {item.image ? (
                      <img
                        className="h-48 w-full md:w-48 object-cover"
                        src={item.image}
                        alt={item.title}
                      />
                    ) : (
                      <div
                        className="h-48 w-full md:w-48 flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100"
                        style={{
                          // タイトルに基づいて色を変える（簡易的なハッシュ関数）
                          background: `linear-gradient(135deg,
                            hsl(${item.title.length * 10 % 360}, 70%, 85%),
                            hsl(${(item.title.length * 20 + 40) % 360}, 70%, 85%))`
                        }}
                      >
                        <div className="text-center p-4">
                          <div className="text-2xl font-bold text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.3)' }}>
                            {item.title.substring(0, 1)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{truncateContent(item.content)}</p>
                    <button
                      onClick={() => setSelectedNews(item)}
                      className="mt-4 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      詳しく見る →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ニュース詳細モーダル */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-500">{selectedNews.date}</p>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedNews.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {selectedNews.image && (
                <div className="mb-6">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}
              
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line">{selectedNews.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}