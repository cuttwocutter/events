import Header from "../../components/Header";
import { portfolioProjects } from "../../lib/data";
import { getImageUrl } from "../../lib/utils";

export default function Portfolio() {
    return (
        <main className="bg-white text-slate-900">
            <Header />
            <section className="px-6 py-16 md:px-10 lg:px-16 max-w-7xl mx-auto">
                <p className="text-sm uppercase tracking-[0.35em] text-primary">Portfolio</p>
                <h1 className="mt-4 text-4xl font-semibold">Stall design and branding projects</h1>
                <p className="mt-5 text-slate-600 max-w-3xl">Browse our featured exhibition stalls and branding installations across India.</p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolioProjects.map((project) => (
                        <div key={project.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
                            <img src={getImageUrl(project.image)} alt={project.title} className="h-72 w-full object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                {/* <p className="mt-3 text-slate-600">{project.location}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
