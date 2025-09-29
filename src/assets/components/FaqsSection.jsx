import React, { useState } from "react";
import "../../App.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is this platform about?",
    answer:
      "This platform helps developers build and deploy web applications faster using modern tools and integrations.",
  },
  {
    question: "Which technologies are supported?",
    answer:
      "We support HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Git, MongoDB and more.",
  },
  {
    question: "Is it beginner-friendly?",
    answer:
      "Yes, we provide tools and documentation that cater to all levels of developers, from beginners to advanced.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply explore our tools section above and check out the examples. You can start coding immediately!",
  },
];

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-3">
          Everything you need to know about our tools and how to get started.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium hover:bg-gray-100 transition"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            <div
              className={`px-6 pb-4 text-gray-600 transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsSection;
