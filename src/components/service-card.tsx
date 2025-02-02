"use client";

import { useState } from "react";
import Image from "next/image";
import Chevron from "@/components/icons/chevron";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-light dark:bg-dark p-4 rounded-xl space-y-2 hover:shadow-md hover:shadow-dark/50 dark:hover:shadow-primary/50 cursor-pointer" onClick={toggleDescription}>
      <div className="mx-auto relative h-72">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <Chevron className={`w-8 h-8 hover:scale-125 fill-dark dark:fill-light transform ${isOpen ? "rotate-90" : ""}`} />
      </div>
      {isOpen && (
        <p className="text-justify">{description}</p>
      )}
    </div>
  );
};

export default ServiceCard;
