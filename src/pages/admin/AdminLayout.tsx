import React from 'react';
import { Settings, Newspaper, Image } from 'lucide-react';

interface AdminLayoutProps {
  activeTab: 'news' | 'images';
  onTabChange: (tab: 'news' | 'images') => void;
  children: React.ReactNode;
}

export function AdminLayout({ activeTab, onTabChange, children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Settings className="h-6 w-6 text-gray-600" />
              <h1 className="ml-2 text-xl font-semibold">管理画面</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => onTabChange('news')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'news'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Newspaper className="h-4 w-4" />
            <span>ニュース管理</span>
          </button>
          <button
            onClick={() => onTabChange('images')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeTab === 'images'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Image className="h-4 w-4" />
            <span>画像管理</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          {children}
        </div>
      </div>
    </div>
  );
}