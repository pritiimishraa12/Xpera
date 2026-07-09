import { benefits } from "../../data/landingData";

const toneStyles = {
  violet: "bg-violet-50 text-violet-600 ring-1 ring-violet-500/10 shadow-[0_2px_8px_rgba(124,58,237,0.06)]",
  green: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/10 shadow-[0_2px_8px_rgba(16,185,129,0.06)]",
  amber: "bg-amber-50 text-amber-600 ring-1 ring-amber-500/10 shadow-[0_2px_8px_rgba(245,158,11,0.06)]",
};

function WhyXpera() {
  return (
    <section id="why-xpera" className="bg-[#F8FAFC] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full bg-violet-100/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 ring-1 ring-violet-500/10">
            Built for momentum
          </p>
          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-slate-900 sm:text-5xl">
            Why Xpera?
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-500">
            Turn your potential into proof with the tools, guidance, and opportunities to grow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {benefits.map(({ title, description, icon: Icon, tone }) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-[24px] bg-white p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:ring-slate-200/80"
            >
              {/* Subtle background shift on hover */}
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${toneStyles[tone]}`}>
                <Icon className="text-[22px]" />
              </span>
              <h3 className="relative mt-8 text-[17px] font-bold tracking-tight text-slate-900">
                {title}
              </h3>
              <p className="relative mt-3 text-[14.5px] leading-relaxed text-slate-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyXpera;