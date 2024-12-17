"use client";

import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import Image from "next/image";

export function Carousel() {
  return (
    <div className="container mb-[20px] mt-[0px] flex flex-col md:max-w-[1590px] xl:max-w-full xl:flex-row xl:justify-center">
      <section className="mx-auto w-full max-w-6xl py-20 text-center">
        <div className="relative">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 4,
              slideShadows: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {carouselImages.map((imageData) => (
              <SwiperSlide key={imageData.name}>
                <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-b from-blue-800 to-blue-400 text-white shadow-lg">
                  <Image
                    src={`/static/church-preview-carousel/${imageData.name}`}
                    alt={imageData.alt}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="swiper-button-prev hidden h-24 w-24 rounded-full bg-none shadow-md md:flex"
            style={{ color: "white" }}
          />
          <div
            className="swiper-button-next hidden h-24 w-24 rounded-full bg-none shadow-md md:flex"
            style={{ color: "white" }}
          />
        </div>
      </section>
    </div>
  );
}

const carouselImages = [
  {
    name: "1.webp",
    alt: "Slide 1",
  },
  {
    name: "2.webp",
    alt: "Slide 2",
  },
  {
    name: "3.webp",
    alt: "Slide 3",
  },
  {
    name: "4.webp",
    alt: "Slide 4",
  },
  {
    name: "5.webp",
    alt: "Slide 5",
  },
  {
    name: "6.webp",
    alt: "Slide 6",
  },
  {
    name: "7.webp",
    alt: "Slide 7",
  },
  {
    name: "8.webp",
    alt: "Slide 8",
  },
  {
    name: "9.webp",
    alt: "Slide 9",
  },
  {
    name: "10.webp",
    alt: "Slide 10",
  },
];
