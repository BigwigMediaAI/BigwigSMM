import React from "react";
import ceo from "../assets/ceo.jpg"

const Team: React.FC = () => {
  // Sample data for team members


  return (
    <>
    <section className=" container mx-auto py-12 px-4 lg:px-8">
      <div className="max=w-6xl px-6 md:px-8 gap-8">
        {/* CEO Section */}
        <div className=" bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
            src={ceo} // Replace with your CEO image
            alt="CEO"
            className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Vipul Dutta</h3>
          <p className="text-blue-600 text-center my-3">CEO & Founder</p>
          <p className="text-gray-600 text-center">
          Vipul Dutta, the all-star of tech entrepreneurship and the Mastermind-in-Chief over at Bigwig Media Group of Companies. With a legendary 23-year run in the high-stakes world of Digital Marketing and Advertising, he's practically royalty in the industry. No kidding! His majestic career is littered with illustrious roles like 'Director of Adglobal360- Hakahodo (Japan),' 'Lord High Director of Pensa Media - a Google Partner Company (India),' and 'Supreme Leader at PBL/ACP Media (New Zealand).' Not just content being one of the pioneer in digital marketing, he's got a serious crush on AI and is hell-bent on spearheading the next wave of innovative firepower in the digital market landscape.
          </p>
          <h2 className="font-bold text-gray-700 mt-6 text-center text-2xl">About Bigwig Social</h2>
          <h2 className="text-gray-600 text-center mt-4">
          Elevate your social media game without even breaking a sweat with Bigwig Social, the AI-powered, social media one-stop-shop! Let's have a chat about creating sizzling content, snazzy images, trendy hashtags, jazzy emoticons and blessing your followers with perfectly timed posts across all channels! Dodging trolls and responding to comments?          </h2>
          <h2 className="text-gray-600 text-center mt-4">
          Rapidly responding to comments and deep-diving into performance analytics has never been this hilariously straightforward. And guess what? Whether you’re a quaint local business or a sprawling enterprise, we're here ready to drive your digital growth.          </h2>
          <h2 className="text-gray-600 text-center mt-4 font-bold">Our platform is the digital dynamo that's got your back.</h2>
        </div>
      </div>
    </section>
    </>
  );
};

export default Team;
