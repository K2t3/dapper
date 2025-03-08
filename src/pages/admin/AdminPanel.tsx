import { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Phone } from 'lucide-react';

export function AdminPanel() {
  const [config, setConfig] = useState(siteConfig);

  const handleSave = () => {
    // ここで設定を保存する処理を実装
    alert('設定を保存しました');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">管理者画面</h1>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">連絡先設定</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">電話番号</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={config.contact.phone}
                  onChange={(e) => setConfig({
                    ...config,
                    contact: {...config.contact, phone: e.target.value}
                  })}
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="090-1234-5678"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">ハイフン（-）を含めて入力してください</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">管理者メールアドレス</label>
              <input
                type="email"
                value={config.contact.adminEmail}
                onChange={(e) => setConfig({
                  ...config,
                  contact: {...config.contact, adminEmail: e.target.value}
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          設定を保存
        </button>
      </div>
    </div>
  );
}