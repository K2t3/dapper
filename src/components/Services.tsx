import React from 'react';
import { BookOpen, Users, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: '外国語学習サポート',
    description: '初心者から上級者まで、レベルに合わせた学習プランをご用意しています。'
  },
  {
    icon: Users,
    title: '小学生向け英語プログラム',
    description: '楽しみながら英語を学べる、子供向けの特別カリキュラムです。'
  },
  {
    icon: GraduationCap,
    title: '大人の初心者向けクラス',
    description: '仕事や趣味に活かせる実践的な英語を学びます。'
  }
];

export function Services() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">提供サービス</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}