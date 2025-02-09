export type Theme = 'light' | 'dark';

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export interface NavigasiProps {
    layout: 'header' | 'sidebar' | 'footer';
    toggleSidebar?: () => void;
}

export interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export interface HeaderProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}
