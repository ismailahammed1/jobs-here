import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 80 }
  }),
  hover: { scale: 1.04 }
};

const cards = [
  {
    title: "Looking For a Job",
    description: "Your next role could be with one of these top leading organizations.",
    link: "#",
    color: "bg-red-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm0 0v2m0-2V9"></path>
      </svg>
    ),
    cta: "Apply now »"
  },
  {
    title: "Are You Recruiting?",
    description: "Your next role could be with one of these top leading organizations.",
    link: "#",
    color: "bg-blue-900",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-2a4 4 0 014-4h0a4 4 0 014 4v2"></path>
      </svg>
    ),
    cta: "Apply now »"
  }
];

const PriceCard = () => {
  return (
    <div className="relative flex justify-center items-center w-full p-10" style={{ marginTop: "-60px" }}>
      <div className="flex gap-4 z-10">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className={`flex flex-col md:flex-row items-center md:items-start p-5 rounded-lg shadow-lg w-80 ${card.color}`}
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="flex-shrink-0 mr-3 mb-2 md:mb-0">
              {card.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{card.title}</h3>
              <p className="text-white text-sm mb-2">{card.description}</p>
              <a href={card.link} className="text-white font-semibold underline text-sm hover:text-gray-200 transition">{card.cta}</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default PriceCard