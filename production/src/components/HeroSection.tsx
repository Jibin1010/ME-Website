'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  PlusCircle, 
  Smartphone, 
  Image as ImageIcon,
  Gamepad2,
  Briefcase,
  Star,
  ShieldCheck,
  MousePointerClick
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { InteractivePhone } from './InteractivePhone';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  const { 
    setIsPublishOpen, 
    setSelectedCategory, 
    setSelectedApp, 
    apps 
  } = useApp();

  // Mode: 'artwork' (integrated reference design) or 'interactive' (live phone simulator)
  const [heroMode, setHeroMode] = useState<'artwork' | 'interactive'>('artwork');

  const handleCardCategory = (cat: string) => {
    setSelectedCategory(cat);
    onExploreClick();
  };

  const handleAppHotspot = (appId: string) => {
    const target = apps.find(a => a.id === appId);
    if (target) {
      setSelectedApp(target);
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 text-left">
      {/* Ambient background glow */}
      <div 
        className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none opacity-40 -z-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(254, 215, 170, 0.6) 0%, rgba(253, 239, 226, 0.3) 50%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & View Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 gap-4 border-b border-neutral-200/60 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-neutral-950 text-white font-extrabold text-sm flex items-center justify-center shadow">
              M
            </div>
            <div>
              <h2 className="text-base font-extrabold text-neutral-900 leading-tight">
                Marketplace Showcase
              </h2>
              <p className="text-xs text-neutral-500">
                Integrated Figma Spec & Interactive Store
              </p>
            </div>
          </div>

          {/* Toggle between Integrated Artwork and Live Simulator */}
          <div className="flex items-center space-x-2">
            <div className="bg-white/90 p-1 rounded-2xl border border-neutral-200/80 shadow-sm flex items-center space-x-1">
              <button
                onClick={() => setHeroMode('artwork')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  heroMode === 'artwork'
                    ? 'bg-neutral-950 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 text-[#FF5A28]" />
                <span>Integrated Reference Design</span>
              </button>

              <button
                onClick={() => setHeroMode('interactive')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  heroMode === 'interactive'
                    ? 'bg-neutral-950 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-blue-500" />
                <span>Live Phone Simulator</span>
              </button>
            </div>

            <button
              onClick={() => setIsPublishOpen(true)}
              className="px-4 py-2 rounded-2xl bg-[#FF5A28] hover:bg-[#E04F20] text-white text-xs font-bold shadow-sm transition-all flex items-center space-x-1.5"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>+ Put My App</span>
            </button>
          </div>
        </div>

        {/* Hero Mode 1: Integrated Reference Design (Directly in page!) */}
        {heroMode === 'artwork' && (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200/60 bg-[#FEF9EB] group transition-all duration-300">
            
            {/* The Reference Design Image embedded directly into the website page */}
            <div className="relative w-full aspect-[1536/1024]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/reference/your-apps-all-in-one-place.png" 
                alt="Marketplace - Your Apps, All in One Place"
                className="w-full h-full object-cover block select-none pointer-events-none"
              />

              {/* INTERACTIVE HOTSPOTS OVERLAID DIRECTLY ON THE IMAGE */}

              {/* 1. Explore Marketplace Button Hotspot */}
              <button
                onClick={onExploreClick}
                style={{
                  left: '4.5%',
                  top: '80.5%',
                  width: '18.5%',
                  height: '7.8%'
                }}
                className="absolute rounded-full cursor-pointer transition-all border-2 border-transparent hover:border-[#FF5A28] hover:bg-[#FF5A28]/15 hover:shadow-[0_0_20px_rgba(255,90,40,0.4)] flex items-center justify-center group/btn"
                title="Click to Explore Marketplace Catalogue"
              >
                <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity bg-neutral-900 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg -translate-y-10 whitespace-nowrap">
                  Click to Explore All Apps ↓
                </span>
              </button>

              {/* 2. Games Badge Hotspot */}
              <button
                onClick={() => handleCardCategory('Games')}
                style={{
                  left: '4.5%',
                  top: '57%',
                  width: '6.5%',
                  height: '16%'
                }}
                className="absolute rounded-2xl cursor-pointer transition-all border-2 border-transparent hover:border-[#E0533C] hover:bg-[#E0533C]/10 flex items-center justify-center group/games"
                title="Filter by Games"
              >
                <span className="opacity-0 group-hover/games:opacity-100 transition-opacity bg-[#E0533C] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow -translate-y-12 whitespace-nowrap">
                  Browse Games
                </span>
              </button>

              {/* 3. Apps Badge Hotspot */}
              <button
                onClick={() => handleCardCategory('Productivity')}
                style={{
                  left: '12.8%',
                  top: '57%',
                  width: '6.5%',
                  height: '16%'
                }}
                className="absolute rounded-2xl cursor-pointer transition-all border-2 border-transparent hover:border-[#1CB070] hover:bg-[#1CB070]/10 flex items-center justify-center group/apps"
                title="Filter by Productivity Apps"
              >
                <span className="opacity-0 group-hover/apps:opacity-100 transition-opacity bg-[#1CB070] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow -translate-y-12 whitespace-nowrap">
                  Browse Apps
                </span>
              </button>

              {/* 4. Fresh Releases Badge Hotspot */}
              <button
                onClick={() => handleCardCategory('All')}
                style={{
                  left: '21.2%',
                  top: '57%',
                  width: '6.5%',
                  height: '16%'
                }}
                className="absolute rounded-2xl cursor-pointer transition-all border-2 border-transparent hover:border-[#0284C7] hover:bg-[#0284C7]/10 flex items-center justify-center group/fresh"
                title="View Fresh Releases"
              >
                <span className="opacity-0 group-hover/fresh:opacity-100 transition-opacity bg-[#0284C7] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow -translate-y-12 whitespace-nowrap">
                  Fresh Releases
                </span>
              </button>

              {/* 5. Safe & Easy Badge Hotspot */}
              <button
                onClick={() => handleCardCategory('Tools')}
                style={{
                  left: '29.6%',
                  top: '57%',
                  width: '6.5%',
                  height: '16%'
                }}
                className="absolute rounded-2xl cursor-pointer transition-all border-2 border-transparent hover:border-[#7C3AED] hover:bg-[#7C3AED]/10 flex items-center justify-center group/safe"
                title="View Verified Tools"
              >
                <span className="opacity-0 group-hover/safe:opacity-100 transition-opacity bg-[#7C3AED] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow -translate-y-12 whitespace-nowrap">
                  Verified Tools
                </span>
              </button>

              {/* 6. Phone Hotspot: F-Droid */}
              <button
                onClick={() => handleAppHotspot('f-droid')}
                style={{
                  left: '57.8%',
                  top: '71.5%',
                  width: '5.2%',
                  height: '10.5%'
                }}
                className="absolute rounded-xl cursor-pointer transition-all border-2 border-transparent hover:border-emerald-500 hover:bg-emerald-500/20 flex items-center justify-center group/fdroid"
                title="Install or Preview F-Droid"
              >
                <span className="opacity-0 group-hover/fdroid:opacity-100 transition-opacity bg-neutral-900 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow -translate-y-8 whitespace-nowrap">
                  Get F-Droid
                </span>
              </button>

              {/* 7. Phone Hotspot: Notes */}
              <button
                onClick={() => handleAppHotspot('notes-pro')}
                style={{
                  left: '64.2%',
                  top: '71.5%',
                  width: '5.2%',
                  height: '10.5%'
                }}
                className="absolute rounded-xl cursor-pointer transition-all border-2 border-transparent hover:border-amber-500 hover:bg-amber-500/20 flex items-center justify-center group/notes"
                title="Install or Preview Notes"
              >
                <span className="opacity-0 group-hover/notes:opacity-100 transition-opacity bg-neutral-900 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow -translate-y-8 whitespace-nowrap">
                  Get Notes
                </span>
              </button>

              {/* 8. Phone Hotspot: Sudoku */}
              <button
                onClick={() => handleAppHotspot('sudoku-zen')}
                style={{
                  left: '70.6%',
                  top: '71.5%',
                  width: '5.2%',
                  height: '10.5%'
                }}
                className="absolute rounded-xl cursor-pointer transition-all border-2 border-transparent hover:border-blue-500 hover:bg-blue-500/20 flex items-center justify-center group/sudoku"
                title="Play or Preview Sudoku"
              >
                <span className="opacity-0 group-hover/sudoku:opacity-100 transition-opacity bg-neutral-900 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow -translate-y-8 whitespace-nowrap">
                  Play Sudoku
                </span>
              </button>

              {/* 9. Discover Beauty Banner Hotspot on Phone */}
              <button
                onClick={onExploreClick}
                style={{
                  left: '54.5%',
                  top: '40%',
                  width: '23%',
                  height: '16%'
                }}
                className="absolute rounded-2xl cursor-pointer transition-all border border-transparent hover:border-amber-400 hover:bg-amber-400/10 flex items-center justify-center group/banner"
                title="Discover Apps"
              >
                <span className="opacity-0 group-hover/banner:opacity-100 transition-opacity bg-amber-900 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow -translate-y-12 whitespace-nowrap">
                  Click to Explore →
                </span>
              </button>

            </div>

            {/* Bottom Interactive Bar */}
            <div className="bg-[#FFF8F0] px-6 py-3 border-t border-amber-200/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
              <div className="flex items-center space-x-2">
                <MousePointerClick className="w-4 h-4 text-[#FF5A28]" />
                <span className="font-semibold text-neutral-800">
                  Interactive Design: Click buttons or apps directly on the image above to browse and install!
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={onExploreClick}
                  className="font-bold text-[#FF5A28] hover:underline flex items-center space-x-1"
                >
                  <span>Browse Web Store Below</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Hero Mode 2: Live Responsive Simulator View */}
        {heroMode === 'interactive' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-white/70 p-8 sm:p-12 rounded-3xl border border-neutral-200/80 shadow-sm">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-3 bg-white px-4 py-2 rounded-2xl border border-neutral-200 shadow-sm">
                <div className="w-7 h-7 rounded-xl bg-neutral-950 text-white font-extrabold text-xs flex items-center justify-center">
                  M
                </div>
                <span className="font-extrabold text-lg text-neutral-900">
                  Marketplace App Store
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.1]">
                Your Apps, <br />
                <span className="bg-gradient-to-r from-[#FF5A28] via-[#FF6C3B] to-[#FF8C38] bg-clip-text text-transparent">
                  All in One
                </span>{' '}
                Place
              </h1>
              
              <p className="text-base sm:text-lg text-neutral-600 max-w-lg">
                Discover, install and manage amazing apps and games from our marketplace — fast, simple and always up to date.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <button 
                  onClick={() => handleCardCategory('Games')}
                  className="bg-white p-3 rounded-2xl border border-neutral-200 text-left hover:border-[#FF5A28] transition-all"
                >
                  <Gamepad2 className="w-6 h-6 text-[#E0533C] mb-1" />
                  <p className="font-bold text-xs text-neutral-900">Games</p>
                  <p className="text-[10px] text-neutral-500">Play amazing games</p>
                </button>
                <button 
                  onClick={() => handleCardCategory('Productivity')}
                  className="bg-white p-3 rounded-2xl border border-neutral-200 text-left hover:border-[#1CB070] transition-all"
                >
                  <Briefcase className="w-6 h-6 text-[#1CB070] mb-1" />
                  <p className="font-bold text-xs text-neutral-900">Apps</p>
                  <p className="text-[10px] text-neutral-500">Productivity & tools</p>
                </button>
                <button 
                  onClick={() => handleCardCategory('All')}
                  className="bg-white p-3 rounded-2xl border border-neutral-200 text-left hover:border-[#0284C7] transition-all"
                >
                  <Star className="w-6 h-6 text-[#0284C7] mb-1 fill-[#0284C7]" />
                  <p className="font-bold text-xs text-neutral-900">Fresh Releases</p>
                  <p className="text-[10px] text-neutral-500">New apps regularly</p>
                </button>
                <button 
                  onClick={() => handleCardCategory('Tools')}
                  className="bg-white p-3 rounded-2xl border border-neutral-200 text-left hover:border-[#7C3AED] transition-all"
                >
                  <ShieldCheck className="w-6 h-6 text-[#7C3AED] mb-1" />
                  <p className="font-bold text-xs text-neutral-900">Safe & Easy</p>
                  <p className="text-[10px] text-neutral-500">Install without hassle</p>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center space-x-3 bg-[#161616] hover:bg-black text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all"
                >
                  <span>Explore Marketplace</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setHeroMode('artwork')}
                  className="inline-flex items-center space-x-2 bg-white text-neutral-800 font-semibold text-sm px-5 py-3.5 rounded-full border border-neutral-200 shadow-sm hover:bg-neutral-50 transition-all"
                >
                  <ImageIcon className="w-4 h-4 text-[#FF5A28]" />
                  <span>Switch to Full Artwork</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <InteractivePhone />
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
