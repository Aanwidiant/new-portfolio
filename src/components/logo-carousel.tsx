"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface LogoCarouselProps {
  technologies: Technologies[];
}

interface Technologies {
  _id: string
  name: string,
  url: string,
  dark_url: string
}

export default function LogoCarousel({ technologies }: LogoCarouselProps) {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 500,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      className="w-full"
      onMouseEnter={() => {
        swiperRef.current?.swiper.autoplay.stop();
      }}
      onMouseLeave={() => {
        swiperRef.current?.swiper.autoplay.start();
      }}
      breakpoints={{
        320: { slidesPerView: 3 },
        640: { slidesPerView: 5 },
        1024: { slidesPerView: 8 },
      }}
    >
      {technologies.map((tech) => (
        <SwiperSlide key={tech._id}>
          <div className="flex flex-col max-w-36 bg-light dark:bg-dark/50 p-4 my-4 gap-4 rounded-lg justify-center items-center cursor-pointer hover:shadow-md hover:shadow-dark/20 dark:hover:shadow-primary/50 hover:scale-110">
            <Image
              src={tech.url}
              alt={tech.name}
              width={80}
              height={80}
              className="dark:hidden"
            />
            <Image
              src={tech.dark_url || tech.url}
              alt={tech.name}
              width={80}
              height={80}
              className="hidden dark:block"
            />
            <p className="font-medium">
              {tech.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}