import React from 'react';
import { siteConfig } from '../config/siteConfig';

export function Hero() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <img
        src={siteConfig.hero.image}
        alt="先生方の写真"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              家族のような暖かい雰囲気で<br />
              英語を学びませんか？
            </h2>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg transition-colors duration-300">
              体験レッスンを予約する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}