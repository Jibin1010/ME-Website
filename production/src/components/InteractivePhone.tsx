'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  LayoutGrid, 
  Layers, 
  Gamepad2, 
  Briefcase, 
  Users, 
  Wrench, 
  Sparkles,
  Wifi,
  Battery,
  FileText,
  Bot,
  Lightbulb
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppItem } from '../types/app';

export function InteractivePhone() {
  const { 
    apps, 
    installedApps, 
    installingMap, 
    installApp, 
    launchApp, 
    setSelectedApp 
  } = useApp();

  const [phoneTab, setPhoneTab] = useState<'home' | 'categories' | 'search' | 'my-apps'>('home');
  const [phoneSearch, setPhoneSearch] = useState('');
  const [phoneCategory, setPhoneCategory] = useState<string>('All');

  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(phoneSearch.toLowerCase()) ||
                          app.category.toLowerCase().includes(phoneSearch.toLowerCase());
    const matchesCat = phoneCategory === 'All' || app.category === phoneCategory;
    return matchesSearch && matchesCat;
  });

  const recommendedApps = apps.filter(a => a.isRecommended || ['f-droid', 'notes-pro', 'sudoku-zen'].includes(a.id)).slice(0, 3);
  const installedList = apps.filter(a => !!installedApps[a.id]);

  const handleAppClick = (app: AppItem) => {
    setSelectedApp(app);
  };

  return (
    <div className="relative mx-auto flex items-center justify-center select-none">
      {/* Background Secondary Angled Phone Mockup (from reference image) */}
      <div 
        className="absolute -right-12 sm:-right-8 top-10 w-[240px] sm:w-[280px] h-[500px] sm:h-[570px] rounded-[48px] bg-gradient-to-br from-neutral-800 to-neutral-950 p-[10px] shadow-2xl opacity-85 rotate-[12deg] scale-95 pointer-events-none hidden md:block"
        style={{
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.35)'
        }}
      >
        <div className="w-full h-full rounded-[38px] bg-gradient-to-b from-slate-900 via-indigo-950 to-neutral-900 overflow-hidden relative border border-white/10 p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center text-white/70 text-xs px-2 pt-1">
            <span>Monday, June 10</span>
          </div>
          <div className="text-center my-auto">
            <span className="text-6xl font-light text-white tracking-tight">9:41</span>
          </div>

          {/* Floating colorful app icons like in reference */}
          <div className="grid grid-cols-2 gap-3 mb-8 px-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 p-2.5 shadow-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 p-2.5 shadow-lg flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500 p-2.5 shadow-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-400 p-2.5 shadow-lg flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Spheres (Matching Reference Artwork) */}
      <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-yellow-100 shadow-xl opacity-90 blur-[0.5px] pointer-events-none animate-bounce" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 -left-12 w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 via-blue-400 to-cyan-200 shadow-lg opacity-85 pointer-events-none animate-pulse" />
      <div className="absolute -bottom-4 right-10 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 via-violet-400 to-purple-200 shadow-md opacity-80 pointer-events-none" />
      <div className="absolute top-6 right-2 w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 shadow-xl opacity-95 flex items-center justify-center -rotate-12 pointer-events-none hidden sm:flex">
        <span className="text-white font-extrabold text-2xl tracking-tighter">A</span>
      </div>

      {/* Primary Interactive iPhone Container */}
      <div 
        className="relative z-10 w-[310px] sm:w-[350px] h-[640px] sm:h-[680px] rounded-[52px] bg-[#1E2024] p-[11px] shadow-2xl transition-all duration-300 hover:shadow-[0_40px_80px_rgba(240,90,40,0.18)]"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 10px 20px -5px rgba(0,0,0,0.2)'
        }}
      >
        <div className="relative w-full h-full rounded-[43px] bg-[#FFFBF7] overflow-hidden flex flex-col justify-between border border-neutral-200/60 shadow-inner">

          {/* Dynamic Island & Status Bar */}
          <div className="pt-2 px-6 flex justify-between items-center text-xs font-semibold text-neutral-800 bg-[#FFFBF7] z-20">
            <span className="text-[13px] tracking-tight">9:41</span>
            
            <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end px-2 space-x-1 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800" />
            </div>

            <div className="flex items-center space-x-1.5 text-neutral-800">
              <Wifi className="w-3.5 h-3.5 stroke-[2.5]" />
              <Battery className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Phone Header */}
          <div className="px-5 pt-2 pb-1.5 flex items-center justify-between border-b border-neutral-100 bg-[#FFFBF7] z-10">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-black text-white font-black text-xs flex items-center justify-center shadow-sm">
                M
              </div>
              <span className="font-bold text-sm tracking-tight text-neutral-900">Marketplace</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setPhoneTab('search')}
                className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <div className="w-7 h-7 rounded-full bg-neutral-950 text-white text-xs font-semibold flex items-center justify-center shadow-sm">
                T
              </div>
            </div>
          </div>

          {/* Phone Screen Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3.5 scrollbar-none text-left">
            
            {phoneTab === 'home' && (
              <>
                {/* Greeting */}
                <div className="pt-1">
                  <h3 className="text-base font-extrabold text-neutral-900 leading-tight">
                    Hello, Timothy
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Welcome to your marketplace
                  </p>
                </div>

                {/* Search Bar inside phone */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={phoneSearch}
                    onChange={(e) => setPhoneSearch(e.target.value)}
                    placeholder="Search apps & games"
                    className="w-full bg-white pl-8 pr-3 py-1.5 rounded-xl border border-neutral-200/80 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A28]/40 shadow-sm"
                  />
                  {phoneSearch && (
                    <button 
                      onClick={() => setPhoneSearch('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-neutral-400 hover:text-neutral-700"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Hero Banner Card */}
                <div className="relative rounded-2xl bg-gradient-to-br from-[#FEF4DB] via-[#FDF0CF] to-[#FCE6B7] p-3.5 border border-amber-200/50 shadow-sm overflow-hidden">
                  <div className="max-w-[65%]">
                    <h4 className="text-xs font-extrabold text-neutral-900 leading-snug">
                      Discover the Beauty of Apps
                    </h4>
                    <p className="text-[10px] text-neutral-600 mt-1 leading-tight line-clamp-3">
                      Fresh releases from your marketplace — install new apps without updating the store itself.
                    </p>
                    <button 
                      onClick={() => setPhoneTab('categories')}
                      className="mt-2.5 bg-white text-neutral-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm hover:shadow transition-shadow inline-flex items-center space-x-1"
                    >
                      <span>Start exploring</span>
                    </button>
                  </div>

                  <div className="absolute right-2 top-2 bottom-2 w-20 flex flex-col items-end justify-center space-y-1.5 pointer-events-none">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/90 text-white flex items-center justify-center shadow-md rotate-6">
                      <Gamepad2 className="w-4 h-4" />
                    </div>
                    <div className="w-7 h-7 rounded-xl bg-blue-500/90 text-white flex items-center justify-center shadow-md -rotate-6">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-6 h-6 rounded-lg bg-amber-400 text-white flex items-center justify-center shadow-md rotate-12">
                      <Lightbulb className="w-3 h-3 text-amber-900" />
                    </div>
                  </div>
                </div>

                {/* Category Pills */}
                <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {[
                    { label: 'Games', icon: Gamepad2, cat: 'Games' },
                    { label: 'Productivity', icon: Briefcase, cat: 'Productivity' },
                    { label: 'Social', icon: Users, cat: 'Social' },
                    { label: 'Tools', icon: Wrench, cat: 'Tools' }
                  ].map(tab => {
                    const Icon = tab.icon;
                    const isActive = phoneCategory === tab.cat;
                    return (
                      <button
                        key={tab.label}
                        onClick={() => setPhoneCategory(isActive ? 'All' : tab.cat)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center space-x-1 transition-all whitespace-nowrap ${
                          isActive 
                            ? 'bg-neutral-900 text-white shadow-sm' 
                            : 'bg-white border border-neutral-200/80 text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Recommended For You Section */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="text-xs font-bold text-neutral-900">Recommended For You</h5>
                    <button 
                      onClick={() => setPhoneTab('categories')}
                      className="text-[10px] text-[#FF5A28] font-bold hover:underline"
                    >
                      See all
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {recommendedApps.map(app => {
                      const isInstalled = !!installedApps[app.id];
                      const isInstalling = installingMap[app.id] !== undefined;
                      const progress = installingMap[app.id] || 0;

                      return (
                        <div
                          key={app.id}
                          className="bg-white rounded-2xl p-2.5 border border-neutral-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer relative group"
                          onClick={() => handleAppClick(app)}
                        >
                          <div 
                            className="w-11 h-11 rounded-2xl flex items-center justify-center text-white mb-2 shadow-inner relative overflow-hidden"
                            style={{ backgroundColor: app.iconBg }}
                          >
                            {app.id === 'f-droid' && <Bot className="w-6 h-6 text-white" />}
                            {app.id === 'notes-pro' && <FileText className="w-6 h-6 text-white" />}
                            {app.id === 'sudoku-zen' && (
                              <div className="grid grid-cols-2 gap-0.5 text-[8px] font-bold text-white bg-blue-600 w-7 h-7 rounded-md p-1 leading-none">
                                <span>1</span><span>2</span>
                                <span>3</span><span>4</span>
                              </div>
                            )}
                            {!['f-droid', 'notes-pro', 'sudoku-zen'].includes(app.id) && (
                              <Sparkles className="w-6 h-6 text-white" />
                            )}
                          </div>

                          <span className="text-[11px] font-bold text-neutral-900 truncate w-full">
                            {app.name}
                          </span>
                          <span className="text-[9px] text-neutral-400 truncate w-full mb-2">
                            {app.category}
                          </span>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (isInstalled) {
                                launchApp(app);
                              } else {
                                installApp(app.id);
                              }
                            }}
                            className={`w-full py-1 rounded-full text-[10px] font-bold transition-all flex items-center justify-center ${
                              isInstalled
                                ? 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                                : isInstalling
                                ? 'bg-[#FF5A28]/20 text-[#FF5A28]'
                                : 'bg-[#FF5A28] text-white hover:bg-[#E04F20] shadow-sm'
                            }`}
                          >
                            {isInstalled ? (
                              'Open'
                            ) : isInstalling ? (
                              <span>{progress}%</span>
                            ) : (
                              'Get'
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Quick Feed */}
                <div className="pt-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <h5 className="text-xs font-bold text-neutral-900">Trending Now</h5>
                  </div>
                  <div className="space-y-1.5">
                    {apps.slice(3, 5).map(app => {
                      const isInstalled = !!installedApps[app.id];
                      return (
                        <div 
                          key={app.id}
                          onClick={() => handleAppClick(app)}
                          className="bg-white p-2 rounded-xl border border-neutral-100 flex items-center justify-between cursor-pointer hover:bg-neutral-50/80"
                        >
                          <div className="flex items-center space-x-2.5 overflow-hidden">
                            <div 
                              className="w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-white"
                              style={{ backgroundColor: app.iconBg }}
                            >
                              <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-xs font-bold text-neutral-900 truncate">{app.name}</p>
                              <p className="text-[10px] text-neutral-400 truncate">{app.tagline}</p>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (isInstalled) launchApp(app);
                              else installApp(app.id);
                            }}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-neutral-100 text-neutral-800 hover:bg-neutral-200 flex-shrink-0"
                          >
                            {isInstalled ? 'Open' : 'Get'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {phoneTab === 'categories' && (
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-neutral-900">Browse Categories</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['Games', 'Productivity', 'Social', 'Tools', 'Developer', 'Utilities'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setPhoneCategory(cat);
                        setPhoneTab('home');
                      }}
                      className="bg-white p-2.5 rounded-xl border border-neutral-100 text-left hover:border-[#FF5A28] transition-colors"
                    >
                      <p className="text-xs font-bold text-neutral-900">{cat}</p>
                      <p className="text-[10px] text-neutral-400">
                        {apps.filter(a => a.category === cat).length} apps
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {phoneTab === 'search' && (
              <div className="space-y-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={phoneSearch}
                    autoFocus
                    onChange={(e) => setPhoneSearch(e.target.value)}
                    placeholder="Search all apps..."
                    className="w-full bg-white pl-8 pr-3 py-1.5 rounded-xl border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#FF5A28]/40"
                  />
                </div>
                <div className="space-y-1.5 pt-1">
                  {filteredApps.map(app => (
                    <div 
                      key={app.id} 
                      onClick={() => handleAppClick(app)}
                      className="bg-white p-2 rounded-xl border border-neutral-100 flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: app.iconBg }}>
                          <Sparkles className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-neutral-900">{app.name}</p>
                          <p className="text-[9px] text-neutral-400">{app.category} • {app.price}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#FF5A28]">View</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {phoneTab === 'my-apps' && (
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-neutral-900">Installed Apps ({installedList.length})</h4>
                {installedList.length === 0 ? (
                  <div className="text-center py-6 text-neutral-400 text-xs">
                    No installed apps yet. Tap &apos;Get&apos; on any app to install!
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    {installedList.map(app => (
                      <div key={app.id} className="bg-white p-2 rounded-xl border border-neutral-100 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: app.iconBg }}>
                            <Bot className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-neutral-900">{app.name}</p>
                            <p className="text-[9px] text-neutral-400">{app.version}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => launchApp(app)}
                          className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FF5A28] text-white"
                        >
                          Launch
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Bottom Navigation */}
          <div className="bg-white border-t border-neutral-100 px-4 py-2 flex items-center justify-between z-20">
            {[
              { id: 'home', label: 'Home', icon: Compass },
              { id: 'categories', label: 'Categories', icon: LayoutGrid },
              { id: 'search', label: 'Search', icon: Search },
              { id: 'my-apps', label: 'My Apps', icon: Layers }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = phoneTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setPhoneTab(tab.id as 'home' | 'categories' | 'search' | 'my-apps')}
                  className={`flex flex-col items-center space-y-0.5 transition-colors ${
                    isActive ? 'text-neutral-950 font-bold' : 'text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  <Icon className="w-4 h-4 stroke-[2]" />
                  <span className="text-[9px] tracking-tight">{tab.label}</span>
                  {isActive && <div className="w-1 h-1 rounded-full bg-[#FF5A28]" />}
                </button>
              );
            })}
          </div>

          <div className="w-full flex justify-center pb-1.5 pt-0.5 bg-white">
            <div className="w-28 h-1 bg-neutral-300 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
