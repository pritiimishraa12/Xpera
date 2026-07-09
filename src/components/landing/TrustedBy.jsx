import { FaAd, FaAirbnb, FaMicrosoft, FaSpotify } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

const companies = [
  ["Google", SiGoogle],
  ["Microsoft", FaMicrosoft],
  ["Airbnb", FaAirbnb],
  ["Spotify", FaSpotify],
  ["Adobe", FaAd],
];

function TrustedBy() {
  return (
    <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 border-t border-white/[0.04]">
      <p className="mb-8 text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-500/70">
        Trusted by organizations building the future
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60 grayscale filter transition-all hover:grayscale-0 hover:opacity-100 md:gap-x-16">
        {companies.map(([company, Icon]) => (
          <div key={company} className="flex items-center gap-2.5 text-[15px] font-bold text-slate-300">
            <Icon className="text-xl" />
            <span className="tracking-tight">{company}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustedBy;