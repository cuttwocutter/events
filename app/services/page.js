import Header from "../../components/Header";
import { services, industries } from "../../lib/data";

export default function Services() {
    return (
        <main className="bg-white text-slate-900">
            <Header />
            <section className="px-6 py-16 md:px-10 lg:px-16 max-w-6xl mx-auto">
                <p className="text-sm uppercase tracking-[0.35em] text-[#f59e0b]">Services</p>
                <h1 className="mt-4 text-4xl font-semibold">Custom exhibition stall design, fabrication and branding</h1>
                <p className="mt-5 text-slate-600 max-w-3xl">We deliver complete exhibition booth solutions with premium 3D design, octanorm graphic printing, indoor and outdoor fabrication, and full shop branding.</p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {services.map((service) => (
                        <div key={service.title} className="rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
                            <h2 className="text-2xl font-semibold">{service.title}</h2>
                            <p className="mt-4 text-slate-600">{service.description}</p>
                            {service.items && (
                                <ul className="mt-5 list-disc list-inside space-y-3 text-slate-600">
                                    {service.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold">Industries we serve</h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry) => (
                            <div key={industry} className="rounded-2xl bg-white p-5 text-slate-700 shadow-sm">{industry}</div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
