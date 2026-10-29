import { AppItem } from '../types/app';

export const INITIAL_APPS: AppItem[] = [
  {
    id: 'f-droid',
    name: 'F-Droid',
    tagline: 'Free and Open Source Android App Repository',
    description: 'F-Droid is an installable catalogue of FOSS (Free and Open Source Software) applications for the Android platform. The client makes it easy to browse, install, and keep track of updates on your device.',
    category: 'Tools',
    iconBg: '#10B981',
    iconColor: '#FFFFFF',
    iconName: 'Bot',
    rating: 4.8,
    ratingCount: 14200,
    price: 'Open Source',
    isFree: true,
    size: '14.2 MB',
    version: '1.20.1',
    developer: 'F-Droid Community',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '100% Free & Open Source software catalog',
      'Zero telemetry and privacy-respecting design',
      'Automatic security signature verification',
      'Support for custom third-party repositories'
    ],
    whatsNew: 'Added background repository auto-sync and refined Dark Mode UI for OLED displays.',
    tags: ['Open Source', 'Privacy', 'FOSS', 'Tools', 'Repository'],
    isRecommended: true,
    isFeatured: true,
    dateAdded: '2026-01-10',
    reviews: [
      {
        id: 'r1',
        userName: 'Alex Rivers',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '2 days ago',
        comment: 'Essential app store for everyone who values open-source privacy. Smooth and clean.'
      },
      {
        id: 'r2',
        userName: 'Elena Rostova',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '1 week ago',
        comment: 'The updates are fast, and repository management is effortless.'
      }
    ]
  },
  {
    id: 'notes-pro',
    name: 'Notes',
    tagline: 'Minimalist note taking with Markdown & instant sync',
    description: 'Capture your thoughts, ideas, voice memos, and checklists with instant cloud backup and rich formatting. Clean, distraction-free typography that makes writing a joy.',
    category: 'Productivity',
    iconBg: '#F59E0B',
    iconColor: '#FFFFFF',
    iconName: 'FileText',
    rating: 4.9,
    ratingCount: 38900,
    price: 'Free',
    isFree: true,
    size: '28.5 MB',
    version: '4.5.2',
    developer: 'Paperweight Labs',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Full Markdown support with live preview',
      'End-to-end encrypted device synchronization',
      'Handwritten scribbles & voice note transcription',
      'Folders, tags, and nested wikis'
    ],
    whatsNew: 'Added AI summaries, table view formatting, and quick capture widget.',
    tags: ['Productivity', 'Markdown', 'Notes', 'Editor', 'Sync'],
    isRecommended: true,
    isFeatured: true,
    dateAdded: '2026-02-14',
    reviews: [
      {
        id: 'r3',
        userName: 'David Chen',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: '3 days ago',
        comment: 'The fastest note app I have ever used. Love the warm minimalist UI.'
      }
    ]
  },
  {
    id: 'sudoku-zen',
    name: 'Sudoku',
    tagline: 'Clean, elegant number puzzles & daily brain challenges',
    description: 'Play thousands of handcrafted Sudoku puzzles from beginner to grandmaster level. Featuring clean animations, smart hints that explain the logic, and zero intrusive ads.',
    category: 'Games',
    iconBg: '#3B82F6',
    iconColor: '#FFFFFF',
    iconName: 'Grid3X3',
    rating: 4.9,
    ratingCount: 22100,
    price: 'Free',
    isFree: true,
    size: '18.4 MB',
    version: '3.1.0',
    developer: 'Zenith Studios',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Over 5,000 unique levels across 5 difficulty tiers',
      'Smart pencil notes with auto-detection',
      'Daily challenges with global leaderboards',
      'Offline play with serene ambient soundtracks'
    ],
    whatsNew: 'Added Color Blind mode and new Master level tournament brackets.',
    tags: ['Games', 'Puzzle', 'Brain', 'Sudoku', 'Casual'],
    isRecommended: true,
    isFreshRelease: true,
    dateAdded: '2026-03-01',
    reviews: [
      {
        id: 'r4',
        userName: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
        rating: 5,
        date: 'Yesterday',
        comment: 'Super peaceful! The sound effects and fluid haptics are top tier.'
      }
    ]
  },
  {
    id: 'retro-arcade',
    name: 'RetroArch Arcade',
    tagline: 'All-in-one retro gaming emulation powerhouse',
    description: 'Transform your device into the ultimate retro gaming console. Run classic arcade titles, 8-bit, 16-bit, and 3D classics with customizable shaders, netplay multiplayer, and rewind.',
    category: 'Games',
    iconBg: '#EF4444',
    iconColor: '#FFFFFF',
    iconName: 'Gamepad2',
    rating: 4.7,
    ratingCount: 19800,
    price: 'Open Source',
    isFree: true,
    size: '86.0 MB',
    version: '1.18.0',
    developer: 'Libretro Project',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Supports 40+ retro console cores',
      'Seamless Bluetooth controller mapping',
      'Real-time gameplay rewinding & save states',
      'Custom CRT scanline shaders & upscale filters'
    ],
    whatsNew: 'Optimized Vulkan backend rendering and lowered input latency by 20%.',
    tags: ['Games', 'Emulator', 'Arcade', 'Retro', 'Classic'],
    isFeatured: true,
    dateAdded: '2026-02-20',
    reviews: []
  },
  {
    id: 'notion-flow',
    name: 'Notion Flow',
    tagline: 'Connected workspace for docs, wikis, and tasks',
    description: 'A unified workspace where teams and individuals think, write, and plan. Combine building blocks to craft bespoke documents, roadmaps, and knowledge bases.',
    category: 'Productivity',
    iconBg: '#18181B',
    iconColor: '#FFFFFF',
    iconName: 'Layers',
    rating: 4.8,
    ratingCount: 84200,
    price: 'Free',
    isFree: true,
    size: '64.2 MB',
    version: '2.44.0',
    developer: 'Notion Labs, Inc.',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Drag-and-drop block based architecture',
      'Relational databases with Kanban, Calendar & Table views',
      'AI writing assistant and semantic search',
      'Real-time collaborative editing'
    ],
    whatsNew: 'Introduced database button automations and upgraded offline cache.',
    tags: ['Productivity', 'Workspace', 'Docs', 'Kanban', 'Wiki'],
    isFeatured: true,
    dateAdded: '2026-01-15',
    reviews: []
  },
  {
    id: 'telegram-desktop',
    name: 'Telegram Messenger',
    tagline: 'Ultra-fast, secure & synchronized cloud messaging',
    description: 'Pure instant messaging — simple, fast, secure, and synced across all your devices. Over 900 million active users worldwide. Send media and files without size limits.',
    category: 'Social',
    iconBg: '#0284C7',
    iconColor: '#FFFFFF',
    iconName: 'Send',
    rating: 4.8,
    ratingCount: 154000,
    price: 'Free',
    isFree: true,
    size: '42.8 MB',
    version: '10.9.1',
    developer: 'Telegram FZ-LLC',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'End-to-end secret chats and self-destructing timers',
      'Unlimited group chats with up to 200,000 members',
      'Built-in bot platform and mini-apps support',
      'Full cloud sync across smartphone, tablet & computer'
    ],
    whatsNew: 'Added business profiles, quick replies, and customizable sticker animations.',
    tags: ['Social', 'Messaging', 'Chat', 'Encrypted', 'Cloud'],
    isFreshRelease: true,
    dateAdded: '2026-02-28',
    reviews: []
  },
  {
    id: 'vscode-web',
    name: 'Code Studio Web',
    tagline: 'Full-featured code editor with syntax highlighting & git',
    description: 'A lightweight and extensible code editor designed for developers. Built-in Git version control, syntax highlighting for 100+ languages, smart completions, and integrated terminal.',
    category: 'Developer',
    iconBg: '#0284C7',
    iconColor: '#FFFFFF',
    iconName: 'Code',
    rating: 4.9,
    ratingCount: 93400,
    price: 'Free',
    isFree: true,
    size: '78.1 MB',
    version: '1.92.0',
    developer: 'Studio Engineering',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'IntelliSense smart code completion',
      'Built-in Git diff and staging manager',
      'Integrated web preview and debugger',
      'Ecosystem of thousands of extensions'
    ],
    whatsNew: 'Multi-cursor enhancements and native TypeScript 5.8 support.',
    tags: ['Developer', 'Code', 'Editor', 'Git', 'TypeScript'],
    isFeatured: true,
    dateAdded: '2026-01-20',
    reviews: []
  },
  {
    id: 'figma-mirror',
    name: 'Figma Mirror',
    tagline: 'Preview designs and prototypes directly on device',
    description: 'View your Figma designs and prototypes in real-time as you edit them on desktop. Test touch interactions, animations, and typography scale on actual glass.',
    category: 'Design',
    iconBg: '#A855F7',
    iconColor: '#FFFFFF',
    iconName: 'Palette',
    rating: 4.7,
    ratingCount: 31200,
    price: 'Free',
    isFree: true,
    size: '34.0 MB',
    version: '3.12.0',
    developer: 'Figma, Inc.',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Zero-latency live device mirroring',
      'Full prototype physics and gesture handling',
      'Color space calibration support (Display P3 / sRGB)',
      'Handoff inspection and component tokens'
    ],
    whatsNew: 'Added variable mode switching and interactive spring animations.',
    tags: ['Design', 'UI/UX', 'Prototype', 'Figma', 'Mirror'],
    isFreshRelease: true,
    dateAdded: '2026-03-02',
    reviews: []
  },
  {
    id: 'proton-shield',
    name: 'Proton Shield VPN',
    tagline: 'High-speed Swiss encrypted privacy shield',
    description: 'Protect your internet privacy with zero logs, Swiss encryption laws, and high-speed WireGuard tunnels. Bypass geo-restrictions and protect your identity on public Wi-Fi.',
    category: 'Tools',
    iconBg: '#8B5CF6',
    iconColor: '#FFFFFF',
    iconName: 'ShieldCheck',
    rating: 4.8,
    ratingCount: 46700,
    price: 'Free',
    isFree: true,
    size: '22.3 MB',
    version: '5.2.1',
    developer: 'Proton AG',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Strict zero-logging policy under Swiss jurisdiction',
      'Secure Core multi-hop server routing',
      'Built-in NetShield ad-blocker and malware protection',
      '10 Gbps servers in 85+ countries'
    ],
    whatsNew: 'Added Stealth VPN protocol to bypass censorship on restricted networks.',
    tags: ['Tools', 'Security', 'Privacy', 'VPN', 'Encryption'],
    isRecommended: true,
    dateAdded: '2026-02-18',
    reviews: []
  },
  {
    id: 'raycast-desktop',
    name: 'Raycast Launcher',
    tagline: 'Supercharged desktop spotlight & automated command bar',
    description: 'An extendable launcher built for speed. Control your tools, manage your clipboard history, execute scripts, and control apps with a single hotkey.',
    category: 'Utilities',
    iconBg: '#E11D48',
    iconColor: '#FFFFFF',
    iconName: 'Zap',
    rating: 4.9,
    ratingCount: 61800,
    price: 'Free',
    isFree: true,
    size: '31.2 MB',
    version: '1.74.0',
    developer: 'Raycast Technologies',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Instant fuzzy search and action triggers',
      'Encrypted persistent clipboard manager',
      'AI assistant integration in every command',
      'Community extensions store with 1000+ plugins'
    ],
    whatsNew: 'Introduced AI quick actions and floating memo scratchpads.',
    tags: ['Utilities', 'Productivity', 'Spotlight', 'Automation', 'Launcher'],
    isFeatured: true,
    dateAdded: '2026-02-25',
    reviews: []
  },
  {
    id: 'cyber-surge',
    name: 'CyberSurge 2099',
    tagline: 'High-octane synthwave arcade runner & boss fights',
    description: 'Dash through holographic skylines, dodge laser barriers, and defeat rogue AI bosses in this pulse-pounding rhythm runner set to an electrifying original synthwave soundtrack.',
    category: 'Games',
    iconBg: '#EC4899',
    iconColor: '#FFFFFF',
    iconName: 'Sparkles',
    rating: 4.9,
    ratingCount: 18300,
    price: '$2.99',
    isFree: false,
    size: '112.5 MB',
    version: '2.0.4',
    developer: 'NeonWave Interactive',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '60 FPS buttery smooth reflex arcade gameplay',
      '24 hand-crafted synthwave tracks by Carpenter Brut & friends',
      'Global online leaderboards and time trial ghost racers',
      'Haptic feedback triggers on every beat'
    ],
    whatsNew: 'New Infinite Cyber-Rift mode with procedural neon hazards.',
    tags: ['Games', 'Action', 'Synthwave', 'Arcade', 'Runner'],
    isFreshRelease: true,
    dateAdded: '2026-03-05',
    reviews: []
  },
  {
    id: 'spotify-audio',
    name: 'Spotify Studio',
    tagline: 'High-fidelity audio streaming, podcasts & mixes',
    description: 'Listen to the songs you love and discover millions of new tracks and podcasts. Create shared playlists with friends, enjoy lossless audio streaming, and personalized discovery radar.',
    category: 'Entertainment',
    iconBg: '#22C55E',
    iconColor: '#FFFFFF',
    iconName: 'Music',
    rating: 4.7,
    ratingCount: 210000,
    price: 'Free',
    isFree: true,
    size: '58.0 MB',
    version: '8.9.22',
    developer: 'Spotify AB',
    developerVerified: true,
    screenshots: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Over 100 million tracks and 5 million podcast titles',
      'Lossless HiFi audio streaming support',
      'Personalized Discover Weekly and Daily Mixes',
      'Offline music downloads for on-the-go listening'
    ],
    whatsNew: 'Added synced song lyrics translations and AI DJ voice updates.',
    tags: ['Entertainment', 'Music', 'Streaming', 'Podcasts', 'Audio'],
    dateAdded: '2026-01-05',
    reviews: []
  }
];

export const CATEGORIES: { id: string; name: string; icon: string; bg: string; color: string; count: number }[] = [
  { id: 'All', name: 'All Apps', icon: 'LayoutGrid', bg: '#F3F4F6', color: '#111827', count: 12 },
  { id: 'Games', name: 'Games', icon: 'Gamepad2', bg: '#FEECE6', color: '#EA580C', count: 3 },
  { id: 'Productivity', name: 'Productivity', icon: 'Briefcase', bg: '#FEF3C7', color: '#D97706', count: 2 },
  { id: 'Social', name: 'Social', icon: 'Users', bg: '#E0F2FE', color: '#0284C7', count: 1 },
  { id: 'Tools', name: 'Tools', icon: 'Wrench', bg: '#E4F7EE', color: '#10B981', count: 2 },
  { id: 'Developer', name: 'Developer', icon: 'Code', bg: '#EDE9FE', color: '#7C3AED', count: 1 },
  { id: 'Utilities', name: 'Utilities', icon: 'Zap', bg: '#FFE4E6', color: '#E11D48', count: 1 },
  { id: 'Design', name: 'Design', icon: 'Palette', bg: '#FCE7F3', color: '#DB2777', count: 1 },
  { id: 'Entertainment', name: 'Entertainment', icon: 'Music', bg: '#DCFCE7', color: '#16A34A', count: 1 },
];

