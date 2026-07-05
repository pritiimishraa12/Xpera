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
    <div className="relative mx-auto max-w-[1440px] px-5 pb-9 sm:px-8 lg:px-12">
      <p className="mb-5 text-[11px] font-medium text-slate-400">
        Trusted by students &amp; organizations worldwide
      </p>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-12">
        {companies.map(([company, Icon]) => (
          <div key={company} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Icon className="text-base" />
            {company}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustedBy;