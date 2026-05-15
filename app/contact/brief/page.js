import Header from "../../../components/Header";
import BriefForm from "../../../components/BriefForm";

export default function ContactBrief() {
    return (
        <main className="bg-white text-slate-900">
            <Header />
            <section className="px-6 py-16 md:px-10 lg:px-16 max-w-6xl mx-auto">
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm uppercase tracking-[0.35em] text-primary">Contact / CTC Brief</p>
                    <h1 className="mt-4 text-4xl font-semibold">CTC Brief Form</h1>
                    <p className="mt-5 text-slate-600">Please complete the brief below and submit to send the full response directly to WhatsApp.</p>
                </div>

                <div className="mt-10">
                    <BriefForm />
                </div>
            </section>
        </main>
    );
}
