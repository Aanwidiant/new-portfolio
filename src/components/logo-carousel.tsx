"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { id: 1, name: "HTML", url: "/img/skill/html5.svg" },
  { id: 2, name: "CSS", url: "/img/skill/css3.svg" },
  { id: 3, name: "JavaScript", url: "/img/skill/javascript.svg" },
  { id: 4, name: "PHP", url: "/img/skill/php.svg" },
  { id: 5, name: "CodeIgniter", url: "/img/skill/codeigniter.svg" },
  { id: 6, name: "MySQL", url: "/img/skill/mysql.svg" },
  { id: 7, name: "MongoDB", url: "/img/skill/mongodb.svg" },
  { id: 8, name: "Bootstrap", url: "/img/skill/bootstrap.svg" },
  { id: 9, name: "Tailwind", url: "/img/skill/tailwindcss.svg" },
  { id: 10, name: "Node.js", url: "/img/skill/nodejs.svg" },
  { id: 11, name: "React.js", url: "/img/skill/react.svg" },
  { id: 12, name: "Next.js", url: "/img/skill/nextjs.svg", darkUrl: "/img/skill/nextjs-dark.svg" },
];

export default function LogoCarousel() {
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
      {logos.map((logo) => (
        <SwiperSlide key={logo.id}>
          <div className="flex flex-col max-w-36 bg-light dark:bg-dark p-4 my-4 gap-4 rounded-lg justify-center items-center cursor-pointer hover:shadow-md hover:shadow-dark/50 dark:hover:shadow-primary/50 hover:scale-110">
            <Image
              src={logo.url}
              alt={logo.name}
              width={80}
              height={80}
              className="dark:hidden"
            />
            <Image
              src={logo.darkUrl || logo.url}
              alt={logo.name}
              width={80}
              height={80}
              className="hidden dark:block"
            />
            <p className="font-medium text-dark dark:text-light">
              {logo.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}