import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "E-commerce Growth Strategies in 2025",
    description: "Discover the latest trends and strategies to grow your online store effectively with cutting-edge tools.",
    date: "Sep 25, 2025",
    image: "https://source.unsplash.com/random/800x600?ecommerce",
  },
  {
    id: 2,
    title: "Boost Your Brand with Facebook Ads",
    description: "Learn how targeted ad campaigns can drive traffic and conversions for your business.",
    date: "Oct 1, 2025",
    image: "https://source.unsplash.com/random/800x600?facebook",
  },
  {
    id: 3,
    title: "The Future of Digital Marketing",
    description: "Explore new-age marketing strategies that businesses must adopt to stay ahead in 2025.",
    date: "Oct 5, 2025",
    image: "https://source.unsplash.com/random/800x600?marketing",
  },
];

const EventsPostsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Latest <span className="text-blue-600">Events & Posts</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Stay updated with our latest news, events, and insights in the digital world.
        </p>
      </div>

      {/* Posts Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {posts.map((post) => (
          <motion.div
            key={post.id}
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg hover:-translate-y-2 transition"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/80 text-gray-800 text-sm px-3 py-1 rounded-full flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-blue-600" />
                {post.date}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mt-3">{post.description}</p>

              <button className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EventsPostsSection;
