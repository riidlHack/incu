import React, { useState, useEffect, useRef } from 'react';

// Mock data for the timeline events
const timelineEvents = [
  { 
    date: '⚙️31 July – 1 Aug',
    title: 'Domain and Problem Statements Released',
    description: 'Registrations Open PPT submission and voice over ',
  },
  {
    date: '🧠 31st August',
    title: ' Idea Submission Deadline',
    description: 'Registration Closes (Can be extended if needed)',
  },
  {
    date: '🎯2nd Week of September',
    title: 'Announcement of Shortlisted Teams',
    description: " Round 1 Grand Finale Teams Announced",
  },
  {
    date: '🎓 3rd Week of September',
    title: 'Optional Mentoring Rounds',

  },
  {
    date: '🏁 4th – 5th October 2025.',
    title: 'Hackathon Day (On-Ground Event)',
  },
];

/**
 * TimelineItem Component
 * Renders a single event item in the timeline.
 * It handles responsive layout: alternating left/right on desktop, single column on mobile.
 * Adds a scroll-triggered fade-in and slide-up animation.
 * @param {object} props - Component props
 * @param {string} props.date - The date of the event
 * @param {string} props.title - The title of the event
 * @param {string} props.description - The description of the event
 * @param {boolean} props.isLeft - Determines if the content block is on the left side for desktop view
 */
const TimelineItem = ({ date, title, description, isLeft }) => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility for animation
  const domRef = useRef(); // Ref to attach to the DOM element

  useEffect(() => {
    // Create a new Intersection Observer
    const observer = new IntersectionObserver(entries => {
      // If the entry is intersecting (i.e., visible in the viewport)
      if (entries[0].isIntersecting) {
        setIsVisible(true); // Set isVisible to true to trigger animation
        observer.unobserve(domRef.current); // Stop observing once visible
      }
    }, {
      threshold: 0.3 // Trigger when 30% of the item is visible
    });

    // Start observing the current DOM element
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    // Cleanup function: disconnect the observer when the component unmounts
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      ref={domRef} // Attach the ref to this div
      className={`relative mb-8 last:mb-0 transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} // Apply animation classes
    >
      {/* Desktop layout: Hidden on small screens */}
      <div className="hidden md:flex items-center w-full">
        {/* Left content block */}
        <div className={`w-1/2 ${isLeft ? 'pr-12' : ''}`}>
          {isLeft && (
            // <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-lg shadow-lg border border-gray-200 w-full ml-4">
            <div className='p-6 rounded-3xl shadow-lg border border-neon-green/30 w-full ml-4 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer bg-[#0a0a0a] py-12 glow-desktop-hover'>
              <p className="text-sm text-[#00ffb7] mb-2 font-bold">{date}</p>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-700 text-sm">{description}</p>
            </div>
          )}
        </div>

        {/* Central circle indicator for desktop */}
        <div className="w-4 h-4 bg-[#adff33] rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 border-2 border-white shadow-md"></div>

        {/* Right content block */}
        <div className={`w-1/2 ${!isLeft ? 'pl-4' : ''}`}>
          {!isLeft && (
            <div className='p-6 rounded-3xl shadow-lg border border-neon-green/30 w-full ml-4 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer relative bg-[#0a0a0a] py-12 glow-desktop-hover'>
              <p className="text-sm text-[#00ffb7] mb-2 font-bold">{date}</p>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
              {/* Glowing shadow effect for desktop right block on hover */}
              <style>{`
                .glow-desktop-hover {
                  transition: box-shadow 0.3s ease;
                }
                .glow-desktop-hover:hover {
                  box-shadow: var(--shadow-hover), inset 0 0 60px hsl(var(--neon-green) / 0.1);
                }
              `}</style>
              <div className="glow-desktop-hover absolute inset-0 rounded-xl pointer-events-none" />
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout: Hidden on large screens */}
      <div className="md:hidden flex items-start w-full relative pl-8">
        {/* Mobile vertical line (part of the overall timeline line) */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500 ml-4"></div>
        {/* Mobile circle indicator */}
        <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-2.5 top-0 transform -translate-y-1/2 z-10 border-2 border-white shadow-md"></div>

        {/* Mobile content block */}
        <div className="p-6 rounded-3xl shadow-lg border border-[#2A7B9B] w-full ml-4 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer relative bg-[#0a0a0a] py-12 glow-desktop-hover ">
          <p className="text-sm text-[#51c2ee] mb-2 font-bold">{date}</p>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
          {/* Glowing shadow effect */}
          <style>{`
            .glow-mobile-hover {
              box-shadow: 0 0 30px 10px rgba(0,255,255,0.5), 0 0 60px 20px rgba(0,255,255,0.2);
            }
          `}</style>
          <div className="glow-mobile absolute inset-0 rounded-xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

/**
 * App Component
 * The main component that renders the entire vertical timeline.
 */
function ScheduleSection() {
  return (
  <div className="">
      <div className="container mx-auto px-4 max-w-4xl ">
        <div className='flex justify-center items-center mb-8'>
  <h1
  className="neon-text font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
  TIMELINE
</h1>


         </div>
        <div className="relative">
          {/* Desktop central vertical line: Hidden on small screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white h-full"></div>

          {/* Render each timeline event */}
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              isLeft={index % 2 === 0} // Alternate content position for desktop
            />
            
        
          ))}
        </div>
      </div>
    </div>
  );
}


export default ScheduleSection;
