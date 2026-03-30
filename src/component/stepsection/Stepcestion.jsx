import React from "react";
import { User, Package, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: <User size={40} />,
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: <Package size={40} />,
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: <Rocket size={40} />,
  },
];

const StepsSection = () => {
  return (
    <div className="bg-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center  border-blue-400 p-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10  border-blue-400 p-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;