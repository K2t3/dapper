import React, { useState, useEffect } from 'react';
import { getGalleryItems, GalleryItem } from '../utils/content';
import { X } from 'lucide-react';

export function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

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
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg aspect-video cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
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

      {/* 画像拡大モーダル */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full p-1 text-gray-800 hover:text-gray-600 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            {selectedImage.alt && (
              <div className="mt-2 text-center text-white bg-black bg-opacity-50 p-2 rounded">
                {selectedImage.alt}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}