import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      // フォーム要素を取得
      const form = e.target as HTMLFormElement;
      
      // フォームデータを送信
      const formData = new FormData(form);
      
      // Netlifyのフォーム送信エンドポイントに送信
      fetch("/", {
        method: "POST",
        body: formData
      })
        .then(() => {
          // 成功時の処理
          setFormStatus('success');
          setFormData({ name: '', contact: '', message: '' });
        })
        .catch(error => {
          // エラー時の処理
          console.error('送信エラー:', error);
          setFormStatus('error');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error('送信エラー:', error);
      setFormStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">お問い合わせ</h2>
        
        {formStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
            お問い合わせありがとうございます。メッセージを受け付けました。
          </div>
        )}
        
        {formStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
            送信中にエラーが発生しました。しばらくしてからもう一度お試しください。
          </div>
        )}
        
        <form
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-6"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
              ご連絡先（メールアドレスまたは電話番号） <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
            <span>{isSubmitting ? '送信中...' : '送信する'}</span>
          </button>
        </form>
      </div>
    </section>
  );
}