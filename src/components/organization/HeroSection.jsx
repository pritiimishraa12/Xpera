import {
  HiOutlineArrowTrendingUp,
  HiOutlinePlus,
  HiOutlineChartBar,
} from "react-icons/hi2";

export default function HeroSection() {
  const today = new Date();

  const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-600 via-violet-700 to-indigo-700 p-8 text-white shadow-2xl">

      {/* Background Blur */}

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-20 left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <p className="text-sm uppercase tracking-[4px] text-violet-200">
            {date}
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">

            Good Morning,

            <span className="block">
              Google India 👋
            </span>

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100">

            Let's build the next generation of talent.

            Discover brilliant students,
            post exciting internship opportunities,
            and hire future innovators through Xpera.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-violet-700 transition-all duration-300 hover:scale-105">

              <HiOutlinePlus className="text-lg" />

              Post Project

            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition-all duration-300 hover:bg-white/20">

              <HiOutlineChartBar className="text-lg" />

              View Analytics

            </button>

          </div>

        </div>

        {/* Right */}

        <div className="grid w-full max-w-md grid-cols-2 gap-5"></div>
                  {/* Card 1 */}

          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

            <div className="flex items-center justify-between">

              <p className="text-sm text-violet-100">
                Today's Applications
              </p>

              <HiOutlineArrowTrendingUp className="text-xl text-green-300" />

            </div>

            <h2 className="mt-4 text-4xl font-bold">
              48
            </h2>

            <p className="mt-2 text-sm text-violet-200">
              +12% from yesterday
            </p>

          </div>

          {/* Card 2 */}

          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

            <p className="text-sm text-violet-100">
              Active Projects
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              8
            </h2>

            <p className="mt-2 text-sm text-violet-200">
              3 closing this week
            </p>

          </div>

          {/* Card 3 */}

          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

            <p className="text-sm text-violet-100">
              Top Talent
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              152
            </h2>

            <p className="mt-2 text-sm text-violet-200">
              AI recommended students
            </p>

          </div>

          {/* Card 4 */}

          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl">

            <p className="text-sm text-violet-100">
              Hiring Success
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              94%
            </h2>

            <p className="mt-2 text-sm text-violet-200">
              Excellent performance
            </p>

          </div>

        </div>

   

    </section>
  );
}