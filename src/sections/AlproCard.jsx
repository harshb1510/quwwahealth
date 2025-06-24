import React from 'react';
import cardImage from '../assets/images/OurProgrammes/card1.png';
import { useNavigate } from 'react-router-dom';

const AlproCard = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 via-green-50 to-white">
      <div className="container mx-auto flex justify-center min-h-[400px] lg:min-h-[600px] xl:min-h-[700px]">
        <div className="w-full rounded-3xl shadow-xl bg-white flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 p-6 sm:p-8 md:p-12 lg:p-16 relative">
          {/* Left Column */}
          <div className="md:w-1/2 z-10">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
              In-School PE & <br />  Sports Programs
            </p>

            <p className="text-[#848383] text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed">
              Our structured PE and sports programs focus on
              developing students' mental and behavioral skills while
              enhancing their physical conditioning. We conduct regular
              assessments to track progress, ensuring every student
              benefits from the program.
              This is a scalable and sustainable solution for engaging
              students in physical activity and sports, promoting fitness
              and overall health.
            </p>
            <button className="border-2 border-blue-600 text-blue-600 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 hover:bg-blue-50 transition-all duration-300 hover:scale-105" onClick={() => navigate('/auth?mode=signup')}>
              Sign up now
            </button>
          </div>
          {/* Right Column with SVG background */}
          <div className="md:w-1/2 relative flex justify-center items-center w-full h-full min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
            {/* SVG Background */}
            <div className="absolute -bottom-2 flex justify-center items-end z-0 pointer-events-none">
              <svg width="713" height="627" viewBox="0 0 713 627" fill="none" xmlns="http://www.w3.org/2000/svg" 
                   className="w-full h-full transform scale-110 transition-transform duration-500">
                <rect y="471.948" width="666.284" height="217.934" transform="rotate(-45 0 471.948)" fill="#FDE68A" />
                <rect opacity="0.75" x="458" y="454" width="74" height="74" rx="30" fill="#A21CAF" />
                <rect opacity="0.75" x="55" y="159" width="90" height="90" rx="30" fill="#B45309" />
                <rect opacity="0.75" x="513" y="46" width="59" height="60" rx="29.5" fill="#0369A1" />
                <rect opacity="0.75" x="495" y="375" width="218" height="218" rx="50" fill="#0540F2" />
              </svg>
            </div>
            {/* Card Image */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl rounded-2xl overflow-hidden mt-8 transition-transform duration-300 hover:scale-105">
              <img src={cardImage} alt="Alpro Sports Programs" className="w-full h-auto object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlproCard;