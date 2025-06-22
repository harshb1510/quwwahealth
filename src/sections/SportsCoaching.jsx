import React from 'react';

const SportsCoaching = () => {
  return (
    <section className="py-20 bg-[#F7FBEF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
          
          <div className="flex flex-col items-start text-left">
            <div className="flex-grow">
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              Sports Coaching
              </h3>
              <p className="text-gray-600 text-md mb-8">
              Our expert coaching covers a range of sports, allowing students to enhance their abilities in: 
              </p>
              <div className="w-3/4 h-1 bg-[#F3F25B] my-6"></div>
             <ul className="text-gray-600 text-lg mb-8 list-disc list-inside">
              <li>Soccer</li>
              <li>Basketball</li>
              <li>Tennis</li>
              <li>Volleyball</li>
              <li>Baseball</li>
             </ul>
            </div>
            <button className="bg-[#F3F25B] text-gray-900 font-bold py-4 px-10 rounded-xl shadow-md hover:bg-yellow-400 transition-colors duration-300">
              View More
            </button>
          </div>

          <div className="flex flex-col items-start text-left">
            <div className="flex-grow">
              <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              Sports Day and Events
              </h3>
              <p className="text-gray-600 text-md mb-8">
              Sports Day and Events
              </p>
           
              <div className="w-3/4 h-1 bg-[#F3F25B] my-6"></div>
              <p className="text-gray-600 text-md mb-8">
              We also organize Sports Day programs and Inter-house matches to give children a platform to participate in competitive sports at multiple levels. These events not only foster team spirit but also provide a fun and engaging environment where students can showcase their talents. 
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

export default SportsCoaching; 