const accordionData = [
  {
    title: "How To Find A Job?",
    content:
      "You can find a job by leveraging your network for referrals, using job search platforms, attending job fairs, contacting companies directly, and utilizing social media platforms like LinkedIn. Tailor your resume and cover letter for each application to stand out.",
  },
  {
    title: "How Many Companies Can I Applied?",
    content:
      "There is no strict limit to the number of companies you can apply to. However, it is recommended to focus on quality over quantity. Tailor your applications to roles that align with your skills and career goals to increase your chances of success.",
  },
  {
    title: "How Can I Applied for Job?",
    content:
      "To apply for a job, start by researching the company and role. Update your resume and write a tailored cover letter. Submit your application through the company’s website or job portals. Follow up if necessary to show your interest.",
  },
  {
    title: "How Can I Connect with a Company?",
    content:
      "You can connect with a company by following them on LinkedIn, attending their events, or reaching out to their employees through professional networking platforms. Building genuine relationships and showing interest in their work can help establish a connection.",
  },
  {
    title: "How Can I Create an Account?",
    content:
      'To create an account, visit the website or platform where you want to register. Click on "Sign Up" or "Create Account," fill in the required details like your name, email, and password, and follow the instructions to complete the process.',
  },
];

const Frequen = () => {
  return (
    <div className="mx-auto my-6 max-w-xl">
            {accordionData.map((item, index) => (
        <div key={index} className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          {item.title}
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      ))}
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
    </div>
  );
};

export default Frequen;
