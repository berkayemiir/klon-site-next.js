"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const SocialResponsibility = () => {
  return (
    <div className="container mx-auto mb-10 px-4 lg:px-0">
      <h3 className="mb-5 text-xl font-light tracking-wider relative before:contents-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-14 before:h-[2px] before:bg-[#02b0ae]">
        SOSYAL SORUMLULUK
      </h3>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-gray-100 py-3">
            <Link href={"https://npistanbul.com/"} className="flex items-center justify-center" target="_blank">
              <Image
                src="/npistanbul.com-1-tr.png"
                width={210}
                height={65}
                alt="NPİSTANBUL"
                className="w-auto h-12" 
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 py-3">
            <Link href={"https://www.tanp-a.org/"} className="flex items-center justify-center" target="_blank">
              <Image
                src="/tanp-a.org-1-tr.png"
                width={210}
                height={65}
                alt="TANPA - Türk Amerikan Nöropsikiyatri Derneği"
                className="w-auto h-12"
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 py-3">
            <Link href={"https://uskudar.edu.tr/"} className="flex items-center justify-center" target="_blank">
              <Image
                src="/uskudar.edu.tr-1-tr.png"
                width={210}
                height={65}
                alt="Üsküdar Üniversitesi"
                className="w-auto h-12"
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 py-3">
            <Link href={"https://e-psikiyatri.com/"} className="flex items-center justify-center" target="_blank">
              <Image
                src="/e-psikiyatri.com-1-tr.png"
                width={210}
                height={65}
                alt="E Psikiyatri"
                className="w-auto h-12"
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 py-3">
            <Link href={"https://npistanbul.com/"} className="flex items-center justify-center" target="_blank">
              <Image
                src="/tarhan.org-1-tr.png"
                width={210}
                height={65}
                alt="NPİSTANBUL"
                className="w-auto h-12"
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 py-3">
            <Link href={"https://hayditutelimi.org/"} className="flex items-center justify-center" target="_blank">
              <Image
                src="/hayditutelimi.org-1-tr.png"
                width={210}
                height={65}
                alt="Haydi tut elimi"
                className="w-auto h-12"
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 py-3">
            <Link href={"https://mutluyuva.org/"} className="flex items-center justify-center" target="_blank">
              <Image
                src="/mutluyuva.org-1-tr.png"
                width={210}
                height={65}
                alt="Mutlu Yuva"
                className="w-auto h-12"
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 py-3">
            <Link href={"https://tbhd.org.tr/"} className="flex items-center justify-center" target="_blank">
              <Image
                src="/tbhd.org.tr-1-tr.png"
                width={210}
                height={65}
                alt="TBHD - Tedavisel Beyin Haritalamaları Derneği"
                className="w-auto h-12"
              />
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-100 py-3">
            <Link href={"https://www.asder.org.tr/"} className="flex items-center justify-center" target="_blank">
              <Image
                src="/asder_logo.png"
                width={210}
                height={65}
                alt="ASDER - Adaleti Savunanlar Derneği"
                className="w-auto h-12"
              />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SocialResponsibility;
