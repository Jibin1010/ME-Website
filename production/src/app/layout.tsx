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
  metadataBase: new URL("https://marketplace-store.vercel.app"),
  title: {
    default: "Marketplace — Your Apps, All in One Place",
    template: "%s | Marketplace App Store",
  },
  description:
    "Discover, install and manage amazing apps and games from our next-generation marketplace — fast, simple and always up to date. Download Android APK v1.0.0.",
  keywords: [
    "marketplace",
    "marketplace app",
    "marketplace app store",
    "marketplace apk",
    "android marketplace",
    "app store web",
    "your apps all in one place",
    "f-droid",
    "open source apps",
    "mobile marketplace",
  ],
  authors: [{ name: "Marketplace Team" }],
  creator: "Marketplace",
  publisher: "Marketplace",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Marketplace — Your Apps, All in One Place",
    description:
      "Discover, install and manage amazing apps and games from our next-generation marketplace — fast, simple and always up to date. Download Android APK v1.0.0.",
    url: "https://marketplace-store.vercel.app",
    siteName: "Marketplace App Store",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/reference/your-apps-all-in-one-place.png",
        width: 1200,
        height: 630,
        alt: "Marketplace — Your Apps, All in One Place",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace — Your Apps, All in One Place",
    description:
      "Discover, install and manage amazing apps and games from our next-generation marketplace. Download Android APK v1.0.0.",
    images: ["/reference/your-apps-all-in-one-place.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Marketplace",
  operatingSystem: "Android",
  applicationCategory: "ApplicationStore",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "1280",
  },
  description:
    "Official Marketplace App Store. Discover, install and manage apps and games — fast, simple and always up to date.",
  downloadUrl:
    "https://github.com/Jibin1010/ME-Website/releases/download/v1.0.0/Marketplace-v1.0.0.apk",
  softwareVersion: "1.0.0",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                setTimeout(function() {
                  console.log(
                    "%c🛑 STOP! SECURITY WARNING",
                    "color: #FF5A28; font-size: 32px; font-weight: 900;"
                  );
                  console.log(
                    "%cThis browser console is intended for developers. Never paste external scripts or commands here. This application is zero-trust hardened; no backend secrets, cloud storage credentials, or private keys are stored or accessible on the client.",
                    "color: #121316; font-size: 13px; font-weight: 500; line-height: 1.5;"
                  );
                }, 600);
              }
            `,
          }}
        />
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
