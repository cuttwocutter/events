import Link from "next/link";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

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
                            <Link href="https://wa.me/918920940789" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:bg-slate-100 transition">
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">WhatsApp</p>
                                <p className="mt-3 font-semibold text-slate-900">+91 89209 40789</p>
                            </Link>
                            <a href="tel:+918920940789" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:bg-slate-100 transition">
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Call</p>
                                <p className="mt-3 font-semibold text-slate-900">+91 89209 40789</p>
                            </a>
                            <a href="mailto:info@example.com" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:bg-slate-100 transition">
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Email</p>
                                <p className="mt-3 font-semibold text-slate-900">contact@cuttwocutter.in</p>
                            </a>
                            <a href="/" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:bg-slate-100 transition">
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Address</p>
                                <p className="mt-3 font-semibold text-slate-900">Greater Noida West, Gaur city 1, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201318</p>
                            </a>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
