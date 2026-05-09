import Header from "../../../components/Header";
import { categories } from "../../../lib/data";

// This function is REQUIRED for static export (GitHub Pages)
// It tells Next.js which dynamic routes to generate at build time
export async function generateStaticParams() {
    return categories.map((cat) => ({
        slug: cat.slug,
    }));
}

export default async function CategoryPage({ params }) {
    // We await params to ensure compatibility with Next.js 15
    const { slug } = await params;

    const cat = categories.find((c) => c.slug === slug);

    if (!cat) {
        return <div className="p-10">Category Not Found</div>;
    }

    return (
        <main className="p-10">
            <Header />
            <h1 className="text-4xl font-bold mb-4">{cat.name}</h1>
            <p className="mb-6 text-gray-600">
                High-quality solutions for {cat.name.toLowerCase()} projects.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {cat.sub.map((s) => (
                    <div key={s} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-lg">{s}</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Detailed description about {s.toLowerCase()} services.
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}