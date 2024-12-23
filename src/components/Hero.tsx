import React from "react";
import social from "../assets/Handleey-Social-Media-Post.webp"

const SocialMediaHero: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col lg:flex-row items-center justify-between bg-blue-50 py-12 px-4 lg:px-24 mt-16">
      {/* Left Section */}
      <div className="max-w-lg space-y-6 text-center lg:text-left">
        <h4 className="text-blue-500 font-semibold text-lg flex items-center justify-center lg:justify-start">
          Built for Scalability
          <span className="ml-1 text-blue-500">✨</span>
        </h4>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Effortlessly scale your social media presence across multiple locations with Handly AI Social Media Management
        </h1>
        <p className="text-gray-600 leading-relaxed">
Create engaging posts in minutes, manage all your social channels seamlessly, and interact with customers – all from one powerful dashboard.
        </p>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
        <img
          src={social} // Replace with your actual image URL
          alt="Happy User"
          className="w-60 mx-auto md:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default SocialMediaHero;
