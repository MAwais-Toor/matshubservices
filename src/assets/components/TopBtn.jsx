import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const TopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative z-50">
      <button
        onClick={scrollToTop}
        className={`fixed hover:animate-bounce bottom-6 right-6 rounded-full bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 text-white shadow-lg transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } p-2 sm:p-4`}
        aria-label="Go to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default TopBtn;
