import React from "react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "forever",
    features: [
      "Access to 5 free courses",
      "Community support",
      "Basic learning resources",
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    features: [
      "Access to all courses",
      "1-on-1 mentorship",
      "Exclusive resources",
      "Certificate of completion",
    ],
    buttonText: "Start Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "per month",
    features: [
      "Unlimited course access",
      "Team accounts (10 members)",
      "Priority support",
      "Dedicated success manager",
    ],
    buttonText: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">
          Choose Your <span className="text-blue-600">Plan</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Flexible pricing options to suit learners at every stage of their journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-lg p-8 flex flex-col items-center ${
              plan.highlighted
                ? "bg-gradient-to-br from-sky-500 to-blue-600 text-white scale-105"
                : "bg-white text-gray-800"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-4xl font-extrabold mb-2">
              {plan.price}
            </div>
            <p className="text-sm mb-6">{plan.period}</p>

            <ul className="space-y-3 text-left w-full mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-lg font-medium transition ${
                plan.highlighted
                  ? "bg-white text-blue-600 hover:bg-gray-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
