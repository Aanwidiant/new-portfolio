"use client"
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Card from "@/components/card";

interface ApiResponse {
  blogs_content: BlogContent[];
}

interface BlogContent {
  title: string;
  image: string;
  created_at: Date;
}

type Props = {
  children: React.ReactNode;
};

export default function ArticleLayout({ children }: Props) {
  const { slug } = useParams();
  const [otherArticles, setOtherArticles] = useState<BlogContent[]>([]);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/blog");
        if (response.ok) {
          const data: ApiResponse = await response.json();
          setOtherArticles(
            data.blogs_content.filter((article) => {
              const articleSlug = createSlug(article.title);
              return articleSlug !== slug;
            })
          );
        } else {
          console.error("Data not found");
        }
      } catch (error) {
        console.error("Error fetching blog content:", error);
      }
    };

    fetchArticles();
  }, [slug]);

  if (otherArticles.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex flex-wrap pb-16">
      <main className="w-full lg:w-2/3 px-4">{children}</main>
      <aside className="w-full lg:w-1/3 lg:pt-28 px-4">
        <h2 className="text-xl font-bold my-4">Artikel Lainnya</h2>
        <div className="flex flex-col gap-y-8">
          {otherArticles.map((article, index) => (
            <Card
              key={index}
              title={article.title}
              link={`/blog/${createSlug(article.title)}`}
              imageSrc={article.image || "/fallback-img.png"}
              created_at={article.created_at}
            />
          ))}
        </div>
      </aside>
    </div>
  );
}
