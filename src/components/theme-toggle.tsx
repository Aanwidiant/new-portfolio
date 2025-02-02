import Moon from '@/components/icons/moon';
import Sun from '@/components/icons/sun';
import { useTheme } from '@/contexts/theme-context'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className="relative flex h-fit w-fit rounded-full p-1 bg-dark-etd cursor-pointer"
            onClick={toggleTheme}
        >
            <div
                className={`absolute left-1 h-8 w-8 rounded-full transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'translate-x-0 bg-primary' : 'translate-x-8 bg-light-etd'
                    }`}
            ></div>

            <div className="flex w-8 h-8 items-center gap-2 p-1 z-10 justify-center">
                <Moon className={`w-5 h-5 ${theme === 'dark' ? 'fill-light' : 'fill-muted'}`} />
            </div>

            <div className="flex w-8 h-8 items-center gap-2 p-1 z-10 justify-center">
                <Sun className={`w-5 h-5 ${theme === 'light' ? 'fill-primary' : 'fill-muted'}`} />
            </div>
        </div>
    );
};

export default ThemeToggle;
