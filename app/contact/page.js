import Link from "next/link";
import Header from "../../components/Header";

export default function Contact() {
    return (
        <main className="bg-white text-slate-900">
            <Header />
            <section className="px-6 py-16 md:px-10 lg:px-16 max-w-6xl mx-auto">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_0.9fr] items-start">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-primary">Contact / Lead Page</p>
                        <h1 className="mt-4 text-4xl font-semibold">Let’s build your next exhibition stall together</h1>
                        <p className="mt-5 text-slate-600 max-w-2xl">Reach us by WhatsApp, phone, email or send your requirement through the form. Vendor registration inquiries are welcome.</p>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            <Link href="https://wa.me/919999999999" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:bg-slate-100 transition">
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">WhatsApp</p>
                                <p className="mt-3 font-semibold text-slate-900">+91 99999 99999</p>
                            </Link>
                            <a href="tel:+919999999999" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:bg-slate-100 transition">
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Call</p>
                                <p className="mt-3 font-semibold text-slate-900">+91 99999 99999</p>
                            </a>
                            <a href="mailto:info@example.com" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:bg-slate-100 transition">
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Email</p>
                                <p className="mt-3 font-semibold text-slate-900">info@example.com</p>
                            </a>
                            <Link href="/contact?vendor=1" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:bg-slate-100 transition">
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Vendor Registration</p>
                                <p className="mt-3 font-semibold text-slate-900">Submit your vendor inquiry</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <h2 className="text-2xl font-semibold">Enquiry Form</h2>
                        <p className="mt-3 text-slate-600">Tell us your project details and we’ll get back to you with a tailored quote.</p>

                        <form className="mt-8 grid gap-4">
                            <input placeholder="Name" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none" />
                            <input placeholder="Phone / WhatsApp" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none" />
                            <input placeholder="Email" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none" />
                            <input placeholder="Project City" className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none" />
                            <textarea placeholder="Brief requirements / stall size / event name" rows={5} className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none" />
                            <button className="rounded-full bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 transition">Submit Request</button>
                        </form>

                        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Lead Capture</p>
                            <p className="mt-3 text-slate-700">Download company profile and brief form to share your event requirements faster.</p>
                            <Link href="/contact" className="mt-5 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-primary/90 transition">Download Company Profile / Brief Form</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
