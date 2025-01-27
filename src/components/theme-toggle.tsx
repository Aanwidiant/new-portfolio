import React, { useEffect, useState } from 'react';
import Moon from '@/components/icons/moon';
import Sun from '@/components/icons/sun';

type Theme = 'light' | 'dark';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div
            className="relative flex h-fit w-fit rounded-full p-1 bg-light-bg dark:bg-dark-bg cursor-pointer"
            onClick={toggleTheme}
        >
            <div
                className={`absolute left-1 h-8 w-8 rounded-full transition-transform duration-300 ${
                    theme === 'dark' ? 'translate-x-0 bg-dark-primary' : 'translate-x-8 bg-light-primary'
                }`}
            ></div>

            <div className="flex w-8 h-8 items-center gap-2 p-1 z-10 justify-center">
                <Moon className={`w-5 h-5 ${theme === 'dark' ? 'fill-dark-fg' : 'fill-gray'}`} />
            </div>

            <div className="flex w-8 h-8 items-center gap-2 p-1 z-10 justify-center">
                <Sun className={`w-5 h-5 ${theme === 'light' ? 'fill-light-fg' : 'fill-gray'}`} />
            </div>
        </div>
    );
};


export default ThemeToggle;
