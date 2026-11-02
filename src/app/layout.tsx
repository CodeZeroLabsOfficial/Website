import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { AppShell } from "@/components/chrome/AppShell";
import { meta } from "@/content/pages";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: meta.home.title,
  description: meta.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-mist font-body">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
