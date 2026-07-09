import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const defaultData = [
  { month: "May 1", applicants: 12 },
  { month: "May 4", applicants: 18 },
  { month: "May 7", applicants: 32 },
  { month: "May 10", applicants: 21 },
  { month: "May 13", applicants: 39 },
  { month: "May 16", applicants: 54 },
  { month: "May 19", applicants: 46 },
  { month: "May 22", applicants: 78 },
  { month: "May 25", applicants: 64 },
  { month: "May 28", applicants: 48 },
  { month: "May 30", applicants: 72 },
];

export default function AnalyticsChart({
  data = defaultData,
}) {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300/80">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <h3 className="text-[22px] font-semibold text-slate-900">
          Applications Overview
        </h3>

        <button className="rounded-xl border border-[#ECECEC] bg-white px-4 py-2 text-sm font-medium text-slate-500">
          This Month
        </button>

      </div>

      <div className="h-[310px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id="purpleFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#7C3AED"
                  stopOpacity={0.22}
                />

                <stop
                  offset="100%"
                  stopColor="#7C3AED"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#ECECEC"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 18,
                border: "1px solid #ECECEC",
                boxShadow: "0 12px 28px rgba(0,0,0,.06)",
              }}
            />

            <Area
              type="monotone"
              dataKey="applicants"
              stroke="#7C3AED"
              strokeWidth={3.5}
              fill="url(#purpleFill)"
              activeDot={{
                r: 6,
                fill: "#7C3AED",
                stroke: "#FFFFFF",
                strokeWidth: 3,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* Bottom Stats */}

      <div className="mt-6 flex items-center justify-between border-t border-[#ECECEC] pt-5">

        <div>

          <p className="text-sm text-slate-500">
            Total Applications
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            2,486
          </h2>

        </div>

        <div className="rounded-xl bg-violet-50 px-4 py-2">

          <p className="text-sm font-semibold text-violet-700">
            +18.4%
          </p>

          <p className="text-xs text-slate-500">
            vs last month
          </p>

        </div>

      </div>

    </div>
  );
}