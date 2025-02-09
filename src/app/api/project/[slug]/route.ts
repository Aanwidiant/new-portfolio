import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Project, TechData } from '@/interfaces';

export async function GET(
    req: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio_db');

        const { slug } = params;

        const techCollection = await db
            .collection<TechData>('technologies')
            .find({})
            .toArray();

        const searchTitleFromSlug = (slug: string) => {
            return slug.replace(/-/g, ' ').replace(/[^a-z0-9\s]/g, '');
        };

        const individualProject = await db
            .collection<Project>('individualProject')
            .findOne({
                title: {
                    $regex: new RegExp(`^${searchTitleFromSlug(slug)}$`, 'i'),
                },
            });

        const teamsProject = await db
            .collection<Project>('teamsProject')
            .findOne({
                title: {
                    $regex: new RegExp(`^${searchTitleFromSlug(slug)}$`, 'i'),
                },
            });

        if (individualProject) {
            const enrichedTech = individualProject.technologies
                .map((techId) => {
                    const techData = techCollection.find(
                        (t) => t._id.toString() === techId.toString()
                    );
                    return techData
                        ? {
                              name: techData.name,
                              url: techData.url,
                              dark_url: techData.dark_url,
                          }
                        : null;
                })
                .filter(
                    (
                        tech
                    ): tech is {
                        name: string;
                        url: string;
                        dark_url: string;
                    } => tech !== null
                );

            const responseData = {
                title: individualProject.title,
                description: individualProject.description,
                features: individualProject.features,
                technologies: enrichedTech,
                images: individualProject.images,
                links: individualProject.links,
            };

            return NextResponse.json(responseData);
        } else if (teamsProject) {
            const enrichedTech = teamsProject.technologies
                .map((techId) => {
                    const techData = techCollection.find(
                        (t) => t._id.toString() === techId.toString()
                    );
                    return techData
                        ? {
                              name: techData.name,
                              url: techData.url,
                              dark_url: techData.dark_url,
                          }
                        : null;
                })
                .filter(
                    (
                        tech
                    ): tech is {
                        name: string;
                        url: string;
                        dark_url: string;
                    } => tech !== null
                );

            const responseData = {
                title: teamsProject.title,
                description: teamsProject.description,
                contribution: teamsProject.contribution,
                technologies: enrichedTech,
                images: teamsProject.images,
                links: teamsProject.links,
            };

            return NextResponse.json(responseData);
        } else {
            return NextResponse.json(
                { error: 'Project not found' },
                { status: 404 }
            );
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
