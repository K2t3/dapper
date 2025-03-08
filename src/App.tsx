import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Mission } from './components/Mission';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { News } from './components/News';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { AdminPage } from './pages/admin/AdminPage';

function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simple admin authentication
  const handleAdminLogin = (password: string) => {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    }
  };

  // Check if we're in admin mode (triggered by special URL pattern)
  React.useEffect(() => {
    const isAdmin = window.location.pathname === '/admin';
    setIsAdminMode(isAdmin);
  }, []);

  if (isAdminMode) {
    if (!isAuthenticated) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">管理者ログイン</h1>
            <input
              type="password"
              placeholder="パスワードを入力"
              className="w-full px-4 py-2 rounded-lg border mb-4"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAdminLogin(e.currentTarget.value);
                }
              }}
            />
            <p className="text-sm text-gray-600 text-center">
              ※パスワードを入力して Enter キーを押してください
            </p>
          </div>
        </div>
      );
    }
    return <AdminPage />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow">
        <Profile />
        <Mission />
        <Pricing />
        <Gallery />
        <News />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;