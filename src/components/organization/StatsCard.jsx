import {
  HiOutlineArrowTrendingUp,
  HiOutlineArrowTrendingDown,
} from "react-icons/hi2";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  change = 0,
  changeLabel = "from last month",
  iconBg = "bg-violet-50",
  iconColor = "text-violet-600",
}) {
  const positive = change >= 0;

  return (
    <div className="flex flex-col h-full rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300/80">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-[15px] font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-[44px] font-bold leading-none text-slate-900">
            {value}
          </h2>

        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
        >
          {Icon && (
            <Icon className={`text-[28px] ${iconColor}`} />
          )}
        </div>

      </div>

      <div className="mt-8 flex items-center justify-between">

        <div
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-[13px] font-semibold ${positive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-500"
            }`}
        >
          {positive ? (
            <HiOutlineArrowTrendingUp className="text-sm" />
          ) : (
            <HiOutlineArrowTrendingDown className="text-sm" />
          )}

          {positive ? "+" : ""}
          {change}%
        </div>

        <p className="text-[13px] font-medium text-slate-400">
          {changeLabel}
        </p>

      </div>

    </div>
  );
}