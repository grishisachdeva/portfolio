'use client';

import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div id="toast-notice" className="toast-notice show">
      <span>🎉</span> <span>{message}</span>
    </div>
  );
};

