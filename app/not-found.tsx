'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 sm:px-10 lg:px-20"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(-20px); }
          50% { transform: translateY(20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes scale-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="relative w-full max-w-3xl">
        {/* Animated Background Orbs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-green-300 to-green-500 rounded-full blur-3xl opacity-20" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
        <div className="absolute -bottom-20 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-20" style={{ animation: 'float 7s ease-in-out infinite 1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full blur-2xl opacity-15" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}></div>

        {/* Content Container */}
        <div className="relative z-10 text-center">
          {/* 404 Number */}
          <div className="mb-8 relative">
            <div className="text-9xl md:text-[200px] font-bold leading-none" style={{
              background: 'linear-gradient(135deg, #1D9E75 0%, #059669 50%, #0891b2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'scale-bounce 3s ease-in-out infinite'
            }}>
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-32 bg-gradient-to-r from-green-400 via-blue-400 to-green-400 rounded-full blur-3xl opacity-30" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}></div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sorry, the page you're looking for has wandered off the educational path. Let's get you back on track.
          </p>

          {/* Animated Elements */}
          <div className="flex justify-center gap-6 mb-10 text-4xl opacity-60">
            <span style={{ animation: 'float 4s ease-in-out infinite' }}>📚</span>
            <span style={{ animation: 'float 5s ease-in-out infinite 0.3s' }}>✏️</span>
            <span style={{ animation: 'float 4.5s ease-in-out infinite 0.6s' }}>🎓</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-green-800 text-white rounded-full text-base font-medium transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
            >
              Return Home
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-green-800 text-green-800 rounded-full text-base font-medium transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-green-50"
            >
              Contact Support
            </Link>
          </div>

          {/* Additional Help Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Quick Navigation:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-green-800 hover:text-green-600 text-sm font-medium transition-colors underline-offset-2 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
