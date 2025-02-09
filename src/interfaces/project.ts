export interface Project {
    _id: string;
    title: string;
    description?: string;
    first_image?: string;
    contribution?: string[];
    features?: string[];
    technologies: TechData[];
    images?: string[];
    links?: LinkData;
}

export interface Services {
    _id: string;
    image: string;
    title: string;
    description: string;
}

export interface Technologies {
    _id: string;
    name: string;
    url: string;
    dark_url: string;
}

export interface TechData {
    _id: number;
    name: string;
    url: string;
    dark_url?: string;
}

export interface LinkData {
    production?: string;
    repository?: string;
}
