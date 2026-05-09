"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Hero() {
    return (
        <section
            className="relative min-h-[78vh] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url('${basePath}/1.jpg')` }}
        >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="uppercase tracking-[0.35em] text-sm text-slate-300 mb-4"
                >
                    Premium Exhibition Stall Solutions PAN India
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
                >
                    Premium Exhibition Stall Design, Fabrication & Branding Across India
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 max-w-3xl text-lg text-slate-200"
                >
                    Custom 3D Stall Design | Octanorm Printing | End-to-End Exhibition Execution PAN India
                </motion.p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <Link href="/contact" className="rounded-full bg-[#ffcc00] px-8 py-3 text-black font-semibold shadow-lg hover:bg-[#f0b600] transition">
                        Get Free Quote
                    </Link>
                    <Link href="/portfolio" className="rounded-full border border-white px-8 py-3 text-white hover:bg-white/10 transition">
                        View Portfolio
                    </Link>
                    <Link href="https://wa.me/919999999999" className="rounded-full bg-white/10 px-8 py-3 text-white border border-white hover:bg-white/20 transition">
                        WhatsApp Now
                    </Link>
                </div>

                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
                        <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Trusted Delivery</p>
                        <p className="mt-3 text-2xl font-semibold">GST Registered</p>
                    </div>
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
                        <p className="text-sm uppercase tracking-[0.25em] text-slate-300">National Reach</p>
                        <p className="mt-3 text-2xl font-semibold">PAN India Network</p>
                    </div>
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
                        <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Local Advantage</p>
                        <p className="mt-3 text-2xl font-semibold">Local Production Houses</p>
                    </div>
                    <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
                        <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Full Delivery</p>
                        <p className="mt-3 text-2xl font-semibold">End-to-End Management</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
