import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  href,
  loading = false,
  disabled = false,
}) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center rounded-xl px-6 text-[14.5px] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061019] active:scale-[0.98]";

  const variants = {
    primary:
      "bg-[#d9f45a] text-slate-900 shadow-sm hover:bg-[#c9f120] hover:shadow-[0_4px_20px_-4px_rgba(217,244,90,0.4)]",
    secondary:
      "border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50",
    dark: "bg-slate-900 text-white shadow-sm hover:bg-slate-800 hover:shadow-[0_4px_20px_-4px_rgba(15,23,42,0.3)]",
    violet: "bg-violet-600 text-white shadow-sm hover:bg-violet-700 hover:shadow-[0_4px_20px_-4px_rgba(124,58,237,0.4)]"
  };

  const classes = twMerge(clsx(base, variants[variant], className));

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={twMerge(clsx(classes, (loading || disabled) && "cursor-not-allowed opacity-60 active:scale-100 hover:shadow-none translate-y-0"))}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}