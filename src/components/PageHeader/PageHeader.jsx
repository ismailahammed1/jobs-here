import React from "react";

const PageHeader = ({ title, breadcrumb }) => (
  <div className="relative flex items-center justify-center h-56 bg-cover bg-center" style={{ backgroundImage: "url('/your-bg.jpg')" }}>
    <div className="absolute inset-0 bg-blue-950 bg-opacity-80"></div>
    <div className="relative z-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white flex items-center gap-2">
        {title}
        {/* Animated red dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
      </h1>
      <div className="mt-4 flex items-center space-x-2 text-white/80 text-sm">
        {breadcrumb.map((item, idx) => (
          <span key={idx} className="flex items-center">
            {item.link ? (
              <a href={item.link} className="hover:underline">{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
            {idx < breadcrumb.length - 1 && (
              <>
                {/* Animated small red line */}
                <span className="mx-2 w-1 h-4 bg-red-500 rounded animate-pulse"></span>
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default PageHeader;