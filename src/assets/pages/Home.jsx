
import Services from '../components/Services'
import "animate.css";
import '../../App.css'

import useState from 'react'
import FaqsSection from '../components/FaqsSection'
import CourseSection from '../components/CourseSection'
import StateSection from '../components/StateSection'
import TeamSection from '../components/TeamSection';
import WhyChooseUs from '../components/WhyChooseUs';
import UniqueJourney from '../components/UniqueJourney';
import FeatureSection from '../components/FeatureSection';
import { NavLink } from 'react-router';

const Home = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative text-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://www.yoov.com/wp-content/uploads/2024/03/bg04-1440x900-1-768x480.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto animate__animated animate__fadeInUp">
          <div className="p-6">
            <div className="animated-border animate__animated animate__zoomIn animate__delay-1s">
              <span className="animate__animated animate__fadeInUp animate__delay-2s">
                 We just released a new feature
              </span>
            </div>
          </div>


          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 animate__animated animate__fadeInUp animate__delay-2s">
            Empower Your{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
              Business
            </span>
            <br />
            Accelerate Your Growth
          </h1>

          <p className="mt-6 text-lg glass-wave">
            We are dedicated to transforming complex digital challenges into seamless experiences, offering innovative tools and strategies that not only save time but also maximize efficiency and long-term success.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center space-x-4 animate__animated animate__fadeInUp animate__delay-4s">
            <NavLink to="/getstarted" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Get Started
            </NavLink>
            <NavLink to="/preview" className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-semibold text-blue-600 hover:bg-blue-50">
              Preview Platform
            </NavLink>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="relative z-10 mt-16 flex justify-center animate__animated animate__fadeInUp animate__delay-5s">
          <img
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg"
            alt="Dashboard Preview"
            className="rounded-2xl shadow-2xl border border-gray-200 w-[90%] md:w-[70%]"
          />
        </div>
      </section>
      {/* About Section */}
      <section className="bg-white text-gray-900 py-20 relative z-0">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
          {/* Left Image with overlays */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              About <span className="text-blue-600">MATsHub</span>
            </h2>
            <p className="text-lg text-slate-600 mb-1">
              At MATsHub, we deliver modern digital solutions that help businesses and individuals grow. From web development, e-commerce, and branding to digital marketing, education, and design, we provide strategies that combine creativity with technology.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Our mission is to empower people and businesses with the right tools to succeed in today’s competitive digital world.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">Creative Solutions</h4>
                  <p className="text-slate-600 text-sm">We craft unique websites, engaging designs, and effective marketing campaigns tailored to your goals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M12 4h9" />
                    <path d="M4 9h16" />
                    <path d="M4 15h16" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold">Trusted Partner</h4>
                  <p className="text-slate-600 text-sm">We work as your long-term digital partner, advertising, and online strategies.</p>
                </div>
              </div>
            </div>
          </div>


          {/* Right Content */}
          <div className="relative w-full">
            <img
              src="https://bootstrapmade.com/content/demo/Visible/assets/img/illustration/illustration-3.webp" // Replace with your own path
              alt="About Us"
              className="w-full rounded-lg relative z-10 shadow-md"
            />

            {/* Floating Block 1: Online Courses */}
            <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-lg animate-float z-30 text-sm md:text-base border border-gray-200">
              <p className="text-xs md:text-sm text-gray-500">Online Courses</p>
              <p className="text-lg md:text-xl font-bold">100+</p>
            </div>

            {/* Floating Block 2: Experience */}
            <div className="absolute bottom-4 right-4 bg-white/90 text-gray-800 px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-lg animate-float z-30 text-sm md:text-base border border-gray-200">
              <p className="text-xs md:text-sm text-gray-500">Years of Experience</p>
              <p className="text-lg md:text-xl font-bold">10+</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <Services />
      {/* Features Section */}
      <FeatureSection />
      {/* Course Section */}
      <CourseSection />
      {/* FAQs Section */}
      <FaqsSection />
      {/* Unique Section */}
      <UniqueJourney />
      {/* State Section */}
      <StateSection />
      {/* Team Section */}
      <TeamSection />
      {/* Why Choose Us Section */}
      <WhyChooseUs />

    </div>
  )
}

export default Home