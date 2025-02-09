import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio_db');

        const heroCollection = db.collection('heroContent');
        const aboutData = await heroCollection.findOne(
            {},
            {
                projection: {
                    _id: 0,
                    greeting_about: 1,
                    about: 1,
                    vision: 1,
                    mission: 1,
                    motivation: 1,
                },
            }
        );

        if (!aboutData) {
            return NextResponse.json(
                { error: 'About content not found' },
                { status: 404 }
            );
        }

        const educationCollection = db.collection('education');
        const eduBackground = await educationCollection
            .find({}, { projection: { _id: 0 } })
            .toArray();

        if (!eduBackground || eduBackground.length === 0) {
            return NextResponse.json(
                { error: 'Data education not found' },
                { status: 404 }
            );
        }

        const employCollection = db.collection('employment');
        const employHistory = await employCollection
            .find({}, { projection: { _id: 0 } })
            .toArray();

        if (!employHistory || employHistory.length === 0) {
            return NextResponse.json(
                { error: 'Data education not found' },
                { status: 404 }
            );
        }

        const responseData = {
            about_content: aboutData,
            edu_background: eduBackground,
            employ_history: employHistory,
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
