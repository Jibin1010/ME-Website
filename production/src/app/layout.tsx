import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../context/AppContext";
import { ToastContainer } from "../components/ToastContainer";
import { PublishAppModal } from "../components/PublishAppModal";
import { AppDetailModal } from "../components/AppDetailModal";
import { SimulatedAppModal } from "../components/SimulatedAppModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketplace — Your Apps, All in One Place",
  description: "Discover, install and manage amazing apps and games from our marketplace — fast, simple and always up to date.",
  keywords: ["app store", "marketplace", "games", "productivity", "open source", "f-droid", "notes", "sudoku"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF3EC] text-[#121316]">
        <AppProvider>
          {children}
          <AppDetailModal />
          <PublishAppModal />
          <SimulatedAppModal />
          <ToastContainer />
        </AppProvider>
      </body>
    </html>
  );
}
