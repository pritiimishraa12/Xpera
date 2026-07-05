import { HiArrowRight, HiOutlineBriefcase, HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { AuthHeading, AuthShell } from "./AuthLayout";

const roles = [
  {
    title: "Continue as Student",
    description: "Build verified experience through real-world projects.",
    icon: HiOutlineUser,
    path: "/auth/student/login",
  },
  {
    title: "Continue as Organization",
    description: "Post meaningful projects and discover emerging talent.",
    icon: HiOutlineBriefcase,
    path: "/auth/organization/login",
  },
];

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <AuthShell backTo="/" backLabel="Back to Landing">
      <div className="w-full max-w-[820px]">
        <AuthHeading
          eyebrow="Welcome to Xpera"
          title="Choose how you’ll use Xpera"
          description="Select your role to continue. You can always return here if you need the other experience."
        />

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {roles.map(({ title, description, icon: Icon, path }) => (
            <button
              key={title}
              type="button"
              onClick={() => navigate(path)}
              className="group rounded-2xl border border-white/10 bg-[#0b141d]/90 p-6 text-left shadow-[0_24px_70px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-[#d9f45a]/45 hover:bg-[#0f1923] sm:p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-violet-500/15 text-2xl text-violet-300 transition group-hover:bg-[#d9f45a]/15 group-hover:text-[#d9f45a]">
                <Icon />
              </span>
              <h2 className="mt-6 text-xl font-extrabold tracking-[-0.025em]">{title}</h2>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#d9f45a]">
                Continue <HiArrowRight className="transition group-hover:translate-x-1" />
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="secondary" onClick={() => navigate("/")} className="min-h-11">
            Back to Landing
          </Button>
        </div>
      </div>
    </AuthShell>
  );
}

export default RoleSelection;