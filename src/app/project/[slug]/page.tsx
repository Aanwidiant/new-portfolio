'use client'
import { useEffect, useState } from 'react';
import { notFound, useParams } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Button from "@/components/button";
import Lock from '@/components/icons/lock';
import ExternalLink from '@/components/icons/external-link';
import Unavailable from '@/components/icons/unavailable';
import ImageWithFallback from "@/components/image-with-fallback";

interface Project {
  title: string;
  description: string;
  contribution?: string[];
  features?: string[];
  technologies: TechData[];
  images: string[];
  links: LinkData;
}

interface TechData {
  _id: number;
  name: string;
  url: string;
  dark_url?: string;
}

interface LinkData {
  production: string;
  repository: string;
}

export default function DetailProjectPage() {
  const { slug } = useParams();
  const [projectContent, setProjectContent] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectContent = async () => {
      try {
        const response = await fetch(`/api/project/${slug}`);
        if (response.ok) {
          const data: Project = await response.json();
          setProjectContent(data);
        } else {
          notFound();
        }
      } catch (error) {
        console.error('Error fetching project content:', error);
        setError('Failed to load project content.');
        notFound();
      } finally {
        setLoading(false);
      }
    };
    fetchProjectContent();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!projectContent) {
    return <div>Project not found.</div>;
  }

  return (
    <main>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 md:col-span-3">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            loop
            className="relative rounded-lg overflow-hidden group cursor-pointer hover:shadow-md hover:-translate-y-1 transition-transform duration-300 hover:shadow-dark/20 dark:hover:shadow-primary/50"
          >
            {projectContent.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-[5/3]">
                  <ImageWithFallback
                    src={image}
                    alt={`Image ${index + 1} of ${projectContent.title}`}
                    fill
                    className='rounded-lg'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-5 md:col-span-2 gap-2">
          <h1 className="text-xl font-bold lg:text-2xl py-2">{projectContent.title}</h1>
          <div className="flex flex-col gap-y-3">
            <p className="text-justify lg:text-lg">{projectContent.description}</p>
            <h2 className="text-lg md:text-xl font-medium">Teknologi yang digunakan:</h2>
            <div className="flex flex-wrap gap-4">
              {projectContent.technologies?.map((tech, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ImageWithFallback
                    src={tech.url}
                    alt={tech.name}
                    width={28}
                    height={28}
                    className="object-contain"
                    loading="lazy"
                  />
                  <span className='lg:text-lg'>{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className='flex gap-3 items-center'>
                <h2 className="text-lg font-medium">Website Link:</h2>
                {projectContent.links.production ? (
                  <Button href={projectContent.links.production}><ExternalLink className="icon-fill w-6 h-6" />Link</Button>
                ) : (
                  <div className="tag-style bg-muted flex gap-x-2">
                    <Unavailable className="icon-fill w-6 h-6" />Unavailable
                  </div>
                )}
              </div>
              <div className='flex gap-3 items-center'>
                <h2 className="text-lg font-medium">Repository:</h2>
                {projectContent.links.repository !== "private" ? (
                  <Button href={projectContent.links.repository}><ExternalLink className="icon-fill w-6 h-6" />Link</Button>
                ) : (
                  <div className="tag-style bg-muted flex gap-x-2">
                    <Lock className="icon-fill w-6 h-6" />Private
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {projectContent.features && (<div className="col-span-5 space-y-2">
          <h2 className="text-lg md:text-xl font-semibold">Feature</h2>
          <ul className="list-disc pl-5 space-y-2 lg:text-lg">
            {projectContent.features.map((feature, index) => (
              <li key={index} className="text-justify">{feature}</li>
            ))}
          </ul>
        </div>)}
        {projectContent.contribution && (<div className="col-span-5 space-y-2">
          <h2 className="text-lg md:text-xl font-medium">Kontribusi</h2>
          <ul className="list-disc pl-5 space-y-2 lg:text-lg">
            {projectContent.contribution.map((contribution, index) => (
              <li key={index} className="text-justify">{contribution}</li>
            ))}
          </ul>
        </div>)}
      </div>
    </main >
  );
}
