import React from "react";
import { Star, Rocket, ThumbsUp, Shield } from "lucide-react";

const highlights = [
  {
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    title: "Proven Expertise",
    desc: "Years of experience in web development, marketing, and design.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "Fast Execution",
    desc: "We deliver high-quality solutions on time without compromise.",
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-green-500" />,
    title: "Client Satisfaction",
    desc: "Over 95% of our clients return for repeat projects.",
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-500" />,
    title: "Reliable Support",
    desc: "Get ongoing support and guidance to keep your business growing.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background subtle shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Why Choose <span className="text-blue-600">Us?</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We don’t just provide services — we provide experiences that transform your business.  
          Here’s why our clients love working with us.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg border border-gray-200
                         hover:shadow-2xl hover:scale-[1.05] transition-all duration-500"
              style={{ animation: `fadeSlide 0.6s ease ${i * 0.2}s both` }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
