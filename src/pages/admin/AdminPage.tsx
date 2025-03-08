import React, { useState } from 'react';
import { AdminLayout } from './AdminLayout';
import { NewsManager } from './NewsManager';
import { ImageManager } from './ImageManager';

export function AdminPage() {
  const [activeTab, setActiveTab] = useState<'news' | 'images'>('news');

  return (
    <AdminLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'news' ? <NewsManager /> : <ImageManager />}
    </AdminLayout>
  );
}