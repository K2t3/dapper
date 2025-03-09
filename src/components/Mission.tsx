import React from 'react';
import { Heart, Star, Users, GraduationCap, Award, Globe, BookOpen } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            一人ひとりの
            <span className="text-blue-600">可能性</span>
            を引き出す
            <br className="hidden sm:block" />
            丁寧なコーチング
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            生徒の個性やモチベーションに合わせた細やかな指導で、
            外国語学習を通して一人ひとりの成長をサポートします。
            あなたの夢の実現に向けて、エリザベス外国語研究所は全力でサポートします。
          </p>
        </div>

        {/* Warm, Personal Approach Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Heart className="w-10 h-10 text-red-500 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">
                寄り添う指導
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              4歳から80歳まで、年齢を問わず一人ひとりの目標や学習スタイルに合わせた
              丁寧な指導を行っています。少人数制とプライベートレッスンで、
              きめ細やかなサポートを実現します。
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-6">
              <Star className="w-10 h-10 text-yellow-500 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">
                質の高い授業
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              現役の翻訳家・通訳家による本格的な指導で、英語はもちろん、
              ドイツ語・フランス語など幅広い言語に対応。
              確かな語学力と共に、新しい世界への扉を開きます。
            </p>
          </div>
        </div>

        {/* Achievement Showcase */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            37年の実績が証明する確かな教育力
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border-r border-gray-100 last:border-0">
              <div className="text-4xl font-bold text-blue-600 mb-2">3,000+</div>
              <div className="text-sm text-gray-600">英検合格者数</div>
              <div className="mt-4 text-sm text-gray-500">
                高校生の準1級合格者多数
                <br />
                1級合格者も輩出
              </div>
            </div>
            <div className="text-center p-6 border-r border-gray-100 last:border-0">
              <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
              <div className="text-sm text-gray-600">英検合格率</div>
              <div className="mt-4 text-sm text-gray-500">
                一次・二次試験合算
                <br />
                6ヶ月で3級から2級へ
              </div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-sm text-gray-600">対応言語数</div>
              <div className="mt-4 text-sm text-gray-500">
                英語・ドイツ語・フランス語
                <br />
                スペイン語など
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 relative z-10">
            充実のサポート体制
          </h3>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="font-medium text-gray-800 mb-2">実績ある講師陣</div>
              <div className="text-sm text-gray-600">
                現役の翻訳家・通訳家が指導
                <br />
                ネイティブ講師も常駐
              </div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="font-medium text-gray-800 mb-2">留学サポート</div>
              <div className="text-sm text-gray-600">
                AFS日本協会と連携
                <br />
                毎年高校生の留学をサポート
              </div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-sm">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="font-medium text-gray-800 mb-2">地域密着の教育</div>
              <div className="text-sm text-gray-600">
                筑後地方の学校での指導実績
                <br />
                地域に根差した37年の歴史
              </div>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center mt-12 py-6">
          <p className="text-xl md:text-2xl font-bold text-blue-700 tracking-wide mb-2">
            Unlocking Potential, Opening Worlds.
          </p>
          <p className="text-lg text-gray-700 font-medium tracking-wider">
            無限の可能性、新たな世界への扉がきっと。
          </p>
        </div>
      </div>
    </section>
  );
}