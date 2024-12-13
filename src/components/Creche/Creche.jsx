import React from "react";
import "./Creche.css";

const listItems = [
  {
    id: 1,
    image: "./Counter-1.png", // Image path for item 1
    title: " Reach more parents",
    description: " Boost visibility and attract more parents.",
    bgColor: "bg-pastel-peach",
  },
  {
    id: 2,
    image: "./Counter-2.png", // Image path for item 2
    title: " Simplify your admin",
    description: " Manage applications and registrations with ease.",
    bgColor: "bg-pastel-blue",
  },
  {
    id: 3,
    image: "./Counter-3.png", // Image path for item 3
    title: " Secure payments",
    description: " Minimize non-payment risks with payment tracking.",
    bgColor: "bg-pastel-green",
  },
];

const Creche = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-4 md:p-8">
      {/* Top Section */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display text-[#4B6BFB] mb-6">
          <span className="text-more-sugar">Grow Your Creche with Creche Spots!</span>
        </h1>
      </div>

      {/* Two-Column Layout */}
      <div className="w-full max-w-4xl flex flex-row space-x-8">
        {/* Left Column (List Section) */}
        <div className="w-1/2 space-y-6">
          {listItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-6 p-6 rounded-lg transition-transform hover:scale-102 cursor-pointer ${item.bgColor}`}
            >
              <img src={item.image} alt={item.title} className="flex-shrink-0 w-12 h-12 rounded-lg bg-white" />
              <div className="flex flex-col items-start">
                <span className="text-2xl font-display title">{item.title}</span>
                <span className="text-gray-700 descript">{item.description}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column (Form and Button) */}
        <div className="w-1/2 space-y-6">
          <p className="text-lg descript">
            Fill in your details below and we'll get in touch to help you onboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creche;
