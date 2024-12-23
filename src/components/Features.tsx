import { motion } from "framer-motion";
import post_idea from "../assets/Social media AI.webp"
import Ai_post from "../assets/Bigwigmedia.png"
import multi from "../assets/multi.webp"
import shedual from "../assets/shedual.webp"
import optimize from "../assets/Pending-Reviews-removebg-preview.png"
import bulk from "../assets/img-bulk-publishing.png"
import posting from "../assets/posting-time.webp"

function Features() {
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
      imageUrl:multi,
      id: "feature3",
    },
    {
      title: "AI-Driven Replies to Engage Your Audience",
      description:
        "Keep your cool while AI handles the trolls! Handly crafts witty, timely, and on-brand responses that make your audience feel loved—even when they're asking 'When’s the next giveaway?' for the 50th time.",
      imageUrl:bulk,
      id: "feature4",
    },
    {
      title: "Schedule Posts with Visual Calendar",
      description:
        "Why wing it when you can plan it? Handly’s visual calendar is so easy, it’s like playing Tetris with your posts. Stay organized and on schedule, minus the stress.",
      imageUrl:shedual,
      id: "feature5",
    },
    {
      title: "AI-Optimized Posting Times",
      description:
        "Timing is everything! Let Handly’s AI tell you when your audience is wide awake and scrolling, so your posts don’t end up lost in the land of forgotten memes.",
      imageUrl:posting,
      id: "feature6",
    },
    {
      title: "Analyze Post Performance and Insights",
      description:
        "Data geeks, rejoice! Handly tracks every like, share, and comment so you can pat yourself on the back—or blame the algorithm. Either way, you'll know exactly what’s working (and what’s not).",
      imageUrl:optimize,
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
  
  

  const variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="features" className="py-16 px-8 sm:px-12">
      {featureData.map((feature, index) => (
        <div
          key={index}
          id={feature.id}
          className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-${
            index === 0 ? 0 : 16
          }`}
        >
          {/* Text Section */}
          <motion.div
            className={`col-span-1 ${
              index % 2 === 0 ? "" : "md:col-start-3 order-1 md:order-2"
            }`}
            custom={index % 2 === 0 ? "left" : "right"}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight transition-colors duration-300">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">{feature.description}</p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className={`col-span-2 flex justify-center ${
              index % 2 === 0 ? "" : "md:col-start-1 order-2 md:order-1"
            }`}
            custom={index % 2 === 0 ? "right" : "left"}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-full object-cover rounded-lg transition-transform duration-300"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Features;
