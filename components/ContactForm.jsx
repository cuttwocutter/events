"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "918920940789";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        if (!name.trim() || !phone.trim() || !message.trim()) {
            setError("Please enter your name, phone/WhatsApp number and a brief requirement.");
            return;
        }

        const text = `Hello! I would like to enquire about an exhibition stall.\n\nName: ${name.trim()}\nPhone/WhatsApp: ${phone.trim()}\nEmail: ${email.trim() || "N/A"}\nCity: ${city.trim() || "N/A"}\nRequirements: ${message.trim()}`;
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Enquiry Form</h2>
            <p className="mt-3 text-slate-600">Tell us your project details and we’ll get back to you with a tailored quote over WhatsApp.</p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none"
                />
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone / WhatsApp"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none"
                />
                <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Project City"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none"
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Brief requirements / stall size / event name"
                    rows={5}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none"
                />
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button type="submit" className="rounded-full px-6 py-3 font-semibold bg-secondary text-primary transition hover:bg-primary/90 hover:text-white">
                    Send via WhatsApp
                </button>
            </form>
        </div>
    );
}
