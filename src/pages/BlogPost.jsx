import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allBlogPosts } from './Blogs'; // Assuming you export this from Blogs.jsx
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';

import authorImage from '../assets/images/AboutUs/team1.png'; // Placeholder author image

// You'll need to export allBlogPosts from Blogs.jsx
// export const allBlogPosts = [ ... ];

const BlogPost = () => {
  const { id } = useParams();
  const post = allBlogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Post not found!</h1>
        <Link to="/blogs" className="text-blue-500 mt-4 inline-block">Back to Blogs</Link>
      </div>
    );
  }

  // Enhanced mock data for this specific view
  const detailedPost = {
    ...post,
    category: 'Artificial Intelligence',
    author: {
      name: 'Tamás Hám-Szabó',
      title: 'Founder of SAAS First - the Best AI and Data-Driven Customer Engagement Tool.',
      bio: `With 11 years in SaaS, I've built MillionVerifier and SAAS First. Passionate about SaaS, data, and AI. Let's connect if you share the same drive for success!`,
      image: authorImage,
      linkedin: '#',
    },
    headings: [
      { id: 'exploring-generative-ai', title: 'Exploring Generative AI in Content Creation' },
      { id: 'steering-clear-of-pitfalls', title: 'Steering Clear of Common AI Writing Pitfalls' },
      { id: 'understanding-capabilities', title: 'Understanding ChatGPT Capabilities - Define Your Style' },
    ],
    content: `
      <h2 id="exploring-generative-ai" class="text-3xl font-bold mt-12 mb-4 scroll-mt-20">Exploring Generative AI in Content Creation</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Hello there! As a marketing manager in the SaaS industry, you might be looking for innovative ways to engage your audience. I bet generative AI has crossed your mind as an option for creating content. Well, let me share from my firsthand experience.</p>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">Google encourages high-quality blogs regardless of whether they're <a href="#" class="text-blue-600 underline">written by humans or created using artificial intelligence</a> like ChatGPT. Here's what matters: producing original material with expertise and trustworthiness based on Google E-E-A-T principles.</p>
      
      <h2 id="steering-clear-of-pitfalls" class="text-3xl font-bold mt-12 mb-4 scroll-mt-20">Steering Clear of Common AI Writing Pitfalls</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">This means focusing more on people-first writing rather than primarily employing AI tools to manipulate search rankings. There comes a time when many experienced professionals want to communicate their insights but get stuck due to limited writing skills – that's where <strong>Generative AI</strong> can step in.</p>
      
      <h2 id="understanding-capabilities" class="text-3xl font-bold mt-12 mb-4 scroll-mt-20">Understanding ChatGPT Capabilities - Define Your Style</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">So, together, we're going to explore how this technology could help us deliver valuable content without sounding robotic or defaulting into mere regurgitations of existing materials (spoiler alert – common pitfalls!). Hang tight - it'll be a fun learning journey!</p>
    `,
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#F3F6F1] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <main className="lg:col-span-2">
          {/* Featured Image and Title */}
          <div className="relative rounded-2xl overflow-hidden mb-12">
            <img src={detailedPost.image} alt={detailedPost.title} className="w-full h-auto md:h-[450px] object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="bg-purple-200 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">{detailedPost.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">{detailedPost.title}</h1>
              <p className="mt-3 text-gray-300">{detailedPost.date} • {detailedPost.readTime}</p>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: detailedPost.content }} />
        </main>

        {/* Sidebar */}
        <aside className="space-y-8 sticky top-24 h-screen">
            {/* Author Card */}
            <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4">
                    <img src={detailedPost.author.image} alt={detailedPost.author.name} className="w-20 h-20 rounded-full border-2 border-white"/>
                    <div>
                        <h3 className="font-bold text-xl">{detailedPost.author.name}</h3>
                        <a href={detailedPost.author.linkedin} className="text-blue-300 hover:text-white transition-colors"><FaLinkedinIn className="inline"/> Connect</a>
                    </div>
                </div>
                <p className="mt-4 text-blue-100 text-sm">{detailedPost.author.title}</p>
                <p className="mt-4 text-blue-100 text-sm">{detailedPost.author.bio}</p>
            </div>

            {/* Share Card */}
            <div className="bg-blue-800 text-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg">Share with your community!</h3>
                <div className="flex space-x-3 mt-4">
                    <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30"><FaFacebookF /></a>
                    <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30"><FaTwitter /></a>
                    <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30"><FaLinkedinIn /></a>
                </div>
            </div>

            {/* In this article */}
            <div className="p-6 rounded-2xl bg-white shadow-lg">
                <h3 className="font-bold text-lg mb-4">In this article</h3>
                <ul className="space-y-3">
                    {detailedPost.headings.map(heading => (
                        <li key={heading.id}>
                            <a 
                                href={`#${heading.id}`}
                                onClick={(e) => handleLinkClick(e, heading.id)}
                                className="text-[#848383] hover:text-blue-600 transition-colors font-medium border-l-2 border-transparent hover:border-blue-600 pl-3 block"
                            >
                                {heading.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>

      </div>
    </div>
  );
};

export default BlogPost; 