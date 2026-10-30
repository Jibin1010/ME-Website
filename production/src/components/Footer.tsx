'use client';

import React from 'react';
import { 
  ShieldCheck, 
  RotateCcw, 
  PlusCircle,
  Download
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export function Footer() {
  const { setIsPublishOpen, resetToDefaults } = useApp();

  return (
    <footer className="bg-white border-t border-neutral-200/60 pt-16 pb-12 mt-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-100">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-2xl bg-neutral-950 text-white font-extrabold text-base flex items-center justify-center shadow">
                M
              </div>
              <span className="font-extrabold text-xl tracking-tight text-neutral-900">
                Marketplace
              </span>
            </div>
            <p className="text-sm text-neutral-600 max-w-sm leading-relaxed">
              Your Apps, All in One Place. Discover, install and manage amazing open-source apps and games — fast, simple and always up to date.
            </p>
            <div className="flex items-center space-x-4 pt-1">
              <span className="text-xs font-semibold text-emerald-600 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Malware Free Guarantee</span>
              </span>
              <span className="text-xs font-semibold text-neutral-400">•</span>
              <span className="text-xs font-semibold text-neutral-500">
                Next.js & TypeScript
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li><a href="#marketplace-store" className="hover:text-[#FF5A28]">Games</a></li>
              <li><a href="#marketplace-store" className="hover:text-[#FF5A28]">Productivity</a></li>
              <li><a href="#marketplace-store" className="hover:text-[#FF5A28]">Tools & FOSS</a></li>
              <li><a href="#marketplace-store" className="hover:text-[#FF5A28]">Social & Chat</a></li>
              <li><a href="#marketplace-store" className="hover:text-[#FF5A28]">Developer Tools</a></li>
            </ul>
          </div>

          {/* Store Owner Actions */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900">
              App Store Features
            </h4>
            <ul className="space-y-2 text-xs text-neutral-600">
              <li>
                <a
                  href="#releases-section"
                  className="hover:text-emerald-700 font-bold text-emerald-800 flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Download Android APK v1.0.0</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => setIsPublishOpen(true)}
                  className="hover:text-[#FF5A28] font-bold text-neutral-900 flex items-center space-x-1"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-[#FF5A28]" />
                  <span>+ Put Your App in Store</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={resetToDefaults}
                  className="hover:text-neutral-900 text-neutral-400 flex items-center space-x-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Store to Default</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Marketplace App Store. Built with React, Next.js & TypeScript.</p>
          <div className="flex items-center space-x-6">
            <span>Fast & Lightweight</span>
            <span>Zero Tracking Telemetry</span>
            <span>PWA Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
