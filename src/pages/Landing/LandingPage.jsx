import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import CTA from "../../components/landing/CTA";
import Hero from "../../components/landing/Hero";
import HowItWorks from "../../components/landing/HowItWorks";
import WhyXpera from "../../components/landing/WhyXpera";

function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhyXpera />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;