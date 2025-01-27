import Link from "next/link";
import React from "react";
import ArticleData from "@/data/dataBlog.json";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const currentArticle = ArticleData.find((article) => {
    const articleSlug = article.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/,/g, "")
      .replace(/[^a-z0-9\-]/g, "");
    return articleSlug === slug;
  });

  if (!currentArticle) {
    return {
      title: "Artikel Tidak Ditemukan - Sukses Mandiri Alka",
      description: "Artikel yang Anda cari tidak tersedia.",
      metadataBase: new URL("https://sukses-mandiri.my.id/"),
    };
  }

  return {
    title: `${currentArticle.title} - Sukses Mandiri Alka`,
    description: currentArticle.content[0] || "Temukan informasi menarik dari artikel ini.",
    openGraph: {
      title: `${currentArticle.title} - Sukses Mandiri Alka`,
      description: currentArticle.content[0] || "Informasi lengkap dan menarik tentang artikel ini.",
      url: `https://sukses-mandiri.my.id/blogs/${slug}`,
      images: `${currentArticle.image}`,
    },
  };
}

export default async function ArticleLayout({ children, params }: Props) {
  const { slug } = await params;

  const otherArticles = ArticleData.filter((article) => {
    const articleSlug = article.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/,/g, "")
      .replace(/[^a-z0-9\-]/g, "");
    return articleSlug !== slug;
  });

  return (
    <div className="flex flex-wrap pt-32 pb-16">
      <main className="w-full lg:w-2/3">{children}</main>
      <aside className="container w-full lg:w-1/3">
        <h2 className="text-xl font-bold my-4">Artikel Lainnya</h2>
        <div className="flex flex-col gap-y-8">
          {otherArticles.map((article) => (
            <Link
              href={`/blogs/${article.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/,/g, "")
                .replace(/[^a-z0-9\-]/g, "")}`}
              key={article.title}
              className="bg-secondary p-3 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
            >
              <div className="flex flex-col gap-y-2">
                <div className="h-52 w-full relative rounded-lg overflow-hidden">
                  <Image src={article.image || "/images/default-image.jpg"} alt="article-img" layout="fill" objectFit="cover" className="rounded-lg group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p>
                  {new Date(article.created_at).toLocaleDateString("id-ID", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}
