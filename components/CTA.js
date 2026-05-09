import Link from "next/link";

export default function CTA() {
    return (
        <section className="p-16 bg-black text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Let’s Build Something Great</h2>
            <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-full">
                Contact Now
            </Link>
        </section>
    );
}