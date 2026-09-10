"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Volunteers", href: "/volunteers" },
    { name: "News", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#046A55] text-white sticky top-0 z-50 shadow-lg border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Height expanded to h-24 / h-28 to allow a massive logo presentation */}
        <div className="flex items-center justify-between h-24 sm:h-28 py-2">
          {/* Main Brand & Bold Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="FLIPE LTD Logo"
                  width={280}
                  height={100}
                  /* Scaled up significantly: h-16 (64px) on mobile, h-20 (80px) on desktop */
                  className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 font-semibold text-base">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#00E63A] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#00E63A] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-2 bg-[#046A55] border-t border-white/10 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-md text-lg font-semibold text-white hover:bg-white/10 hover:text-[#00E63A] transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
