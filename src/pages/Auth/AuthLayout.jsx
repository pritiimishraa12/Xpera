import { FcGoogle } from "react-icons/fc";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

export function AuthLogo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Xpera home">
      <span className="relative block h-9 w-9" aria-hidden="true">
        <span className="absolute left-3.5 top-0 h-10 w-2.5 rotate-45 rounded-sm bg-white" />
        <span className="absolute left-3.5 top-0 h-10 w-2.5 -rotate-45 rounded-sm bg-white/80" />
      </span>
      <span className="text-xl font-extrabold tracking-[-0.04em] text-white">Xpera</span>
    </Link>
  );
}

export function AuthShell({ children, backTo = "/auth/role", backLabel = "Back" }) {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#061019] text-white">
      <div className="pointer-events-none absolute -left-48 top-24 h-[30rem] w-[30rem] rounded-full bg-violet-700/[0.09] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#d9f45a]/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <header className="relative z-10 mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <AuthLogo />
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
        >
          <HiArrowLeft /> {backLabel}
        </Link>
      </header>

      <div className="relative z-10 flex flex-1 items-center justify-center px-5 py-10 sm:px-8 sm:py-14">
        {children}
      </div>
    </main>
  );
}

export function AuthHeading({ eyebrow, title, description }) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9f45a]">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">{title}</h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}

export function FormField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-200">
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        required={required}
        className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#d9f45a]/60 focus:bg-white/[0.065] focus:ring-2 focus:ring-[#d9f45a]/10"
      />
    </div>
  );
}

export function SelectField({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-200"
      >
        {label}
      </label>

      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        className="h-12 w-full rounded-xl border border-white/10 bg-[#0c151e] px-4 text-sm text-white outline-none transition focus:border-[#d9f45a]/60 focus:ring-2 focus:ring-[#d9f45a]/10"
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export function GoogleButton({ label }) {
  return (
    <button
      type="button"
      className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/12 bg-white/[0.035] text-sm font-bold text-white transition hover:border-white/25 hover:bg-white/[0.07] active:scale-[0.98]"
    >
      <FcGoogle className="text-xl" />
      {label}
    </button>
  );
}

export function FormDivider() {
  return (
    <div className="flex items-center gap-4 py-1">
      <span className="h-px flex-1 bg-white/10" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">or</span>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export function AuthCard({ children, wide = false }) {
  return (
    <section className={`w-full ${wide ? "max-w-[660px]" : "max-w-[470px]"} rounded-2xl border border-white/10 bg-[#0b141d]/90 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur-sm sm:p-8`}>
      {children}
    </section>
  );
}
