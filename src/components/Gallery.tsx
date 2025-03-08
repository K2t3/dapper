import React from 'react';

const images = [
  {
    url: '/teachers.jpg',
    alt: '教室での授業風景'
  },
  {
    url: '/teachers.jpg',
    alt: 'グループ学習の様子'
  },
  {
    url: '/teachers.jpg',
    alt: '個別指導の様子'
  }
];

export function Gallery() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">ギャラリー</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg aspect-video">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}