function Button({
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
    "inline-flex min-h-12 items-center justify-center rounded-lg px-6 text-sm font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9f45a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071019]";

  const variants = {
    primary:
      "bg-[#d9f45a] text-[#09111a] shadow-[0_10px_32px_rgba(217,244,90,0.16)] hover:bg-[#e4fa7b] hover:-translate-y-0.5",
    secondary:
      "border border-white/25 bg-transparent text-white hover:border-white/45 hover:bg-white/[0.06]",
    dark: "bg-[#071019] text-white hover:bg-[#111d28]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

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
    className={`${classes} ${
      loading || disabled
        ? "cursor-not-allowed opacity-60"
        : ""
    }`}
  >
    {loading ? "Please wait..." : children}
  </button>
);
}

export default Button;