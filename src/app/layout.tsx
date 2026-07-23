import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aniket Kumar | Software Developer",
  description: "Portfolio of Aniket Kumar, Software Developer & AI/ML Enthusiast.",
};

export const viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-[#0A0A0A] text-[#4AF626] selection:bg-[#00FF41] selection:text-[#0A0A0A] antialiased overflow-x-hidden font-mono">
        {children}
      </body>
    </html>
  );
}
