import { MouseEventHandler, ReactNode, Dispatch, SetStateAction } from 'react';
import { SocialLink } from './profile';

export interface ButtonProps {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href?: string;
    download?: boolean;
    disabled?: boolean;
}

export interface CardProps {
    title: string;
    imageSrc: string;
    buttonText?: string;
    link: string;
    created_at?: Date;
}

export interface CodeBlockProps {
    code: string;
    language: string;
}

export interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
}

export interface SocialMediaProps {
    size?: 'small' | 'large';
    links: SocialLink;
}

export interface NotificationProps {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    description?: string;
    duration?: number;
    onClose?: () => void;
}

export interface HamburgerProps {
    isOpen: boolean;
    toggleSidebar: Dispatch<SetStateAction<boolean>>;
}
