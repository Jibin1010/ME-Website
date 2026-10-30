'use client';

import React, { useState } from 'react';
import { 
  Download, 
  ShieldCheck, 
  Check, 
  Copy, 
  ExternalLink, 
  Smartphone, 
  Cpu, 
  Sparkles, 
  FolderArchive,
  QrCode,
  HardDrive,
  FileCheck2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export function ReleaseSection() {
  const { addToast } = useApp();
  const [copiedHash, setCopiedHash] = useState<'sha256' | 'sha1' | null>(null);
  const [showQr, setShowQr] = useState(false);

  const sha256Hash = 'c1709bc381255d80a01badbbaea727a1e84f00a677f93cb0f66630c313fafca0';
  const sha1Hash = '65c0eaebf3121a63d1429722ba77e394f7967313';

  const copyToClipboard = (text: string, type: 'sha256' | 'sha1') => {
    navigator.clipboard.writeText(text);
    setCopiedHash(type);
    addToast({
      title: `${type.toUpperCase()} Copied!`,
      description: 'Checksum hash copied to clipboard for verification.',
      type: 'success'
    });
    setTimeout(() => setCopiedHash(null), 3000);
  };

  return (
    <section id="releases-section" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FF5A28] mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Latest Release Available</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Marketplace Android Release v1.0.0
          </h2>
          <p className="text-neutral-600 text-sm mt-1 max-w-2xl">
            Official production build featuring the warm terracotta design system, Google OAuth, acoustic feedback, and verified security signature.
          </p>
        </div>

        {/* Quick specs pill */}
        <div className="flex items-center space-x-2 flex-wrap gap-y-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-sm flex items-center space-x-1.5">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Android 7.0 – 16 (API 36)</span>
          </span>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-sm flex items-center space-x-1.5">
            <HardDrive className="w-3.5 h-3.5 text-[#FF5A28]" />
            <span>66.1 MB APK</span>
          </span>
        </div>
      </div>

      {/* Main Release Card */}
      <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#FFFBF6] to-[#FDF4EB] border border-amber-200/80 shadow-xl overflow-hidden p-6 sm:p-10 mb-10">
        
        {/* Glow ambient background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/20 via-[#FF5A28]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Visual Icon & Details */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
            <div className="relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/showcase/bag-icon.png" 
                alt="Marketplace 3D Adaptive Icon" 
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl object-contain shadow-2xl border-2 border-white/80 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute -bottom-2 -right-2 bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center space-x-1">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified</span>
              </span>
            </div>

            <div>
              <div className="flex items-center space-x-2 justify-center sm:justify-start">
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight">Marketplace App</h3>
                <span className="bg-[#FF5A28] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">v1.0.0</span>
              </div>
              <p className="text-xs font-semibold text-neutral-400 mt-0.5">Package: com.example.marketplace • Build 1</p>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                Experience the next generation app discovery engine with warm aesthetics, Google sign-in, and offline package repository support.
              </p>
            </div>

            {/* Architecture Pills */}
            <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
              {['arm64-v8a', 'armeabi-v7a', 'x86_64', 'AOT Release', 'API 24+'].map(tag => (
                <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/80 border border-neutral-200 text-neutral-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Download Actions, Mirrors & Checksums */}
          <div className="lg:col-span-7 space-y-6 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-sm text-left">
            
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-800 flex items-center space-x-1.5">
                <FileCheck2 className="w-4 h-4 text-emerald-600" />
                <span>Download Release Artifacts</span>
              </span>
              <button 
                onClick={() => setShowQr(!showQr)}
                className="text-xs font-bold text-neutral-600 hover:text-neutral-900 flex items-center space-x-1"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>{showQr ? 'Hide QR' : 'Mobile QR'}</span>
              </button>
            </div>

            {/* Download Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Primary APK Download Button */}
              <a
                href="https://github.com/Jibin1010/ME-Website/releases/download/v1.0.0/Marketplace-v1.0.0.apk"
                className="group relative overflow-hidden flex items-center justify-between p-4 rounded-2xl bg-neutral-950 hover:bg-black text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5A28] flex items-center justify-center flex-shrink-0 text-white shadow">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                  </div>
                  <div>
                    <span className="text-sm font-bold block leading-tight">Download APK</span>
                    <span className="text-[11px] text-neutral-400">Direct CDN • 66.1 MB</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Full Release ZIP Button */}
              <a
                href="https://github.com/Jibin1010/ME-Website/releases/download/v1.0.0/Marketplace-v1.0.0-release.zip"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-700 shadow-sm">
                    <FolderArchive className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold block leading-tight">Release Bundle (.ZIP)</span>
                    <span className="text-[11px] text-neutral-500">Compressed • 36 MB</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
              </a>

            </div>

            {/* QR Code expansion */}
            {showQr && (
              <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-24 h-24 bg-white p-2 rounded-xl border border-neutral-200 shadow-sm flex items-center justify-center">
                  {/* High contrast simulated SVG QR for direct mobile camera scan */}
                  <svg className="w-20 h-20 text-neutral-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14-2h4v2h-4v-2zm-4 0h2v4h-2v-4zm2 4h4v4h-4v-4zm-4 2h2v2h-2v-2zm8 0h2v2h-2v-2zM6 6h2v2H6V6zm10 0h2v2h-2V6zM6 18h2v2H6v-2z" />
                  </svg>
                </div>
                <div className="text-xs text-neutral-600">
                  <p className="font-bold text-neutral-900">Scan to Download on Android</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Point your phone camera at this QR code to download and install the APK directly to your device.
                  </p>
                </div>
              </div>
            )}

            {/* Cryptographic Checksums */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                Cryptographic Integrity Verification
              </span>

              {/* SHA-256 */}
              <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/80 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center space-x-2 overflow-hidden">
                  <span className="font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded text-[10px]">SHA-256</span>
                  <span className="text-neutral-700 truncate">{sha256Hash}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(sha256Hash, 'sha256')}
                  className="p-1 rounded hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 flex-shrink-0 ml-2"
                  title="Copy SHA-256"
                >
                  {copiedHash === 'sha256' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* SHA-1 */}
              <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200/80 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center space-x-2 overflow-hidden">
                  <span className="font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded text-[10px]">SHA-1</span>
                  <span className="text-neutral-700 truncate">{sha1Hash}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(sha1Hash, 'sha1')}
                  className="p-1 rounded hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 flex-shrink-0 ml-2"
                  title="Copy SHA-1"
                >
                  {copiedHash === 'sha1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Release Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          <h4 className="font-extrabold text-neutral-900 text-base">Warm Terracotta Aesthetic</h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Crafted with custom cream canvas backgrounds (`#FAF2DC`), warm ink typography, and acoustic tactile feedback.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
            <Lock className="w-5 h-5 text-blue-600" />
          </div>
          <h4 className="font-extrabold text-neutral-900 text-base">Google OAuth & Auth System</h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Full Google / Gmail OAuth 2.0 Sign-In, standard credentials, and role-based routing between users and store managers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-sm space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Cpu className="w-5 h-5 text-emerald-600" />
          </div>
          <h4 className="font-extrabold text-neutral-900 text-base">AOT Optimized Engine</h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Compiled with Ahead-Of-Time optimization and tree-shaken vector icons, delivering instant load times and fluid 60 FPS transitions.
          </p>
        </div>
      </div>

      {/* Visual Design System Showcase */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
          <div>
            <h3 className="text-lg font-extrabold text-neutral-900">Design System & App Showcase</h3>
            <p className="text-xs text-neutral-500">Official Figma styleboards and architecture specifications</p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 w-fit">
            Verified Figma Specs
          </span>
        </div>

        {/* Showcase Image Display */}
        <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/showcase/design-showcase.png" 
            alt="Marketplace App Flow Showcase" 
            className="w-full h-auto object-contain" 
          />
        </div>
      </div>

    </section>
  );
}
