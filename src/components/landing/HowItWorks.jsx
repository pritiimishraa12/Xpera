import { steps } from "../../data/landingData";

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 text-[#0b1118] sm:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">Simple by design</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">How It Works</h2>
        </div>

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[12%] right-[12%] top-7 hidden border-t border-dashed border-slate-300 lg:block" />
          {steps.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="relative z-10 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-slate-200 bg-white text-2xl text-[#0b1118] shadow-sm">
                <Icon />
              </span>
              <h3 className="mt-6 text-sm font-extrabold">
                {index + 1}. {title}
              </h3>
              <p className="mx-auto mt-3 max-w-[230px] text-sm leading-6 text-slate-500">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
