'use client'
import { useEffect, useState } from 'react';
import Button from '@/components/button';
import Mail from '@/components/icons/mail';
import Download from '@/components/icons/download';
import BlobImage from '@/components/blob-image';

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

    if (!heroContent) {
        return <div>Loading...</div>;
    }

    return (
        <main className="flex pt-28 pb-16 h-fit lg:min-h-screen items-center">
            <div className="container">
                <div className="flex flex-wrap gap-y-12 md:gap-y-36 md:mb-12 lg:mb-0">
                    <div className="self-center flex flex-col gap-y-4 w-full px-4 lg:w-1/2">
                        <p className="font-semibold md:text-2xl">{heroContent.greeting_hero}</p>
                        <h1 className="block text-4xl font-bold text-primary lg:text-5xl">
                            <span className="text-dark dark:text-light">Aan</span> <span className="text-secondary">Widianto</span>
                        </h1>
                        <h2 className="text-lg font-medium lg:text-2xl">{heroContent.title}</h2>
                        <p className="font-light leading-relaxed lg:text-lg">
                            {heroContent.description}
                            <span className="font-semibold text-primary"> {heroContent.subdescription}</span>
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button href="/contact">
                                <Mail className="icon-fill w-6 h-6" />Hubungi Saya
                            </Button>
                            <Button href={heroContent.cv} download={true}>
                                <Download className="icon-fill w-6 h-6" />Unduh CV
                            </Button>
                        </div>
                    </div>
                    <div className="self-center w-full px-4 lg:w-1/2">
                        <BlobImage heroImage={heroContent.heroImage} />
                    </div>
                </div>
            </div>
        </main>
    );
}

