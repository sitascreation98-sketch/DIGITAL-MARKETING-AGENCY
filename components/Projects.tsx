import React, { useState, useEffect, useRef } from 'react';

const projectData = [
  { seed: 'project1', title: 'Creative Agency Website', category: 'DESIGN' },
  { seed: 'project2', title: 'E-commerce Platform', category: 'DEVELOPMENT' },
  { seed: 'project3', title: 'Future Management Development', category: 'MARKETING' },
  { seed: 'project4', title: 'Mobile App Design', category: 'UI/UX' },
  { seed: 'project5', title: 'Brand Identity', category: 'BRANDING' },
];

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % projectData.length);
    }, 4000); // Slide every 4 seconds
  };

  const handleUserInteraction = (index: number) => {
    setActiveIndex(index);
    startAutoSlide(); // Reset timer on interaction
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Run only on mount and unmount


  const getStyle = (index: number) => {
    const offset = index - activeIndex;
    const isCenter = offset === 0;

    return {
      transform: `translateX(${offset * 120}px) rotateY(${offset * -20}deg) scale(${isCenter ? 1.1 : 0.8})`,
      opacity: isCenter ? 1 : 0.5,
      zIndex: 5 - Math.abs(offset),
      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      cursor: 'pointer',
    };
  };

  const activeProject = projectData[activeIndex];

  return (
    <section className="py-24 bg-[#10052a] text-white fade-in-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-purple-400 font-semibold mb-2 flex items-center justify-center">
            <span className="w-3 h-3 bg-purple-700 rounded-full mr-2"></span> OUR WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Our Recently Completed Projects</h2>
        </div>
        <div className="mt-16 flex justify-center items-center h-96 relative" style={{ perspective: '1000px' }}>
          {projectData.map((project, index) => (
            <div
              key={project.seed}
              className="absolute w-64 rounded-3xl shadow-2xl"
              style={getStyle(index)}
              onClick={() => handleUserInteraction(index)}
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/350/450`}
                alt={project.title}
                className="w-full h-full object-cover rounded-3xl"
              />
              {index === activeIndex && (
                 <div className="absolute inset-0 bg-gradient-to-t from-purple-800 via-purple-800/50 to-transparent rounded-3xl"></div>
              )}
            </div>
          ))}
           {activeProject && <div className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 text-white text-center z-10 w-full transition-opacity duration-300">
              <p className="text-sm font-semibold text-orange-400">{activeProject.category}</p>
              <h3 className="text-xl font-bold">{activeProject.title}</h3>
            </div>}
        </div>
        <div className="flex justify-center mt-24 space-x-2">
          {projectData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleUserInteraction(index)}
              className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'}`}
              aria-label={`Go to project ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;