import { portfolioProjects } from "../lib/data";

export default function Projects() {
    return (
        <section className="py-16 px-6 md:px-10 lg:px-16 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.35em] text-[#f59e0b]">Portfolio</p>
                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Featured Exhibition Stall Projects</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolioProjects.map((project) => (
                        <div key={project.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition">
                            <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="mt-3 text-slate-600">{project.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
