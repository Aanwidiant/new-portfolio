import { notFound } from "next/navigation";
import ArticleData from "@/data/dataBlog.json";
import Image from "next/image";

interface Article {
  title: string;
  image: string;
  created_at: string;
  author: string;
  content: string[];
  header: string[];
  tags: string[];
}

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = ArticleData.find(
    (article: Article) =>
      article.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/,/g, "")
        .replace(/[^a-z0-9\-]/g, "") === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="container">
      <div className="flex flex-wrap">
        <h1 className="w-full mb-6 text-2xl font-bold text-center text-dark lg:text-3xl">{article.title}</h1>
        <div className="w-full">
          <div className="h-96 w-full relative rounded-lg overflow-hidden hover:shadow-xl group hover:-translate-y-2 transition-transform duration-300">
            <Image src={article.image} alt="article-img" layout="fill" objectFit="cover" className="rounded-lg group-hover:scale-105" />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 px-4 py-2 lg:text-lg text-base">
            <p>
              <span className="font-semibold">Publish:</span> {new Date(article.created_at).toLocaleDateString("id-ID", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}
            </p>
            <p>
              <span className="font-semibold">Author:</span> {article.author}
            </p>
          </div>
        </div>
        <div className="w-full my-2">
          {article.content.map((para, index) => (
            <div key={index}>
              <p className="mb-4 text-base text-justify text-secondry lg:text-lg indent-10">{para}</p>
              {article.header[index] && <h2 className="mb-5 text-xl font-semibold text-dark lg:text-2xl">{article.header[index]}</h2>}
            </div>
          ))}
        </div>
        <p className="my-2 lg:text-lg text-base font-semibold">tags:</p>
        <div className="w-full flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <div key={index} className="py-1 px-2 w-fit bg-primary text-white rounded-md">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
