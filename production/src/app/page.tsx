'use client';

import React, { useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AppCatalog } from '../components/AppCatalog';
import { MyAppsView } from '../components/MyAppsView';
import { Footer } from '../components/Footer';
import { useApp } from '../context/AppContext';
import { 
  PlusCircle, 
  Code 
} from 'lucide-react';

export default function Home() {
  const { activeNavTab, setActiveNavTab, setIsPublishOpen } = useApp();
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleScrollToStore = () => {
    setActiveNavTab('store');
    setTimeout(() => {
      catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF3EC] selection:bg-[#FF5A28]/20 selection:text-[#FF5A28]">
      {/* Top Navbar */}
      <Navbar onScrollToStore={handleScrollToStore} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeNavTab === 'my-apps' ? (
          <MyAppsView onBrowseClick={handleScrollToStore} />
        ) : (
          <>
            {/* The Hero Showcase: directly integrated into the website page (no separate popup!) */}
            <HeroSection onExploreClick={handleScrollToStore} />

            {/* Developer Banner: "Put Your App in Store" */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="relative rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white p-8 sm:p-10 shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800 text-left">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5A28]/15 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-2 max-w-xl z-10">
                  <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF5A28]">
                    <Code className="w-4 h-4" />
                    <span>Developer Ecosystem</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                    Have an App to Share? Put It in Marketplace.
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Add your custom applications, web tools, or games to this Marketplace catalogue. Test installations, manage user reviews, and configure metadata in real time.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto">
                  <button
                    onClick={() => setIsPublishOpen(true)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FF5A28] hover:bg-[#E04F20] text-white text-xs font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>+ Submit Your App Now</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Complete Marketplace App Store Catalog */}
            <div ref={catalogRef}>
              <AppCatalog />
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
