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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-[16px] border border-slate-100/80 bg-white/95 backdrop-blur-md p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-slate-900/5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {payload[0].payload.day}
        </p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-violet-700">
          {payload[0].value} <span className="text-[13px] font-bold text-violet-500/80">XP</span>
        </p>
      </div>
    );
  }
  return null;
};

function XPChart() {
  return (
    <section className="flex flex-col h-full rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:border-slate-300/80 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Analytics
          </p>
          <h2 className="mt-1.5 text-[20px] font-bold tracking-tight text-slate-900">
            XP Growth
          </h2>
        </div>
        <span className="flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold tracking-wide text-emerald-600 ring-1 ring-inset ring-emerald-500/10">
          +38%
        </span>
      </div>

      {/* Chart */}
      <div className="mt-7 h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
              dx={-10}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Area
              type="monotone"
              dataKey="xp"
              stroke="#7c3aed"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#xpGradient)"
              activeDot={{ r: 5, fill: "#fff", stroke: "#7c3aed", strokeWidth: 2.5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Stats */}
      <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="flex flex-col">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            TOTAL XP
          </p>
          <h3 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 border-l-[3px] border-violet-500 pl-3 -ml-[15px]">340</h3>
        </div>
        <div className="flex flex-col">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            WEEKLY GAIN
          </p>
          <h3 className="mt-1.5 text-xl font-bold tracking-tight text-emerald-500 border-l-[3px] border-emerald-500 pl-3 -ml-[15px]">+120</h3>
        </div>
        <div className="flex flex-col">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            NEXT LEVEL
          </p>
          <div className="mt-1.5 flex items-baseline gap-1 border-l-[3px] border-slate-200 pl-3 -ml-[15px]">
            <h3 className="text-xl font-bold tracking-tight text-slate-900">500</h3>
            <span className="text-[13px] font-bold text-slate-400">XP</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default XPChart;