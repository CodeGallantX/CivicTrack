"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const FeaturedPortfolios = ({ portfolios }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="mb-8 mt-6">
      <h2 className="text-2xl font-semibold text-gray-200">Featured Portfolios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
        {portfolios.map((portfolio, index) => (
          <div
            key={portfolio.id}
            className="group relative bg-gray-800 shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="p-6 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-white transition-colors">
                {portfolio.title}
              </h3>
              <p className="text-sm text-gray-200 group-hover:text-gray-300 transition-colors">
                {portfolio.description}
              </p>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPortfolios;
