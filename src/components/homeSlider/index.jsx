"use client";

import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const HomeSlider = () => {
  return (
    <div className="container mx-auto mb-5 px-4 lg:px-0">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000 }}
            modules={[Navigation, Autoplay]}
          >
            <SwiperSlide>
              <Image
                src="/homeSlider-2.jpeg"
                width={400}
                height={300}
                alt="Home Slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/homeSlider-3.jpeg"
                width={400}
                height={300}
                alt="Home Slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/homeSlider-4.jpeg"
                width={400}
                height={300}
                alt="Home Slider"
              />
            </SwiperSlide>
          </Swiper>
          <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-500  text-white text-lg px-5 py-5 tracking-wider z-10">
            LİDER
          </div>
        </div>

        <div className="relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5500 }}
            modules={[Navigation, Autoplay]}
          >
            <SwiperSlide>
              {" "}
              <Image
                src="/homeSlider-5.jpeg"
                width={400}
                height={300}
                alt="Home Slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/homeSlider-6.jpeg"
                width={400}
                height={300}
                alt="Home Slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/homeSlider-7.jpeg"
                width={400}
                height={300}
                alt="Home Slider"
              />
            </SwiperSlide>
          </Swiper>
          <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-500  text-white text-lg px-5 py-5  tracking-wider z-10">
            HEKİM
          </div>
        </div>

        <div className="relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 6000 }}
            modules={[Navigation, Autoplay]}
          >
            <SwiperSlide>
              <Image
                src="/homeSlider-1.jpeg"
                width={400}
                height={300}
                alt="Home Slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/homeSlider-8.jpeg"
                width={400}
                height={300}
                alt="Home Slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/homeSlider-9.jpeg"
                width={400}
                height={300}
                alt="Home Slider"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/homeSlider-10.jpeg"
                width={400}
                height={300}
                alt="Home Slider"
              />
            </SwiperSlide>
          </Swiper>
          <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-gray-500  text-white text-lg px-5 py-5  tracking-wider z-10">
            DÜŞÜNÜR
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
