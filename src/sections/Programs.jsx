import React from 'react';

// Placeholder images - replace with your actual image paths
import image1 from '../assets/images/Programmes/image1.png';
import image2 from '../assets/images/Programmes/image2.png';
import image3 from '../assets/images/Programmes/image3.png';
import image4 from '../assets/images/Programmes/image4.png';


const programData = [
  {
    image: image1,
    title: 'Health Card Reporting System',
    description: 'Empowering decision making with data. Annual & Biannual Health Check-Ups. Ensuring continuous monitoring and timely interventions.',
  },
  {
    image: image2,
    title: 'In-School PE & Sports Programs',
    description: 'Structured PE and sports for developing mental and behavioral skills along with physical conditioning with periodic assessments.',
  },
  {
    image: image3,
    title: 'Sports Coaching & Sports Event',
    description: 'We believe every child deserves a chance to excel in sports, we provide Expert coaching in various sports so that Students develop gross motor skills, confidence, and a passion for sports through structured programs.',
  },
  {
    image: image4,
    title: 'Healthy Canteen',
    description: 'Promoting nutritious eating habits through school canteen options. Get Kids active and healthy again as the pandemic continues!',
  },
];

const ProgramCard = ({ image, title, description }) => (
  <div>
    <div className="bg-[#F9F9FF] rounded-2xl overflow-hidden mb-6 aspect-video">
      <img src={image} alt={title} className="w-full h-full object-contain" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-[#A6A6A6] text-base font-medium">{description}</p>
  </div>
);

const Programs = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-4xl md:text-[50px] font-semibold leading-tight md:leading-[100%] tracking-[0%] text-gray-800 text-center mb-12 md:mb-24">
          Our Programs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {programData.map((program, index) => (
            <ProgramCard
              key={index}
              image={program.image}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs; 