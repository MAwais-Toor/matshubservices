// AchievementsWall.jsx
import React, { useState } from "react";
import { Rocket, Users, Award, TrendingUp } from "lucide-react";

const items = [
  {
    icon: <Rocket className="w-10 h-10 text-blue-600" />,
    title: "Launch",
    front: "Started with a vision",
    backImg: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  },
  {
    icon: <Users className="w-10 h-10 text-pink-500" />,
    title: "Community",
    front: "Growing family",
    backImg: "https://images.pexels.com/photos/3182772/pexels-photo-3182772.jpeg",
  },
  {
    icon: <Award className="w-10 h-10 text-yellow-500" />,
    title: "Recognition",
    front: "Trusted Excellence",
    backImg: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-green-500" />,
    title: "Future",
    front: "Next Big Leap",
    backImg: "https://images.pexels.com/photos/3182836/pexels-photo-3182836.jpeg",
  },
];

export default function AchievementsWall() {
  const [flippedSet, setFlippedSet] = useState(new Set());

  const toggleFlip = (idx) => {
    setFlippedSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our <span className="text-blue-600">Achievements Wall</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Interactive timeline of milestones — hover on desktop, tap on mobile.
        </p>

        <div className="flex gap-6 overflow-x-auto py-6 no-scrollbar px-2">
          {items.map((it, idx) => {
            const isFlipped = flippedSet.has(idx);
            return (
              <div
                key={idx}
                className="w-72 h-80 flex-shrink-0"
                style={{ perspective: "1200px" }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleFlip(idx)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && toggleFlip(idx)
                  }
                  className="relative w-full h-full cursor-pointer"
                >
                  <div
                    className="card-inner relative w-full h-full transition-transform duration-700 ease-in-out"
                    style={{
                      transform: isFlipped ? "rotateY(180deg)" : undefined,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* FRONT */}
                    <div
                      className="card-face front absolute inset-0 rounded-2xl bg-white border border-gray-200 shadow-lg flex flex-col items-center justify-center p-6"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="mb-4">{it.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {it.title}
                      </h3>
                      <p className="text-gray-600 text-center">{it.front}</p>
                      <span className="mt-4 text-xs text-gray-400">
                        Hover / Tap to flip
                      </span>
                    </div>

                    {/* BACK → only image */}
                    <div
                      className="card-face back absolute inset-0 rounded-2xl overflow-hidden"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <img
                        src={it.backImg}
                        alt={it.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <style>{`
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

                    @media (hover: hover) and (pointer: fine) {
                      .w-72:hover .card-inner {
                        transform: rotateY(180deg);
                      }
                    }

                    .card-inner { will-change: transform; }
                  `}</style>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
