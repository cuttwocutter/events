"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import Projects from "../../components/Projects";
import CTA from "../../components/CTA";
import InterestingFacts from "../../components/InterestingFacts";
import { services, industries, cities, clients, exhibitions } from "../../lib/data";

export default function Page() {
    // Group exhibitions by city
    const exhibitionsByCity = exhibitions.reduce((acc, event) => {
        if (!acc[event.city]) {
            acc[event.city] = [];
        }
        acc[event.city].push(event.name);
        return acc;
    }, {});

    const [expandedCities, setExpandedCities] = useState(new Set());

    const toggleCity = (city) => {
        const newExpanded = new Set(expandedCities);
        if (newExpanded.has(city)) {
            newExpanded.delete(city);
        } else {
            newExpanded.add(city);
        }
        setExpandedCities(newExpanded);
    };

    return (
        <main className="bg-white text-slate-900">
            <Header />
            <Hero />

            <section className="py-16 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-primary">Services</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Delivering premium exhibition stalls, printing and branding solutions.</h2>
                        <p className="mt-5 text-slate-600 max-w-2xl">From custom 3D stall design to octanorm printing and shop branding, we deliver polished execution for exhibitions across India.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {services.map((service) => (
                            <div key={service.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <p className="mt-3 text-slate-600">{service.description}</p>
                                {service.items && (
                                    <ul className="mt-4 list-disc list-inside space-y-2 text-slate-600">
                                        {service.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-10 lg:px-16 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-primary">Industries</p>
                            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Industries We Serve</h2>
                        </div>
                        <Link href="/services" className="text-sm font-semibold text-[#0f172a] underline underline-offset-4">Explore full service details</Link>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry) => (
                            <div key={industry} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
                                <p className="text-xl font-semibold">{industry}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.35em] text-primary">SEO Gold</p>
                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold">City-wise stall design and fabrication</h2>
                    <p className="mt-4 text-slate-600 max-w-3xl">Local teams, national coverage and city-specific expertise for Delhi, Mumbai, Bangalore and the biggest exhibition destinations in India.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cities.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/city/${city.slug}`}
                            className="rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition hover:border-slate-300"
                        >
                            <p className="text-lg font-semibold">Stall Design and Fabricator in {city.name}</p>
                            <p className="mt-3 text-slate-600">End-to-end exhibition stall design, fabrication and branding solutions in {city.name}.</p>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="py-16 px-6 md:px-10 lg:px-16 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-[#fbbf24]">Our Edge</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">A trusted partner for exhibitions, displays and branding</h2>
                        <p className="mt-5 text-slate-300 max-w-2xl">We combine premium stall design and fabrication with reliable on-site execution, local production support and strong national delivery capabilities.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl bg-slate-800 p-6 border border-white/10">
                            <p className="text-2xl font-semibold">GST Registered</p>
                            <p className="mt-3 text-slate-400">Compliant service delivery for exhibitions across India.</p>
                        </div>
                        <div className="rounded-3xl bg-slate-800 p-6 border border-white/10">
                            <p className="text-2xl font-semibold">PAN India Network</p>
                            <p className="mt-3 text-slate-400">Local execution hubs in every major city.</p>
                        </div>
                        <div className="rounded-3xl bg-slate-800 p-6 border border-white/10">
                            <p className="text-2xl font-semibold">Local Production</p>
                            <p className="mt-3 text-slate-400">In-shop branding, vinyl and signage near your event location.</p>
                        </div>
                        <div className="rounded-3xl bg-slate-800 p-6 border border-white/10">
                            <p className="text-2xl font-semibold">End-to-End Management</p>
                            <p className="mt-3 text-slate-400">Design, fabrication, branding, installation and post-event support.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-primary">Trusted by clients</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Upcoming exhibitions</h2>
                    </div>
                </div>

                <div>
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="font-semibold text-xl">Upcoming Exhibitions</h3>
                        <div className="mt-5 space-y-4">
                            {Object.entries(exhibitionsByCity).map(([city, events]) => (
                                <div key={city} className="border-b border-slate-100 pb-4 last:border-b-0">
                                    <button
                                        onClick={() => toggleCity(city)}
                                        className="w-full flex items-center justify-between text-left font-medium text-lg text-primary mb-2 hover:text-primary/80 transition-colors"
                                    >
                                        <span>{city}</span>
                                        <span className={`transform transition-transform duration-200 ${expandedCities.has(city) ? 'rotate-180' : ''}`}>
                                            ▼
                                        </span>
                                    </button>
                                    {expandedCities.has(city) && (
                                        <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
                                            {events.map((event) => (
                                                <div key={event} className="rounded-2xl bg-slate-50 p-3 text-slate-700 text-sm">
                                                    {event}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Projects />
            <CTA />
        </main >
    );
}
