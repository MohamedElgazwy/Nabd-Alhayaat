import Link from "next/link";
import Image from "next/image";
import logo from '../../public/images/logo.jpg'

export default function Navbar() {
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

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-gray-700 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-blue-700 transition"
          >
            الرئيسية
          </Link>

          <Link
            href="/services"
            className="hover:text-blue-700 transition"
          >
            الخدمات
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-700 transition"
          >
            من نحن
          </Link>

          <Link
            href="/contact"
            className="hover:text-blue-700 transition"
          >
            تواصل
          </Link>
        </div>

      </div>
    </nav>
  );
}
