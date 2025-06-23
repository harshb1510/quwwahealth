import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-3xl md:text-[50px] font-semibold text-gray-800 text-center md:text-left">
            Building Healthy
            <br />
            Habits for Life!
          </p>
          <p className="text-[#848383] text-lg">
            Let's Get you what you need!
          </p>
          <Link
            to="/auth"
            className="bg-[#54BD95] text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 