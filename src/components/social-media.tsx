import Link from "next/link";
import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import Instagram from "@/components/icons/instagram";
import Facebook from "@/components/icons/facebook";
import Twitter from "@/components/icons/twitter";

interface SocialMediaProps {
    size?: "small" | "large";
}

export default function SocialMedia({size = "small"}: SocialMediaProps) {
    const iconSize = size === "large" ? "w-8 h-8" : "w-7 h-7";
    const borderSize = size === "large" ? "w-12 h-12" : "w-9 h-9";

    return (
        <div className="flex items-center gap-3">
            <Link href="https://github.com/Aanwidiant" target="_blank"
                  className={`group flex items-center justify-center border rounded-full ${borderSize} border-dark dark:border-light hover:border-primary hover:bg-primary dark:hover:border-primary`}>
                <Github className={`${iconSize} fill-dark dark:fill-light group-hover:fill-light dark:group-hover:fill-dark`}/>
            </Link>
            <Link href="https://www.linkedin.com/in/aanwidiant/" target="_blank"
                  className={`group flex items-center justify-center border rounded-full ${borderSize} border-dark dark:border-light hover:border-primary hover:bg-primary dark:hover:border-primary`}>
                <Linkedin className={`${iconSize} fill-dark dark:fill-light group-hover:fill-light dark:group-hover:fill-dark`}/>
            </Link>
            <Link href="https://www.instagram.com/aanwidiant/" target="_blank"
                  className={`group flex items-center justify-center border rounded-full ${borderSize} border-dark dark:border-light hover:border-primary hover:bg-primary dark:hover:border-primary`}>
                <Instagram className={`${iconSize} fill-dark dark:fill-light group-hover:fill-light dark:group-hover:fill-dark`}/>
            </Link>
            <Link href="https://web.facebook.com/aan.xondanx/" target="_blank"
                  className={`group flex items-center justify-center border rounded-full ${borderSize} border-dark dark:border-light hover:border-primary hover:bg-primary dark:hover:border-primary`}>
                <Facebook className={`${iconSize} fill-dark dark:fill-light group-hover:fill-light dark:group-hover:fill-dark`}/>
            </Link>
            <Link href="https://twitter.com/Aanwidianto4/" target="_blank"
                  className={`group flex items-center justify-center border rounded-full ${borderSize} border-dark dark:border-light hover:border-primary hover:bg-primary dark:hover:border-primary`}>
                <Twitter className={`${iconSize} fill-dark dark:fill-light group-hover:fill-light dark:group-hover:fill-dark`}/>
            </Link>
        </div>
    );
}
