"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const disableNavbar = ["/login", "/register"];

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children
}: RootLayoutProps) {
  const pathname = usePathname();
  const app_name = process.env.NEXT_PUBLIC_APP_NAME ?? "Next.js App";
  useEffect(() => {
    const titles: { [key: string]: string } = {
      "/": `Home | ${app_name}`,
      "/about": `About Us | ${app_name}`,
      "/contact": `Contact Us | ${app_name}`,
      "/login": `Login | ${app_name}`,
      "/register": `Register | ${app_name}`,
      "/about/profile": `Profile | ${app_name}`,
    };
    document.title = titles[pathname] || app_name;
  }, [pathname, app_name]);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          {!disableNavbar.includes(pathname) && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
