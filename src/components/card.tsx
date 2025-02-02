import Image from "next/image";
import Link from "next/link";
import FallbackImage from "@/components/fallback-image";
import Button from "./button";

interface CardProps {
  title: string;
  imageSrc?: string | null;
  buttonText: string;
  link: string;
}

export default function Card({ title, imageSrc, buttonText, link }: CardProps) {

  return (
    <div className={`p-2 rounded-lg shadow-xl bg-secondary col-span-6 md:col-span-3 lg:col-span-2 group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col justify-between`}>
      <Link href={link}>
        <div className="h-52 w-full relative rounded-lg overflow-hidden">
          {imageSrc ? (
            <div className="h-52 w-full relative rounded-lg overflow-hidden">
              <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-lg group-hover:scale-105" />
            </div>
          ) : (
            <FallbackImage />
          )}
        </div>
        <h3 className="px-2 my-2 text-xl font-semibold">{title}</h3>
      </Link>
      <div className="w-full flex justify-end p-2">
        <Link href={link}>
          <Button>{buttonText}</Button>
        </Link>
      </div>
    </div>
  );
}
