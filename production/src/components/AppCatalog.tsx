'use client';

import React from 'react';
import { 
  Search, 
  ArrowUpDown, 
  Star, 
  Download, 
  Check, 
  Sparkles, 
  PlusCircle, 
  ShieldCheck, 
  ChevronRight,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/initialApps';
import { AppIconRenderer } from './AppIconRenderer';

type SortType = 'recommended' | 'rating' | 'downloads' | 'newest' | 'az';

export function AppCatalog() {
  const { 
    apps, 
    installedApps, 
    installingMap, 
    installApp, 
    launchApp, 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery, 
    selectedSort, 
    setSelectedSort,
    setSelectedApp,
    setIsPublishOpen
  } = useApp();

  const filteredApps = apps.filter(app => {
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
    const matchesSearch = 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const sortedApps = [...filteredApps].sort((a, b) => {
    if (selectedSort === 'recommended') {
      if (a.isRecommended && !b.isRecommended) return -1;
      if (!a.isRecommended && b.isRecommended) return 1;
      return b.rating - a.rating;
    }
    if (selectedSort === 'rating') {
      return b.rating - a.rating;
    }
    if (selectedSort === 'downloads') {
      return b.ratingCount - a.ratingCount;
    }
    if (selectedSort === 'newest') {
      return Date.parse(b.dateAdded) - Date.parse(a.dateAdded);
    }
    if (selectedSort === 'az') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const featuredApps = apps.filter(a => a.isFeatured).slice(0, 3);

  return (
    <section id="marketplace-store" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF5A28] mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Discover & Install</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Marketplace App Store
          </h2>
          <p className="text-neutral-600 text-sm mt-1">
            Browse high-performance open-source tools, games, and productivity essentials.
          </p>
        </div>

        {/* Quick count & Put App CTA */}
        <div className="flex items-center space-x-3">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-sm">
            {apps.length} Apps in Catalog
          </span>
          <button
            onClick={() => setIsPublishOpen(true)}
            className="text-xs font-bold px-4 py-2 rounded-full bg-[#FF5A28] hover:bg-[#E04F20] text-white shadow-sm transition-all flex items-center space-x-1.5"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>+ Put My App Here</span>
          </button>
        </div>
      </div>

      {/* Featured Banner Row (if not searching) */}
      {!searchQuery && selectedCategory === 'All' && (
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredApps.map(app => {
              const isInstalled = !!installedApps[app.id];
              return (
                <div
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className="group relative rounded-3xl p-6 bg-gradient-to-br from-white to-[#FFF9F3] border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF5A28]/10 via-amber-200/10 to-transparent rounded-bl-full pointer-events-none" />
                  
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: app.iconBg }}
                      >
                        <AppIconRenderer name={app.iconName} className="w-9 h-9 text-white" />
                      </div>
                      <span className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/50">
                        <Award className="w-3 h-3 text-amber-600" />
                        <span>Featured</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-neutral-900 group-hover:text-[#FF5A28] transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-400 mt-0.5">{app.developer}</p>
                    <p className="text-sm text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                      {app.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-amber-500 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                      <span>{app.rating}</span>
                      <span className="text-neutral-400 font-normal">({(app.ratingCount / 1000).toFixed(1)}k)</span>
                    </div>
                    <span className="text-xs font-bold text-[#FF5A28] flex items-center space-x-1">
                      <span>{isInstalled ? 'Installed' : 'View Details'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Category Pills Navigation */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none mb-6">
        {CATEGORIES.map(cat => {
          const isSelected = selectedCategory === cat.id;
          const count = cat.id === 'All' 
            ? apps.length 
            : apps.filter(a => a.category === cat.id).length;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center space-x-2 whitespace-nowrap ${
                isSelected
                  ? 'bg-neutral-950 text-white shadow-md scale-105'
                  : 'bg-white hover:bg-neutral-100/80 text-neutral-700 border border-neutral-200/70 shadow-sm'
              }`}
            >
              <AppIconRenderer name={cat.icon} className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isSelected ? 'bg-neutral-700 text-neutral-200' : 'bg-neutral-100 text-neutral-500'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl border border-neutral-200/60 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Search status */}
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name, tags, description..."
              className="w-full bg-neutral-50 pl-9 pr-3 py-1.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A28]/40"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-neutral-500 hover:text-neutral-900 underline whitespace-nowrap"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
          <span className="text-xs font-semibold text-neutral-500 flex items-center space-x-1">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>Sort:</span>
          </span>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value as SortType)}
            className="bg-neutral-50 border border-neutral-200 text-xs font-bold text-neutral-800 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#FF5A28]/40"
          >
            <option value="recommended">Recommended (Editor Picks)</option>
            <option value="rating">Top Rated (Highest Stars)</option>
            <option value="downloads">Most Popular</option>
            <option value="newest">Newest Releases</option>
            <option value="az">Alphabetical (A - Z)</option>
          </select>
        </div>

      </div>

      {/* Apps Grid */}
      {sortedApps.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-neutral-300">
          <div className="w-16 h-16 rounded-full bg-[#FEECE5] text-[#FF5A28] flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900">No applications found</h3>
          <p className="text-sm text-neutral-500 max-w-md mx-auto mt-1 mb-6">
            We couldn&apos;t find any apps matching &quot;{searchQuery}&quot; in category &quot;{selectedCategory}&quot;.
          </p>
          <button
            onClick={() => setIsPublishOpen(true)}
            className="px-6 py-2.5 rounded-full bg-[#FF5A28] text-white text-xs font-bold shadow-md hover:bg-[#E04F20] transition-all inline-flex items-center space-x-2"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add &quot;{searchQuery || 'New App'}&quot; to Marketplace</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedApps.map(app => {
            const isInstalled = !!installedApps[app.id];
            const isInstalling = installingMap[app.id] !== undefined;
            const progress = installingMap[app.id] || 0;

            return (
              <div
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className="group bg-white rounded-3xl p-5 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1 relative"
              >
                {app.isCustom && (
                  <span className="absolute top-3 right-3 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Your App
                  </span>
                )}

                <div>
                  <div className="flex items-start space-x-3.5 mb-3">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: app.iconBg }}
                    >
                      <AppIconRenderer name={app.iconName} className="w-8 h-8 text-white" />
                    </div>

                    <div className="overflow-hidden flex-1">
                      <div className="flex items-center space-x-1">
                        <h4 className="font-extrabold text-neutral-900 text-base truncate group-hover:text-[#FF5A28] transition-colors">
                          {app.name}
                        </h4>
                        {app.developerVerified && (
                          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-neutral-400 truncate">{app.developer}</p>
                      
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600">
                          {app.category}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-medium">
                          {app.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                    {app.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-1 text-amber-500 font-extrabold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <span>{app.rating}</span>
                    <span className="text-neutral-400 text-[10px] font-normal">
                      ({app.ratingCount > 1000 ? `${(app.ratingCount / 1000).toFixed(0)}k` : app.ratingCount})
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isInstalled) {
                        launchApp(app);
                      } else {
                        installApp(app.id);
                      }
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center space-x-1.5 ${
                      isInstalled
                        ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                        : isInstalling
                        ? 'bg-[#FF5A28]/15 text-[#FF5A28]'
                        : 'bg-[#FF5A28] hover:bg-[#E04F20] text-white'
                    }`}
                  >
                    {isInstalled ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                        <span>Open</span>
                      </>
                    ) : isInstalling ? (
                      <div className="flex items-center space-x-1">
                        <div className="w-2.5 h-2.5 rounded-full border-2 border-[#FF5A28] border-t-transparent animate-spin" />
                        <span>{progress}%</span>
                      </div>
                    ) : (
                      <>
                        <Download className="w-3 h-3" />
                        <span>{app.price === 'Free' || app.price === 'Open Source' ? 'Get' : app.price}</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
}
