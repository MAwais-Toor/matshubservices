import React from "react";
import { NavLink } from "react-router";
import "../../App.css"; // custom CSS for flip effect

const courses = [
  {
    title: "Basic Frontend Web Design",
    description: "Master HTML, CSS, Bootstrap & JavaScript",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbE9iTDizuPrByx-mnM3c-eRTS1sunxB2QVQ&s",
  },
  {
    title: "Advanced Frontend Web Design",
    description: "Learn React, Tailwind CSS & modern web practices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPInZP9AAakgy9V5kZxTs1YmETE4kfB_N4yA&s",
  },
  {
    title: "Full Stack Development",
    description:
      "Build robust APIs and web services with Node.js, Express, and MongoDB.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ffER9Ju8WV5C0aZ3g3vmOgDSsOCZ0t2Gbw&s",
  },
  {
    title: "WordPress Development",
    description:
      "Build and customize WordPress websites using themes and plugins.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhl7nPYBmrw3ruxByq6gEOr2Yy-Jym_gSHA&s",
  },
  {
    title: "Shopify Development",
    description: "Create and manage e-commerce stores using Shopify.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCm2BBdzLVrUnvg9DSylG0webPsNN7ydANA&s",
  },
  {
    title: "Facebook Ads & Marketing",
    description:
      "Create and manage Facebook ad campaigns to grow your business.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL1k5kzXRA31QVGdFy6ighhdGyk8qSWXsQw&s",
  },
  {
    title: "Graphic Design",
    description: "Learn the principles of design, typography, and color theory.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYt5jiyvNI3p4X6n9loQGAKNUZ_DqyyPTXEQ&s",
  },
  {
    title: "Digital Marketing",
    description:
      "Learn the principles of digital marketing, SEO, and social media strategies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8kPmFnh-6JW-O008vd-r7ljuteISKoKE4hA&s",
  },
  {
    title: "Client Handling & Freelancing",
    description:
      "Learn the principles of client management, communication, and freelancing strategies.",
    image:
      "https://img-c.udemycdn.com/course/750x422/6692735_3251.jpg",
  },
  {
    title: "Fiverr Gig Creation & Management",
    description:
      "Learn the principles of creating and managing gigs on Fiverr to attract clients.",
    image:
      "https://img-c.udemycdn.com/course/750x422/2906404_dead_3.jpg",
  },
  {
    title: "Hosting & Domain Management",
    description:
      "Learn the principles of hosting, domain management, and website deployment strategies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvQSMfwPY9YDUl6sUed9eWutgKL21YuBBHHMXPgyVXaZos4sCU3EOEgUxtiCe6a_RsEM&usqp=CAU",
  },
  {
    title: "Email Marketing",
    description:
      "Learn the principles of email marketing, list building, and campaign strategies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMmfS0dFoDPgC8RbsJ8IM-SF9WQLyo_L6eA&s",
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
            Gain real-world skills and advance your career with expert-led
            content.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <NavLink
              key={idx}
              to={`/courses/${idx}`} // 👈 apni route ke mutabiq update karna
              className="group perspective w-full h-64 block"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div
                  className="absolute inset-0 rounded-xl shadow-md overflow-hidden flex flex-col justify-center text-center backface-hidden transition duration-500 group-hover:scale-110 group-hover:blur-sm"
                  style={{
                    backgroundImage: `url(${course.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Lens Glare Effect */}
                  <div className="absolute inset-0 bg-radial-glare opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center px-4 relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white p-6 flex flex-col justify-center items-center text-center rotate-y-180 backface-hidden transition duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <p className="mb-4 text-sm">{course.description}</p>
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-md">
                    Learn More
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
