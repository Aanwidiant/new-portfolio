import { notFound } from "next/navigation";
import ArticleData from "@/data/dataArticle.json";
import TagsData from "@/data/dataTags.json";
import ContentTypeData from "@/data/dataContentType.json";
import LanguageCodeData from "@/data/dataCodeLanguange.json"
import Image from "next/image";
import FallbackImage from "@/components/fallback-image"
import ShareButtons from "@/components/share-button";
import CodeBlock from "@/components/code-block";
import Calender from "@/components/icons/calender";
import Pen from "@/components/icons/pen";

interface ContentItem {
  type: string;
  text?: string;
  language?: string;
  src?: string;
  alt?: string;
}
interface Article {
  id: number;
  title: string;
  author: string;
  created_at: string;
  content: ContentItem[];
  tags: number[];
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

  function getLanguageTypeById(languageId: number) {
    const language = LanguageCodeData.codeLanguange.find(item => item.id === languageId);
    return language ? language.type : "";
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const shareUrl = `${siteUrl}/blog/${slug}`;
  const shareText = `Hei! Suka baca artikel teknologi? Jangan lewatkan yang satu ini: "${article.title}".`;

  return (
    <main className="container">
      <div className="flex flex-wrap space-y-4">
        <div className="h-96 w-full relative rounded-lg overflow-hidden hover:shadow-xl group hover:-translate-y-2 transition-transform duration-300">
          {article.image ? (
            <Image src={article.image} alt="article-img" layout="fill" objectFit="cover" className="rounded-lg group-hover:scale-105" />
          ) : (
            <FallbackImage />
          )
          }
        </div>
        <h1 className="w-full text-2xl font-bold text-center  lg:text-3xl">
          {article.title}
        </h1>

        <div className="w-full flex flex-wrap justify-center px-4 lg:text-lg gap-4">
          <div className="flex gap-2 items-center">
            <Calender className="icon-fill w-7 h-7" />
            {new Date(article.created_at).toLocaleDateString("id-ID", {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>
          <div className="flex gap-2 items-center">
            <Pen className="icon-fill w-7 h-7" />{article.author}
          </div>
        </div>

        <div className="w-full space-y-6">
          {article.content.map((item, index) => {
            const contentType = ContentTypeData.contentType?.find(
              (type) => type.id.toString() === item.type
            );

            if (!contentType) return null;

            switch (contentType.type) {
              case "header":
                return (
                  <h2
                    key={index}
                    className="text-xl font-semibold  lg:text-2xl"
                  >
                    {item.text}
                  </h2>
                );

              case "image":
                if ("src" in item && typeof item.src === "string") {
                  const imageItem = item as { src: string; alt?: string };
                  return (
                    <div key={index} className="w-full flex justify-center">
                      <div className="relative w-full max-w-2xl h-64 md:h-80 lg:h-96">
                        {item.src ? (<Image
                          src={item.src as string}
                          alt={imageItem.alt ?? "Gambar tanpa deskripsi"}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg shadow-md"
                        />
                        ) : (
                          <FallbackImage />
                        )}
                      </div>
                    </div>
                  );
                }

              case "paragraph":
                return (
                  <div key={index} className="space-y-2">
                    {item.text?.split("\n").map((line, idx) => (
                      <p key={idx} className="text-justify lg:text-lg">
                        {line}
                      </p>
                    ))}
                  </div>
                );

              case "code":
                const language = getLanguageTypeById(parseInt(item.language || "4"));
                return (
                  <CodeBlock key={index} code={item.text || "code not found, please call developer!!"} language={language} />
                );

              case "list":
                return (
                  <ul key={index} className="space-y-2 pl-6">
                    {item.text?.split("\n").map((line, idx) => (
                      <li key={idx} className="lg:text-lg list-disc">{line}</li>
                    ))}
                  </ul>
                );

              default:
                return null;
            }
          })}
        </div>

        <p className="lg:text-lg font-medium">Tags:</p>
        <div className="w-full flex flex-wrap gap-2">
          {article.tags.map((tagId, index) => {
            const tag = TagsData.tags?.find((t) => t.id === tagId);
            if (!tag) return null;

            return (
              <div
                key={index}
                className="py-1 px-2 w-fit bg-primary rounded-md"
              >
                {tag.tag}
              </div>
            );
          })}
        </div>
        <ShareButtons shareUrl={shareUrl} shareText={shareText} />
      </div>
    </main >
  );
}
