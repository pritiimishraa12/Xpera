import { HiOutlineBadgeCheck, HiOutlineSparkles } from "react-icons/hi";
import { RiBarChartGroupedLine } from "react-icons/ri";

const cardClass =
  "absolute z-30 rounded-xl border border-white/10 bg-[#111a23]/95 p-4 text-white shadow-[0_24px_60px_rgba(0,0,0,0.38)] backdrop-blur-md";

function FloatingCards() {
  return (
    <>
      <div className={`${cardClass} left-0 top-[12%] w-[176px] md:left-[2%]`}>
        <div className="flex items-start gap-3">
          <span className="rounded-lg bg-violet-500/15 p-2 text-violet-400">
            <HiOutlineSparkles className="text-xl" />
          </span>
          <div>
            <p className="text-[11px] text-slate-400">Level 3</p>
            <p className="text-sm font-bold">Builder</p>
          </div>
        </div>
        <p className="mt-4 text-[10px] text-slate-300">340 / 500 XP</p>
        <div className="mt-2 h-1 rounded-full bg-white/10">
          <div className="h-full w-[68%] rounded-full bg-[#d9f45a]" />
        </div>
      </div>

      <div className={`${cardClass} right-0 top-[14%] w-[142px] md:right-[1%]`}>
        <p className="text-[11px] text-slate-400">Projects Completed</p>
        <p className="mt-1 text-2xl font-extrabold">12</p>
        <div className="mt-4 flex h-10 items-end gap-1" aria-hidden="true">
          {[12, 20, 27, 19, 34, 25, 38, 30].map((height, index) => (
            <span
              key={`${height}-${index}`}
              className="w-2 rounded-t-sm bg-violet-500"
              style={{ height }}
            />
          ))}
        </div>
      </div>

      <div className={`${cardClass} left-[-2%] top-[39%] w-[164px] md:left-[-1%]`}>
        <p className="text-[11px] text-slate-400">Verified Skills</p>
        <p className="mt-1 text-2xl font-extrabold">8</p>
        <div className="mt-3 flex items-center gap-1.5">
          {["bg-violet-500/20", "bg-emerald-500/20", "bg-amber-400/20"].map((color) => (
            <span
              key={color}
              className={`grid h-7 w-7 place-items-center rounded-full ${color}`}
            >
              <HiOutlineBadgeCheck className="text-sm" />
            </span>
          ))}
          <span className="ml-1 text-[10px] text-slate-400">+3</span>
        </div>
      </div>

      <div className={`${cardClass} bottom-[9%] right-0 w-[232px] md:right-[1%]`}>
        <div className="flex items-center gap-2 text-sm font-bold">
          AI Career Coach <span className="text-[#d9f45a]">✦</span>
        </div>
        <p className="mt-3 text-[11px] leading-5 text-slate-300">
          You&apos;re 2 projects away from becoming a React Developer.
        </p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#d9f45a] px-4 py-2 text-[11px] font-bold text-[#071019]">
          <RiBarChartGroupedLine /> View Roadmap
        </button>
      </div>
    </>
  );
}

export default FloatingCards;