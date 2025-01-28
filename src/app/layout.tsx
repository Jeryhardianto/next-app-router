"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const app_name = process.env.NEXT_PUBLIC_APP_NAME || "";
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
        {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
      </body>
    </html>
  );
}
