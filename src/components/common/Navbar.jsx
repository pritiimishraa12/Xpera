import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const links = [
  ["Why Xpera", "#why-xpera"],
  ["How It Works", "#how-it-works"],
  ["For Students", "#get-started"],
  ["For Organizations", "#get-started"],
  ["Resources", "#footer"],
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Xpera home">
      <span className="relative block h-9 w-9" aria-hidden="true">
        <span className="absolute left-3.5 top-0 h-10 w-2.5 rotate-45 rounded-sm bg-white" />
        <span className="absolute left-3.5 top-0 h-10 w-2.5 -rotate-45 rounded-sm bg-white/80" />
      </span>
      <span className="text-xl font-extrabold tracking-[-0.04em] text-white">Xpera</span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#061019]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="text-[13px] font-semibold text-slate-300 transition hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 sm:flex">
            <Link
            to="/auth/role"
            className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
          >
            Log in
          </Link>
           <Button onClick={() => navigate("/auth/role")} className="min-h-11 px-5">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="text-2xl text-white sm:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#071019] px-5 py-5 sm:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-300"
              >
                {label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <Button onClick={() => navigate("/auth/role")} className="min-h-11 px-5">
                Log in
              </Button>
              <Button onClick={() => navigate("/auth/role")} className="min-h-11 px-3">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;