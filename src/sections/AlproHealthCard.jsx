import React from 'react';
import cardImage from '../assets/images/OurProgrammes/card.png';

const AlproHealthCard = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 via-green-50 to-white">
      <div className="container mx-auto flex justify-center">
        <div className="w-full rounded-3xl shadow-xl bg-white flex flex-col md:flex-row items-center gap-10 md:gap-16 p-6 md:p-12 relative overflow-hidden">
          {/* Left Column */}
          <div className="md:w-1/2 z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Alpro Health Card<br />Reporting System
            </h2>
            <p className="text-lg font-medium text-gray-700 mb-2">Empowering decision making with data</p>
            <p className="text-gray-600 mb-8">
              A structured health monitoring system that tracks children's growth and physical development. Parents and schools receive detailed health reports with actionable insights.
            </p>
            <button className="border-2 border-blue-600 text-blue-600 font-semibold rounded-lg px-6 py-3 hover:bg-blue-50 transition-colors">
              Sign up now
            </button>
          </div>
          {/* Right Column with SVG background */}
          <div className="md:w-1/2 relative flex justify-center items-center w-full h-full min-h-[350px]">
            {/* SVG Background */}
            <div className="absolute -inset-12 flex justify-center items-center z-0 pointer-events-none">
              <svg width="713" height="627" viewBox="0 0 713 627" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect y="471.948" width="666.284" height="217.934" transform="rotate(-45 0 471.948)" fill="#FDE68A"/>
                <rect opacity="0.75" x="458" y="454" width="74" height="74" rx="30" fill="#A21CAF"/>
                <rect opacity="0.75" x="55" y="159" width="90" height="90" rx="30" fill="#B45309"/>
                <rect opacity="0.75" x="513" y="46" width="59" height="60" rx="29.5" fill="#0369A1"/>
                <rect opacity="0.75" x="495" y="375" width="218" height="218" rx="50" fill="#0540F2"/>
              </svg>
            </div>
            {/* Card Image */}
            <div className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden">
              <img src={cardImage} alt="Alpro Health Card" className="w-full h-auto object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlproHealthCard; 