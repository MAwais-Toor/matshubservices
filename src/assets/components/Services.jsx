import { motion } from "framer-motion";
import "../../App.css"
import {
  Globe,
  Smartphone,
  Megaphone,
  ShoppingCart,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: Globe,
    desc: "Build blazing-fast, secure, and responsive websites tailored for your business.",
    features: ["SEO Optimized", "Responsive Design", "Fast Loading", "Secure"],
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg",
  },
  {
    id: 2,
    title: "Mobile Apps",
    icon: Smartphone,
    desc: "Design and develop engaging mobile applications for iOS and Android.",
    features: ["Native Apps", "Cross-Platform", "Smooth UI", "Secure APIs"],
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: Megaphone,
    desc: "Grow your brand with SEO, social media, and targeted ad campaigns.",
    features: ["SEO", "Social Ads", "Email Marketing", "Branding"],
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg",
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    desc: "Create powerful online stores with seamless checkout and payment integrations.",
    features: ["Online Stores", "Payment Gateway", "Secure Checkout", "Analytics"],
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg",
  },
];

export default function ServicesSection() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-gray-900 font-sans">
      {services.map((service, index) => (
        <section
          key={service.id}
          className="flex items-center justify-center sticky top-0 h-screen px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`w-full max-w-6xl backdrop-blur-xl bg-white/80 border border-gray-200 rounded-2xl 
                       p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center 
                       shadow-2xl transition-transform duration-500 hover:scale-[1.01] ${
                         index % 2 === 1 ? "md:flex-row-reverse" : ""
                       }`}
          >
            {/* Left Side */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <service.icon className="w-8 h-8 text-indigo-500" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg">{service.desc}</p>

              {/* Features */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-gray-800 font-medium text-sm sm:text-base">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {f}
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="mt-8 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 
                                 text-white rounded-full font-semibold shadow-lg 
                                 hover:opacity-90 transition">
                Get Started Now
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl p-4 sm:p-6 shadow-inner w-full">
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-lg shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
