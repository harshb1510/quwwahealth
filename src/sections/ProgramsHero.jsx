import React from 'react';
import backgroundImage from '../assets/images/OurProgrammes/image.png';

const ProgramsHero = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
  };

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 text-white text-center"
      style={heroStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-4xl md:text-[96px] font-bold mb-4">Our Programs</p>
        <p className="max-w-3xl mx-auto text-lg md:text-2xl mb-8 font-medium">
          From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.
        </p>
        <button className="bg-[#F3F25B] text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors">
          See More
        </button>
      </div>
    </section>
  );
};

export default ProgramsHero; 