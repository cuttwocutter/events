"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { getImageUrl } from "../lib/utils";

export default function Hero() {
    return (
        <>
            <section
                className="relative min-h-[78vh] bg-cover flex items-center"
                style={{
                    backgroundImage: `url('${getImageUrl("/hero.jpeg")}')`,
                    backgroundPosition: "center 25%",
                }}
            >
                <img
                    src={getImageUrl("/hero-mobile.jpeg")}
                    alt="Hero mobile"
                    className="absolute inset-0 w-full h-full object-cover md:hidden"
                    style={{ objectPosition: "center 25%" }}
                />
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
                        Custom 3D Stall Design | Octanorm Printing | End-to-End Exhibition
                        Execution PAN India
                    </motion.p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="rounded-full bg-secondary px-8 py-3 text-primary font-semibold shadow-lg hover:bg-primary hover:text-white transition"
                        >
                            Get Free Quote
                        </Link>
                        <Link
                            href="https://wa.me/918920940789"
                            className="rounded-full bg-white/10 px-8 py-3 text-white border border-white hover:bg-white/20 transition"
                        >
                            WhatsApp Now
                        </Link>
                        <Link
                            href="/contact/brief"
                            className="rounded-full bg-white/10 px-8 py-3 text-white border border-white hover:bg-white/20 transition"
                        >
                            Fill Brief Form
                        </Link>
                    </div>

                    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
                            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
                                Trusted Delivery
                            </p>
                            <p className="mt-3 text-2xl font-semibold">GST Registered</p>
                        </div>
                        <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
                            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
                                National Reach
                            </p>
                            <p className="mt-3 text-2xl font-semibold">PAN India Network</p>
                        </div>
                        <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
                            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
                                Local Advantage
                            </p>
                            <p className="mt-3 text-2xl font-semibold">
                                Local Production Houses
                            </p>
                        </div>
                        <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
                            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
                                Full Delivery
                            </p>
                            <p className="mt-3 text-2xl font-semibold">
                                End-to-End Management
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <a
                href="https://wa.me/918920940789"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:bg-green-600"
                aria-label="Open WhatsApp chat"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                >
                    <path
                        fill="currentColor"
                        d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.56 4.13 1.62 5.88L0 24l6.34-1.66A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.2-3.48-8.52zm-8.5 17.03c-1.87 0-3.71-.5-5.33-1.44l-.38-.22-3.76.98.99-3.65-.25-.38A9.69 9.69 0 012.3 12c0-5.3 4.3-9.6 9.6-9.6 2.57 0 4.97.99 6.79 2.81a9.605 9.605 0 012.81 6.79c0 5.3-4.29 9.6-9.6 9.6zm5.3-6.17c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.65.14-.19.28-.74.95-.91 1.15-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.35.43-.52.14-.17.19-.29.29-.48.1-.19.05-.35-.02-.49-.07-.14-.65-1.57-.89-2.16-.23-.57-.47-.49-.65-.5-.17-.01-.37-.01-.57-.01-.19 0-.5.07-.76.35-.27.28-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.2 3.05.14.19 2.08 3.16 5.04 4.44.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.11-.27-.18-.56-.31z"
                    />
                </svg>
            </a>
        </>
    );
}
