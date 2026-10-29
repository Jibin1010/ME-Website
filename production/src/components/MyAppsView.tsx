'use client';

import React from 'react';
import { 
  Layers, 
  Trash2, 
  Play, 
  HardDrive, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppIconRenderer } from './AppIconRenderer';

export function MyAppsView({ onBrowseClick }: { onBrowseClick: () => void }) {
  const { 
    apps, 
    installedApps, 
    uninstallApp, 
    launchApp, 
    setSelectedApp,
    resetToDefaults
  } = useApp();

  const installedList = apps.filter(app => !!installedApps[app.id]);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF5A28] mb-1">
            <Layers className="w-4 h-4" />
            <span>Library & Device Storage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            My Installed Applications
          </h2>
          <p className="text-neutral-600 text-sm mt-1">
            Manage, launch, and configure applications installed on your system.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-2xl border border-neutral-200 shadow-sm text-xs text-neutral-700 font-semibold">
            <HardDrive className="w-4 h-4 text-emerald-600" />
            <span>{installedList.length} Apps Active</span>
          </div>

          <button
            onClick={resetToDefaults}
            className="p-2 rounded-2xl bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 shadow-sm transition-all"
            title="Reset store catalog and library to defaults"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {installedList.length === 0 ? (
        <div className="text-center py-20 px-4 bg-white rounded-3xl border border-dashed border-neutral-300">
          <div className="w-16 h-16 rounded-full bg-neutral-100 text-neutral-500 flex items-center justify-center mx-auto mb-4">
            <Layers className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900">No applications installed</h3>
          <p className="text-sm text-neutral-500 max-w-md mx-auto mt-1 mb-6">
            You haven&apos;t installed any apps from Marketplace yet. Explore our curated store to find games, note-taking apps, and developer tools.
          </p>
          <button
            onClick={onBrowseClick}
            className="px-6 py-3 rounded-full bg-[#161616] text-white text-sm font-bold shadow-md hover:bg-black transition-all inline-flex items-center space-x-2"
          >
            <span>Browse App Store</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {installedList.map(app => {
            const record = installedApps[app.id];

            return (
              <div
                key={app.id}
                className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      onClick={() => setSelectedApp(app)}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md cursor-pointer hover:scale-105 transition-transform"
                      style={{ backgroundColor: app.iconBg }}
                    >
                      <AppIconRenderer name={app.iconName} className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Installed</span>
                      </span>
                    </div>
                  </div>

                  <h3 
                    onClick={() => setSelectedApp(app)}
                    className="text-lg font-extrabold text-neutral-900 hover:text-[#FF5A28] cursor-pointer transition-colors"
                  >
                    {app.name}
                  </h3>
                  <p className="text-xs text-neutral-400">{app.category} • {app.version}</p>
                  
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-2">
                    {app.tagline}
                  </p>

                  <div className="mt-3 text-[11px] text-neutral-400">
                    <span>Installed: {record?.installedAt ? record.installedAt.substring(0, 10) : 'Active'}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => uninstallApp(app.id)}
                    className="p-2 rounded-xl text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                    title="Uninstall app"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedApp(app)}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-600 hover:bg-neutral-100 transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => launchApp(app)}
                      className="px-4 py-1.5 rounded-full bg-[#FF5A28] hover:bg-[#E04F20] text-white text-xs font-bold shadow-sm transition-all flex items-center space-x-1.5"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Launch</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
