import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { AppShell } from "@/components/AppShell";
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
  title: "Depesch — Dispatch Management for Chauffeurs",
  description:
    "A white-glove booking and fleet platform for executive car services: real-time dispatch, flight tracking, account billing, and a five-star ride experience.",
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
