import React from "react";
import { BookOpen, Video, FileText, Link } from "lucide-react";

const courses = [
  {
    title: "Basic Frontend Web Design",
    description: "Master HTML, CSS, Bootstrap & JavaScript.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbE9iTDizuPrByx-mnM3c-eRTS1sunxB2QVQ&s",
    resources: [
      { type: "Guide", title: "HTML & CSS Handbook", icon: <BookOpen className="w-5 h-5" />, link: "#" },
      { type: "Video", title: "JavaScript Crash Course", icon: <Video className="w-5 h-5" />, link: "#" },
      { type: "PDF", title: "Bootstrap Quick Guide", icon: <FileText className="w-5 h-5" />, link: "#" },
    ],
  },
  {
    title: "Advanced Frontend Web Design",
    description: "Learn React, Tailwind CSS & modern frontend practices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPInZP9AAakgy9V5kZxTs1YmETE4kfB_N4yA&s",
    resources: [
      { type: "PDF", title: "React Cheatsheet", icon: <FileText className="w-5 h-5" />, link: "#" },
      { type: "Link", title: "TailwindCSS Docs", icon: <Link className="w-5 h-5" />, link: "https://tailwindcss.com" },
      { type: "Video", title: "Advanced React Patterns", icon: <Video className="w-5 h-5" />, link: "#" },
    ],
  },
];

const Resources = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Our Courses & Resources
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              {/* Course Image */}
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              ></div>

              {/* Course Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Resources */}
                <h4 className="text-lg font-medium text-blue-600 mb-2">
                  Resources:
                </h4>
                <ul className="space-y-2">
                  {course.resources.map((res, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                    >
                      {res.icon}
                      <a
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {res.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
