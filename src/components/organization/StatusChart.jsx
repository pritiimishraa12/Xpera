import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Selected",
    value: 38,
    color: "#7C3AED",
  },
  {
    name: "Interview",
    value: 27,
    color: "#A78BFA",
  },
  {
    name: "Review",
    value: 21,
    color: "#DDD6FE",
  },
  {
    name: "Rejected",
    value: 14,
    color: "#E2E8F0",
  },
];

export default function StatusChart() {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300/80">

      {/* Header */}

      <div className="mb-7 flex items-center justify-between">

        <div>

          <h3 className="text-[20px] font-semibold text-slate-900">
            Application Status
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            This Month
          </p>

        </div>

        <button className="rounded-xl border border-[#ECECEC] bg-white px-3 py-2 text-sm text-slate-500">
          View
        </button>

      </div>

      <div className="relative mx-auto h-[220px] w-[220px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "1px solid #ECECEC",
                boxShadow: "0 12px 28px rgba(15,23,42,.08)",
              }}
            />

            <Pie
              data={data}
              dataKey="value"
              innerRadius={68}
              outerRadius={88}
              paddingAngle={2}
              stroke="none"
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>

          </PieChart>

        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <h2 className="text-[38px] font-bold text-slate-900">
            72%
          </h2>

          <p className="text-sm text-slate-500">
            Success
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-4">
        {data.map((item) => (

          <div
            key={item.name}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="text-[14px] font-medium text-slate-600">
                {item.name}
              </span>

            </div>

            <span className="text-[14px] font-semibold text-slate-900">
              {item.value}%
            </span>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-7 border-t border-[#ECECEC] pt-5">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Total Applications
            </p>

            <h4 className="mt-1 text-xl font-bold text-slate-900">
              2,486
            </h4>

          </div>

          <div className="rounded-xl bg-violet-50 px-4 py-2">

            <p className="text-sm font-semibold text-violet-700">
              +12.5%
            </p>

            <p className="text-xs text-slate-500">
              This month
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}