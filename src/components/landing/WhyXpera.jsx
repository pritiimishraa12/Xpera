import { benefits } from "../../data/landingData";

const toneStyles = {
  violet: "bg-violet-50 text-violet-600",
  green: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-500",
};

function WhyXpera() {
  return (
    <section id="why-xpera" className="bg-[#f8f9fb] py-16 text-[#0b1118] sm:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">Built for momentum</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">Why Xpera?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Turn your potential into proof with the tools, guidance, and opportunities to grow.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, description, icon: Icon, tone }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${toneStyles[tone]}`}>
                <Icon className="text-2xl" />
              </span>
              <h3 className="mt-6 text-base font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyXpera;