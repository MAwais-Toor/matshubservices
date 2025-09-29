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
        className={`fixed group bottom-30 right-6 rounded-full 
    bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-700 text-white 
    shadow-lg transition-all duration-500 ease-in-out
    ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} 
    p-2 sm:p-3 md:p-4`}
        aria-label="Go to top"
      >
        {/* Arrow - hidden on hover with fade */}
        <ArrowUp
          className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-0"
        />

        {/* Text - appears on hover with fade */}
        <span
          className="absolute inset-0 flex items-center justify-center 
      opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
      transition-all duration-300 ease-in-out text-xs sm:text-sm font-medium"
        >
          To Top
        </span>
      </button>

    </div>
  );
};

export default TopBtn;
