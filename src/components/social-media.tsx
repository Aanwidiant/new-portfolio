import Link from "next/link";
import Github from "@/components/icons/github";
import Linkedin from "@/components/icons/linkedin";
import Instagram from "@/components/icons/instagram";
import Facebook from "@/components/icons/facebook";
import Twitter from "@/components/icons/twitter";

interface SocialMediaProps {
    fillColor: "fill-white" | "fill-primary";
    size?: "small" | "large";
    border?: "border-dark-fg" | "border-primary";
}

export default function SocialMedia({fillColor, size = "small", border = "border-dark-fg"}: SocialMediaProps) {
    const iconSize = size === "large" ? "w-8 h-8" : "w-5 h-5";
    const borderSize = size === "large" ? "w-12 h-12" : "w-9 h-9";

    return (
        <div className="flex items-center gap-3">
            <Link href="https://github.com/Aanwidiant" target="_blank"
                  className={`group flex items-center justify-center border rounded-full ${borderSize} ${border} hover:border-light-primary hover:bg-light-primary dark:hover:border-dark-primary dark:hover:bg-dark-primary`}>
                <Github className={`${iconSize} ${fillColor} group-hover:fill-dark-fg`}/>
            </Link>
            <Link href="https://www.linkedin.com/in/aanwidiant/" target="_blank"
                  className={`group flex items-center justify-center border rounded-full ${borderSize} ${border} hover:border-light-primary hover:bg-light-primary dark:hover:border-dark-primary dark:hover:bg-dark-primary`}>
                <Linkedin className={`${iconSize} ${fillColor} group-hover:fill-dark-fg`}/>
            </Link>
            <Link href="https://www.instagram.com/aanwidiant/" target="_blank"
                  className={`group flex items-center justify-center border rounded-full ${borderSize} ${border} hover:border-light-primary hover:bg-light-primary dark:hover:border-dark-primary dark:hover:bg-dark-primary`}>
                <Instagram className={`${iconSize} ${fillColor} group-hover:fill-dark-fg`}/>
            </Link>
            <Link href="https://web.facebook.com/aan.xondanx/" target="_blank"
                  className={`group flex items-center justify-center border rounded-full ${borderSize} ${border} hover:border-light-primary hover:bg-light-primary dark:hover:border-dark-primary dark:hover:bg-dark-primary`}>
                <Facebook className={`${iconSize} ${fillColor} group-hover:fill-dark-fg`}/>
            </Link>
            <Link href="https://twitter.com/Aanwidianto4/" target="_blank"
                  className={`group flex items-center justify-center border rounded-full ${borderSize} ${border} hover:border-light-primary hover:bg-light-primary dark:hover:border-dark-primary dark:hover:bg-dark-primary`}>
                <Twitter className={`${iconSize} ${fillColor} group-hover:fill-dark-fg`}/>
            </Link>
        </div>
    );
}
