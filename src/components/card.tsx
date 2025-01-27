import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "@/components/icons/image";

interface CardProps {
  type: "blog" | "product";
  title: string;
  description?: string;
  imageSrc?: string | null;
  buttonText: string;
  link: string;
}

export default function Card({ type, title, description, imageSrc, buttonText, link }: CardProps) {
  const gridClasses = type === "blog" ? "col-span-6 md:col-span-3 lg:col-span-2" : "col-span-4 md:col-span-2 lg:col-span-1";

  return (
    <div className={`p-2 rounded-lg shadow-xl bg-secondary ${gridClasses} group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col justify-between`}>
      <Link href={link}>
        <div className="h-52 w-full relative rounded-lg overflow-hidden">
          {imageSrc ? (
            <div className="h-52 w-full relative rounded-lg overflow-hidden">
              <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-lg group-hover:scale-105" />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full bg-stroke rounded-lg gap-y-2 group-hover:scale-110">
              <PlaceholderImage className="w-16 h-16 fill-gray" />
              <p className="text-gray px-2">Gambar belum tersedia</p>
            </div>
          )}
        </div>
        <h3 className="px-2 my-2 text-xl font-semibold text-dark">{title}</h3>
        <p className="px-2 text-base lg:text-lg">{description}</p>
      </Link>
      <div className="w-full flex justify-end p-2">
        <Link href={link}>
          <button className="px-5 py-2 text-base font-semibold transition duration-300 ease-in-out text-white bg-primary rounded-md hover:shadow-md hover:shadow-primary w-fit">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
}
