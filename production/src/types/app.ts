export type AppCategory = 
  | 'Games'
  | 'Productivity'
  | 'Social'
  | 'Tools'
  | 'Developer'
  | 'Utilities'
  | 'Entertainment'
  | 'Design';

export interface AppReview {
  id: string;
  userName: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: AppCategory;
  iconBg: string;
  iconColor: string;
  iconName: string;
  iconUrl?: string;
  rating: number;
  ratingCount: number;
  price: string;
  isFree: boolean;
  size: string;
  version: string;
  developer: string;
  developerVerified: boolean;
  screenshots: string[];
  features: string[];
  whatsNew: string;
  tags: string[];
  isFeatured?: boolean;
  isFreshRelease?: boolean;
  isRecommended?: boolean;
  downloadUrl?: string;
  dateAdded: string;
  isCustom?: boolean;
  reviews: AppReview[];
}

export type InstallStatus = 'idle' | 'downloading' | 'installing' | 'installed';

export interface InstalledAppRecord {
  appId: string;
  installedAt: string;
  lastOpenedAt?: string;
  version: string;
  customData?: Record<string, unknown>;
}
