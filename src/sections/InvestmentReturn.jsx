import React from 'react';

import invest1 from '../assets/images/AboutUs/invest1.png';
import invest2 from '../assets/images/AboutUs/invest2.png';
import invest3 from '../assets/images/AboutUs/invest3.png';
import invest4 from '../assets/images/AboutUs/invest4.png';
import quwwaAlpro from '../assets/images/AboutUs/quwwa+alpro.png';

const features = [
  {
    icon: invest1,
    title: 'Data-Driven Policy & Funding Allocation',
    description: 'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.',
  },
  {
    icon: invest2,
    title: 'Increased Workforce Productivity',
    description: 'Created by experts, library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.',
  },
  {
    icon: invest3,
    title: 'Reduced Healthcare Costs',
    description: 'Teachers can identify gaps in their students understanding, tailor instruction, and meet the needs of every student.',
  },
  {
    icon: invest4,
    title: 'Improved Academic Performance',
    description: 'Teachers can identify gaps in their students understanding, tailor instruction, and meet the needs of every student.',
  },
];

const InvestmentReturn = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-yellow-50 via-yellow-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
            What is the biggest return <br /> on investment for Quwwa Health?
          </h2>
          <div className="flex justify-center mt-2 sm:mt-3 md:mt-4">
            <svg width="284" height="40" viewBox="0 0 284 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="w-48 sm:w-64 md:w-72 lg:w-96 h-auto">
                <g clipPath="url(#clip0_1_13202)">
                <path d="M180.851 0.697709C160.655 1.32266 140.471 2.37085 120.321 3.84229C102.035 4.16634 83.7464 4.49039 65.4609 4.81443C45.3964 5.17155 25.3319 5.52535 5.27073 5.88247C3.32975 5.91553 0.324047 7.34068 0.0264527 9.49328C-0.300901 11.8674 2.63536 12.2642 4.28867 12.2378C17.3266 12.0063 30.3646 11.7748 43.4025 11.5434C37.9764 12.2345 32.5568 12.952 27.1373 13.7026C25.2592 13.9638 22.637 14.8434 22.0385 16.8968C21.5029 18.7286 23.176 20.0281 24.9516 20.0612C55.0616 20.577 85.1748 21.0962 115.285 21.612C121.693 21.7211 128.101 21.8335 134.509 21.9426C125.291 22.9512 116.085 24.1118 106.906 25.4245C92.5122 27.4878 78.1781 29.9347 63.9068 32.7222C62.3659 33.0231 60.1802 34.3722 59.9454 36.1015C59.7173 37.7548 61.5392 38.8361 63.0007 38.8493C97.2439 39.1469 131.487 39.4478 165.73 39.7454C175.386 39.8281 185.038 39.914 194.693 39.9967C196.905 40.0165 199.742 39.385 200.856 37.2126C201.852 35.2683 199.987 33.6513 198.085 33.6348C165.122 33.3471 132.158 33.0595 99.1948 32.7718C100.114 32.6329 101.03 32.4907 101.949 32.3551C114.405 30.5101 126.904 28.946 139.43 27.6664C164.494 25.1071 189.67 23.6819 214.863 23.4009C215.978 23.3876 217.105 23.381 218.229 23.3744C230.999 23.5926 243.766 23.8142 256.536 24.0324C258.745 24.0688 261.592 23.4075 262.7 21.2483C263.718 19.2643 261.814 17.7466 259.929 17.6705C246.898 17.1481 233.853 16.9232 220.812 16.9993C203.74 16.705 186.668 16.414 169.596 16.1197C139.486 15.6039 109.373 15.0847 79.2626 14.5689C76.8356 14.5259 74.4052 14.4863 71.9782 14.4433C87.7441 12.7668 103.536 11.3483 119.349 10.1943C152.312 9.60901 185.279 9.02705 218.243 8.44178C238.307 8.08467 258.372 7.73086 278.433 7.37374C280.274 7.34068 282.979 6.07756 283.531 4.17956C284.074 2.32456 282.387 1.08127 280.618 1.01514C247.377 -0.221528 214.096 -0.330646 180.851 0.697709Z" fill="#F3F25B"/>
                </g>
                <defs>
                <clipPath id="clip0_1_13202">
                <rect width="283.634" height="40" fill="white"/>
                </clipPath>
                </defs>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 gap-y-12 sm:gap-y-16 md:gap-y-20 text-center">
            {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center group">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="h-20 sm:h-24 md:h-28 lg:h-32 mb-4 sm:mb-6 md:mb-8 transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">{feature.title}</h3>
                    <p className="text-[#848383] text-base sm:text-lg md:text-xl lg:text-2xl max-w-sm md:max-w-md lg:max-w-lg">{feature.description}</p>
                </div>
            ))}
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 flex justify-center">
            <div className="relative inline-block rounded-full border border-black/20 px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 lg:py-10">
                <img 
                  src={quwwaAlpro} 
                  alt="Quwwa Health + Alpro" 
                  className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute top-2 sm:top-3 md:top-4 right-4 sm:right-6 md:right-8 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700">TM</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentReturn;