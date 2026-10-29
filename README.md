# ME-Website — Marketplace App Store

A modern **React, Next.js (App Router), and TypeScript** web application implementing the **Marketplace App Store** design theme based on the Figma Community specification and reference artwork (`Your Apps, All in One Place.png`).

---

## 🌟 Overview & Highlights

- **Direct In-Page Integration**: The high-resolution Figma reference design is integrated directly into the website homepage with interactive hotspots.
- **Interactive Device Simulator**: Built-in iPhone mockup with real tab switching, instant search, and live download animations.
- **Full App Store Catalog**: Pre-populated with curated open-source and productivity apps (F-Droid, Notes, Sudoku Zen, RetroArch, Notion Flow, Telegram, Code Studio Web, etc.).
- **Developer Publishing Portal**: "+ Put My App" modal allowing you to publish and manage custom applications in the store with local persistence (`localStorage`).
- **In-Browser App Runners**: Launch working mini-apps right in your browser (playable Sudoku puzzle, Markdown notes scratchpad, and FOSS package explorer).

---

## 📁 Repository Structure

```
ME-Website/
├── reference/
│   └── Your Apps, All in One Place.png        # Original Figma reference artwork
├── production/                                # Next.js TypeScript Web Application
│   ├── public/
│   │   ├── reference/
│   │   │   └── your-apps-all-in-one-place.png # Production asset
│   │   └── images/
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css                    # Warm champagne/peach styling
│   │   │   ├── layout.tsx                     # Root layout & providers
│   │   │   └── page.tsx                       # Main storefront & showcase
│   │   ├── components/                        # UI components & interactive phone
│   │   ├── context/                           # App context & state
│   │   ├── data/                              # Initial curated app catalog
│   │   └── types/                             # TypeScript definitions
│   ├── package.json
│   └── tsconfig.json
├── package.json                               # Root workspace script forwarder
└── README.md
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd production
npm install
```

### 2. Start Local Development Server
From the root directory or inside `production/`:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

