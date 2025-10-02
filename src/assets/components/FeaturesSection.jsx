import { ShoppingBag, Facebook, Megaphone, Globe, Image, Search } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "E-commerce",
      description: "Setup and manage your online store",
      icon: <ShoppingBag className="w-7 h-7 text-blue-500" />,
    },
    {
      title: "Facebook Page Creation",
      description: "Design and optimize your business page",
      icon: <Facebook className="w-7 h-7 text-indigo-500" />,
    },
    {
      title: "Facebook Ads & Marketing",
      description: "Run targeted ad campaigns effectively",
      icon: <Megaphone className="w-7 h-7 text-pink-500" />,
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand with online strategies",
      icon: <Globe className="w-7 h-7 text-green-500" />,
    },
    {
      title: "Posters & Logo Design",
      description: "Create impactful graphics & branding",
      icon: <Image className="w-7 h-7 text-purple-500" />,
    },
    {
      title: "Google Ads",
      description: "Reach more customers with Google campaigns",
      icon: <Search className="w-7 h-7 text-yellow-500" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          We provide modern digital solutions to help businesses grow and reach more customers online.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transform transition duration-300 border border-gray-100 hover:border-gray-300"
            >
              {/* Icon Circle */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mx-auto mb-6 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
