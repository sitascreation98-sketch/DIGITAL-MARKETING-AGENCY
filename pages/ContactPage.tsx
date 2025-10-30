import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      <Contact />
    </>
  );
};

export default ContactPage;
