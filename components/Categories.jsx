import { categories } from "../lib/data";
import CategoryToggle from "./CategoryToggle";

export default function CategoryPage({ params }) {
    return (
        <section className="bg-white py-12 lg:py-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 lg:mb-16 text-center lg:text-left">
                    <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Our Core Business</h2>
                    <p className="text-3xl lg:text-5xl font-extrabold text-zinc-900 leading-tight">
                        Comprehensive solutions for every <span className="text-primary italic">physical space.</span>
                    </p>
                </div>

                <CategoryToggle categories={categories} />
            </div>
        </section>
    );

}