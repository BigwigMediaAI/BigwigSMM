import React from "react";
import social from "../assets/Handleey-Social-Media-Post.webp";

const SocialMediaHero: React.FC = () => {
  return (
    <section
      id="home"
      className="md:w-11/12 mx-auto relative  flex flex-col lg:flex-row items-center justify-between py-12 px-4  mt-16"
    >
      {/* Left Section */}
      <div className="max-w-lg space-y-6 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
          Effortlessly scale your social media presence across multiple
          locations with Ease{" "}
          <span className="text-blue-500">Powered by AI</span>
        </h1>
        <p className="text-gray-200 leading-relaxed">
          Create & Publish engaging posts in seconds, manage all your social
          channels for single or multiple locations seamlessly, and interact
          with comments replies and queries –{" "}
          <span className="italic">all from one powerful dashboard</span>.
        </p>
        <a href="/contact">
          <button className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Contact Us
          </button>
        </a>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
        <img
          src={social} // Replace with your actual image URL
          alt="Happy User"
          className="w-full mx-auto md:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default SocialMediaHero;
