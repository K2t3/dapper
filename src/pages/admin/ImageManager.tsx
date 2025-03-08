import React, { useState } from 'react';
import { Save, Image } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface ImageSection {
  id: string;
  name: string;
  currentUrl: string;
}

export function ImageManager() {
  const [imageSections, setImageSections] = useState<ImageSection[]>([
    {
      id: 'hero',
      name: 'メインビジュアル',
      currentUrl: siteConfig.hero.image
    },
    {
      id: 'logo',
      name: 'ロゴ画像',
      currentUrl: siteConfig.logo.url
    }
  ]);

  const handleUrlChange = (id: string, newUrl: string) => {
    setImageSections(sections =>
      sections.map(section =>
        section.id === id ? { ...section, currentUrl: newUrl } : section
      )
    );
  };

  const handleSave = (id: string) => {
    const section = imageSections.find(s => s.id === id);
    if (!section) return;

    // ここで実際の保存処理を実装
    console.log(`Saving ${id} with URL: ${section.currentUrl}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">画像管理</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {imageSections.map(section => (
          <div key={section.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium mb-4">{section.name}</h3>
            
            <div className="space-y-4">
              <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={section.currentUrl}
                  alt={section.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  画像URL
                </label>
                <input
                  type="text"
                  value={section.currentUrl}
                  onChange={(e) => handleUrlChange(section.id, e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button 
                  onClick={() => handleSave(section.id)}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  <Save className="h-4 w-4" />
                  <span>保存</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}