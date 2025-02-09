import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio_db');

        const blogCollection = db.collection('articles');
        const blogData = await blogCollection
            .find(
                {},
                {
                    projection: {
                        _id: 0,
                        title: 1,
                        image: 1,
                        created_at: 1,
                    },
                }
            )
            .toArray();

        if (blogData.length === 0) {
            return NextResponse.json(
                { error: 'No blog content found' },
                { status: 404 }
            );
        }

        const responseData = {
            blogs_content: blogData,
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
