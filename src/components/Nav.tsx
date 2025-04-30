import { useState, useEffect } from "react";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const features = [
    { name: "AI-Powered Post Creation", id: "feature1" },
    { name: "Generate High-Definition Images with AI", id: "feature2" },
    { name: "Seamless Multi-Platform Posting", id: "feature3" },
    { name: "AI-Driven Replies to Engage Your Audience", id: "feature4" },
    { name: "Schedule Posts with Visual Calendar", id: "feature5" },
    { name: "AI-Optimized Posting Times", id: "feature6" },
    { name: "Analyze Post Performance and Insights", id: "feature7" },
    { name: "Build a Shared Content Library", id: "feature8" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Adjust for sticky navbar height
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
    setIsOpen(false); // Close the mobile menu
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black shadow-md shadow-gray-400" : "bg-black"
      }`}
    >
      <div className="md:w-11/12 mx-auto flex items-center justify-between py-4 px-4  relative">
        <button
          className="flex items-center space-x-1"
          onClick={() => handleScrollToSection("home")}
        >
          <a href="/">
            <span className="text-red-500 text-3xl font-bold">B</span>
            <span className="text-blue-500 text-3xl font-bold">i</span>
            <span className="text-yellow-500 text-3xl font-bold">g</span>
            <span className="text-green-500 text-3xl font-bold">w</span>
            <span className="text-purple-500 text-3xl font-bold">i</span>
            <span className="text-orange-500 text-3xl font-bold">g</span>
            <span className="text-teal-500 text-3xl font-bold">Social</span>
          </a>
        </button>

        <button
          className="md:hidden text-white hover:text-gray-300 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div className="hidden md:flex gap-8 space-x-6 text-white">
          <button
            onClick={() => handleScrollToSection("home")}
            className="hover:text-gray-300 font-bold"
          >
            Home
          </button>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* Features Button with Dropdown Icon */}
            <button className="hover:text-gray-300 flex items-center font-bold">
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 ml-1 transition-transform duration-200"
                style={{
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-[-200px] bg-gray-900 shadow-lg rounded-lg p-4 grid grid-cols-3 gap-4 w-[700px] h-[400px] z-50">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => handleScrollToSection(feature.id)}
                    className="text-white hover:text-gray-300 text-sm font-bold"
                  >
                    {feature.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => handleScrollToSection("about")}
            className="hover:text-gray-300 font-bold"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollToSection("blog")}
            className="hover:text-gray-300 font-bold"
          >
            Blogs
          </button>
          <button
            onClick={() => handleScrollToSection("faq")}
            className="hover:text-gray-300 font-bold"
          >
            FAQ
          </button>
          <button
            onClick={() => window.open("/team", "_blank")}
            className="hover:text-gray-300 font-bold"
          >
            Team
          </button>
        </div>

        <div className="md:block hidden">
          <a href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none">
              Contact Us
            </button>
          </a>
        </div>
      </div>

      {/* Overlay for Darkening/Blur Effect */}
      {isOpen && (
        <div className="fixed inset-0 top-20 right-0 bg-black bg-opacity-70 z-40" /> // z-40 ensures overlay is behind the dropdown
      )}

      {isOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg rounded-md p-4 flex flex-col space-y-4 z-50 h-[35vh] w-full max-w-md">
          <button
            onClick={() => handleScrollToSection("home")}
            className="hover:text-gray-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollToSection("features")}
            className="hover:text-gray-300"
          >
            Features
          </button>
          <button
            onClick={() => handleScrollToSection("about")}
            className="hover:text-gray-300"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollToSection("blog")}
            className="hover:text-gray-300"
          >
            Blogs
          </button>
          <button
            onClick={() => handleScrollToSection("faq")}
            className="hover:text-gray-300"
          >
            FAQ
          </button>
          <button
            onClick={() => window.open("/team", "_blank")}
            className="hover:text-gray-300"
          >
            Team
          </button>
          <a href="/contact">
            <button className="w-1/2 mx-auto block text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg focus:outline-none text-lg sm:text-xl shadow-md">
              Contact Us
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
