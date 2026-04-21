import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu, Merriweather } from "next/font/google";
import "./globals.css";
import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EdHuman Resource Development and Research Center Pvt. Ltd.",
  description: "Empowering Education through Research, Training, and Digital Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="relative bg-white overflow-x-hidden">
        <TopBar />
        <Navbar />

        {/* GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100"></div>

          {/* Blobs */}
          <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-green-300 opacity-25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-green-400 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] left-[60%] w-[250px] h-[250px] bg-green-200 opacity-25 rounded-full blur-2xl"></div>
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
