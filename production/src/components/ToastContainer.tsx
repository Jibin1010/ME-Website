'use client';

import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export function ToastContainer() {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-neutral-900/95 text-white p-4 rounded-2xl shadow-xl border border-neutral-700/80 backdrop-blur-sm flex items-start justify-between space-x-3 transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
        >
          <div className="flex items-start space-x-3">
            {toast.type === 'success' && (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            )}
            {toast.type === 'warning' && (
              <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            )}
            {toast.type === 'info' && (
              <Info className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
            )}

            <div>
              <p className="text-xs font-bold leading-tight">{toast.title}</p>
              {toast.description && (
                <p className="text-[11px] text-neutral-300 mt-0.5 leading-snug">
                  {toast.description}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-neutral-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}

