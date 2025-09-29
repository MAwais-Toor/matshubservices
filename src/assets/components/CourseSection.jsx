import React from 'react';
import "../../App.css";

const courses = [
  {
    title: 'Basic Frontend Web Design',
    description: 'Master HTML, CSS, Bootstrap & JavaScript',
  },
  {
    title: 'Advanced Frontend Web Design',
    description: 'Learn React, Tailwind CSS & modern web practices.',
  },
  {
    title: 'Full Stack Development',
    description: 'Build robust APIs and web services with Node.js, Express, and MongoDB.',
  },
  {
    title: 'WordPress Development',
    description: 'Build and customize WordPress websites using themes and plugins.',
  },
  {
    title: 'Shopify Development',
    description: 'Create and manage e-commerce stores using Shopify.',
  },
  {
    title: 'Facebook Ads & Marketing',
    description: 'Create and manage Facebook ad campaigns to grow your business.',
  },
  {
    title: 'Graphic Design',
    description: 'Learn the principles of design, typography, and color theory.',
  },
  {
    title: 'Digital Marketing',
    description: 'Learn the principles of digital marketing, SEO, and social media strategies.',
  },
  {
    title: 'Client Handling & Freelancing',
    description: 'Learn the principles of client management, communication, and freelancing strategies.',
  },
  {
    title: 'Fiverr Gig Creation & Management',
    description: 'Learn the principles of creating and managing gigs on Fiverr to attract clients.',
  },
  {
    title: 'Hosting & Domain Management',
    description: 'Learn the principles of hosting, domain management, and website deployment strategies.',
  },
  {
    title: 'Email Marketing',
    description: 'Learn the principles of email marketing, list building, and campaign strategies.',
  },
];

const CourseSection = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              Advanced Level Courses
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Gain real-world skills and advance your career with expert-led content.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="relative group p-6 rounded-xl bg-white border border-gray-200 hover:border-sky-500 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Accent Glow */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-sky-400 to-blue-500 opacity-20 blur-2xl rounded-full group-hover:scale-125 transition duration-500 z-0"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <button className="mt-auto bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
