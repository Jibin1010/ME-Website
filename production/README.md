# Marketplace — Your Apps, All in One Place

A modern, high-performance **React, Next.js (App Router), and TypeScript** web application implementing the **Marketplace App Store** design theme based on the Figma Community specification and reference artwork (`Your Apps, All in One Place.png`).

---

## 🌟 Key Features

1. **Figma Spec High-Fidelity Theming**:
   - Signature warm champagne & peach luxury aesthetic (`#FAF3EC`, `#FFF9F5`).
   - "Your Apps, **All in One** Place" hero typography with vibrant coral-orange gradient.
   - The 4 core feature cards:
     - 🎮 **Games**: "Play amazing games" (`#FEECE5`)
     - 🗂️ **Apps**: "Productivity, tools and more" (`#E2F8EE`)
     - ⭐ **Fresh Releases**: "New apps regularly" (`#E0F2FE`)
     - 🛡️ **Safe & Easy**: "Install without hassle" (`#F3E8FF`)
   - Primary dark pill CTA button: `Explore Marketplace →`.
   - 3D pedestal stage with floating ambient spheres and glossy lighting.

2. **Interactive Phone Simulator**:
   - Titanium device frame with Dynamic Island and real status bar (`9:41`, Wi-Fi, battery).
   - Real working in-device navigation:
     - **Home**: "Hello, Timothy", "Welcome to your marketplace", live search bar, "Discover the Beauty of Apps" golden banner with floating badges, and "Recommended For You" cards (F-Droid, Notes, Sudoku).
     - **Categories**: Browse apps by category.
     - **Search**: Live instant search within the phone.
     - **My Apps**: Shows installed apps with 1-click launch.
     - Working **Get / Open** button with real download progress animations.

3. **Complete Web App Store ("Where I can put my app store")**:
   - **Curated App Catalog**: Pre-populated with high quality apps across Games, Productivity, Social, Tools, Developer, Utilities, Entertainment, and Design (including F-Droid, Notes, Sudoku Zen, RetroArch, Notion Flow, Telegram, VS Code Web, Figma Mirror, Proton VPN, Raycast, and more).
   - **Filter & Sort**: Instant fuzzy search, category filter pills with counts, sorting by Recommended, Top Rated, Most Popular, Newest Releases, and Alphabetical.
   - **Interactive 1-Click Install**: Realistic simulated download with progress bar, confetti celebration (`canvas-confetti`), and persistent library saved in `localStorage`.
   - **App Detail Drawer / Modal**: Rich screenshots carousel, full description, highlight bullet points, version changelog, developer info, and user reviews with a live "Write a Review" form.
   - **Developer "Put My App" Portal**: Full publication modal allowing you to add custom apps to the store with custom icon colors, Lucide icon symbols, categories, versioning, pricing, and features.
   - **Simulated App Launcher**: When launching installed apps, test interactive mini-apps directly in browser (e.g. real working Markdown Notes app, playable Sudoku Zen puzzle, and F-Droid FOSS package explorer).
   - **Figma Design Comparison**: Built-in side-by-side verification modal featuring the original reference image copied from `reference/`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with v22)
- npm

### Installation & Development

```bash
cd production

# Install dependencies (already installed)
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
cd production

# Build the optimized production application
npm run build

# Start the production server
npm start
```

---

## 📁 Project Structure

```
production/
├── public/
│   ├── reference/
│   │   └── your-apps-all-in-one-place.png   # Copied reference image
│   └── images/
│       └── hero-reference.png               # Copied reference image
├── reference/
│   └── Your Apps, All in One Place.png       # Copied original file
├── src/
│   ├── app/
│   │   ├── globals.css                       # Warm pastel styling & animations
│   │   ├── layout.tsx                        # Root layout & providers
│   │   └── page.tsx                          # Main store page & showcase
│   ├── components/
│   │   ├── AppCatalog.tsx                    # Complete web app store catalog
│   │   ├── AppDetailModal.tsx                # Detailed app view & reviews
│   │   ├── AppIconRenderer.tsx               # Dynamic Lucide icon renderer
│   │   ├── Footer.tsx                        # Store footer & quick actions
│   │   ├── HeroSection.tsx                   # Figma spec hero presentation
│   │   ├── InteractivePhone.tsx              # Interactive iPhone device simulator
│   │   ├── MyAppsView.tsx                    # Installed apps manager & launcher
│   │   ├── Navbar.tsx                        # Header navigation & search
│   │   ├── PublishAppModal.tsx               # Portal to put new apps into the store
│   │   ├── ReferenceCompareModal.tsx         # Figma reference comparison & checklist
│   │   ├── SimulatedAppModal.tsx             # Interactive sandbox app runner
│   │   └── ToastContainer.tsx                # Toast alerts
│   ├── context/
│   │   └── AppContext.tsx                    # Global state & localStorage persistence
│   ├── data/
│   │   └── initialApps.ts                    # Curated initial app catalogue
│   └── types/
│       └── app.ts                            # TypeScript interfaces & types
├── package.json
└── tsconfig.json
```
