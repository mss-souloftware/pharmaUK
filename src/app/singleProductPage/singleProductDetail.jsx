"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SingleProductDetail = ({ product }) => {
  const [activeSection, setActiveSection] = useState("uses");
  const sections = ["uses", "sideEffect", "quickView"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 640) { // Auto-slide only on mobile
        setActiveSection((prev) => {
          const currentIndex = sections.indexOf(prev);
          const nextIndex = (currentIndex + 1) % sections.length;
          return sections[nextIndex];
        });
      }
    }, 5000); // Change section every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Section Buttons - Scrollable on Mobile */}
      <div className="flex overflow-x-auto sm:justify-center rounded-2xl gap-2 sm:gap-4 mb-5  p-2 sm:p-3 bg-white no-scrollbar">
        {sections.map((section) => (
          <button
            key={section}
            className={`px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base transition-all duration-300 rounded-lg font-semibold flex-shrink-0
              ${
                activeSection === section
                  ? "bg-hoverUnderlineColor text-white"
                  : "bg-transparent text-gray-700 hover:text-hoverUnderlineColor"
              }
            `}
            onClick={() => setActiveSection(section)}
          >
            {section === "uses" && "Uses & FAQs"}
            {section === "sideEffect" && "Side Effects"}
            {section === "quickView" && "Quick View"}
          </button>
        ))}
      </div>

      {/* Detail Description */}
      {product.detailDescription && (
        <div className="mb-5 p-4 bg-blue-50 rounded-lg mx-auto text-center   sm:max-w-3xl">
          <h2 className="text-sm sm:text-lg font-semibold mb-2 text-hoverUnderlineColor">
            Product Details
          </h2>
          <p className="text-gray-700 leading-relaxed text-xs sm:text-base">
            {product.detailDescription}
          </p>
        </div>
      )}

      {/* Animated Section Display */}
      <div className="bg-white p-4 sm:p-6 rounded-lg mx-auto max-w-[100%] sm:max-w-4xl w-full">
        <AnimatePresence mode="wait">
          {activeSection === "uses" && (
            <motion.div
              key="uses"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-sm sm:text-lg font-semibold mb-4 text-hoverUnderlineColor">
                Uses
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-xs sm:text-base">
                {product.uses.map((use, index) => (
                  <li key={index} className="pl-2">{use}</li>
                ))}
              </ul>

              <h2 className="text-sm sm:text-lg font-semibold mt-6 mb-4 text-hoverUnderlineColor">
                FAQs
              </h2>
              <div className="space-y-3">
                {product.faq.map((item, index) => (
                  <div
                    key={index}
                    className="border p-3 sm:p-4 rounded-lg shadow-sm bg-gray-50"
                  >
                    <p className="font-semibold text-gray-800 text-xs sm:text-base">
                      {item.question}
                    </p>
                    <p className="text-gray-600 mt-1 text-xs sm:text-sm">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === "sideEffect" && (
            <motion.div
              key="sideEffect"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-red-50 p-4 sm:p-5 rounded-lg shadow-lg"
            >
              <h2 className="text-sm sm:text-lg font-semibold text-red-600 mb-4">
                Side Effects
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-xs sm:text-base">
                {product.sideEffect.map((effect, index) => (
                  <li key={index} className="pl-2">{effect}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeSection === "quickView" && (
            <motion.div
              key="quickView"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50 p-4 sm:p-5 rounded-lg shadow-lg"
            >
              <h2 className="text-sm sm:text-lg font-semibold text-green-600 mb-4">
                Quick View
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-xs sm:text-base">
                {product.quickView.map((item, index) => (
                  <li key={index} className="pl-2">{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SingleProductDetail;
