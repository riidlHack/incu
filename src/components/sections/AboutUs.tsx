import React from 'react';
import riidlAbout from "../../image/riidl_about.jpeg";
import workshopImage from "../../image/workshop_riidl.jpg";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      
      {/* Title is responsive: text size changes on medium screens and up */}
      <h1 className="neon-text font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 text-center">About us</h1>

      {/* Main glass panel container is responsive: max width on large screens */}
      <div className="glass-panel mx-auto max-w-6xl p-8 lg:p-12 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer hover-glow hover-glow:hover">
        
        

        {/* Text section */}
        <div className="text-gray-200 text-center">
          {/* Headings are responsive: text size changes on medium screens and up */}
          <h3 className="font-heading text-2xl text-neon-green mb-4">
            Incubating Innovation at riidl Somaiya Vidyavihar University
          </h3>
          
          {/* Paragraph text is responsive: text size changes on medium screens and up */}
          <p className="font-sans text-base md:text-lg leading-relaxed mb-6">
            <strong className="text-neon-green">riidl (Research Innovation Incubation Design Labs) SVU </strong>is the premier technology business incubator at Somaiya Vidyavihar University. We are dedicated to transforming raw ideas into successful startups by providing a robust ecosystem.
          </p>

          {/* Headings are responsive: text size changes on medium screens and up */}
          <h3 className="font-heading text-2xl text-neon-green mb-4">What We Offer</h3>
          
          {/* Paragraph text is responsive: text size changes on medium screens and up */}
          <p className="font-sans text-base md:text-lg leading-relaxed">
            Our program offers a nurturing environment with expert mentors, specialized labs for prototyping, and a clear pathway to funding. We help you build and validate your MVP, secure government grants and seed funds, and connect with strategic investors to scale your venture.
          </p>
        </div>

        {/* Images section: switches from a column layout on small screens to a row layout on small screens and up */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <img 
            src={riidlAbout}
            alt="Conference at riidl"
            // Images are full width on mobile, and half width on small screens and up
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover h-54 my-4"
          />
          <img
            src={workshopImage}
            alt="riidl Workshop"
            // Images are full width on mobile, and half width on small screens and up
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover h-54 my-4"
          />
        </div>
      </div>
    </section>
  );
};

export default About;



