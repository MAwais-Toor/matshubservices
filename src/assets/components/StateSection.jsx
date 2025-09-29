import React from "react";
import { SmileIcon, FileTextIcon, HeadphonesIcon, UsersIcon } from "lucide-react";

const stats = [
  {
    icon: <SmileIcon className="w-6 h-6 text-cyan-500" />,
    value: "232",
    label: "Happy Clients",
    bg: "bg-cyan-100",
  },
  {
    icon: <FileTextIcon className="w-6 h-6 text-orange-500" />,
    value: "521",
    label: "Projects",
    bg: "bg-orange-100",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-green-500" />,
    value: "1463",
    label: "Hours Of Support",
    bg: "bg-green-100",
  },
  {
    icon: <UsersIcon className="w-6 h-6 text-pink-500" />,
    value: "15",
    label: "Hard Workers",
    bg: "bg-pink-100",
  },
];

const StateSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-transform hover:scale-[1.02]"
          >
            <div
              className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${stat.bg}`}
            >
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-gray-500 mt-1 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StateSection;
