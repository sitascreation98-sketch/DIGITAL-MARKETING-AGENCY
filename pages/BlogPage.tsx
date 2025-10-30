import React from 'react';
import PageHeader from '../components/PageHeader';
import BlogList from '../components/BlogList';

const BlogPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Our Blog" breadcrumb="Blog" />
      <BlogList />
    </>
  );
};

export default BlogPage;
