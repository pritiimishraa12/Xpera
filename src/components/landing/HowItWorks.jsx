import { steps } from "../../data/landingData";

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-20 text-center">
          <p className="inline-flex items-center rounded-full bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 ring-1 ring-slate-200/60">
            Simple by design
          </p>
          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-slate-900 sm:text-5xl">
            How It Works
          </h2>
        </div>

        <div className="relative grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Timeline Connector */}
          <div className="absolute left-[16%] right-[16%] top-8 hidden h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />

          {steps.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="group relative z-10 flex flex-col items-center text-center">
              <div className="relative mx-auto grid h-16 w-16 shrink-0 place-items-center rounded-full border border-slate-200/80 bg-white text-[24px] text-slate-700 shadow-[0_4px_16px_rgba(15,23,42,0.03)] ring-[6px] ring-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)] group-hover:border-slate-300">
                <Icon className="transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="mt-8 text-[17px] font-bold tracking-tight text-slate-900">
                <span className="text-slate-300 mr-2 font-semibold">0{index + 1}</span>
                {title}
              </h3>
              <p className="mx-auto mt-3 max-w-[240px] text-[14.5px] leading-relaxed text-slate-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
