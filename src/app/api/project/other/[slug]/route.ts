import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(
    req: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio_db');

        const individualCollection = db.collection('individualProject');
        const individual = await individualCollection
            .find({}, { projection: { title: 1, images: 1 } })
            .toArray();

        const individualWithFirstImage = individual.map((project) => {
            const first_image =
                project.images && project.images.length > 0
                    ? project.images[0]
                    : null;

            return { _id: project._id, title: project.title, first_image };
        });

        const teamsCollection = db.collection('teamsProject');
        const teams = await teamsCollection
            .find({}, { projection: { title: 1, images: 1 } })
            .toArray();

        const teamsWithFirstImage = teams.map((project) => {
            const first_image =
                project.images && project.images.length > 0
                    ? project.images[0]
                    : null;

            return { _id: project._id, title: project.title, first_image };
        });

        const allProjects = [
            ...individualWithFirstImage,
            ...teamsWithFirstImage,
        ];

        const filteredProjects = allProjects.filter((project) => {
            const projectSlug = project.title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9\-]/g, '');

            return projectSlug !== params.slug;
        });

        const randomProjects = filteredProjects
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        if (randomProjects.length === 0) {
            return NextResponse.json(
                { error: 'Other projects not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ other_projects: randomProjects });
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
