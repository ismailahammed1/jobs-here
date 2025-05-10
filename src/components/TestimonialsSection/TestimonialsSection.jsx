import React, { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    name: "Adam Smith",
    role: "Web Developer",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    name: "John Doe",
    role: "Graphics Designer",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    name: "Priya Patel",
    role: "Startup Founder",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    name: "Emily Johnson",
    role: "Operations Lead",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const [direction, setDirection] = useState(0);

  const paginate = (dir) => {
    const newIndex = current + dir * testimonialsPerPage;
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setDirection(dir);
      setCurrent(newIndex);
    }
  };

  const cardVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -100 : 100,
    }),
  };

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">What Client’s Say About Us</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>

      <div className="flex justify-center gap-6 max-w-3xl mx-auto">
        <AnimatePresence initial={false} custom={direction}>
          {testimonials
            .slice(current, current + testimonialsPerPage)
            .map((t) => (
              <motion.div
                key={t.name}
                className="bg-[#ffe5df] rounded p-6 flex-1 text-left"
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <FaQuoteLeft className="text-orange-400 text-2xl mb-2" />
                <p className="text-sm text-gray-800 mb-6">{t.text}</p>
                <div>
                  <div className="font-semibold text-black">{t.name}</div>
                  <div className="text-xs text-gray-600">{t.role}</div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <div className="mt-10 flex justify-center gap-4">
        <button
          onClick={() => paginate(-1)}
          disabled={current === 0}
          className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 disabled:opacity-30 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => paginate(1)}
          disabled={current + testimonialsPerPage >= testimonials.length}
          className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 disabled:opacity-30 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
