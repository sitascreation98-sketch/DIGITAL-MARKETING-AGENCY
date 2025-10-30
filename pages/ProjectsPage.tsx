import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectGallery from '../components/ProjectGallery';
import Contact from '../components/Contact';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Our Projects" breadcrumb="Projects" />
      <ProjectGallery />
      <Contact />
    </>
  );
};

export default ProjectsPage;
