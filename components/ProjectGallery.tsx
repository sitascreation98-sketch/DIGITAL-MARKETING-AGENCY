import React from 'react';

const projectData = [
  { seed: 'gallery1', title: 'Corporate Branding', category: 'Branding' },
  { seed: 'gallery2', title: 'Mobile App UI/UX', category: 'Design' },
  { seed: 'gallery3', title: 'E-commerce Store', category: 'Development' },
  { seed: 'gallery4', title: 'Social Media Campaign', category: 'Marketing' },
  { seed: 'gallery5', title: 'Content Strategy', category: 'Content' },
  { seed: 'gallery6', title: 'SEO Audit & Implementation', category: 'SEO' },
  { seed: 'gallery7', title: 'Product Photography', category: 'Branding' },
  { seed: 'gallery8', title: 'SaaS Platform Design', category: 'Design' },
];

const ProjectCard: React.FC<typeof projectData[0]> = ({ seed, title, category }) => (
  <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
    <img 
      src={`https://picsum.photos/seed/${seed}/500/500`} 
      alt={title} 
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <p className="text-sm font-semibold text-gray-200">{category}</p>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  </div>
);

const ProjectGallery: React.FC = () => {
  return (
    <section className="py-24 bg-white fade-in-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map(project => (
            <ProjectCard key={project.seed} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
