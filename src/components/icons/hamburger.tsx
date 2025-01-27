import { Dispatch, SetStateAction } from "react";

interface HamburgerProps {
  isOpen: boolean;
  toggleSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function Hamburger({ isOpen, toggleSidebar }: HamburgerProps) {
  return (
    <button className="flex flex-col items-center justify-center" onClick={() => toggleSidebar((prev) => !prev)} aria-label="Toggle Sidebar">
      <span className={`w-[30px] h-0.5 my-1 bg-light-fg dark:bg-dark-fg transition-transform duration-300 ease-in-out origin-top-left ${isOpen ? "rotate-45 translate-x-[5px]" : ""}`} />
      <span className={`w-[30px] h-0.5 my-1 bg-light-fg dark:bg-dark-fg transition-transform duration-300 ease-in-out ${isOpen ? "scale-0" : ""}`} />
      <span className={`w-[30px] h-0.5 my-1 bg-light-fg dark:bg-dark-fg transition-transform duration-300 ease-in-out origin-bottom-left ${isOpen ? "-rotate-45 translate-x-[5px]" : ""}`} />
    </button>
  );
}
