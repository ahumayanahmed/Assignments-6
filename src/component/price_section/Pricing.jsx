import { Check } from 'lucide-react';
import React from 'react';
const pricingData = [
  {
    id: 1,
    title: "Starter",
    price: "$0",
    desc: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    highlight: false,
  },
  {
    id: 2,
    title: "Pro",
    price: "$29",
    desc: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    highlight: true,
  },
  {
    id: 3,
    title: "Enterprise",
    price: "$99",
    desc: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];


const Pricing = () => {
    return (
        <div>
            <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mt-2">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-2xl shadow-lg
              ${plan.highlight
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white scale-105"
                  : "bg-white"
                }`}
            >

              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold">
                {plan.title}
              </h3>

              <p className={`${plan.highlight ? "text-gray-200" : "text-gray-500"} mb-6`}>
                {plan.desc}
              </p>

              <h1 className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-lg"> /Month</span>
              </h1>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check size={20} 
                    className={`${plan.highlight
                    ? "text-white"
                    : "text-green-500"
                  }`} /> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold
                ${plan.highlight
                    ? "bg-white text-purple-600"
                    : "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                  }`}
              >
                {plan.button}
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
        </div>
    );
};

export default Pricing;