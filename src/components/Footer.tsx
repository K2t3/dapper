import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h2 className="text-xl font-bold mb-4">エリザベス外国語研究所</h2>
            <p className="mb-2">福岡県八女郡広川町大字久泉485-5</p>
            <p className="mb-2">電話: 090-8397-4426</p>
            <p className="mb-2">営業時間: 月〜金 15:00〜21:00</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">コース</h2>
            <ul>
              <li className="mb-2">子供英会話</li>
              <li className="mb-2">中学・高校生受験対策</li>
              <li className="mb-2">大人向け英会話</li>
              <li className="mb-2">留学サポート</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">アクセス</h2>
            <p className="mb-2">広川町で創業から37年。各生徒の個性やモチベーションに合わせたコーチングが特徴で、短期間での英検合格、留学サポート実績も豊富です。</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} エリザベス外国語研究所. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            <a href="/blog" className="hover:text-gray-400 transition-colors">ブログ</a>
          </p>
        </div>
      </div>
    </footer>
  );
}