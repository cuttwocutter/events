"use client";

import { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function CategoryToggle({ categories }) {
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* --- CATEGORY SELECTOR --- */}
            {/* Mobile: Horizontal Scroll | Desktop: Vertical List */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar space-x-4 lg:space-x-0 lg:space-y-2 lg:w-1/3">
                {categories.map((cat) => (
                    <button
                        key={cat.slug}
                        onClick={() => setActiveTab(cat)}
                        onMouseEnter={() => { if (window.innerWidth > 1024) setActiveTab(cat) }}
                        className={`flex-shrink-0 lg:flex items-center justify-between p-4 lg:p-5 rounded-xl transition-all duration-300 text-left border-b-2 lg:border-b-0 lg:border-l-4 whitespace-nowrap lg:whitespace-normal ${activeTab.slug === cat.slug
                            ? "bg-black lg:bg-gray-100 border-secondary text-white lg:text-black"
                            : "bg-gray-50 lg:bg-transparent border-transparent text-gray-500 hover:bg-gray-100"
                            }`}
                    >
                        <span className="text-sm lg:text-xl font-semibold tracking-tight">
                            {cat.name}
                        </span>
                        <ChevronRight className={`hidden lg:block w-5 h-5 transition-transform ${activeTab.slug === cat.slug ? "translate-x-1" : "opacity-0"}`} />
                    </button>
                ))}
            </div>

            {/* --- CONTENT DISPLAY --- */}
            <div className="w-full lg:w-2/3 bg-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-12 min-h-[350px] flex flex-col justify-between transition-all duration-500 border border-gray-100">
                <div key={activeTab.slug} className="animate-in fade-in slide-in-from-bottom-2 lg:slide-in-from-right-4 duration-500">
                    <span className="text-[10px] lg:text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 block">
                        Specialization / {activeTab.name}
                    </span>
                    <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
                        Expert {activeTab.name} <span className="text-secondary">Services</span>
                    </h3>

                    {activeTab.sub.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                            {activeTab.sub.map((subItem, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-white p-3 lg:p-4 rounded-lg shadow-sm border border-gray-100">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                                    <span className="text-sm lg:text-gray-700 font-medium">{subItem}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic text-sm lg:text-base">Customized solutions designed for your specific brand requirements.</p>
                    )}
                </div>

                <button className="mt-8 lg:mt-10 flex items-center justify-center space-x-2 w-full lg:w-fit px-8 py-4 bg-secondary text-white rounded-xl lg:rounded-full font-semibold hover:bg-zinc-800 transition-all active:scale-95">
                    <span>Explore {activeTab.name}</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

        </div>
    );
}