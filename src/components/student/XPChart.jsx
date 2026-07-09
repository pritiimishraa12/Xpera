import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", xp: 40 },
  { day: "Tue", xp: 75 },
  { day: "Wed", xp: 110 },
  { day: "Thu", xp: 150 },
  { day: "Fri", xp: 210 },
  { day: "Sat", xp: 280 },
  { day: "Sun", xp: 340 },
];

function XPChart() {
  return (
    <section className="flex flex-col h-full rounded-[24px] border border-slate-200/50 bg-white p-6 xl:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:border-slate-200">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">
            Analytics
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-900">
            XP Growth
          </h2>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
          +38%
        </span>

      </div>

      <div className="mt-6 h-64">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="xpGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#7C3AED"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="#7C3AED"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#EEF2F7"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
            />

            <YAxis hide />

            <Tooltip
              contentStyle={{
                borderRadius: "14px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="xp"
              stroke="#7C3AED"
              strokeWidth={3}
              fill="url(#xpGradient)"
              activeDot={{
                r: 6,
                fill: "#7C3AED",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-auto pt-6">
        <div className="grid grid-cols-3 gap-3">

          <div className="rounded-xl bg-slate-50 p-4">

            <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
              Total XP
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              340
            </h3>

          </div>

          <div className="rounded-xl bg-slate-50 p-4">

            <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
              Weekly Gain
            </p>

            <h3 className="mt-2 text-2xl font-bold text-green-600">
              +120
            </h3>

          </div>

          <div className="rounded-xl bg-slate-50 p-4">

            <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
              Next Level
            </p>

            <h3 className="mt-2 text-2xl font-bold text-violet-700">
              500 XP
            </h3>

          </div>

        </div>
      </div>

    </section>
  );
}

export default XPChart;