import React from 'react';

const ExpertCoaching = () => {
  return (
    <section className="py-20 bg-[#F7FBEF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
          
          <div className="flex flex-col items-start text-left">
            <div className="flex-grow">
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                Expert Coaching & Aligned Curriculum
              </h3>
              <div className="w-40 h-1 bg-[#F3F25B] my-6"></div>
              <p className="text-gray-600 text-lg mb-8">
                Our coaches are experts in working with children across multiple sports. They tailor their programs to meet the standards of the USA PE curriculum, creating a customized experience for your school. The science-backed curriculum encourages fitness through fun, engaging activities that foster healthy minds and bodies. We integrate physical activity into active classrooms and recess, ensuring comprehensive development.
              </p>
            </div>
            <button className="bg-[#F3F25B] text-gray-900 font-bold py-4 px-10 rounded-xl shadow-md hover:bg-yellow-400 transition-colors duration-300">
              View More
            </button>
          </div>

          <div className="flex flex-col items-start text-left">
            <div className="flex-grow">
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                Flexible Options: Regular or <br/> One-Off Programs
              </h3>
              <div className="w-40 h-1 bg-[#F3F25B] my-6"></div>
              <p className="text-gray-600 text-lg mb-8">
                Our programs can be implemented as a long-term solution throughout the academic year or as a one-time experience. We leave schools with a sustainable program that can be carried forward each term, allowing students to continue learning, growing, and staying active.
              </p>
            </div>
            <button className="bg-[#F3F25B] text-gray-900 font-bold py-4 px-10 rounded-xl shadow-md hover:bg-yellow-400 transition-colors duration-300">
              View More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertCoaching; 