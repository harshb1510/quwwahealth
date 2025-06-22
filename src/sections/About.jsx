import React from 'react';
import CheckIcon from '../components/CheckIcon';
import aboutImage from '../assets/images/About/image.png';
import amandaImage from '../assets/images/About/image1.png'; // Placeholder for Amanda

const About = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-green-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-[50px] font-semibold leading-tight md:leading-[100%] tracking-[0%] text-gray-800 mb-8 md:mb-12 w-full md:w-3/4">
              Health & Fitness Reporting System
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-600">
                <CheckIcon className="mr-3 flex-shrink-0" />
                <span className="text-base font-medium">Empowering decision making with data.</span>
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <CheckIcon className="mr-3 flex-shrink-0" />
                <span className="text-base font-medium">Annual & Biannual Health Check-Ups</span>
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <CheckIcon className="mr-3 flex-shrink-0" />
                <span className="text-base font-medium">Ensuring continuous monitoring and timely interventions</span>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
            <img
              src={aboutImage}
              alt="Health and Fitness Reporting"
              className="rounded-2xl shadow-2xl w-full max-w-md md:h-[500px] object-cover"
            />
            {/* Amanda Young Card */}
            <div className="hidden md:flex absolute top-8 -left-12 bg-white p-3 rounded-2xl shadow-xl items-center gap-3 w-auto z-10">
              <img
                src={amandaImage}
                alt="Amanda Young"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-grow">
                <p className="font-bold text-gray-800">Amanda Young</p>
                <p className="text-sm text-gray-500">Expert</p>
              </div>
              <div className="bg-[#54BD95] p-2 rounded-full text-white ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.745A9.953 9.953 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            {/* Image Icon Card */}
            <div className="hidden md:block absolute bottom-16 -left-8 bg-[#54BD95] p-3 rounded-xl text-white shadow-lg z-10">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_9845)">
                  <path d="M16.1876 3.74049L4.91847 6.76004C4.02936 6.99828 3.50172 7.91217 3.73996 8.80128L6.75951 20.0704C6.99775 20.9595 7.91165 21.4872 8.80076 21.2489L20.0699 18.2294C20.959 17.9911 21.4866 17.0772 21.2484 16.1881L18.2288 4.919C17.9906 4.02989 17.0767 3.50225 16.1876 3.74049Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.24581 11.6396C9.91264 11.461 10.3084 10.7755 10.1297 10.1087C9.95102 9.44187 9.2656 9.04614 8.59876 9.22482C7.93193 9.40349 7.5362 10.0889 7.71488 10.7557C7.89356 11.4226 8.57898 11.8183 9.24581 11.6396Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.3859 12.9683L15.2828 10.022L8.80097 21.2489" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1_9845">
                    <rect width="20" height="20" fill="white" transform="translate(0.24707 5.42334) rotate(-15)" />
                  </clipPath>
                </defs>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 