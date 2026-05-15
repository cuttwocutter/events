"use client";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import { getImageUrl } from "../lib/utils";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-lg" suppressHydrationWarning>
            <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <Image
                            src={getImageUrl("/cut_two_cutter_logo.svg")}
                            alt="Company Logo"
                            width={100}
                            height={50}
                            priority
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-xl md:text-base">
                    <Link href="/" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">Home</Link>
                    <Link href="/services" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">Services</Link>
                    <Link href="/portfolio" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">Portfolio</Link>
                    <Link href="/about" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">About</Link>
                    <Link href="/city" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">Cities</Link>
                    <Link href="/contact" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">Contact</Link>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg border-t">
                    <nav className="flex flex-col items-center py-4 space-y-4">
                        <Link href="/" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/services" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/portfolio" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200" onClick={() => setIsOpen(false)}>Portfolio</Link>
                        <Link href="/about" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="/city" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200" onClick={() => setIsOpen(false)}>Cities</Link>
                        <Link href="/contact" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}