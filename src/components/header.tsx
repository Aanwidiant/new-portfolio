import Navigasi from "@/components/navigasi";
import Link from "next/link";
import Hamburger from "@/components/icons/hamburger";
import ThemeToggle from "./theme-toggle";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  return (
    <header className=" fixed top-0 left-0 z-10 flex items-center w-full shadow-sm bg-primary shadow-primary/75">
      <div className="container">
        <div className="flex items-center justify-between w-full h-24">
          <div className="px-4 flex gap-x-4 items-center">
            <Link href="/" className="text-2xl lg:text-3xl italic font-semibold text-dark">
              Aan <span className="text-light">Widianto</span>
            </Link>
          </div>
          <div className="items-center p-4 hidden md:flex gap-x-8">
            <Navigasi layout="header" />
            <ThemeToggle/>
          </div>
          <div className="h-full items-center flex md:hidden p-4">
            <Hamburger isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
    </header>
  );
}
