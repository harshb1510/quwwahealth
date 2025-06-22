import React from 'react';

const CTA = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
            Building Healthy
            <br />
            Habits for Life!
          </h2>
          <p className="text-gray-600 text-lg">
            Let's Get you what you need!
          </p>
          <a
            href="#"
            className="bg-[#54BD95] text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA; 