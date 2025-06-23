import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight, FiCheckCircle, FiStar } from 'react-icons/fi';

import img1 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.45.jpeg';
import img2 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.46.jpeg';
import img3 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.47.jpeg';
import img4 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.53.jpeg';
import img5 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.54.jpeg';
import img6 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.54 (1).jpeg';
import img7 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.55.jpeg';
import img8 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.55 (1).jpeg';
import img9 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.56.jpeg';
import img10 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.56 (1).jpeg';
import img11 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.57.jpeg';
import img12 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.57 (1).jpeg';
import img13 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.57 (2).jpeg';
import img14 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.58.jpeg';
import img15 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.58 (1).jpeg';
import img16 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.58 (2).jpeg';
import img17 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.59.jpeg';
import img18 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.59 (1).jpeg';
import img19 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.49.59 (2).jpeg';
import img20 from '../assets/images/Holiday/WhatsApp Image 2025-06-23 at 16.50.00.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

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

const services = [
  'Brand positioning and event integration',
  'Sponsorship deal structuring and activation',
  'Multi-channel campaign execution and reporting',
];

const benefits = [
  'Increases brand visibility in trusted community settings',
  'Supports CSR and wellness-based brand alignment',
  'Delivers measurable reach and engagement through school-based programs',
];

const BrandingHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center md:text-left p-10">
              <p className="font-bold text-[60px] md:text-[75px] leading-tight md:leading-[76px] tracking-[0%] text-gray-800 mb-4">
                Branding & <br /> Sponsorship
              </p>
              <div className="flex justify-center md:justify-start my-6">
                <svg width="487" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm h-auto">
                  <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#54BD95" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-lg text-[#A6A6A6] font-medium max-w-xl mx-auto md:mx-0">
                Quwwa Health offers integrated branding and sponsorship opportunities for businesses looking to align with health, fitness, and education initiatives. From designing brand identities to executing high-impact sponsorships, we deliver creative and data-driven strategies that connect sponsors with engaged school communities.
              </p>
            </div>

            {/* Right Column: Image Slider */}
            <div className="relative mt-8 md:mt-0 w-full">
              <div className="relative aspect-[636/526]">
                <SvgBackground />
                <div className="absolute inset-0 pt-[110px] pr-[10px] z-10">
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
                        <img src={image} alt={`Branding Slide ${index + 1}`} className="w-full h-full object-cover rounded-b-2xl" />
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

      {/* Services & Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FiStar className="text-[#F3F25B]" /> Services Include</h3>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-start text-[#A6A6A6] text-lg">
                  <FiCheckCircle className="text-[#52BD94] mt-1 mr-3" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FiStar className="text-[#F3F25B]" /> Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start text-[#A6A6A6] text-lg">
                  <FiCheckCircle className="text-[#52BD94] mt-1 mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingHero; 