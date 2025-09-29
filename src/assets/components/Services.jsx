import React from "react";
import "../../App.css";
import {
  
  CloudIcon,
  BarChart3,
  Bot,
  Palette,
  UsersIcon,
  ClockIcon,
} from "lucide-react";

const features = [
  {
    icon: <CloudIcon className="text-cyan-600 w-6 h-6" />,
    title: "Cloud-Ready Deployment",
    description:
      "Host and scale your apps with zero hassle.",
    status: "Deployed",
    statusColor: "bg-green-100 text-green-700",
    hoverBorder: "hover:border-cyan-600",
  },
  {
    icon: <BarChart3 className="text-blue-600 w-6 h-6" />,
    title: "Smart Business Strategies",
    description:
      "Data-driven marketing for faster growth..",
    status: "Operational",
    statusColor: "bg-yellow-100 text-yellow-700",
    hoverBorder: "hover:border-blue-600",
  },
  {
    icon: <Bot className="text-teal-600 w-6 h-6" />,
    title: "Intelligent Automation",
    description:
      "Automate workflows to save time and cost.",
    status: "Scheduled",
    statusColor: "bg-emerald-100 text-emerald-700",
    hoverBorder: "hover:border-teal-600",
  },
  {
    icon: <Palette className="text-purple-600 w-6 h-6" />,
    title: "Creative Design & Branding",
    description:
      "Build strong brand identity with impactful visuals..",
    status: "Active",
    statusColor: "bg-red-100 text-slate-700",
    hoverBorder: "hover:border-purple-600",
  },
];

const Services = () => {
  return (
    <section className="bg-white text-gray-900 py-24 px-4 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 relative z-10">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Integrated Digital  <span className="text-sky-600">Solutions</span>
          </h2>
          <p className="text-gray-700 mb-5 text-lg">
            Empowering businesses with innovative services that fuel growth in every dimension.
          </p>
          <ul className="space-y-3 text-gray-600 text-sm md:text-base mb-10 list-disc pl-5">
            <li>Custom Web Development</li>
            <li>Creative Branding & Design</li>
            <li>Digital Marketing & Ads</li>
            <li>Education & Training</li>
          </ul>

          <div className="flex flex-wrap gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-sky-100 p-3 rounded-full">
                <UsersIcon className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">95%</h3>
                <p className="text-gray-600 text-sm">Client Retention</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <ClockIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-gray-600 text-sm">Dedicated Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 transition-all duration-300 shadow-md border border-gray-200 hover:scale-[1.02] ${feature.hoverBorder}`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                {feature.description}
              </p>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${feature.statusColor}`}
              >
                {feature.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
