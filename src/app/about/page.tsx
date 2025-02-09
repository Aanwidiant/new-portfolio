'use client'
import { useEffect, useState } from 'react';
import JourneyCard from '@/components/journey-card';

interface ApiResponse {
    about_content: AboutContent;
    edu_background: EduBackground;
    employ_history: EmployHistory;
}
interface AboutContent {
    greeting_about: string;
    about: string;
    vision: string;
    mission: string;
    motivation: string;
}
interface EduBackground {
    date: string;
    title: string;
    description: string;
    logo: string;
}
interface EmployHistory {
    date: string;
    title: string;
    job: string;
    logo: string;
    jobdesk: string[];
}

export default function AboutPage() {
    const [aboutContent, setAboutContent] = useState<AboutContent | null>(null);
    const [eduBackground, setEduBackground] = useState<EduBackground[]>([]);
    const [employHistory, setEmployHistory] = useState<EmployHistory[]>([]);


    useEffect(() => {
        const fetchHeroContent = async () => {
            try {
                const response = await fetch('/api/about');
                if (response.ok) {
                    const data: ApiResponse = await response.json();
                    setAboutContent(data.about_content);
                    setEduBackground(Array.isArray(data.edu_background) ? data.edu_background : [data.edu_background]);
                    setEmployHistory(Array.isArray(data.employ_history) ? data.employ_history : [data.employ_history]);
                } else {
                    console.error('Data not found');
                }
            } catch (error) {
                console.error('Error fetching hero content:', error);
            }
        };

        fetchHeroContent();
    }, []);

    if (!aboutContent || eduBackground.length === 0 || employHistory.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <main className="pt-28 pb-16 min-h-screen flex flex-col gap-y-12">
            <section>
                <div className="container text-justify space-y-6">
                    <div className="flex flex-wrap space-y-6">
                        <h2 className="w-full text-3xl font-bold tracking-wider text-center lg:text-4xl">About <span
                            className="text-primary">Me</span></h2>
                        <div className="w-full px-4 lg:w-1/2 space-y-4">
                            <h4 className="text-lg font-medium lg:text-xl">{aboutContent.greeting_about}</h4>
                            <p className="text-dark-etd dark:text-light-etd lg:text-lg">
                                {aboutContent.about}
                            </p>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 space-y-4">
                            <h4 className="text-lg font-medium lg:text-xl">Visi</h4>
                            <p className="text-dark-etd dark:text-light-etd lg:text-lg">{aboutContent.vision}</p>
                            <h4 className="text-lg font-medium lg:text-xl">Misi</h4>
                            <p className="text-dark-etd dark:text-light-etd lg:text-lg">{aboutContent.mission}</p>
                        </div>
                    </div>
                    <div className="px-4 space-y-4">
                        <h4 className="text-center text-lg font-medium lg:text-xl">Motivasi</h4>
                        <p className="text-dark-etd dark:text-light-etd lg:text-lg">{aboutContent.motivation}</p>
                    </div>
                </div>
            </section>
            <section className='px-4'>
                <div className="container space-y-6">
                    <h2 className="w-full mb-6 text-3xl font-bold tracking-wider text-center lg:text-4xl gap-6">My <span className="text-primary">Journey</span></h2>
                    <p className="text-justify text-dark-etd dark:text-light-etd lg:text-lg mx-2">Berikut adalah riwayat pendidikan terakhir saya, yang mencakup nama institusi, rentang tahun pendidikan, serta bidang studi yang saya ambil.</p>
                    <JourneyCard items={eduBackground} />
                    <p className="text-justify text-dark-etd dark:text-light-etd lg:text-lg mx-2">Berikut adalah rangkuman perjalanan karier saya, yang mencakup nama perusahaan, posisi yang dijabat, serta tanggung jawab yang saya laksanakan.</p>
                    <JourneyCard items={employHistory} />
                </div>
            </section>
        </main>
    );
}
