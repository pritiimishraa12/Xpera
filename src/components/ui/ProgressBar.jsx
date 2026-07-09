function ProgressBar({
  value = 0,
}) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-200">

      <div
        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
        style={{
          width: `${value}%`,
        }}
      />

    </div>
  );
}

export default ProgressBar;