import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 shadow flex justify-between items-center bg-white border-b">
      <Link href="/"><h1 className="font-bold text-xl text-blue-600">Medical Care</h1>
</Link>

      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-600 transition">الرئيسية</Link>
        <Link href="/services" className="hover:text-blue-600 transition">الخدمات</Link>
        <Link href="/about" className="hover:text-blue-600 transition">من نحن</Link>
        <Link href="/contact" className="hover:text-blue-600 transition">تواصل</Link>
      </div>
    </nav>
  );
}
