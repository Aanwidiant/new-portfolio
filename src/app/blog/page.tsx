'use client'
import { useEffect, useState } from 'react';
import Card from "@/components/card";

interface ApiResponse {
  blogs_content: BlogContent;
}

interface BlogContent {
  title: string,
  image: string,
  created_at: Date,
}

export default function BlogPage() {
  const [blogContent, setBlogContent] = useState<BlogContent[]>([]);

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const response = await fetch('/api/blog');
        if (response.ok) {
          const data: ApiResponse = await response.json();
          console.log(data)
          setBlogContent(Array.isArray(data.blogs_content) ? data.blogs_content : [data.blogs_content]);
        } else {
          console.error('Data not found');
        }
      } catch (error) {
        console.error('Error fetching blog content:', error);
      }
    };

    fetchBlogContent();
  }, []);

  if (blogContent.length === 0) {
    return <div>Loading...</div>;
  }

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
  };

  return (
    <main className="pt-28 pb-16 min-h-screen container">
      <section className="w-full px-4 space-y-6">
        <div className="mx-auto text-center space-y-6">
          <h2 className="w-full text-3xl font-bold text-center lg:text-4xl tracking-wider">My <span
            className="text-primary">Blogs</span></h2>
          <p className="font-medium md:text-lg">Berikut ini adalah beberapa artikel yang saya tulis. Semoga menambah wawasan.</p>
        </div>
        <div className="grid grid-cols-6 gap-6 w-full">
          {blogContent.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              buttonText="Baca Artikel"
              link={`/blog/${createSlug(item.title)}`}
              imageSrc={item.image || "/fallback-img.png"}
              created_at={item.created_at}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
