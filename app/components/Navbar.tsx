"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Programs", href: "/programs" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <nav className="relative backdrop-blur-xl border-b border-gray-100 shadow-lg sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[70px]">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0 max-w-[70%]">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
            <Image src="/logo.png" alt="EduHuman Logo" width={40} height={40} />
          </div>
          <div
            className="flex flex-col leading-tight overflow-hidden"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            <span className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] text-gray-900 truncate">
              Edu<em className="text-[#1D9E75] not-italic">Human</em>
            </span>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500 uppercase tracking-wider truncate">
              Resource Development and Research Center Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul
          className="hidden lg:flex items-center gap-2"
          style={{ fontFamily: "Ubuntu, sans-serif" }}
        >
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`px-3 py-2 text-[14px] rounded-md transition ${
                    isActive
                      ? "bg-[#E1F5EE] text-[#085041] font-medium"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            className="text-sm text-black border-2 rounded-md px-4 py-2 hover:bg-[#1D3D30] hover:text-white transition"
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            Login Portal
          </button>
          <button
            className="text-sm text-white bg-[#0C1F1A] rounded-md px-4 py-2 hover:bg-[#1D3D30] transition"
            style={{ fontFamily: "Ubuntu, sans-serif" }}
          >
            Enquire →
          </button>
        </div>

        {/* Mobile Toggle — redesigned hamburger */}
        <button
          className={`lg:hidden relative z-[60] w-10 h-10 rounded-[10px] border flex items-center justify-center transition-all duration-200 ${
            menuOpen
              ? "bg-[#0C1F1A] border-[#0C1F1A]"
              : "bg-white border-gray-200 hover:bg-gray-50"
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-[4.5px] items-end">
            <span
              className={`block h-[1.5px] rounded-full transition-all duration-[250ms] origin-center ${
                menuOpen
                  ? "w-4 bg-white translate-y-[6px] rotate-45"
                  : "w-4 bg-gray-800"
              }`}
            />
            <span
              className={`block h-[1.5px] rounded-full transition-all duration-[250ms] ${
                menuOpen
                  ? "w-3 bg-white opacity-0 scale-x-0"
                  : "w-3 bg-gray-800"
              }`}
            />
            <span
              className={`block h-[1.5px] rounded-full transition-all duration-[250ms] origin-center ${
                menuOpen
                  ? "w-4 bg-white -translate-y-[6px] -rotate-45"
                  : "w-4 bg-gray-800"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute top-[70px] left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        style={{ fontFamily: "Ubuntu, sans-serif" }}
      >
        <div className="mx-3 mb-3 mt-2 rounded-2xl bg-white border border-gray-100 shadow-2xl overflow-hidden">

          {/* Nav links — 2 column grid */}
          <div className="p-3 grid grid-cols-1 gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center gap-2 py-3 px-4 rounded-xl text-[13.5px] font-medium transition-all ${
                    isActive
                      ? "bg-[#E1F5EE] text-[#085041]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] shrink-0" />
                  )}
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="mx-3 border-t border-gray-100" />

          {/* CTA row */}
          <div className="p-3 flex gap-2">
            <button className="flex-1 py-3 text-[13px] font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
              Login Portal
            </button>
            <button className="flex-1 py-3 text-[13px] font-medium text-white bg-[#0C1F1A] rounded-xl hover:bg-[#1D3D30] transition">
              Enquire Now →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
