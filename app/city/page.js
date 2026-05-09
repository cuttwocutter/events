import Header from "../../components/Header";
import Link from "next/link";
import { cities } from "../../lib/data";

export default function CityIndex() {
    return (
        <main className="bg-white text-slate-900">
            <Header />
            <section className="px-6 py-16 md:px-10 lg:px-16 max-w-7xl mx-auto">
                <p className="text-sm uppercase tracking-[0.35em] text-[#f59e0b]">Cities</p>
                <h1 className="mt-4 text-4xl font-semibold">City-specific stall design and fabrication</h1>
                <p className="mt-5 text-slate-600 max-w-3xl">Find dedicated exhibition stall services in these major Indian cities.</p>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cities.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/city/${city.slug}`}
                            className="rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-semibold">{city.name}</h2>
                            <p className="mt-3 text-slate-600">Exhibition stall design, fabrication and branding in {city.name}.</p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
