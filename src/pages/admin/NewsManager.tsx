import React, { useState } from 'react';
import { Save, Trash2, Plus } from 'lucide-react';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  image: string;
}

export function NewsManager() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: '1',
      date: '2024-03-15',
      title: '春期講習のお知らせ',
      content: '4月からの新学期に向けて、春期講習を開催します。',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
    }
  ]);

  const addNewsItem = () => {
    const newItem: NewsItem = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      title: '',
      content: '',
      image: ''
    };
    setNewsItems([...newsItems, newItem]);
  };

  const updateNewsItem = (id: string, field: keyof NewsItem, value: string) => {
    setNewsItems(newsItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const deleteNewsItem = (id: string) => {
    setNewsItems(newsItems.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">ニュース管理</h2>
        <button
          onClick={addNewsItem}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          <Plus className="h-4 w-4" />
          <span>新規追加</span>
        </button>
      </div>

      <div className="space-y-4">
        {newsItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">日付</label>
                  <input
                    type="date"
                    value={item.date}
                    onChange={(e) => updateNewsItem(item.id, 'date', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">タイトル</label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => updateNewsItem(item.id, 'title', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">画像URL</label>
                  <input
                    type="text"
                    value={item.image}
                    onChange={(e) => updateNewsItem(item.id, 'image', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">内容</label>
                  <textarea
                    value={item.content}
                    onChange={(e) => updateNewsItem(item.id, 'content', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => deleteNewsItem(item.id)}
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4" />
                <span>削除</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Save className="h-4 w-4" />
                <span>保存</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}