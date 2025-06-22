import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { FiActivity, FiClock, FiCommand } from 'react-icons/fi';

const Rating = ({ rating, source, totalStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="text-center md:text-left">
      <div className="flex justify-center md:justify-start text-yellow-400 mb-2">
        {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} />)}
        {halfStar && <FaStarHalfAlt />}
        {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} />)}
      </div>
      <p className="font-semibold text-gray-800">{rating} / {totalStars} rating</p>
      <p className="text-sm font-bold text-[#A6A6A6]">{source}</p>
    </div>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
      {React.cloneElement(icon, { className: "text-2xl text-[#54BD95]" })}
    </div>
    <p className="text-gray-700 text-base font-medium w-full md:w-1/2">{text}</p>
  </div>
);


const Highlights = () => {
  const features = [
    {
      icon: <FiActivity />,
      text: 'Health reporting for early identification of health concerns',
    },
    {
      icon: <FiClock />,
      text: 'In-school PE and sports programs',
    },
    {
      icon: <FiCommand />,
      text: 'Sports coaching and Sports Day events',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F9F8FE]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-[50px] font-semibold leading-tight md:leading-[100%] tracking-[0%] text-gray-800 mb-12 md:mb-24">
              Program
              <br />
              Highlights
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <Rating rating={4.9} source="google.com" />
              <Rating rating={4.8} source="healthplatform" />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-10 md:space-y-16">
            {features.map((feature, index) => (
              <Feature key={index} icon={feature.icon} text={feature.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights; 