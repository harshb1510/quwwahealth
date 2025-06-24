import React from 'react';
import backgroundImage from '../assets/images/AboutUs/image.png'; // Placeholder

const AboutHero = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
  };

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 lg:py-40 text-white text-center"
      style={heroStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[110%] tracking-[0%] mb-8 md:mb-12 lg:mb-16">About Us</p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[110%] tracking-[0%] mb-6 md:mb-8 lg:mb-12">Empowering Healthy Schools</p>
        <div className="max-w-8xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
            <p>
                Quwwa Health delivers school-based fitness, wellness, and preventive health programs designed to improve physical and mental well-being in students. We focus on early intervention, movement-based learning, and data-driven support aligned with the WHO Health-Promoting Schools framework.
            </p>
            <p>
                We also operate the Alpro Health & Fitness program, offering structured PE sessions, multi-sport coaching, and health assessments tailored for schools. Our programs support active lifestyles, improve student health outcomes, and fit seamlessly into academic settings.
            </p>
            <p>
                Quwwa Health is committed to building stronger, healthier school communities through evidence-based physical education and wellness solutions.
            </p>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <button className="bg-[#F3F25B] text-gray-900 font-bold text-lg sm:text-xl md:text-2xl py-3 sm:py-4 md:py-5 px-8 sm:px-10 md:px-12 rounded-sm hover:bg-[#F3F25B] transition-colors">
                See More
            </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;