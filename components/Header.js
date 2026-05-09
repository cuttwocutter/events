"use client";
import Image from 'next/image';
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 h-full bg-white shadow-lg" suppressHydrationWarning>
            <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <Image
                            src={`${basePath}/cut_two_cutter_logo.svg`}
                            alt="Company Logo"
                            width={100}
                            height={50}
                            priority
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Navigation Section */}
                <nav className="flex items-center gap-6 text-sm md:text-base">
                    <Link href="/" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">Home</Link>
                    <Link href="/services" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">Services</Link>
                    <Link href="/portfolio" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">Portfolio</Link>
                    <Link href="/about" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">About</Link>
                    <Link href="/city" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">Cities</Link>
                    <Link href="/contact" className="text-gray-700 font-medium hover:text-secondary transition-colors duration-200">Contact</Link>
                </nav>
            </div>
        </header>
    );
}