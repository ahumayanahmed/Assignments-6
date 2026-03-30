import React from 'react';

const Optional = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-gray-200 mb-8">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>

        <div className="flex justify-center gap-4 mb-4">

          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Explore Products
          </button>

          <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>

        </div>

        <p className="text-sm text-gray-200">
          14-day free trial · No credit card required · Cancel anytime
        </p>

      </div>
    </section>
        </div>
    );
};

export default Optional;