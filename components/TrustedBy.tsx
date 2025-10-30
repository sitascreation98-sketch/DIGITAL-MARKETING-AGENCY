import React from 'react';

const TrustedBy: React.FC = () => {
  const logos = ['SOLUTION', 'CONSULTING', 'COMPANY', 'BRANDING', 'CREATIVE AGENCY', 'SOLLS'];

  return (
    <section className="py-12 bg-white fade-in-section">
      <div className="container mx-auto px-4 flex flex-wrap justify-around items-center gap-8">
        <h3 className="text-lg font-semibold text-gray-600 flex-shrink-0">Trusted By Top Companies</h3>
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center space-x-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <span className="font-bold text-gray-500">{logo}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
