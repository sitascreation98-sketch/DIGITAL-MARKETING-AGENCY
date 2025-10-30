import React from 'react';
import { ArrowRightIcon, PhoneIcon } from './icons';

const Contact: React.FC = () => {
  // The form will now submit to the user's provided Formspree endpoint.
  const FORM_ENDPOINT = "https://formspree.io/f/mvgvbawb";

  return (
    <section className="py-24 bg-[#10052a] text-white overflow-hidden relative fade-in-section">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/contactbg/1920/1080')] bg-no-repeat bg-cover opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-400 font-semibold mb-2 flex items-center"><span className="w-3 h-3 bg-purple-700 rounded-full mr-2"></span> CONTACT US</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Get in Touch</h2>
            <form action={FORM_ENDPOINT} method="POST" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Your Name" required className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 focus:ring-purple-500 focus:border-purple-500" />
              <input type="email" name="email" placeholder="Email Address" required className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 focus:ring-purple-500 focus:border-purple-500" />
              <input type="text" name="subject" placeholder="Subject" required className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 focus:ring-purple-500 focus:border-purple-500" />
              <input type="tel" name="phone" placeholder="Phone" className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 focus:ring-purple-500 focus:border-purple-500" />
              <textarea name="message" placeholder="Write a Message" rows={5} required className="md:col-span-2 bg-gray-800/50 border border-gray-700 rounded-lg p-4 focus:ring-purple-500 focus:border-purple-500"></textarea>
              <div className="md:col-span-2">
                <button type="submit" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
                  <span>SEND A MESSAGE</span>
                  <ArrowRightIcon />
                </button>
              </div>
            </form>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/contactteam/600/500" alt="Team collaborating" className="rounded-3xl w-full" />
            <div className="absolute -bottom-12 -left-12 flex items-center space-x-4">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <PhoneIcon className="w-8 h-8" />
              </div>
              <div>
                <p className="font-semibold text-gray-300">Call us anytime</p>
                <p className="text-2xl font-bold">+92 526 420 009</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;