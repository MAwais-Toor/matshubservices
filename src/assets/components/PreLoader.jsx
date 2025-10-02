import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // fake delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-700 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Logo */}
        <img
          src="/matshub.svg" // apna logo lagao
          alt="Logo"
          className="w-16 relative z-10"
        />

        {/* Half Circle Arc */}
        <div className="absolute w-24 h-24 rounded-full border-4 border-blue-600 animate-spin"
          style={{
            clipPath: "inset(0 0 50% 0)", // niche ka hissa cut karke sirf half circle
          }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
