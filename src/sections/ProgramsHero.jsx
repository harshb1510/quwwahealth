import React from 'react';
import backgroundImage from '../assets/images/OurProgrammes/image.png';

const ProgramsHero = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
    backgroundAttachment: 'fixed',
  };

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-24 md:py-32 lg:py-40 text-white text-center"
      style={heroStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight">
          Our Programs
        </p>
        <p className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 font-medium leading-relaxed">
          From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.
        </p>
        <button className="bg-[#F3F25B] text-gray-900 font-bold text-base sm:text-lg md:text-xl lg:text-2xl py-3 sm:py-4 md:py-5 lg:py-6 px-8 sm:px-10 md:px-12 lg:px-16 rounded-md hover:bg-yellow-500 transition-all duration-300 hover:scale-105 transform-gpu shadow-lg hover:shadow-xl">
          See More
        </button>
      </div>
    </section>
  );
};

export default ProgramsHero; 