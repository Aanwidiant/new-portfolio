import Navigasi from "@/components/navigasi";
import ThemeToggle from "./theme-toggle";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div>
      <div
        className={`fixed top-20 right-0 z-40 h-full w-1/2 lg:hidden bg-primary transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:static lg:transform-none lg:opacity-100 lg:w-full lg:h-auto`}
      >
        <div className="px-4 w-full">
          <Navigasi layout="sidebar" toggleSidebar={toggleSidebar} />
          <div className="w-full flex justify-center pt-24">
            <ThemeToggle/>
          </div>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 z-30 lg:hidden" onClick={toggleSidebar} />}
    </div>
  );
}
