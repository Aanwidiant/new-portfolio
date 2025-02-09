export interface HeroContent {
    greeting_hero: string;
    title: string;
    description: string;
    subdescription: string;
    heroImage: string;
    cv: string;
}

export interface AboutContent {
    greeting_about: string;
    about: string;
    vision: string;
    mission: string;
    motivation: string;
}

export interface EduBackground {
    date: string;
    title: string;
    description: string;
    logo: string;
}

export interface EmployHistory {
    date: string;
    title: string;
    job: string;
    logo: string;
    jobdesk: string[];
}

export interface BlogContent {
    title: string;
    image: string;
    created_at: Date;
}

export interface Article {
    title: string;
    image: string;
    author: string;
    created_at: Date;
    content: Content[];
    tags: number[];
}

export interface Content {
    _id: string;
    type: string;
    text: string;
    language?: string;
}

export interface ContentType {
    _id: number;
    type: string;
}

export interface CodeLanguage {
    _id: number;
    language: string;
}

export interface Tag {
    _id: number;
    tag: string;
}
