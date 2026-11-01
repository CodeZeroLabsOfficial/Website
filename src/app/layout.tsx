import type { Metadata } from "next";
import { Jost, Roboto } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Depesch — Apps that move your business forward",
  description:
    "Depesch builds premium mobile and web platforms for chauffeur services, medical clinics, and gyms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-mist font-body">
        {children}
      </body>
    </html>
  );
}
