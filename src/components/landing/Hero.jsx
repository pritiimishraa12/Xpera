import { HiSparkles } from "react-icons/hi";
import Button from "../ui/Button";
import FloatingCards from "./FloatingCards";
import TrustedBy from "./TrustedBy";
import heroGirl from "../../assets/images/hero-girl.png";
import { heroContent } from "../../data/landingData";

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#050C12] pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-white/[0.04]">
      {/* Subtle SaaS Gradients */}
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[40%] h-[500px] w-[500px] rounded-full bg-[#d9f45a]/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute left-[-10%] top-[30%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.03] blur-[140px]" />

      <div className="relative mx-auto grid min-h-[600px] max-w-[1440px] grid-cols-1 items-center gap-12 px-5 pb-12 pt-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:px-12 lg:pb-4 lg:pt-8">
        <div className="z-20 max-w-[660px] pb-6 lg:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-[12px] font-semibold text-slate-300 backdrop-blur-md transition-colors hover:bg-white/[0.04]">
            <HiSparkles className="text-[#d9f45a]" />
            <span className="tracking-wide">{heroContent.badge}</span>
          </div>

          <h1 className="mt-8 text-[48px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-[72px]">
            {heroContent.title1}
            <br />
            {heroContent.title2}
            <span className="mt-2 block bg-gradient-to-r from-[#d9f45a] to-[#a3d921] bg-clip-text text-transparent drop-shadow-sm">{heroContent.highlight}</span>
          </h1>

          <p className="mt-7 max-w-[580px] text-base leading-relaxed tracking-[-0.01em] text-slate-400 sm:text-[18px]">
            {heroContent.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="#get-started"
              className="h-12 px-8 text-[15px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_20px_rgba(217,244,90,0.15)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_30px_rgba(217,244,90,0.3)] transition-all duration-300 font-bold"
            >
              {heroContent.primaryButton}
            </Button>
            <Button
              href="#get-started"
              variant="secondary"
              className="h-12 px-8 text-[15px] border-white/10 bg-white/5 text-white shadow-none hover:bg-white/10 hover:border-white/20 transition-all font-semibold"
            >
              {heroContent.secondaryButton}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto hidden h-[600px] w-full max-w-[700px] lg:block perspective-1000">
          {/* Subtle tech rings */}
          <div className="absolute inset-[10%] rounded-full border border-white/[0.03] shadow-[inset_0_0_40px_rgba(255,255,255,0.01)]" />
          <div className="absolute inset-[22%] rounded-full border border-[#d9f45a]/[0.05]" />

          <div className="hero-image-mask absolute inset-x-[8%] bottom-[2%] top-[4%] overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050C12] via-transparent to-transparent z-10" />
            <img
              src={heroGirl}
              alt="Student building real-world experience on a laptop"
              className="h-full w-full object-cover object-[55%_50%] saturate-[0.85] contrast-[1.1] brightness-[0.8]"
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