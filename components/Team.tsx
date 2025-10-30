import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './icons';

const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', imageSeed: 'team1' },
    { name: 'Jane Smith', role: 'Creative Director', imageSeed: 'team2' },
    { name: 'Mike Johnson', role: 'Lead Developer', imageSeed: 'team3' },
    { name: 'Emily Brown', role: 'Marketing Head', imageSeed: 'team4' },
];

const TeamMemberCard: React.FC<typeof teamMembers[0]> = ({ name, role, imageSeed }) => (
    <div className="group relative text-center">
        <div className="overflow-hidden rounded-3xl">
            <img src={`https://picsum.photos/seed/${imageSeed}/400/500`} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-2xl text-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-gray-800">{name}</h4>
            <p className="text-purple-600">{role}</p>
            <div className="flex justify-center space-x-3 mt-3 text-gray-500">
                <a href="#" className="hover:text-purple-600"><FacebookIcon /></a>
                <a href="#" className="hover:text-purple-600"><TwitterIcon /></a>
                <a href="#" className="hover:text-purple-600"><InstagramIcon /></a>
                <a href="#" className="hover:text-purple-600"><LinkedinIcon /></a>
            </div>
        </div>
    </div>
);

const Team: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 fade-in-section">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-purple-600 font-semibold mb-2 flex items-center justify-center">
                        <span className="w-3 h-3 bg-purple-200 rounded-full mr-2"></span> OUR TEAM
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Meet Our Professional Experts</h2>
                </div>
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map(member => (
                        <TeamMemberCard key={member.name} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
