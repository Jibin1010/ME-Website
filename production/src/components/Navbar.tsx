'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Layers, 
  PlusCircle, 
  Menu, 
  X, 
  Compass, 
  LayoutGrid
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export function Navbar({ onScrollToStore }: { onScrollToStore: () => void }) {
  const { 
    installedApps, 
    searchQuery, 
    setSearchQuery, 
    setIsPublishOpen, 
    activeNavTab,
    setActiveNavTab
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const installedCount = Object.keys(installedApps).length;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF3EC]/85 backdrop-blur-md border-b border-neutral-200/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Identity */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => {
                setActiveNavTab('showcase');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-3 group text-left"
            >
              <div className="w-10 h-10 rounded-2xl bg-neutral-950 text-white font-black text-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                M
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-neutral-950 block leading-tight">
                  Marketplace
                </span>
                <span className="text-[11px] text-neutral-500 font-medium">
                  App Store Web
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
              <button
                onClick={() => {
                  setActiveNavTab('showcase');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full transition-colors flex items-center space-x-1.5 ${
                  activeNavTab === 'showcase' 
                    ? 'bg-neutral-900 text-white' 
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/60'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Showcase</span>
              </button>

              <button
                onClick={() => {
                  setActiveNavTab('store');
                  onScrollToStore();
                }}
                className={`px-4 py-2 rounded-full transition-colors flex items-center space-x-1.5 ${
                  activeNavTab === 'store' 
                    ? 'bg-neutral-900 text-white' 
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/60'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Browse Store</span>
              </button>

              <button
                onClick={() => {
                  setActiveNavTab('my-apps');
                  onScrollToStore();
                }}
                className={`px-4 py-2 rounded-full transition-colors flex items-center space-x-2 ${
                  activeNavTab === 'my-apps' 
                    ? 'bg-neutral-900 text-white' 
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/60'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>My Apps</span>
                {installedCount > 0 && (
                  <span className="bg-[#FF5A28] text-white text-[11px] font-bold px-2 py-0.2 rounded-full">
                    {installedCount}
                  </span>
                )}
              </button>
            </nav>
          </div>

          {/* Center Search Input */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs mx-6">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeNavTab !== 'store') setActiveNavTab('store');
                }}
                placeholder="Search apps, games, tools..."
                className="w-full bg-white/90 pl-10 pr-4 py-2 rounded-full border border-neutral-200/80 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A28]/40 shadow-sm transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Put Your App Button */}
            <button
              onClick={() => setIsPublishOpen(true)}
              className="px-4 py-2 rounded-full bg-[#FF5A28] hover:bg-[#E04F20] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center space-x-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>+ Put My App</span>
            </button>

            {/* User Profile Pill (Timothy) */}
            <div className="flex items-center space-x-2 pl-2 border-l border-neutral-200">
              <div className="w-9 h-9 rounded-full bg-neutral-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                T
              </div>
              <div className="hidden xl:block text-left text-xs">
                <p className="font-bold text-neutral-900 leading-tight">Timothy</p>
                <p className="text-[10px] text-neutral-500">Store Owner</p>
              </div>
            </div>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setIsPublishOpen(true)}
              className="p-2 rounded-full bg-[#FF5A28] text-white"
            >
              <PlusCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-700 hover:bg-neutral-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200/60 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveNavTab('store');
                }}
                placeholder="Search apps..."
                className="w-full bg-white pl-9 pr-3 py-2 rounded-xl border border-neutral-200 text-sm"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setActiveNavTab('showcase');
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-xl text-xs font-bold text-center ${activeNavTab === 'showcase' ? 'bg-neutral-900 text-white' : 'bg-white'}`}
              >
                Showcase
              </button>
              <button
                onClick={() => {
                  setActiveNavTab('store');
                  setMobileMenuOpen(false);
                  onScrollToStore();
                }}
                className={`p-2.5 rounded-xl text-xs font-bold text-center ${activeNavTab === 'store' ? 'bg-neutral-900 text-white' : 'bg-white'}`}
              >
                Store
              </button>
              <button
                onClick={() => {
                  setActiveNavTab('my-apps');
                  setMobileMenuOpen(false);
                  onScrollToStore();
                }}
                className={`p-2.5 rounded-xl text-xs font-bold text-center ${activeNavTab === 'my-apps' ? 'bg-neutral-900 text-white' : 'bg-white'}`}
              >
                My Apps ({installedCount})
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsPublishOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-[#FF5A28] text-white text-xs font-bold text-center"
              >
                + Put My App
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
