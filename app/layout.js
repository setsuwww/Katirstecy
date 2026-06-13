import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import settings from "./constants/settings.json";
import StructuredData from "./components/SEO/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = "https://katirstecy.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: settings.site.title,
    template: `%s | ${settings.site.title}`,
  },
  description: settings.site.description,
  keywords: [
    "Rifqi Ibrahim",
    "Katir",
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Web Developer",
  ],
  authors: [{ name: "Rifqi Ibrahim" }],
  creator: "Rifqi Ibrahim",
  publisher: "Rifqi Ibrahim",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: settings.site.title,
    description: settings.site.description,
    url: siteUrl,
    siteName: settings.site.title,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Katirstecu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: settings.site.title,
    description: settings.site.description,
    images: ["/og-image.png"],
    creator: "@katirrstecuuuu",
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/web.svg" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon-512.png", sizes: "512x512", type: "image/png" }],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: settings.site.title,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#3d4430",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
