'use client'
import { useEffect, useState } from 'react';
import LogoCarousel from '@/components/logo-carousel';
import ServiceCard from '@/components/service-card';
import Card from "@/components/card";

interface ApiResponse {
    services: Services[]
    technologies: Technologies[]
    project_individual: Project[]
    project_teams: Project[]
}
interface Services {
    _id: string
    image: string,
    title: string,
    description: string
}
interface Technologies {
    _id: string
    name: string,
    url: string,
    dark_url: string
}
interface Project {
    _id: string
    title: string,
    first_image: string,
}

export default function ExperiencePage() {
    const [servicesData, setServicesData] = useState<Services[]>([]);
    const [technologiesData, setTechnologiesData] = useState<Technologies[]>([]);
    const [indivData, setIndivData] = useState<Project[]>([]);
    const [teamsData, setTeamsData] = useState<Project[]>([]);

    useEffect(() => {
        const fetchExperienceData = async () => {
            try {
                const response = await fetch('/api/experience');
                if (response.ok) {
                    const data: ApiResponse = await response.json();
                    console.log(data)
                    setServicesData(Array.isArray(data.services) ? data.services : [data.services]);
                    setTechnologiesData(Array.isArray(data.technologies) ? data.technologies : [data.technologies]);
                    setIndivData(Array.isArray(data.project_individual) ? data.project_individual : [data.project_individual]);
                    setTeamsData(Array.isArray(data.project_teams) ? data.project_teams : [data.project_teams]);
                } else {
                    console.error('Data not found');
                }
            } catch (error) {
                console.error('Error fetching blog content:', error);
            }
        };

        fetchExperienceData();
    }, []);

    const createSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9\-]/g, "");
    };

    return (
        <main className="pt-28 pb-16 min-h-screen container space-y-16">
            <section className="w-full px-4 space-y-6">
                <div className="mx-auto text-center space-y-6">
                    <h2 className="w-full text-3xl font-bold text-center lg:text-4xl tracking-wider">My <span
                        className="text-primary">Services</span></h2>
                    <p className="font-medium md:text-lg">Berikut ini adalah layanan yang saya tawarkan untuk membantu anda.</p>
                </div>
                <div className="w-full flex flex-wrap gap-y-6 justify-center">
                    {servicesData.map((service) => (
                        <div key={service._id} className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <ServiceCard
                                image={service.image}
                                title={service.title}
                                description={service.description}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full px-4 space-y-6">
                <div className="mx-auto text-center space-y-6">
                    <h2 className="w-full text-3xl font-bold text-center lg:text-4xl tracking-wider">My <span
                        className="text-primary">Skill</span></h2>
                    <p className="font-medium md:text-lg">Berikut ini adalah teknologi yang telah saya pelajari dan gunakan.</p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <LogoCarousel technologies={technologiesData} />
                </div>
            </section>
            <section className="w-full px-4 space-y-6">
                <div className="mx-auto text-center space-y-6">
                    <h2 className="w-full text-3xl font-bold text-center lg:text-4xl tracking-wider">My <span
                        className="text-primary">Portfolio</span></h2>
                    <p className="font-medium md:text-lg">Berikut ini adalah beberapa project yang telah saya kerjakan.</p>
                </div>
                <h3 className="font-semibold text-xl md:text-2xl text-center tracking-wide text-primary">Project Individu</h3>
                <div className="grid grid-cols-6 gap-6 w-full">
                    {indivData.map((item) => (
                        <Card
                            key={item._id}
                            title={item.title}
                            buttonText="Lihat Detail"
                            link={`/project/${createSlug(item.title)}`}
                            imageSrc={item.first_image || "/fallback-img.png"}
                        />
                    ))}
                </div>
                <h3 className="font-semibold text-xl md:text-2xl text-center tracking-wide text-primary">Project Teams</h3>
                <div className="grid grid-cols-6 gap-6 w-full">
                    {teamsData.map((item) => (
                        <Card
                            key={item._id}
                            title={item.title}
                            buttonText="Lihat Detail"
                            link={`/project/${createSlug(item.title)}`}
                            imageSrc={item.first_image || "/fallback-img.png"}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
