import React, { useState, useEffect } from 'react';
import { getGalleryItems, GalleryItem } from '../utils/content';

export function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGalleryItems() {
      try {
        const items = await getGalleryItems();
        setGalleryItems(items);
      } catch (error) {
        console.error('Failed to load gallery items:', error);
      } finally {
        setLoading(false);
      }
    }

    loadGalleryItems();
  }, []);
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">ギャラリー</h2>
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : galleryItems.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            画像はありません
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}