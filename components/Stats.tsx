import React from 'react';
import { ProjectIcon, ResultIcon, MarketingIcon, CustomerIcon } from './icons';

const statsData = [
  { icon: <ProjectIcon />, value: "1230+", label: "Successful Projects" },
  { icon: <ResultIcon />, value: "98%", label: "Best Result Outcome" },
  { icon: <MarketingIcon />, value: "64%", label: "Cover Marketing" },
  { icon: <CustomerIcon />, value: "2890+", label: "Satisfied Customers" },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-[#10052a] py-20 text-white relative fade-in-section">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/statsbg/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="bg-purple-600/80 backdrop-blur-sm p-10 md:p-16 rounded-3xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {statsData.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center bg-white/10 p-6 rounded-2xl">
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <p className="text-4xl font-bold">{stat.value}</p>
                            <p className="text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center md:flex md:items-center md:justify-between">
                    <h2 className="text-4xl font-bold max-w-2xl mx-auto md:mx-0 md:text-left">We craft bold digital experiences that grow brands & turn ideas into impact.</h2>
                    <div className="mt-8 md:mt-0 flex-shrink-0 relative w-36 h-36 mx-auto md:mx-0">
                        <img src="https://svgshare.com/i/18e5.svg" alt="Since 1985" className="animate-spin" style={{ animationDuration: '20s' }}/>
                        <div className="absolute inset-0 flex items-center justify-center text-center font-bold text-lg">
                            SINCE <br/> 1985
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Stats;
