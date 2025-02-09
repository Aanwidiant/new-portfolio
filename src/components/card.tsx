import Image from "next/image";
import Link from "next/link";
import Button from "./button";

interface CardProps {
  title: string;
  imageSrc: string;
  buttonText?: string;
  link: string;
  created_at?: Date;
}

export default function Card({ title, imageSrc, buttonText, link, created_at }: CardProps) {

  return (
    <div className={`card-style group col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-between p-2`}>
      <Link href={link}>
        <div className="h-52 w-full relative rounded-lg overflow-hidden">
          <div className="h-52 w-full relative rounded-lg overflow-hidden">
            <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-lg group-hover:scale-105" />
          </div>
        </div>
        <h3 className="px-2 my-2 text-xl font-semibold">{title}</h3>
      </Link>
      <div className="w-full flex justify-between items-center p-2">
        {created_at && (<p className="font-medium">
          {new Date(created_at).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>)}
        <div className="ml-auto">
          {buttonText && <Button href={link}>{buttonText}</Button>}
        </div>
      </div>
    </div>
  );
}
