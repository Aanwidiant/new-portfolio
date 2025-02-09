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
    <div className="card-style space-y-2 p-4" onClick={toggleDescription}>
      <div className="mx-auto relative h-72">
        <Image
          src={image || "/fallback-img.png"}
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
