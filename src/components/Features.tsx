import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import post_idea from "../assets/Social media AI.webp";
import Ai_post from "../assets/Bigwigmedia.png";
import multi from "../assets/multi.webp";
import shedual from "../assets/shedual.webp";
import optimize from "../assets/Pending-Reviews-removebg-preview.png";
import bulk from "../assets/img-bulk-publishing.png";
import posting from "../assets/posting-time.webp";

function Features() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const featureData = [
    {
      title: "AI-Powered Post Creation",
      description:
        "Feel like a creative genius without lifting a finger! Let Handly's AI whip up engaging posts that make your audience go, 'Wow, they totally get me!' Perfect tone, perfect style, zero effort.",
      imageUrl: post_idea,
      id: "feature1",
    },
    {
      title: "Generate High-Definition Images with AI",
      description:
        "Need jaw-dropping visuals? Handly's AI is like your personal Picasso—just give it a prompt, and voilà! Stunning images that make your posts shine brighter than your morning coffee.",
      imageUrl: Ai_post,
      id: "feature2",
    },
    {
      title: "Seamless Multi-Platform Posting",
      description:
        "One post, all platforms. Handly lets you post everywhere at once—no copy-pasting required. Now you can focus on more important things, like debating pineapple on pizza.",
      imageUrl: multi,
      id: "feature3",
    },
    {
      title: "AI-Driven Replies to Engage Your Audience",
      description:
        "Keep your cool while AI handles the trolls! Handly crafts witty, timely, and on-brand responses that make your audience feel loved—even when they're asking 'When’s the next giveaway?' for the 50th time.",
      imageUrl: bulk,
      id: "feature4",
    },
    {
      title: "Schedule Posts with Visual Calendar",
      description:
        "Why wing it when you can plan it? Handly’s visual calendar is so easy, it’s like playing Tetris with your posts. Stay organized and on schedule, minus the stress.",
      imageUrl: shedual,
      id: "feature5",
    },
    {
      title: "AI-Optimized Posting Times",
      description:
        "Timing is everything! Let Handly’s AI tell you when your audience is wide awake and scrolling, so your posts don’t end up lost in the land of forgotten memes.",
      imageUrl: posting,
      id: "feature6",
    },
    {
      title: "Analyze Post Performance and Insights",
      description:
        "Data geeks, rejoice! Handly tracks every like, share, and comment so you can pat yourself on the back—or blame the algorithm. Either way, you'll know exactly what’s working (and what’s not).",
      imageUrl: optimize,
      id: "feature7",
    },
    {
      title: "Build a Shared Content Library",
      description:
        "Tired of reinventing the wheel? Handly lets you stash your best posts, templates, and images in one place, so you can repurpose like a boss. Consistency, meet convenience.",
      imageUrl: Ai_post,
      id: "feature8",
    },
  ];

  return (
    <div id="features" className="mb-10 px-4">
      <h2 className="text-5xl font-semibold text-white text-center mb-10 tracking-tight">
        Our Services
      </h2>
      <div className="overflow-x-hidden">
        {featureData.map((feature, index) => (
          <div
            key={index}
            id={feature.id}
            className={`md:w-11/12 mx-auto md:flex justify-between grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-${
              index === 0 ? 0 : 16
            }`}
          >
            {/* Text Section */}
            <div
              className={`col-span-1 md:w-1/2 ${
                index % 2 === 0 ? "" : "md:col-start-3 order-1 md:order-2"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-300 mt-4">
                {feature.description}
              </p>
            </div>

            {/* Image Section */}
            <div
              className={`col-span-2 md:w-1/2 flex justify-center ${
                index % 2 === 0 ? "" : "md:col-start-1 order-2 md:order-1"
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full md:max-w-lg object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
