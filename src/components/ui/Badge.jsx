function Badge({
  children,
  color = "violet",
}) {
  const colors = {
    violet: "bg-violet-100 text-violet-700",
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold ${colors[color]}`}
    >
      {children}
    </span>
  );
}

export default Badge;