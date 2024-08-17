// src/components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
