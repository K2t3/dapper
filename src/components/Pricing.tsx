import React from 'react';
import { BookOpen, Users, GraduationCap, School } from 'lucide-react';

const pricingPlans = [
  {
    name: '入会金',
    price: '11,000',
    duration: '一律',
    features: []
  },
  {
    name: 'プライベートレッスン',
    sections: [
      {
        title: '中高校生クラス',
        price: '13,500',
        duration: '90分',
        notes: ['年間教材費別途16,500円']
      },
      {
        title: '大人クラス',
        price: '13,500',
        duration: '90分',
        notes: ['大学生以降～', '年間教材費別途16,500円']
      }
    ]
  },
  {
    name: 'グループレッスン',
    sections: [
      {
        title: 'プライマリーコース',
        price: '2,500',
        duration: '30分',
        notes: ['小学生：低学年、幼稚園']
      },
      {
        title: 'ジュニアコース',
        price: '3,500',
        duration: '40分',
        notes: ['小学生：中学年及び高学年', '年間教材費16,500円']
      },
      {
        title: 'アドバンスコース',
        price: '6,500',
        duration: '60分',
        notes: ['小学生：英検クラス', '年間教材費16,500円']
      },
      {
        title: '中学生クラス',
        price: '6,500',
        duration: '60分',
        notes: ['1教科（英語or数学）', '中学生：1～3年生', '年間教材費16,500円']
      },
      {
        title: '大人クラス',
        price: '5,500',
        duration: '60分',
        notes: ['大学生以降～', '年間教材費16,500円']
      }
    ]
  }
];

const trialCourses = [
  {
    title: '新中学生【3月限定】',
    description: '3日間無料体験（2教科：英語、数学）'
  },
  {
    title: '小学生～高校生',
    description: '無料体験（30～60分：説明含む）'
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">料金プラン</h2>
        
        {/* 入会金 */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">入会金</h3>
          <p className="text-3xl font-bold text-blue-600">
            ¥{pricingPlans[0].price}
            <span className="text-sm text-gray-600 ml-2">{pricingPlans[0].duration}</span>
          </p>
        </div>

        {/* プライベートレッスン */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">プライベートレッスン（月額/週１回）</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pricingPlans[1].sections.map((section, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{section.title}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  ¥{section.price}<span className="text-sm text-gray-600">/{section.duration}</span>
                </div>
                <ul className="space-y-1">
                  {section.notes.map((note, noteIdx) => (
                    <li key={noteIdx} className="text-gray-600 text-sm">
                      • {note}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* グループレッスン */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">グループレッスン（月額/週１回）</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans[2].sections.map((section, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{section.title}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  ¥{section.price}<span className="text-sm text-gray-600">/{section.duration}</span>
                </div>
                <ul className="space-y-1">
                  {section.notes.map((note, noteIdx) => (
                    <li key={noteIdx} className="text-gray-600 text-sm">
                      • {note}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 体験コース */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">体験コース</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {trialCourses.map((course, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{course.title}</h4>
                <p className="text-gray-600">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}