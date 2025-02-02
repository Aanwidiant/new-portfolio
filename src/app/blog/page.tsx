import Card from "@/components/card";
import Articles from "@/data/dataArticle.json";

export default function BlogPage() {
  return (
    <main className="pt-28 pb-16 min-h-screen container">
      <section className="w-full px-4 space-y-6">
        <div className="mx-auto text-center space-y-6">
          <h2 className="w-full text-3xl font-bold text-center lg:text-4xl tracking-wider">My <span
            className="text-primary">Blogs</span></h2>
          <p className="font-medium text-md md:text-lg">Berikut ini adalah beberapa artikel yang saya tulis. Semoga menambah wawasan.</p>
        </div>
        <div className="grid grid-cols-6 gap-6 w-full">
          {Articles.map((article) => (
            <Card
              key={article.title}
              title={article.title}
              buttonText="Baca Artikel"
              link={`/blog/${article.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/,/g, "")
                .replace(/[^a-z0-9\-]/g, "")}`}
              imageSrc={article.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
