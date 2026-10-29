'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { AppItem, InstalledAppRecord, AppReview } from '../types/app';
import { INITIAL_APPS } from '../data/initialApps';
import confetti from 'canvas-confetti';

interface Toast {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'warning';
}

type SortType = 'recommended' | 'rating' | 'downloads' | 'newest' | 'az';

interface AppContextType {
  apps: AppItem[];
  installedApps: Record<string, InstalledAppRecord>;
  installingMap: Record<string, number>;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedSort: SortType;
  setSelectedSort: (sort: SortType) => void;
  selectedApp: AppItem | null;
  setSelectedApp: (app: AppItem | null) => void;
  isPublishOpen: boolean;
  setIsPublishOpen: (open: boolean) => void;
  simulatedRunningApp: AppItem | null;
  setSimulatedRunningApp: (app: AppItem | null) => void;
  activeNavTab: 'showcase' | 'store' | 'my-apps';
  setActiveNavTab: (tab: 'showcase' | 'store' | 'my-apps') => void;
  installApp: (id: string) => void;
  uninstallApp: (id: string) => void;
  launchApp: (app: AppItem) => void;
  publishApp: (appData: Omit<AppItem, 'id' | 'rating' | 'ratingCount' | 'reviews' | 'dateAdded'>) => void;
  deleteCustomApp: (id: string) => void;
  addReview: (appId: string, review: Omit<AppReview, 'id' | 'date'>) => void;
  resetToDefaults: () => void;
  toasts: Toast[];
  removeToast: (id: string) => void;
  addToast: (toast: Omit<Toast, 'id'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const APPS_STORAGE_KEY = 'marketplace_apps_catalog_v1';
const INSTALLED_STORAGE_KEY = 'marketplace_installed_apps_v1';

let uniqueCounter = 0;
function generateUniqueId(prefix = 'id') {
  uniqueCounter += 1;
  return `${prefix}-${uniqueCounter}-${Date.now()}`;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [apps, setApps] = useState<AppItem[]>(INITIAL_APPS);
  const [installedApps, setInstalledApps] = useState<Record<string, InstalledAppRecord>>({
    'notes-pro': {
      appId: 'notes-pro',
      installedAt: '2026-03-01T10:00:00Z',
      version: '4.5.2'
    }
  });
  const [installingMap, setInstallingMap] = useState<Record<string, number>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState<SortType>('recommended');
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [isPublishOpen, setIsPublishOpen] = useState(false);
  const [simulatedRunningApp, setSimulatedRunningApp] = useState<AppItem | null>(null);
  const [activeNavTab, setActiveNavTab] = useState<'showcase' | 'store' | 'my-apps'>('showcase');
  const [toasts, setToasts] = useState<Toast[]>([]);

  const isHydratedRef = useRef(false);

  useEffect(() => {
    if (isHydratedRef.current) return;
    isHydratedRef.current = true;

    const timer = setTimeout(() => {
      try {
        const savedApps = localStorage.getItem(APPS_STORAGE_KEY);
        if (savedApps) {
          const parsed = JSON.parse(savedApps);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const customApps = parsed.filter((p: AppItem) => p.isCustom);
            const initialMap = new Map(INITIAL_APPS.map(a => [a.id, a]));
            parsed.forEach((item: AppItem) => {
              if (!item.isCustom && initialMap.has(item.id)) {
                initialMap.set(item.id, item);
              }
            });
            setApps([...Array.from(initialMap.values()), ...customApps]);
          }
        }

        const savedInstalled = localStorage.getItem(INSTALLED_STORAGE_KEY);
        if (savedInstalled) {
          const parsed = JSON.parse(savedInstalled);
          setInstalledApps(parsed);
        }
      } catch (e) {
        console.error('Failed to load marketplace storage', e);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const persistApps = (newApps: AppItem[]) => {
    setApps(newApps);
    try {
      localStorage.setItem(APPS_STORAGE_KEY, JSON.stringify(newApps));
    } catch (e) {
      console.error('Storage quota exceeded or unavailable', e);
    }
  };

  const persistInstalled = (newInstalled: Record<string, InstalledAppRecord>) => {
    setInstalledApps(newInstalled);
    try {
      localStorage.setItem(INSTALLED_STORAGE_KEY, JSON.stringify(newInstalled));
    } catch (e) {
      console.error('Storage quota exceeded', e);
    }
  };

  const addToast = ({ title, description, type = 'info' }: Omit<Toast, 'id'>) => {
    const id = generateUniqueId('toast');
    setToasts(prev => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FF5A28', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6']
      });
    } catch {
      // ignore
    }
  };

  const installApp = (id: string) => {
    const targetApp = apps.find(a => a.id === id);
    if (!targetApp) return;

    if (installedApps[id]) {
      addToast({
        title: `${targetApp.name} is already installed`,
        description: 'You can launch it directly from My Apps.',
        type: 'info'
      });
      return;
    }

    if (installingMap[id]) return;

    setInstallingMap(prev => ({ ...prev, [id]: 15 }));
    
    setTimeout(() => {
      setInstallingMap(prev => ({ ...prev, [id]: 45 }));
    }, 400);

    setTimeout(() => {
      setInstallingMap(prev => ({ ...prev, [id]: 85 }));
    }, 850);

    setTimeout(() => {
      setInstallingMap(prev => {
        const next = { ...prev };
        delete next[id];
        return next;
      });

      const updated = {
        ...installedApps,
        [id]: {
          appId: id,
          installedAt: '2026-03-05T12:00:00Z',
          version: targetApp.version
        }
      };
      persistInstalled(updated);

      triggerConfetti();
      addToast({
        title: `Installed ${targetApp.name}!`,
        description: 'Ready to use. You can launch it anytime.',
        type: 'success'
      });
    }, 1300);
  };

  const uninstallApp = (id: string) => {
    const targetApp = apps.find(a => a.id === id);
    const updated = { ...installedApps };
    delete updated[id];
    persistInstalled(updated);
    addToast({
      title: `Uninstalled ${targetApp?.name || 'App'}`,
      description: 'The app has been removed from your device library.',
      type: 'info'
    });
  };

  const launchApp = (app: AppItem) => {
    if (!installedApps[app.id]) {
      installApp(app.id);
      return;
    }

    const updated = {
      ...installedApps,
      [app.id]: {
        ...installedApps[app.id],
        lastOpenedAt: '2026-03-05T12:00:00Z'
      }
    };
    persistInstalled(updated);

    setSimulatedRunningApp(app);
  };

  const publishApp = (appData: Omit<AppItem, 'id' | 'rating' | 'ratingCount' | 'reviews' | 'dateAdded'>) => {
    const slug = appData.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const id = generateUniqueId(`app-${slug}`);
    const newApp: AppItem = {
      ...appData,
      id,
      rating: 5.0,
      ratingCount: 1,
      isCustom: true,
      dateAdded: '2026-03-05',
      reviews: [
        {
          id: generateUniqueId('rev'),
          userName: appData.developer,
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
          rating: 5,
          date: 'Just now',
          comment: 'Initial release published to Marketplace!'
        }
      ]
    };

    const newApps = [newApp, ...apps];
    persistApps(newApps);
    setIsPublishOpen(false);
    triggerConfetti();
    addToast({
      title: 'App Published! 🚀',
      description: `"${newApp.name}" is now live in the Marketplace store catalogue.`,
      type: 'success'
    });
  };

  const deleteCustomApp = (id: string) => {
    const newApps = apps.filter(a => a.id !== id);
    persistApps(newApps);
    if (installedApps[id]) {
      uninstallApp(id);
    }
    addToast({
      title: 'App Deleted',
      description: 'Your custom app was removed from the store.',
      type: 'info'
    });
  };

  const addReview = (appId: string, review: Omit<AppReview, 'id' | 'date'>) => {
    const newReview: AppReview = {
      ...review,
      id: generateUniqueId('review'),
      date: 'Just now'
    };

    const newApps = apps.map(app => {
      if (app.id === appId) {
        const updatedReviews = [newReview, ...app.reviews];
        const newRatingCount = app.ratingCount + 1;
        const totalScore = (app.rating * app.ratingCount) + review.rating;
        const newRating = Number((totalScore / newRatingCount).toFixed(1));
        return {
          ...app,
          rating: newRating,
          ratingCount: newRatingCount,
          reviews: updatedReviews
        };
      }
      return app;
    });

    persistApps(newApps);
    if (selectedApp && selectedApp.id === appId) {
      setSelectedApp(newApps.find(a => a.id === appId) || null);
    }
    addToast({
      title: 'Review submitted!',
      description: 'Thank you for your rating and feedback.',
      type: 'success'
    });
  };

  const resetToDefaults = () => {
    localStorage.removeItem(APPS_STORAGE_KEY);
    localStorage.removeItem(INSTALLED_STORAGE_KEY);
    setApps(INITIAL_APPS);
    setInstalledApps({
      'notes-pro': {
        appId: 'notes-pro',
        installedAt: '2026-03-01T10:00:00Z',
        version: '4.5.2'
      }
    });
    addToast({
      title: 'Catalog Reset',
      description: 'Restored default curated apps.',
      type: 'info'
    });
  };

  return (
    <AppContext.Provider
      value={{
        apps,
        installedApps,
        installingMap,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedSort,
        setSelectedSort,
        selectedApp,
        setSelectedApp,
        isPublishOpen,
        setIsPublishOpen,
        simulatedRunningApp,
        setSimulatedRunningApp,
        activeNavTab,
        setActiveNavTab,
        installApp,
        uninstallApp,
        launchApp,
        publishApp,
        deleteCustomApp,
        addReview,
        resetToDefaults,
        toasts,
        removeToast,
        addToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
