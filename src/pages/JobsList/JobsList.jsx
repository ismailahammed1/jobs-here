// components/JobsList.jsx
import { SiVuedotjs, SiAppwrite, SiUpwork, SiOpenai, SiBitwarden } from "react-icons/si";
import JobCard from "./JobCard";

const jobs = [
  {
    icon: <SiVuedotjs className="text-green-500" />,
    title: "Web Designer, Graphic Designer, UI/UX Designer",
    company: "Graphic Designer",
    salary: "$25000-$30000",
    location: "Walsall Rd, London",
    time: "6 days ago",
    type: "Fulltime",
  },
  {
    icon: <SiAppwrite className="text-pink-500" />,
    title: "Website Developer & Software Developer",
    company: "Web Developer",
    salary: "$25000-$30000",
    location: "Curtis St, USA",
    time: "6 days ago",
    type: "Fulltime",
  },
  {
    icon: <SiUpwork className="text-blue-400" />,
    title: "Application Developer & Web Designer",
    company: "App Developer",
    salary: "$25000-$30000",
    location: "Walsall Rd, London",
    time: "6 days ago",
    type: "Fulltime",
  },
  {
    icon: <SiOpenai className="text-purple-500" />,
    title: "Frontend & Backend Developer",
    company: "Dev Fusion Pvt.",
    salary: "$25000-$30000",
    location: "San Francisco, US",
    time: "6 days ago",
    type: "Fulltime",
  },
  {
    icon: <SiBitwarden className="text-pink-600" />,
    title: "IT Department & Manager",
    company: "IT Manager",
    salary: "$25000-$30000",
    location: "Walsall Rd, London",
    time: "7 days ago",
    type: "Fulltime",
  },
];

const JobsList = () => (
  <section className="py-16 bg-[url('/src/assets/bg-pattern.svg')] bg-repeat min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Jobs You May Be Interested In</h2>
      <p className="text-gray-400 text-center mb-8 text-sm max-w-xl mx-auto">
      Discover job opportunities tailored to your skills and interests. Explore roles that match your career goals and take the next step in your professional journey.
      </p>
      <div>
        {jobs.map((job, idx) => (
          <JobCard key={idx} {...job} onBrowse={() => alert("Browse Job Clicked!")} />
        ))}
      </div>
    </div>
  </section>
);

export default JobsList;