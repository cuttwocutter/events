import Header from "../../components/Header";
import { industries } from "../../lib/data";

export default function About() {
    return (
        <main className="bg-white text-slate-900">
            <Header />
            <section className="px-6 py-16 md:px-10 lg:px-16 max-w-6xl mx-auto">
                <p className="text-sm uppercase tracking-[0.35em] text-primary">About Us</p>
                <h1 className="mt-4 text-4xl font-semibold">A PAN India exhibition stall design and fabrication partner</h1>
                <p className="mt-5 text-slate-600 max-w-3xl">GST registered, backed by local production houses, and experienced in end-to-end exhibition stall execution from design to installation.</p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold">GST Registered</h2>
                        <p className="mt-3 text-slate-600">Reliable service delivery with full compliance for exhibitions and retail branding.</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold">PAN India Network</h2>
                        <p className="mt-3 text-slate-600">Local production and installation teams in every major city.</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold">Local Production Houses</h2>
                        <p className="mt-3 text-slate-600">Faster delivery through nearby workshops and sign fabrication units.</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold">End-to-End Management</h2>
                        <p className="mt-3 text-slate-600">One partner for design, fabrication, printing, installation and breakdown.</p>
                    </div>
                </div>

                <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold">Our work spans exhibitions, retail and corporate branding</h2>
                    <p className="mt-4 text-slate-600">We specialize in premium stall spaces, octanorm printing, vinyl branding, glow signs, ACP boards, 3D letters, 2D letters and clip-on lit displays.</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {industries.map((industry) => (
                            <div key={industry} className="rounded-2xl bg-white p-5 text-slate-700 shadow-sm">{industry}</div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
