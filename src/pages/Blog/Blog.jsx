import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    title: "How to Introduce Yourself in Job Interview?",
    date: "Feb 25, 2024",
    author: "Admin",
    category: "Resume Tips",
    excerpt: "Learn how to make a great first impression in your next job interview...",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
    title: "Looking for Highly Motivated Product to Build",
    date: "Feb 25, 2024",
    author: "Admin",
    category: "Productivity",
    excerpt: "Discover what makes a product team highly motivated and successful...",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    title: "The Reason Why Software Developers is the Best Job",
    date: "Feb 25, 2024",
    author: "Admin",
    category: "Tech",
    excerpt: "Explore why software development is a top career choice in today's market...",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Economy Growth is Being Increased by IT Sectors",
    date: "Feb 25, 2024",
    author: "Admin",
    category: "Economy",
    excerpt: "IT sectors are driving economic growth in unprecedented ways...",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    title: "Tips for Making Your Resume Stand Out",
    date: "Feb 25, 2024",
    author: "Admin",
    category: "Resume Tips",
    excerpt: "Simple tips to help your resume catch the eye of recruiters...",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80",
    title: "20 Things You Should Know Before Apply",
    date: "Feb 25, 2024",
    author: "Admin",
    category: "Career Advice",
    excerpt: "Essential things to know before applying for your next job...",
  },
];

const popularPosts = [
  { id: 1, title: "How to Introduce Yourself in Job Interview?", date: "Feb 25, 2024" },
  { id: 2, title: "Looking for Highly Motivated Product to Build", date: "Feb 25, 2024" },
  { id: 3, title: "Tips for Making Your Resume Stand Out", date: "Feb 25, 2024" },
  { id: 4, title: "20 Things You Should Know Before Apply", date: "Feb 25, 2024" },
];

const categories = [
  { name: "Resume Tips", count: 7 },
  { name: "Tech", count: 5 },
  { name: "Productivity", count: 4 },
  { name: "Economy", count: 3 },
  { name: "Career Advice", count: 2 },
];

const tags = ["Resume", "Job", "Interview", "Design", "Coding", "Advice", "Tips", "Career"];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">News, Tips & Articles</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Latest updates about interviews, job search, career guidance, productivity, and technical trends.<br />
            Explore expert advice, design inspiration, coding guidance, and planning strategies.
          </p>
        </div>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post.id * 0.1 }}
                className="bg-white rounded-lg shadow p-4 flex flex-col"
              >
                <img src={post.image} alt={post.title} className="rounded-lg h-44 w-full object-cover mb-3" />
                <div className="flex items-center text-xs text-gray-400 gap-2 mb-1">
                  <span className="text-red-500 font-semibold">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{post.title}</h3>
                <p className="text-gray-500 text-sm flex-1">{post.excerpt}</p>
                <a href="#" className="text-red-500 text-sm font-semibold mt-2 hover:underline">Read More &rarr;</a>
              </motion.div>
            ))}
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            {/* Search */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center border rounded overflow-hidden">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-3 py-2 outline-none text-sm"
                />
                <button className="bg-red-600 text-white px-3 py-2">
                  <FaSearch />
                </button>
              </div>
            </div>
            {/* Popular Posts */}
            <div className="bg-white rounded-lg shadow p-4">
              <h4 className="font-semibold mb-3 text-gray-700">Popular Post</h4>
              <ul className="space-y-2">
                {popularPosts.map((p) => (
                  <li key={p.id} className="text-sm">
                    <a href="#" className="text-blue-900 hover:underline font-medium">{p.title}</a>
                    <div className="text-xs text-gray-400">{p.date}</div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Category */}
            <div className="bg-white rounded-lg shadow p-4">
              <h4 className="font-semibold mb-3 text-gray-700">Category</h4>
              <ul className="space-y-1">
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-600">{cat.name}</span>
                    <span className="text-gray-400">({cat.count})</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Tags */}
            <div className="bg-white rounded-lg shadow p-4">
              <h4 className="font-semibold mb-3 text-gray-700">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-xs px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          <button className="w-8 h-8 rounded bg-red-600 text-white font-bold">1</button>
          <button className="w-8 h-8 rounded bg-gray-200 text-gray-700 font-bold">2</button>
          <button className="w-8 h-8 rounded bg-gray-200 text-gray-700 font-bold">3</button>
        </div>
      </div>
    </div>
  );
}

export default Blog