"use client";
import Image from "next/image";

const logos = [
    { id: 1, name: "HTML", url: "/img/skill/html5.svg" },
    { id: 2, name: "CSS", url: "/img/skill/css3.svg" },
    { id: 3, name: "JavaScript", url: "/img/skill/javascript.svg" },
    { id: 4, name: "PHP", url: "/img/skill/php.svg" },
    { id: 5, name: "CodeIgniter", url: "/img/skill/codeigniter.svg" },
    { id: 6, name: "MySql", url: "/img/skill/mysql.svg" },
    { id: 7, name: "MongoDB", url: "/img/skill/mongodb.svg" },
    { id: 8, name: "Bootstrap", url: "/img/skill/bootstrap.svg" },
    { id: 9, name: "Tailwindcss", url: "/img/skill/tailwindcss.svg" },
    { id: 10, name: "NodeJS", url: "/img/skill/nodejs.svg" },
    { id: 11, name: "React", url: "/img/skill/react.svg" },
    { id: 12, name: "NextJS", url: "/img/skill/nextjs.svg" },
];

const LogoSet = ({ keyPrefix = "" }) => (
    <div className="flex gap-8 shrink-0">
        {logos.map((logo) => (
            <div key={`${keyPrefix}${logo.id}`} className="flex flex-col items-center">
                <div className="relative w-20 h-20">
                    <Image
                        src={logo.url}
                        alt={logo.name}
                        fill
                        className="object-contain"
                    />
                </div>
                <p className="mt-2 text-sm text-center">{logo.name}</p>
            </div>
        ))}
    </div>
);

const LogoCarousel = () => {
    return (
        <div className="relative w-full overflow-hidden py-4">
            <div className="flex animate-scroll">
                <LogoSet keyPrefix="first-" />
                <div className="shrink-0 w-8" />
                <LogoSet keyPrefix="second-" />
            </div>
        </div>
    );
};

export default LogoCarousel;