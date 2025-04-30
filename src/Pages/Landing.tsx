import About from "../components/About";
import Blog from "../components/Blog";
import FAQ from "../components/Faq";
import FeatureSection from "../components/Features";
import Footer from "../components/Footer";
import SocialMediaHero from "../components/Hero";
import HowItWorks2 from "../components/HowitWork2";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
import TestimonialSection from "../components/Testimonial";

function Landing() {
  return (
    <div className="bg-black">
      <Nav />
      <SocialMediaHero />
      <HowItWorks />
      <FeatureSection />
      <HowItWorks2 />
      <TestimonialSection />
      <About />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Landing;
