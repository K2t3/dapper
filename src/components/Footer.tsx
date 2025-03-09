import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} エリザベス外国語研究所. All rights reserved.</p>
      </div>
    </footer>
  );
}