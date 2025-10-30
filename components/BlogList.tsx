import React from 'react';
import { ArrowRightIcon } from './icons';

const blogPosts = [
    { 
        imageSeed: 'blog1',
        category: 'Marketing',
        date: 'July 15, 2024',
        author: 'Admin',
        title: 'Top 10 Digital Marketing Trends to Watch in 2025',
        excerpt: 'The digital landscape is ever-evolving. Stay ahead of the curve with these upcoming trends that will shape...'
    },
    { 
        imageSeed: 'blog2',
        category: 'Design',
        date: 'July 10, 2024',
        author: 'Jane Smith',
        title: 'The Psychology of Color in Branding and Web Design',
        excerpt: 'Colors evoke emotions and can significantly impact user perception. Learn how to choose the right palette for your brand...'
    },
    { 
        imageSeed: 'blog3',
        category: 'Development',
        date: 'July 05, 2024',
        author: 'Mike Johnson',
        title: 'Headless CMS: The Future of Web Development?',
        excerpt: 'Decoupling your frontend from your backend offers unprecedented flexibility. We explore the pros and cons...'
    },
    { 
        imageSeed: 'blog4',
        category: 'SEO',
        date: 'June 28, 2024',
        author: 'Admin',
        title: 'Understanding Google\'s Core Web Vitals for Better SEO',
        excerpt: 'Page experience is now a critical ranking factor. Here\'s what you need to know about LCP, FID, and CLS to boost your rankings...'
    },
    { 
        imageSeed: 'blog5',
        category: 'Content',
        date: 'June 22, 2024',
        author: 'Emily Brown',
        title: 'How to Create a Content Strategy That Actually Converts',
        excerpt: 'Content is king, but only if it drives results. Follow our step-by-step guide to building a conversion-focused strategy...'
    },
    { 
        imageSeed: 'blog6',
        category: 'Branding',
        date: 'June 17, 2024',
        author: 'John Doe',
        title: 'Building a Brand Story That Resonates With Your Audience',
        excerpt: 'Your brand is more than just a logo. It\'s a story. Learn how to craft a compelling narrative that connects with customers...'
    },
];

const BlogPostCard: React.FC<typeof blogPosts[0]> = ({ imageSeed, category, date, author, title, excerpt }) => (
    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="overflow-hidden">
            <img src={`https://picsum.photos/seed/${imageSeed}/500/300`} alt={title} className="w-full h-full object-cover"/>
        </div>
        <div className="p-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                <span className="text-purple-600 font-semibold">{category}</span>
                <span>/</span>
                <span>{date}</span>
                <span>/</span>
                <span>By: {author}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 leading-tight mb-4">{title}</h3>
            <p className="text-gray-600 mb-6">{excerpt}</p>
            <button className="text-orange-500 font-semibold flex items-center space-x-2 group">
                <span>READ MORE</span> <ArrowRightIcon className="group-hover:translate-x-1 transition-transform"/>
            </button>
        </div>
    </div>
);


const BlogList: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 fade-in-section">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <BlogPostCard key={post.title} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;
