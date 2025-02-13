'use client'
import { useEffect, useState } from 'react';
import Button from '@/components/button';
import Mail from '@/components/icons/mail';
import Download from '@/components/icons/download';
import BlobImage from '@/components/blob-image';
import Skeleton from '@/components/skeleton';

interface HeroContent {
    greeting_hero: string;
    title: string;
    description: string;
    subdescription: string;
    heroImage: string;
    cv: string;
}

interface ApiResponse {
    hero_content: HeroContent;
}

export default function Home() {
    const [heroContent, setHeroContent] = useState<HeroContent | null>(null);

    useEffect(() => {
        const fetchHeroContent = async () => {
            try {
                const response = await fetch('/api/landing');
                if (response.ok) {
                    const data: ApiResponse = await response.json();
                    setHeroContent(data.hero_content);
                } else {
                    console.error('Data not found');
                }
            } catch (error) {
                console.error('Error fetching hero content:', error);
            }
        };

        fetchHeroContent();
    }, []);

    return (
        <main className="flex pt-28 pb-16 h-fit lg:min-h-screen items-center">
            <div className="container">
                <div className="flex flex-wrap gap-y-12 md:gap-y-36 md:mb-12 lg:mb-0">
                    <div className="self-center flex flex-col gap-y-4 w-full px-4 lg:w-1/2">
                        {heroContent?.greeting_hero ? (
                            <p className="font-semibold md:text-2xl">{heroContent.greeting_hero}</p>
                        ) : (
                            <Skeleton className="w-1/3 h-8" />
                        )}
                        <h1 className="block text-4xl font-bold text-primary lg:text-5xl">
                            <span className="text-dark dark:text-light">Aan</span> <span className="text-secondary">Widianto</span>
                        </h1>
                        {heroContent?.title ? (
                            <h2 className="text-lg font-medium lg:text-2xl">{heroContent.title}</h2>
                        ) : (
                            <Skeleton className="w-3/5 h-8" />
                        )}
                        {heroContent?.description && heroContent?.subdescription ? (
                            <p className="font-light leading-relaxed lg:text-lg">
                                {heroContent.description}
                                <span className="font-semibold text-primary"> {heroContent.subdescription}</span>
                            </p>
                        ) : (
                            <div className='space-y-3'>
                                <Skeleton className="w-full h-3.5 lg:h-4" />
                                <Skeleton className="w-full h-3.5 lg:h-4" />
                                <Skeleton className="w-full h-3.5 lg:h-4" />
                                <Skeleton className="w-full h-3.5 md:hidden" />
                                <Skeleton className="w-3/4 lg:w-1/4 h-3.5 lg:h-4" />
                            </div>
                        )}
                        <div className="flex flex-wrap gap-4">
                            <Button href="/contact">
                                <Mail className="icon-fill w-6 h-6" />Hubungi Saya
                            </Button>
                            {heroContent?.cv ? (
                                <Button href={heroContent.cv} download={true}>
                                    <Download className="icon-fill w-6 h-6" />Unduh CV
                                </Button>
                            ) : (
                                <Skeleton className="w-36 h-10" />
                            )}
                        </div>
                    </div>
                    <div className="self-center w-full px-4 lg:w-1/2">
                        {heroContent?.heroImage ? (
                            <BlobImage heroImage={heroContent.heroImage} />
                        ) : (
                            <Skeleton className="w-[25rem] h-[25rem] mx-auto scale-90 md:scale-125" />
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

