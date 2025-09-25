
import Services from '../components/Services'
import '../../App.css'

import useState from 'react'

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
          <div className="animated-border animate__animated animate__zoomIn animate__delay-1s">
            <span> We just released a new feature</span>
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 animate__animated animate__fadeInUp animate__delay-2s">
            Boost Your{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
              Productivity
            </span>
            ,<br />
            Simplify Your Life
          </h1>

          <p className="mt-6 text-lg glass-wave">
            We're here to simplify the intricacies of your life, providing a
            user-friendly platform that not only manages your tasks effortlessly
            but also enhances your overall efficiency.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center space-x-4 animate__animated animate__fadeInUp animate__delay-4s">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-semibold text-blue-600 hover:bg-blue-50">
              Preview Platform
            </button>
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

      <Services />
    </div>
  )
}

export default Home