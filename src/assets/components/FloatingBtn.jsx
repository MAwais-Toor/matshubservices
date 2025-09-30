import React, { useEffect, useState } from "react";
import "../../App.css"; // Contains .slow-ping animation

const titles = ["Welcome to MATsHub", "Founder & CEO of MATsHub"];

const FloatingBtn = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % titles.length);
                setVisible(true);
            }, 600);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-5 left-5 z-40 flex items-center gap-2 sm:gap-3">
            {/* LinkedIn Link + Hover Zoom Effect */}
            <a
                href="https://www.linkedin.com/in/mawaistoor/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-9 h-9 sm:w-12 sm:h-12 transition-transform duration-300 hover:scale-110"
            >
                {/* Stronger Glowing Pulse */}
                <span className="absolute top-1/2 left-1/2 w-8 h-8 sm:w-10 sm:h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f94804] opacity-30 slow-ping"></span>

                {/* Profile Image */}
                <img
                    src="./profile.png"
                    alt="LinkedIn"
                    className="w-9 h-9 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow relative z-10"
                />

                {/* LinkedIn Icon */}
                <span className="absolute bottom-0 right-0 bg-white p-0.5 sm:p-1 rounded-full shadow z-20">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#0a66c2"
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.792-1.75-1.764 0-.973.784-1.765 1.75-1.765s1.75.792 1.75 1.765c0 .972-.784 1.764-1.75 1.764zm13.5 10.268h-3v-4.604c0-1.098-.022-2.511-1.531-2.511-1.532 0-1.767 1.197-1.767 2.432v4.683h-3v-9h2.878v1.233h.041c.4-.756 1.379-1.553 2.837-1.553 3.034 0 3.594 1.996 3.594 4.59v4.73z" />
                    </svg>
                </span>
            </a>

            {/* Text Content */}
            <div className="text-xs sm:text-sm leading-tight">
                <p className="font-semibold text-gray-900">Muhammad Awais Toor</p>
                <p
                    className={`text-gray-500 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {titles[index]}
                </p>
            </div>
        </div>

    );
};

export default FloatingBtn;
