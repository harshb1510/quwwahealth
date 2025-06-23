import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight, FiDatabase, FiMessageSquare } from 'react-icons/fi';

import image1 from '../assets/images/Hero/image.png';
import image2 from '../assets/images/Hero/image1.png';
import image3 from '../assets/images/Hero/image2.png';
import image4 from '../assets/images/Hero/image4.png';
import image5 from '../assets/images/Hero/image5.png';

const images = [image1, image2, image3, image4, image5];

const DecorativeIcons = () => (
  <>
    <div className="absolute top-6 right-0  -mr-5 z-20">
      <div className="w-12 h-12 bg-[#FBC75E] rounded-lg flex items-center justify-center shadow-lg transform rotate-20">
        <FiDatabase className="text-white text-2xl" />
      </div>
    </div>
    <div className="absolute bottom-0 right-0 -mb-5 mr-10 z-20 transform rotate-20">
      <div className="w-12 h-12 bg-[#FFAA94] rounded-lg flex items-center justify-center shadow-lg">
        <FiMessageSquare className="text-white text-2xl" />
      </div>
    </div>
  </>
);

const SvgBackground = () => (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 636 526" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <g clipPath="url(#clip0_1_9887)">
            <rect width="636" height="526" rx="20" fill="#52BD94"/>
            <path d="M50 1.5L27 122.5L103.5 56L128 149L209 56L228 149L276.5 97.5L291.5 223L372 97.5L377.5 229.5L409.5 263.5" stroke="#30946D" strokeWidth="5" opacity="0.5"/>
            <path d="M-16 206.303C9.82648 206.56 64.2411 214.608 75.2877 244.751C86.3342 274.895 198.027 223.477 252.493 194L264 473.901C219.507 492.1 131.748 535.726 136.658 564.638C142.795 600.78 120.548 609.238 81.4247 609.238C42.3014 609.238 48.4384 621.541 29.2603 630" stroke="#30946D" strokeWidth="5" opacity="0.5"/>
        </g>
        <defs>
            <clipPath id="clip0_1_9887">
                <rect width="636" height="526" rx="20" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

const Hero = () => {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-r from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left p-10">
            <p className=" font-bold text-[75px] md:text-[75px] leading-tight md:leading-[76px] tracking-[0%] text-gray-800 mb-4">
              Building <br /> Healthier
              <br />
              Futures <br /> Together!
            </p>
            <div className="flex justify-center md:justify-start my-6">
              <svg width="487" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm h-auto">
                <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#54BD95" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-lg text-[#A6A6A6] font-medium">
              Empowering kids to succeed with <br /> Healthy Body & Sharp Minds!
            </p>
          </div>

          {/* Right Column: Image Slider */}
          <div className="relative mt-8 md:mt-0 w-full">
            <div className="relative aspect-[636/526]">
              <SvgBackground />
              <DecorativeIcons />
              <div className="absolute inset-0 pt-[150px] pr-[10px] z-10">
                 <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: '.swiper-button-next-hero',
                        prevEl: '.swiper-button-prev-hero',
                    }}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className="w-full h-full"
                    >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-b-2xl" />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>

                {/* Navigation Arrows */}
                <div className="swiper-button-prev-hero absolute top-1/2 left-4 -translate-x-1/2 z-20 cursor-pointer">
                    <FiChevronLeft className="text-black text-6xl" />
                </div>
                <div className="swiper-button-next-hero absolute top-1/2 right-6 translate-x-1/2 z-20 cursor-pointer">
                    <FiChevronRight className="text-black text-6xl" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 