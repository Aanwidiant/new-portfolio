import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio_db');

        const heroCollection = db.collection('heroContent');
        const heroData = await heroCollection.findOne(
            {},
            {
                projection: {
                    _id: 0,
                    greeting_hero: 1,
                    title: 1,
                    description: 1,
                    subdescription: 1,
                    heroImage: 1,
                    cv: 1,
                },
            }
        );

        if (!heroData) {
            return NextResponse.json(
                { error: 'Hero content not found' },
                { status: 404 }
            );
        }
        const responseData = {
            hero_content: heroData,
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
