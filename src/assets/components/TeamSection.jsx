import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
    {
        name: "M Awais Toor",
        role: "Founder & CEO",
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    },
    {
        name: "Ali Raza",
        role: "Project Manager",
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    },
    {
        name: "Ahmed Khan",
        role: "Software Engineer",
        img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    },
    {
        name: "Sara Ahmed",
        role: "UI/UX Designer",
        img: "https://cdn.vectorstock.com/i/500p/82/65/person-gray-photo-placeholder-woman-vector-24138265.jpg",
    },
    {
        name: "Zainab Malik",
        role: "UI/UX Designer",
        img: "https://cdn.vectorstock.com/i/500p/82/65/person-gray-photo-placeholder-woman-vector-24138265.jpg",
    },
];

const TeamSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Meet Our Team
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Our dedicated team of professionals is here to help you succeed.
                </p>

                {/* Flex Row with grow effect */}
                <div className="flex gap-6 overflow-hidden">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="relative flex-[0.25] group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-in-out"
                        >
                            {/* Image */}
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Info Box */}
                            <div
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 
  bg-white px-5 py-4 rounded-xl shadow-lg 
  opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 
  transition-all duration-500 w-[85%]"
                            >
                                {/* Role - Left Align */}
                                <p className="text-xs text-gray-500 mb-1 animate-slideDown text-left">
                                    {member.role}
                                </p>

                                {/* Name + Icons */}
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900 animate-slideUp">
                                        {member.name}
                                    </h3>
                                    <div className="flex gap-3 text-gray-600 animate-fadeIn">
                                        <a href="#">
                                            <Linkedin className="w-5 h-5 hover:text-blue-600 transition" />
                                        </a>
                                        <a href="#">
                                            <Twitter className="w-5 h-5 hover:text-sky-500 transition" />
                                        </a>
                                        <a href="#">
                                            <Github className="w-5 h-5 hover:text-gray-800 transition" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Animations */}
            <style>{`
        .flex > .group {
          transition: flex 0.5s ease-in-out;
        }
        .flex > .group:hover {
          flex: 0.5;
        }

        .animate-slideDown {
          transform: translateY(-10px);
          opacity: 0;
          transition: all 0.5s ease-in-out;
        }
        .group:hover .animate-slideDown {
          transform: translateY(0);
          opacity: 1;
        }

        .animate-slideUp {
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.6s ease-in-out 0.1s;
        }
        .group:hover .animate-slideUp {
          transform: translateY(0);
          opacity: 1;
        }

        .animate-fadeIn {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.6s ease-in-out 0.2s;
        }
        .group:hover .animate-fadeIn {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
        </section>
    );
};

export default TeamSection;
