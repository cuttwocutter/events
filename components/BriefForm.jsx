"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "918920940789";

export default function BriefForm() {
    const [companyName, setCompanyName] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailId, setEmailId] = useState("");
    const [city, setCity] = useState("");
    const [exhibitionName, setExhibitionName] = useState("");
    const [exhibitionCityVenue, setExhibitionCityVenue] = useState("");
    const [dates, setDates] = useState("");
    const [stallNumber, setStallNumber] = useState("");
    const [pavilionHall, setPavilionHall] = useState("");
    const [stallSize, setStallSize] = useState("");
    const [stallType, setStallType] = useState("");
    const [location, setLocation] = useState("");
    const [openSides, setOpenSides] = useState("");
    const [openSideDirection, setOpenSideDirection] = useState("");
    const [budgetRange, setBudgetRange] = useState("");
    const [expectationLevel, setExpectationLevel] = useState("");
    const [priority, setPriority] = useState("");
    const [logoFilesAvailable, setLogoFilesAvailable] = useState("");
    const [brandColors, setBrandColors] = useState("");
    const [taglineKeyMessage, setTaglineKeyMessage] = useState("");
    const [referenceDesign, setReferenceDesign] = useState("");
    const [productsServices, setProductsServices] = useState("");
    const [displayType, setDisplayType] = useState("");
    const [receptionCounter, setReceptionCounter] = useState("");
    const [seatingArea, setSeatingArea] = useState("");
    const [storageRequired, setStorageRequired] = useState("");
    const [ledScreen, setLedScreen] = useState("");
    const [lightingPreference, setLightingPreference] = useState("");
    const [powerRequirement, setPowerRequirement] = useState("");
    const [specialRequests, setSpecialRequests] = useState("");
    const [designRequiredBy, setDesignRequiredBy] = useState("");
    const [finalApprovalDeadline, setFinalApprovalDeadline] = useState("");
    const [additionalInformation, setAdditionalInformation] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        if (!companyName.trim() || !contactPerson.trim() || !mobileNumber.trim()) {
            setError("Company Name, Contact Person Name, and Mobile Number are required.");
            return;
        }

        const text = `CTC Brief Form Submission:\n\n1. Company Details\nCompany Name: ${companyName.trim()}\nContact Person Name: ${contactPerson.trim()}\nMobile Number: ${mobileNumber.trim()}\nEmail ID: ${emailId.trim() || "N/A"}\nCity: ${city.trim() || "N/A"}\n\n2. Exhibition Details\nExhibition Name: ${exhibitionName.trim() || "N/A"}\nExhibition City & Venue: ${exhibitionCityVenue.trim() || "N/A"}\nDates: ${dates.trim() || "N/A"}\nStall Number: ${stallNumber.trim() || "N/A"}\nPavilion / Hall: ${pavilionHall.trim() || "N/A"}\n\n3. Stall Specifications\nStall Size (sqm/sqft): ${stallSize.trim() || "N/A"}\nStall Type (Prefab/Bare Space): ${stallType.trim() || "N/A"}\nLocation (Corner/Inline/Peninsula/Island): ${location.trim() || "N/A"}\nOpen Sides: ${openSides.trim() || "N/A"}\nOpen Side Direction: ${openSideDirection.trim() || "N/A"}\n\n4. Budget & Expectations\nApprox Budget Range: ${budgetRange.trim() || "N/A"}\nExpectation Level (Basic/Premium/Luxury): ${expectationLevel.trim() || "N/A"}\nPriority (Branding/Product Display/Meeting Space): ${priority.trim() || "N/A"}\n\n5. Branding Requirements\nLogo Files Available: ${logoFilesAvailable.trim() || "N/A"}\nBrand Colors: ${brandColors.trim() || "N/A"}\nTagline / Key Message: ${taglineKeyMessage.trim() || "N/A"}\nReference Design (if any): ${referenceDesign.trim() || "N/A"}\n\n6. Product / Service Display\nProducts / Services to Display: ${productsServices.trim() || "N/A"}\nDisplay Type (Shelves/Counters/LED/etc.): ${displayType.trim() || "N/A"}\n\n7. Functional Requirements\nReception Counter: ${receptionCounter.trim() || "N/A"}\nSeating Area: ${seatingArea.trim() || "N/A"}\nStorage Required: ${storageRequired.trim() || "N/A"}\nLED TV / Screen: ${ledScreen.trim() || "N/A"}\nLighting Preference: ${lightingPreference.trim() || "N/A"}\n\n8. Additional Requirements\nPower Requirement: ${powerRequirement.trim() || "N/A"}\nSpecial Requests: ${specialRequests.trim() || "N/A"}\n\n9. Timeline\nDesign Required By: ${designRequiredBy.trim() || "N/A"}\nFinal Approval Deadline: ${finalApprovalDeadline.trim() || "N/A"}\n\n10. Notes / Remarks\nAdditional Information: ${additionalInformation.trim() || "N/A"}`;

        const mailto = `mailto:sales@cuttwocutter.in?subject=${encodeURIComponent('CTC Brief Form Submission')}&body=${encodeURIComponent(text)}`;
        window.location.href = mailto;
    };

    const inputClass = "w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-primary outline-none";

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">CTC Brief Form</h2>
            <p className="mt-3 text-slate-600">Complete the brief and send the full response directly via WhatsApp.</p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
                <section className="grid gap-4">
                    <p className="text-lg font-semibold">1. Company Details</p>
                    <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name" className={inputClass} />
                    <input value={contactPerson} onChange={(e) => setContactPerson(e.target.value)} placeholder="Contact Person Name" className={inputClass} />
                    <input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Mobile Number" className={inputClass} />
                    <input value={emailId} onChange={(e) => setEmailId(e.target.value)} placeholder="Email ID" className={inputClass} />
                    <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className={inputClass} />
                </section>

                <section className="grid gap-4">
                    <p className="text-lg font-semibold">2. Exhibition Details</p>
                    <input value={exhibitionName} onChange={(e) => setExhibitionName(e.target.value)} placeholder="Exhibition Name" className={inputClass} />
                    <input value={exhibitionCityVenue} onChange={(e) => setExhibitionCityVenue(e.target.value)} placeholder="Exhibition City & Venue" className={inputClass} />
                    <input value={dates} onChange={(e) => setDates(e.target.value)} placeholder="Dates" className={inputClass} />
                    <input value={stallNumber} onChange={(e) => setStallNumber(e.target.value)} placeholder="Stall Number" className={inputClass} />
                    <input value={pavilionHall} onChange={(e) => setPavilionHall(e.target.value)} placeholder="Pavilion / Hall" className={inputClass} />
                </section>

                <section className="grid gap-4">
                    <p className="text-lg font-semibold">3. Stall Specifications</p>
                    <input value={stallSize} onChange={(e) => setStallSize(e.target.value)} placeholder="Stall Size (sqm/sqft)" className={inputClass} />
                    <input value={stallType} onChange={(e) => setStallType(e.target.value)} placeholder="Stall Type (Prefab/Bare Space)" className={inputClass} />
                    <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location (Corner/Inline/Peninsula/Island)" className={inputClass} />
                    <input value={openSides} onChange={(e) => setOpenSides(e.target.value)} placeholder="Open Sides" className={inputClass} />
                    <input value={openSideDirection} onChange={(e) => setOpenSideDirection(e.target.value)} placeholder="Open Side Direction" className={inputClass} />
                </section>

                <section className="grid gap-4">
                    <p className="text-lg font-semibold">4. Budget & Expectations</p>
                    <input value={budgetRange} onChange={(e) => setBudgetRange(e.target.value)} placeholder="Approx Budget Range" className={inputClass} />
                    <input value={expectationLevel} onChange={(e) => setExpectationLevel(e.target.value)} placeholder="Expectation Level (Basic/Premium/Luxury)" className={inputClass} />
                    <input value={priority} onChange={(e) => setPriority(e.target.value)} placeholder="Priority (Branding/Product Display/Meeting Space)" className={inputClass} />
                </section>

                <section className="grid gap-4">
                    <p className="text-lg font-semibold">5. Branding Requirements</p>
                    <input value={logoFilesAvailable} onChange={(e) => setLogoFilesAvailable(e.target.value)} placeholder="Logo Files Available" className={inputClass} />
                    <input value={brandColors} onChange={(e) => setBrandColors(e.target.value)} placeholder="Brand Colors" className={inputClass} />
                    <input value={taglineKeyMessage} onChange={(e) => setTaglineKeyMessage(e.target.value)} placeholder="Tagline / Key Message" className={inputClass} />
                    <input value={referenceDesign} onChange={(e) => setReferenceDesign(e.target.value)} placeholder="Reference Design (if any)" className={inputClass} />
                </section>

                <section className="grid gap-4">
                    <p className="text-lg font-semibold">6. Product / Service Display</p>
                    <input value={productsServices} onChange={(e) => setProductsServices(e.target.value)} placeholder="Products / Services to Display" className={inputClass} />
                    <input value={displayType} onChange={(e) => setDisplayType(e.target.value)} placeholder="Display Type (Shelves/Counters/LED/etc.)" className={inputClass} />
                </section>

                <section className="grid gap-4">
                    <p className="text-lg font-semibold">7. Functional Requirements</p>
                    <input value={receptionCounter} onChange={(e) => setReceptionCounter(e.target.value)} placeholder="Reception Counter" className={inputClass} />
                    <input value={seatingArea} onChange={(e) => setSeatingArea(e.target.value)} placeholder="Seating Area" className={inputClass} />
                    <input value={storageRequired} onChange={(e) => setStorageRequired(e.target.value)} placeholder="Storage Required" className={inputClass} />
                    <input value={ledScreen} onChange={(e) => setLedScreen(e.target.value)} placeholder="LED TV / Screen" className={inputClass} />
                    <input value={lightingPreference} onChange={(e) => setLightingPreference(e.target.value)} placeholder="Lighting Preference" className={inputClass} />
                </section>

                <section className="grid gap-4">
                    <p className="text-lg font-semibold">8. Additional Requirements</p>
                    <input value={powerRequirement} onChange={(e) => setPowerRequirement(e.target.value)} placeholder="Power Requirement" className={inputClass} />
                    <textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} placeholder="Special Requests" rows={3} className={inputClass} />
                </section>

                <section className="grid gap-4">
                    <p className="text-lg font-semibold">9. Timeline</p>
                    <input value={designRequiredBy} onChange={(e) => setDesignRequiredBy(e.target.value)} placeholder="Design Required By" className={inputClass} />
                    <input value={finalApprovalDeadline} onChange={(e) => setFinalApprovalDeadline(e.target.value)} placeholder="Final Approval Deadline" className={inputClass} />
                </section>

                <section className="grid gap-4">
                    <p className="text-lg font-semibold">10. Notes / Remarks</p>
                    <textarea value={additionalInformation} onChange={(e) => setAdditionalInformation(e.target.value)} placeholder="Additional Information" rows={4} className={inputClass} />
                </section>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button type="submit" className="rounded-full px-6 py-3 font-semibold bg-secondary text-primary transition hover:bg-primary/90 hover:text-white">
                    Send Brief via mail
                </button>
            </form>
        </div>
    );
}
