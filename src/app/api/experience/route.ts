import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio_db');

        const servicesCollection = db.collection('services');
        const services = await servicesCollection.find().toArray();

        if (!services || services.length === 0) {
            return NextResponse.json(
                { error: 'Data services not found' },
                { status: 404 }
            );
        }

        const technologiesCollection = db.collection('technologies');
        const technologies = await technologiesCollection.find().toArray();

        if (!technologies || technologies.length === 0) {
            return NextResponse.json(
                { error: 'Data technologies not found' },
                { status: 404 }
            );
        }

        const individualCollection = db.collection('individualProject');
        const individual = await individualCollection
            .find({}, { projection: { title: 1, images: 1 } })
            .toArray();

        const individualWithFirstImage = individual.map((project) => {
            const first_image =
                project.images && project.images.length > 0
                    ? project.images[0]
                    : null;

            // eslint-disable-next-line
            const { images, ...projectWithoutImages } = project;

            return { ...projectWithoutImages, first_image };
        });

        if (individual.length === 0) {
            return NextResponse.json(
                { error: 'Data individual project not found' },
                { status: 404 }
            );
        }

        const teamsCollection = db.collection('teamsProject');
        const teams = await teamsCollection
            .find({}, { projection: { title: 1, images: 1 } })
            .toArray();

        const teamsWithFirstImage = teams.map((project) => {
            const first_image =
                project.images && project.images.length > 0
                    ? project.images[0]
                    : null;

            // eslint-disable-next-line
            const { images, ...projectWithoutImages } = project;

            return { ...projectWithoutImages, first_image };
        });

        if (teams.length === 0) {
            return NextResponse.json(
                { error: 'Data teams project not found' },
                { status: 404 }
            );
        }

        const responseData = {
            services: services,
            technologies: technologies,
            project_individual: individualWithFirstImage,
            project_teams: teamsWithFirstImage,
        };

        return NextResponse.json(responseData);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
