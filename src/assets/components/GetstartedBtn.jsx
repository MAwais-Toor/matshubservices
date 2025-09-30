import React from "react";
import { motion } from "framer-motion";
import { Code, ShoppingCart, Megaphone, Smartphone } from "lucide-react"; // icons

const GetStartedBtn = () => {
  const services = [
    {
      title: "Custom Website Development",
      desc: "Build modern, scalable, and responsive websites tailored to your needs.",
      icon: <Code className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "E-Commerce Solutions",
      desc: "Powerful online stores with Shopify, WooCommerce, or custom solutions.",
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Digital Marketing",
      desc: "Boost your business with SEO, ads, and social media strategies.",
      icon: <Megaphone className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Mobile App Development",
      desc: "iOS & Android apps with seamless performance and engaging UI.",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    },
  ];

  const courses = [
    {
      title: "Frontend Web Design",
      desc: "Learn HTML, CSS, JS and responsive UI design.",
      img: "https://img-c.udemycdn.com/course/750x422/6692735_3251.jpg",
    },
    {
      title: "React & Tailwind Mastery",
      desc: "Modern frontend development with React & Tailwind.",
      img: "https://img-c.udemycdn.com/course/750x422/2906404_dead_3.jpg",
    },
    {
      title: "Backend with Node.js",
      desc: "Build APIs and services with Node.js & MongoDB.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvQSMfwPY9YDUl6sUed9eWutgKL21YuBBHHMXPgyVXaZos4sCU3EOEgUxtiCe6a_RsEM&usqp=CAU",
    },
  ];

  const team = [
    { name: "Muhammad Awais", role: "Founder & Lead Developer" },
    { name: "Ali Khan", role: "UI/UX Designer" },
    { name: "Sara Ahmed", role: "Frontend Engineer" },
    { name: "Bilal Hassan", role: "Backend Engineer" },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className=" flex flex-col justify-center items-center text-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent"
        >
          Let’s Get Started  
        </motion.h1>
        <p className="mt-6 text-lg max-w-2xl text-gray-600">
          Explore our professional services, in-demand courses, and meet our
          dedicated team.
        </p>
        <a
          href="#services"
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-700 transition"
        >
          Explore Now
        </a>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{srv.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{srv.title}</h3>
              <p className="text-gray-600 text-sm">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Popular Courses
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl shadow text-center"
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GetStartedBtn;
