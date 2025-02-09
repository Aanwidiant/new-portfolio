export interface Profile {
    name: string;
    address: string;
    email: string;
    social_links: SocialLink;
}

export interface SocialLink {
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    twitter: string;
}
