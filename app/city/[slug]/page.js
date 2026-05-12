import Header from "../../../components/Header";
import { cities } from "../../../lib/data";

export async function generateStaticParams() {
    return cities.map((city) => ({ slug: city.slug }));
}

export default async function CityPage({ params }) {
    const { slug } = await params;
    const city = cities.find((item) => item.slug === slug);

    if (!city) {
        return (
            <main className="p-10 bg-white text-slate-900">
                <Header />
                <h1 className="text-3xl font-semibold">City not found</h1>
                <p className="mt-4 text-slate-600">Please choose a valid city from the cities page.</p>
            </main>
        );
    }

    return (
        <main className="bg-white text-slate-900">
            <Header />
            <section className="px-6 py-16 md:px-10 lg:px-16 max-w-6xl mx-auto">
                <p className="text-sm uppercase tracking-[0.35em] text-primary">{city.name}</p>
                <h1 className="mt-4 text-4xl font-semibold">Stall Design and Fabricator in {city.name}</h1>
                <p className="mt-5 text-slate-600 max-w-3xl">Local exhibition stall design, fabrication and branding services tailored for {city.name}'s busiest trade shows and events.</p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold">Custom 3D Stall Design</h2>
                        <p className="mt-4 text-slate-600">Designs that reflect your brand, product and exhibition goals with immersive 3D visuals.</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold">Fabrication & Installation</h2>
                        <p className="mt-4 text-slate-600">Indoor and outdoor stall build with dependable installation support in {city.name}.</p>
                    </div>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold">Octanorm Printing</h2>
                        <p className="mt-4 text-slate-600">Vivid octanorm graphics for backwalls, display panels and branded environments.</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold">On-site Branding</h2>
                        <p className="mt-4 text-slate-600">Vinyl printing, non-lit boards, glow signs, ACP panels, 3D letters and clip-on lighting.</p>
                    </div>
                </div>

                <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold">Ready to book your {city.name} exhibition stall?</h2>
                    <p className="mt-4 text-slate-600">Contact our {city.name} team for a fast quote, local production support and end-to-end stall delivery.</p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/919999999999" className="rounded-full bg-[#ffcc00] px-8 py-3 text-black font-semibold">WhatsApp Now</a>
                        <a href="tel:+919999999999" className="rounded-full border border-slate-300 px-8 py-3 text-slate-900">Call Us</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
