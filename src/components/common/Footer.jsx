import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const columns = [
  ["Platform", ["Home", "Features", "How It Works", "Pricing"]],
  ["For Students", ["Browse Projects", "Career Coach", "Skill Tests", "Dashboard"]],
  ["For Organizations", ["Post a Project", "Find Talent", "Dashboard", "Pricing"]],
  ["Company", ["About Us", "Careers", "Blog", "Contact"]],
];

function FooterLogo() {
  return (
    <div className="flex items-center gap-2">
      <span className="relative block h-8 w-8" aria-hidden="true">
        <span className="absolute left-3 top-0 h-9 w-2 rotate-45 rounded-sm bg-white" />
        <span className="absolute left-3 top-0 h-9 w-2 -rotate-45 rounded-sm bg-white/80" />
      </span>
      <span className="text-lg font-extrabold text-white">Xpera</span>
    </div>
  );
}

function Footer() {
  return (
    <footer id="footer" className="bg-[#061019] text-slate-400">
      <div className="mx-auto max-w-[1320px] px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr] lg:grid-cols-[1fr_2.2fr]">
          <div>
            <FooterLogo />
            <p className="mt-5 max-w-[250px] text-sm leading-6">
              Doesn’t require experience.<br />Helps you become experienced.
            </p>
            <div className="mt-6 flex gap-3">
              {[FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                <a key={index} href="#social" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] text-sm text-white transition hover:bg-white/10">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map(([heading, items]) => (
              <div key={heading}>
                <h3 className="text-sm font-bold text-white">{heading}</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#top" className="transition hover:text-white">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-6 text-xs sm:flex-row">
          <p>© 2026 Xpera. All rights reserved.</p>
          <div className="flex gap-6"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;