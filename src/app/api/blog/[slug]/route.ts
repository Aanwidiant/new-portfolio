import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Article, Content, ContentType, CodeLanguage, Tag } from '@/interfaces';

export async function GET(
    req: Request,
    { params }: { params: { slug: string } }
) {
    try {
        const client = await clientPromise;
        const db = client.db('portfolio_db');

        const { slug } = params;

        const contentTypes = await db
            .collection<ContentType>('contentTypes')
            .find({})
            .toArray();

        const codeLanguages = await db
            .collection<CodeLanguage>('codeLanguages')
            .find({})
            .toArray();

        const tagsCollection = await db
            .collection<Tag>('tags')
            .find({})
            .toArray();

        const searchTitleFromSlug = (slug: string) => {
            return slug.replace(/-/g, ' ').replace(/[^a-z0-9\s]/g, '');
        };

        const article = await db.collection<Article>('articles').findOne({
            title: {
                $regex: new RegExp(`^${searchTitleFromSlug(slug)}$`, 'i'),
            },
        });

        if (!article) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            );
        }

        const enrichedContent = article.content.map((item: Content) => {
            const contentType = contentTypes.find(
                (type) => type._id.toString() === item.type
            );

            const codeLanguage = item.language
                ? codeLanguages.find(
                      (lang) => lang._id.toString() === item.language
                  )
                : null;

            return {
                _id: item._id,
                type: contentType ? contentType.type : 'unknown',
                text: item.text,
                ...(codeLanguage && { language: codeLanguage.language }),
            };
        });

        const enrichedTags = article.tags
            .map((tagId: number) => {
                const tag = tagsCollection.find((t) => t._id === tagId);
                return tag ? tag.tag : null;
            })
            .filter((tag): tag is string => tag !== null);

        const responseData = {
            title: article.title,
            image: article.image,
            author: article.author,
            created_at: article.created_at,
            content: enrichedContent,
            tags: enrichedTags,
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
