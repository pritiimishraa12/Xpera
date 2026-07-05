import { HiSparkles } from "react-icons/hi";
import Button from "../ui/Button";
import FloatingCards from "./FloatingCards";
import TrustedBy from "./TrustedBy";
import heroGirl from "../../assets/images/hero-girl.png";
import { heroContent } from "../../data/landingData";

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#061019]">
      <div className="pointer-events-none absolute left-[-12rem] top-12 h-[34rem] w-[34rem] rounded-full bg-violet-700/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8rem] top-24 h-[30rem] w-[30rem] rounded-full bg-[#d9f45a]/[0.05] blur-[130px]" />

      <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] grid-cols-1 items-center gap-10 px-5 pb-12 pt-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:pb-4 lg:pt-8">
        <div className="z-20 max-w-[640px] pb-6 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] font-medium text-slate-300">
            <HiSparkles className="text-[#d9f45a]" />
            {heroContent.badge}
            <span className="text-[#d9f45a]">✦</span>
          </div>

          <h1 className="mt-7 text-[44px] font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-[64px]">
            {heroContent.title1}
            <br />
            {heroContent.title2}
            <span className="mt-1 block text-[#d9f45a]">{heroContent.highlight}</span>
          </h1>

          <p className="mt-6 max-w-[590px] text-base leading-7 text-slate-300 sm:text-[17px]">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#get-started">{heroContent.primaryButton}</Button>
            <Button href="#get-started" variant="secondary">
              {heroContent.secondaryButton}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto hidden h-[590px] w-full max-w-[700px] lg:block">
          <div className="absolute inset-[8%] rounded-full border border-[#d9f45a]/10" />
          <div className="absolute inset-[17%] rounded-full border border-white/[0.07]" />
          <div className="absolute inset-[29%] rounded-full border border-violet-400/10" />

          <div className="hero-image-mask absolute inset-x-[5%] bottom-[1%] top-[2%] overflow-hidden">
            <img
              src={heroGirl}
              alt="Student building real-world experience on a laptop"
              className="h-full w-full object-cover object-[58%_52%] saturate-[0.9] contrast-[1.1] brightness-[0.74]"
            />
          </div>
          <FloatingCards />
        </div>
      </div>

      <TrustedBy />
    </section>
  );
}

export default Hero;