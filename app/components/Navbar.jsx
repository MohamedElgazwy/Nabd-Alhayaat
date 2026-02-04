"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Nabd Alhayaat Logo"
            width={48}
            height={48}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 text-sm font-medium">
          <Link href="/" className="hover:text-blue-700 transition">
            الرئيسية
          </Link>
          <Link href="/services" className="hover:text-blue-700 transition">
            الخدمات
          </Link>
          <Link href="/about" className="hover:text-blue-700 transition">
            من نحن
          </Link>
          <Link href="/contact" className="hover:text-blue-700 transition">
            تواصل
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col px-6 py-4 gap-4 text-gray-700 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-blue-700 transition"
            >
              الرئيسية
            </Link>

            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="hover:text-blue-700 transition"
            >
              الخدمات
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="hover:text-blue-700 transition"
            >
              من نحن
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-blue-700 transition"
            >
              تواصل
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
