import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lazypr.vercel.app"),
  title: {
    default: "lazypr - The lazy way to write pull requests",
    template: "%s | lazypr",
  },
  description:
    "Generate clean, consistent PRs from commits - powered by AI and your git history. Quick install with npm -g lazypr.",
  authors: [{ name: "Raul Carini", url: "https://www.raulcarini.dev" }],
  keywords: ["git", "pull request", "CLI", "AI", "developer tools"],
  openGraph: {
    url: new URL("https://lazypr.raulcarini.dev"),
    siteName: "lazypr",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "lazypr",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`antialiased flex flex-col min-h-screen`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
