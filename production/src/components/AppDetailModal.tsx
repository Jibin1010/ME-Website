'use client';

import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Download, 
  Play, 
  ShieldCheck, 
  Send, 
  Trash2,
  Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppIconRenderer } from './AppIconRenderer';

export function AppDetailModal() {
  const { 
    selectedApp, 
    setSelectedApp, 
    installedApps, 
    installingMap, 
    installApp, 
    uninstallApp, 
    launchApp,
    addReview,
    deleteCustomApp
  } = useApp();

  const [reviewRating, setReviewRating] = useState(5);
  const [reviewName, setReviewName] = useState('Timothy');
  const [reviewComment, setReviewComment] = useState('');

  if (!selectedApp) return null;

  const isInstalled = !!installedApps[selectedApp.id];
  const isInstalling = installingMap[selectedApp.id] !== undefined;
  const progress = installingMap[selectedApp.id] || 0;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewComment.trim()) return;

    addReview(selectedApp.id, {
      userName: reviewName.trim() || 'Anonymous User',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      rating: reviewRating,
      comment: reviewComment.trim()
    });

    setReviewComment('');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={() => setSelectedApp(null)}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-neutral-50 via-[#FFFBF7] to-[#FDF4EB] border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative">
          
          <button
            onClick={() => setSelectedApp(null)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 shadow hover:bg-neutral-100 flex items-center justify-center text-neutral-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Icon and Main Info */}
          <div className="flex items-start sm:items-center space-x-5">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex items-center justify-center text-white shadow-xl flex-shrink-0"
              style={{ backgroundColor: selectedApp.iconBg }}
            >
              <AppIconRenderer name={selectedApp.iconName} className="w-12 h-12 text-white" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  {selectedApp.name}
                </h2>
                {selectedApp.developerVerified && (
                  <span title="Verified Developer">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-[#FF5A28]">
                {selectedApp.developer}
              </p>
              <p className="text-xs text-neutral-500">
                {selectedApp.category} • {selectedApp.version}
              </p>

              {/* Star Rating summary */}
              <div className="flex items-center space-x-1.5 pt-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(selectedApp.rating) ? 'fill-amber-400 stroke-none' : 'text-neutral-200'}`} 
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-neutral-800">{selectedApp.rating}</span>
                <span className="text-xs text-neutral-400">({selectedApp.ratingCount} reviews)</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3">
            <button
              onClick={() => {
                if (isInstalled) {
                  launchApp(selectedApp);
                } else {
                  installApp(selectedApp.id);
                }
              }}
              className={`w-full sm:w-36 py-3 rounded-full text-sm font-bold shadow-md transition-all flex items-center justify-center space-x-2 ${
                isInstalled
                  ? 'bg-neutral-900 hover:bg-black text-white'
                  : isInstalling
                  ? 'bg-[#FF5A28]/20 text-[#FF5A28]'
                  : 'bg-[#FF5A28] hover:bg-[#E04F20] text-white hover:scale-105'
              }`}
            >
              {isInstalled ? (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Launch App</span>
                </>
              ) : isInstalling ? (
                <div className="flex items-center space-x-2">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#FF5A28] border-t-transparent animate-spin" />
                  <span>{progress}%</span>
                </div>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{selectedApp.price === 'Free' || selectedApp.price === 'Open Source' ? 'GET APP' : selectedApp.price}</span>
                </>
              )}
            </button>

            {isInstalled && (
              <button
                onClick={() => uninstallApp(selectedApp.id)}
                className="text-xs font-semibold text-red-500 hover:text-red-700 underline"
              >
                Uninstall
              </button>
            )}

            {selectedApp.isCustom && (
              <button
                onClick={() => {
                  deleteCustomApp(selectedApp.id);
                  setSelectedApp(null);
                }}
                className="text-xs font-semibold text-neutral-400 hover:text-red-600 flex items-center space-x-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>Delete Custom App</span>
              </button>
            )}
          </div>

        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          
          <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
            <p className="text-base font-semibold text-neutral-800">
              &ldquo;{selectedApp.tagline}&rdquo;
            </p>
          </div>

          {selectedApp.screenshots && selectedApp.screenshots.length > 0 && (
            <div>
              <h4 className="text-sm font-extrabold text-neutral-900 mb-3 uppercase tracking-wider">
                Preview & Screenshots
              </h4>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                {selectedApp.screenshots.map((img, i) => (
                  <div 
                    key={i}
                    className="relative w-64 h-40 sm:h-44 rounded-2xl overflow-hidden flex-shrink-0 border border-neutral-200/80 shadow-sm"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={img} 
                      alt={`${selectedApp.name} screenshot ${i+1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-sm font-extrabold text-neutral-900 mb-2 uppercase tracking-wider">
              About This Application
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
              {selectedApp.description}
            </p>
          </div>

          {selectedApp.features && selectedApp.features.length > 0 && (
            <div>
              <h4 className="text-sm font-extrabold text-neutral-900 mb-3 uppercase tracking-wider">
                Highlights & Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedApp.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs text-neutral-700 bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedApp.whatsNew && (
            <div>
              <h4 className="text-sm font-extrabold text-neutral-900 mb-2 uppercase tracking-wider">
                What&apos;s New in Version {selectedApp.version}
              </h4>
              <div className="bg-amber-50/70 border border-amber-200/60 p-3.5 rounded-2xl text-xs text-amber-900">
                {selectedApp.whatsNew}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-100 text-xs">
            <div>
              <span className="text-neutral-400 block mb-0.5 font-medium">Developer</span>
              <span className="font-bold text-neutral-800">{selectedApp.developer}</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-0.5 font-medium">File Size</span>
              <span className="font-bold text-neutral-800">{selectedApp.size}</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-0.5 font-medium">Category</span>
              <span className="font-bold text-neutral-800">{selectedApp.category}</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-0.5 font-medium">Safety Status</span>
              <span className="font-bold text-emerald-600 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Malware Free</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-extrabold text-neutral-900 mb-3 uppercase tracking-wider">
              Community Ratings & Reviews ({selectedApp.reviews?.length || 0})
            </h4>

            <div className="space-y-3 mb-6">
              {(!selectedApp.reviews || selectedApp.reviews.length === 0) ? (
                <p className="text-xs text-neutral-400 italic">No user reviews yet. Be the first to leave one!</p>
              ) : (
                selectedApp.reviews.map(rev => (
                  <div key={rev.id} className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-neutral-900">{rev.userName}</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < rev.rating ? 'fill-amber-400 stroke-none' : 'text-neutral-200'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-neutral-600">{rev.comment}</p>
                    <span className="text-[10px] text-neutral-400">{rev.date}</span>
                  </div>
                ))
              )}
            </div>

            <form onSubmit={handleReviewSubmit} className="bg-[#FFFBF7] p-4 rounded-2xl border border-amber-200/50 space-y-3">
              <span className="text-xs font-bold text-neutral-900 block">Write a Review</span>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setReviewRating(star)}
                      className="p-0.5 focus:outline-none"
                    >
                      <Star 
                        className={`w-4 h-4 ${star <= reviewRating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'}`} 
                      />
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  placeholder="Your Name"
                  className="bg-white border border-neutral-200 rounded-lg px-2.5 py-1 text-xs text-neutral-900"
                />
              </div>

              <div className="flex space-x-2">
                <input
                  type="text"
                  required
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  placeholder="Share your thoughts about this app..."
                  className="flex-1 bg-white border border-neutral-200 rounded-xl px-3 py-1.5 text-xs text-neutral-900"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-neutral-900 text-white text-xs font-bold hover:bg-black flex items-center space-x-1"
                >
                  <Send className="w-3 h-3" />
                  <span>Post</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
