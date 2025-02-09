import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio_db');

        const profileCollection = db.collection('users');
        const profile = await profileCollection.findOne(
            {},
            {
                projection: {
                    _id: 0,
                    name: 1,
                    address: 1,
                    email: 1,
                    social_links: 1,
                },
            }
        );

        if (!profile) {
            return NextResponse.json(
                { error: 'Profile not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(profile);
    } catch (error) {
        console.error('Error fetching profile:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
