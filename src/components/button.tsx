"use client";

import { ReactNode, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href?: string;
    download?: boolean;
    disabled?: boolean;
}

export default function Button({ children, type = "button", onClick, href, download, disabled }: ButtonProps) {
    const router = useRouter();

    const isExternalLink = (url: string) => {
        try {
            const linkUrl = new URL(url);
            return linkUrl.hostname !== window.location.hostname;
        } catch {
            return false;
        }
    };

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (onClick) onClick(e);
        if (disabled) return;

        if (href) {
            if (download) {
                const link = document.createElement("a");
                link.href = href;
                link.download = href.split("/").pop() || "file";
                link.click();
            } else if (isExternalLink(href)) {
                window.open(href, "_blank");
            } else {
                router.push(href);
            }
        }
    };

    return (
        <button
            type={type}
            onClick={handleClick}
            disabled={disabled}
            className="group px-4 py-2 font-medium transition duration-300 ease-in-out bg-primary rounded-md hover:shadow-md hover:shadow-primary hover:text-light dark:hover:text-dark w-fit inline-flex items-center gap-x-2 disabled:cursor-none disabled:hover:shadow-none disabled:hover:text-dark disabled:hover:dark:text-light"
        >
            {children}
        </button>
    );
}
