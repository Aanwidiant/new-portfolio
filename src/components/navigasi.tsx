"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigasiProps {
  layout: "header" | "sidebar" | "footer";
  toggleSidebar?: () => void;
}

export default function Navigasi({ layout, toggleSidebar }: NavigasiProps) {
  const pathName = usePathname();

  const layoutClass = layout === "header" ? "flex flex-row text-xl gap-5" : layout === "sidebar" ? "flex flex-col gap-4 text-lg py-2" : "flex flex-col gap-2 text-base";

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
          <li key={item.href} className={`${layout === "header" || "sidebar" ? "group relative w-fit" : ""}`}>
            <Link href={item.href} className={`${layout === "footer" ? "hover:text-primary" : "text-dark dark:text-light"}  ${(layout === "header" || layout === "sidebar") && pathName === item.href ? "font-semibold" : ""}`} onClick={handleLinkClick}>
              {item.label}
              {(layout === "header" || layout === "sidebar") && (
                <span className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-dark dark:bg-light transform transition-transform duration-300 ease-in-out origin-left ${pathName === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
