// components/NewsArticlesSection.jsx
import { motion } from "framer-motion";

const articles = [
  {
    image: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464839/career%20counselling/job-5382501_1920_ychbqw.jpg", 
    author: "Admin",
    date: "7 Feb, 2021",
    title: "How to Introduce Yourself in Job Interview?",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    link: "#",
  },
  {
    image: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740719568/career%20counselling/img-02-1-600x700_qu4zkh.jpg",
    author: "Admin",
    date: "7 Feb, 2021",
    title: "Looking for Highly Motivated Product to Build",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    link: "#",
  },
  {
    image: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740724495/career%20counselling/pexels-photo-7644004_oj2egm.webp",
    author: "Admin",
    date: "7 Feb, 2021",
    title: "The Reason Why Software Developer is the Best Job",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    link: "#",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.2, duration: 0.7 } },
};

const NewsArticlesSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">News, Tips & Articles</h2>
      <p className="text-gray-400 text-center mb-8 text-sm max-w-xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded shadow-md hover:shadow-lg transition p-4 flex flex-col"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <img src={a.image} alt={a.title} className="rounded mb-4 h-40 w-full object-cover" />
            <div className="flex items-center text-xs text-gray-500 mb-2 gap-2">
              <span className="text-red-600 font-semibold">{a.author}</span>
              <span>•</span>
              <span>{a.date}</span>
            </div>
            <h3 className="font-semibold text-base mb-2 text-[#002147]">{a.title}</h3>
            <p className="text-xs text-gray-500 mb-4">{a.excerpt}</p>
            <a href={a.link} className="text-xs text-red-600 font-semibold hover:underline mt-auto">
              Read More &rarr;
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsArticlesSection;