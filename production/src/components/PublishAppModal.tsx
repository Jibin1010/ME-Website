'use client';

import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  Trash2 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AppCategory } from '../types/app';
import { AppIconRenderer } from './AppIconRenderer';

const ICON_PRESETS = [
  { name: 'Bot', label: 'Robot / AI' },
  { name: 'FileText', label: 'Notes / Docs' },
  { name: 'Gamepad2', label: 'Gamepad' },
  { name: 'Code', label: 'Code' },
  { name: 'Palette', label: 'Design' },
  { name: 'Zap', label: 'Utility' },
  { name: 'ShieldCheck', label: 'Security' },
  { name: 'Music', label: 'Audio' },
  { name: 'Layers', label: 'Stack' },
  { name: 'Terminal', label: 'Terminal' },
  { name: 'Sparkles', label: 'Creative' },
  { name: 'Globe', label: 'Web' }
];

const COLOR_PRESETS = [
  '#FF5A28', // Signature Marketplace Orange
  '#10B981', // Emerald
  '#3B82F6', // Blue
  '#8B5CF6', // Purple
  '#F59E0B', // Amber
  '#EC4899', // Pink
  '#E11D48', // Rose
  '#0F172A', // Slate / Dark
];

export function PublishAppModal() {
  const { isPublishOpen, setIsPublishOpen, publishApp } = useApp();

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<AppCategory>('Productivity');
  const [developer, setDeveloper] = useState('Timothy Labs');
  const [version, setVersion] = useState('1.0.0');
  const [price, setPrice] = useState('Free');
  const [size, setSize] = useState('24 MB');
  const [iconColor, setIconColor] = useState('#FF5A28');
  const [iconName, setIconName] = useState('Sparkles');
  const [features, setFeatures] = useState<string[]>([
    'Seamless high-performance offline support',
    'Modern responsive design with dark mode',
    'Instant cloud sync and end-to-end encryption'
  ]);
  const [newFeature, setNewFeature] = useState('');
  const [tags, setTags] = useState('Productivity, Fast, Clean, Web');
  const [whatsNew, setWhatsNew] = useState('Initial public release to Marketplace.');

  if (!isPublishOpen) return null;

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (idx: number) => {
    setFeatures(features.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    publishApp({
      name: name.trim(),
      tagline: tagline.trim() || 'A modern experience crafted for Marketplace.',
      description: description.trim() || 'Built with passion for high performance and clean usability.',
      category,
      iconBg: iconColor,
      iconColor: '#FFFFFF',
      iconName,
      price: price.trim() || 'Free',
      isFree: price.toLowerCase().includes('free') || price.toLowerCase().includes('open source'),
      size: size.trim() || '18 MB',
      version: version.trim() || '1.0.0',
      developer: developer.trim() || 'Community Developer',
      developerVerified: true,
      screenshots: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80'
      ],
      features: features.length > 0 ? features : ['Intuitive interface', 'Fast performance'],
      whatsNew: whatsNew.trim() || 'Initial release',
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      isFreshRelease: true,
      isFeatured: false
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-gradient-to-r from-neutral-50 to-[#FFF9F5]">
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm"
              style={{ backgroundColor: iconColor }}
            >
              <AppIconRenderer name={iconName} className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-neutral-900">
                Put Your App in Marketplace
              </h3>
              <p className="text-xs text-neutral-500">
                Publish a new application directly into the store catalog
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsPublishOpen(false)}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-left">
          
          {/* App Basics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                App Title *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Pixel Forge Studio"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#FF5A28]/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as AppCategory)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#FF5A28]/40"
              >
                <option value="Games">Games</option>
                <option value="Productivity">Productivity</option>
                <option value="Social">Social</option>
                <option value="Tools">Tools</option>
                <option value="Developer">Developer</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Design">Design</option>
              </select>
            </div>
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Short Pitch / Tagline *
            </label>
            <input
              type="text"
              required
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="e.g. Next-generation vector graphics and live prototyping"
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#FF5A28]/40"
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Full Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detailed description of your application, use cases, and benefits..."
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#FF5A28]/40"
            />
          </div>

          {/* Icon Customizer */}
          <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 space-y-3">
            <label className="block text-xs font-bold text-neutral-800">
              App Icon Appearance
            </label>
            
            <div>
              <span className="text-[11px] text-neutral-500 block mb-1.5">Choose Color:</span>
              <div className="flex flex-wrap gap-2">
                {COLOR_PRESETS.map(color => (
                  <button
                    type="button"
                    key={color}
                    onClick={() => setIconColor(color)}
                    className="w-7 h-7 rounded-xl flex items-center justify-center shadow-sm transition-transform hover:scale-110"
                    style={{ backgroundColor: color }}
                  >
                    {iconColor === color && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] text-neutral-500 block mb-1.5">Choose Icon Symbol:</span>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {ICON_PRESETS.map(item => (
                  <button
                    type="button"
                    key={item.name}
                    onClick={() => setIconName(item.name)}
                    className={`p-2 rounded-xl border flex flex-col items-center justify-center space-y-1 transition-all ${
                      iconName === item.name 
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm' 
                        : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    <AppIconRenderer name={item.name} className="w-4 h-4" />
                    <span className="text-[9px] truncate w-full text-center">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Developer</label>
              <input
                type="text"
                value={developer}
                onChange={(e) => setDeveloper(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-2.5 py-1.5 text-xs text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Version</label>
              <input
                type="text"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-2.5 py-1.5 text-xs text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Free / $4.99"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-2.5 py-1.5 text-xs text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">Size</label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-2.5 py-1.5 text-xs text-neutral-900"
              />
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Key Features
            </label>
            <div className="space-y-1.5 mb-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center justify-between bg-neutral-50 px-3 py-1.5 rounded-xl border border-neutral-200/80 text-xs text-neutral-800">
                  <span className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{feat}</span>
                  </span>
                  <button 
                    type="button" 
                    onClick={() => handleRemoveFeature(idx)}
                    className="text-neutral-400 hover:text-red-500"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Add another highlight feature..."
                className="flex-1 bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-1.5 text-xs text-neutral-900"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddFeature();
                  }
                }}
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-xs font-bold hover:bg-black"
              >
                Add
              </button>
            </div>
          </div>

          {/* What's New & Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Release Notes (What&apos;s New)
              </label>
              <input
                type="text"
                value={whatsNew}
                onChange={(e) => setWhatsNew(e.target.value)}
                placeholder="e.g. Initial public release with dark mode"
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-1.5 text-xs text-neutral-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Search Tags (comma separated)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-1.5 text-xs text-neutral-900"
              />
            </div>
          </div>

          {/* Footer Submit */}
          <div className="pt-4 border-t border-neutral-100 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsPublishOpen(false)}
              className="px-4 py-2 rounded-full text-xs font-bold text-neutral-600 hover:bg-neutral-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#FF5A28] hover:bg-[#E04F20] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Publish to Marketplace</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
