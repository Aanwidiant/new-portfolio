"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigasiProps {
  layout: "header" | "sidebar" | "footer";
  toggleSidebar?: () => void;
}

export default function Navigasi({ layout, toggleSidebar }: NavigasiProps) {
  const pathName = usePathname();

  const layoutClass = layout === "header" ? "flex flex-row text-xl gap-x-10" : layout === "sidebar" ? "flex flex-col gap-y-10 text-lg py-2" : "flex flex-col gap-2 text-base";

  const handleLinkClick = () => {
    if (layout === "sidebar" && toggleSidebar) {
      toggleSidebar();
    }
  };

  return (
    <nav>
      <ul className={`${layoutClass}`}>
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Me" },
          { href: "/experience", label: "Experience" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ].map((item) => (
          <li 
          key={item.href} 
          className="font-medium"
          >
            <Link 
            href={item.href} 
            className={`
              transition duration-300 ease-in-out
              ${layout === "footer" ? 
                "text-dark dark:text-light hover:text-primary dark:hover:text-primary" :
                (layout === "header" || layout === "sidebar") ? 
                  "text-dark dark:text-light hover:text-light dark:hover:text-dark" :
                  ""
              }
              ${pathName === item.href && layout !== "footer" ? "font-bold text-xl text-light-etd dark:text-dark-etd" : ""}
            `}
            onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
