'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-teal-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">Hollywood Massage Therapies</Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-teal-200">Home</Link>
          <Link href="/about" className="hover:text-teal-200">About</Link>
          <Link href="/services" className="hover:text-teal-200">Services</Link>
          <Link href="/blog" className="hover:text-teal-200">Blog</Link>
          <Link href="/contact" className="hover:text-teal-200">Contact</Link>
          <a href="tel:+13106945261" className="text-teal-200 font-bold">(310) 694-5261</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && <nav className="md:hidden px-4 pb-4 space-y-2"><Link href="/" className="block">Home</Link><Link href="/about" className="block">About</Link><Link href="/services" className="block">Services</Link><Link href="/blog" className="block">Blog</Link><Link href="/contact" className="block">Contact</Link></nav>}
    </header>
  );
}
