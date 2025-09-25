import React from 'react';
import "../../App.css";

export default function About() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            About <span className="text-indigo-600">MATsHub</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We are committed to delivering innovative digital solutions — from web development 
            and branding to education and business growth. Our mission is to empower individuals 
            and businesses with modern tools and strategies to thrive in today’s digital world.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <h4 className="text-slate-900 font-semibold">Creative Solutions</h4>
                <p className="text-slate-600 text-sm">We provide modern, unique, and result-driven strategies.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M12 4h9" />
                  <path d="M4 9h16" />
                  <path d="M4 15h16" />
                </svg>
              </div>
              <div>
                <h4 className="text-slate-900 font-semibold">Trusted Partner</h4>
                <p className="text-slate-600 text-sm">Collaborating with clients for long-term growth.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="About us"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg">
            5+ Years of Experience
          </div>
        </div>
      </div>
    </section>
  );
}
