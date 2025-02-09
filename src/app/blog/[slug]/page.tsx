'use client'
import { useEffect, useState } from 'react';
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import ShareButtons from "@/components/share-button";
import CodeBlock from "@/components/code-block";
import Calender from "@/components/icons/calender";
import Pen from "@/components/icons/pen";

interface ArticleData {
  title: string;
  image: string;
  author: string;
  created_at: string;
  content: Content[];
  tags: string[];
}

interface Content {
  _id: string;
  type: string;
  text: string;
  language?: string;
}

export default function ArticlePage() {
  const { slug } = useParams();
  const [articleContent, setArticleContent] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticleContent = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (response.ok) {
          const data: ArticleData = await response.json();
          setArticleContent(data);
        } else {
          notFound();
        }
      } catch (error) {
        console.error('Error fetching blog content:', error);
        setError('Failed to load article content.');
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchArticleContent();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!articleContent) {
    return <div>Article not found.</div>;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const shareUrl = `${siteUrl}/blog/${slug}`;
  const shareText = `Hei! Suka baca artikel teknologi? Jangan lewatkan yang satu ini: "${articleContent.title}".`;

  const renderContent = (item: Content) => {
    switch (item.type) {
      case "header":
        return (
          <h2 key={item._id} className="text-xl font-semibold lg:text-2xl">
            {item.text}
          </h2>
        );

      case "paragraph":
        return (
          <div key={item._id} className="space-y-2">
            {item.text?.split("\n").map((line, idx) => (
              <p key={`${item._id}-${idx}`} className="text-justify lg:text-lg">
                {line}
              </p>
            ))}
          </div>
        );

      case "code":
        return (
          <CodeBlock
            key={item._id}
            code={item.text || "code not found, please call developer!!"}
            language={item.language || "bash"}
          />
        );

      case "list":
        return (
          <ul key={item._id} className="space-y-2 pl-6">
            {item.text?.split("\n").map((line, idx) => (
              <li key={`${item._id}-${idx}`} className="lg:text-lg list-disc">{line}</li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <main className="pt-28">
      <div className="flex flex-wrap space-y-4">
        <div className="h-96 w-full relative rounded-lg overflow-hidden hover:shadow-xl group hover:-translate-y-2 transition-transform duration-300">
          <Image
            src={articleContent.image || "/fallback-img.png"}
            alt={`gambar ${articleContent.title}`}
            fill
            className="rounded-lg group-hover:scale-105 object-cover"
          />
        </div>

        <h1 className="w-full text-2xl font-bold text-center lg:text-3xl">
          {articleContent.title}
        </h1>

        <div className="w-full flex flex-wrap justify-center px-4 lg:text-lg gap-4">
          <div className="flex gap-2 items-center">
            <Calender className="icon-fill w-7 h-7" />
            {new Date(articleContent.created_at).toLocaleDateString("id-ID", {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>
          <div className="flex gap-2 items-center">
            <Pen className="icon-fill w-7 h-7" />{articleContent.author}
          </div>
        </div>

        <div className="w-full space-y-4">
          {articleContent.content.map((item) => renderContent(item))}
        </div>

        <p className="lg:text-lg font-medium">Tags:</p>
        <div className="w-full flex flex-wrap gap-2">
          {articleContent.tags.map((tag, index) => (
            <div
              key={`tag-${index}`}
              className="bg-primary tag-style"
            >
              {tag}
            </div>
          ))}
        </div>
        <ShareButtons shareUrl={shareUrl} shareText={shareText} />
      </div>
    </main>
  );
}