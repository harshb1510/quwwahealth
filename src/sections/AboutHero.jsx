import React from 'react';
import backgroundImage from '../assets/images/AboutUs/image.png'; // Placeholder

const AboutHero = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
  };

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 text-white text-center"
      style={heroStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[96px] md:text-[96px] font-bold leading-[100%] tracking-[0%] mb-12">About Us</p>
        <p className="text-[45px] md:text-[40px] font-semibold leading-[100%] tracking-[0%] mb-8">Empowering Healthy Schools</p>
        <div className="max-w-6xl mx-auto space-y-6 text-lg md:text-xl font-medium">
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
        <div className="mt-12">
            <button className="bg-[#F3F25B] text-gray-900 font-bold py-3 px-8 rounded-sm hover:bg-[#F3F25B] transition-colors">
                See More
            </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 