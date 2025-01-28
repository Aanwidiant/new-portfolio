"use client";

import { ReactNode, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href?: string;
    download?: boolean;
}

export default function Button({ children, type = "button", onClick, href, download }: ButtonProps) {
    const router = useRouter();

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (onClick) {
            onClick(e);
        }

        if (href) {
            if (download) {
                const link = document.createElement("a");
                link.href = href;
                link.download = href.split("/").pop() || "file";
                link.click();
            } else {
                router.push(href);
            }
        }
    };

    return (
        <button
            type={type}
            onClick={handleClick}
            className="px-4 py-2.5 text-base font-semibold transition duration-300 ease-in-out text-dark dark:text-light bg-primary rounded-md hover:shadow-md hover:shadow-primary w-fit inline-flex items-center gap-x-3"
        >
            {children}
        </button>
    );
}
