import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";
import { login, getUserProfile } from "../../services/auth";

import {
  AuthCard,
  AuthHeading,
  AuthShell,
  FormDivider,
  FormField,
  GoogleButton,
} from "./AuthLayout";

function OrganizationLogin() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [toastState, setToastState] = useState({ message: "", type: "" });

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.password) {
      setToastState({ message: "Please fill all fields.", type: "error" });
      setTimeout(() => setToastState({ message: "", type: "" }), 4000);
      return;
    }

    try {
      setLoading(true);

      const user = await login(form.email, form.password);

      const profile = await getUserProfile(user.id);

      if (profile.role !== "organization") {
        setToastState({ message: "This account belongs to a Student. Please use Student Login.", type: "error" });
        setTimeout(() => setToastState({ message: "", type: "" }), 4000);
        return;
      }

      navigate("/organization/dashboard");
    } catch (error) {
      setToastState({ message: error.message, type: "error" });
      setTimeout(() => setToastState({ message: "", type: "" }), 4000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell>
      {toastState.message && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] flex animate-fade-in-down items-center gap-3 rounded-full bg-slate-900 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.24)]">
          {toastState.type === "success" ? (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
            </div>
          ) : (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
          )}
          <span className="text-[14px] font-bold text-white tracking-wide">{toastState.message}</span>
        </div>
      )}
      <AuthCard>
        <AuthHeading
          eyebrow="Organization Access"
          title="Welcome back"
          description="Log in to manage projects and discover student talent."
        />

        <form
          className="mt-8 space-y-5"
          noValidate
          onSubmit={handleSubmit}
        >
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="team@organization.com"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <FormField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            loading={loading}
            className="w-full"
          >
            Log In
          </Button>

          <FormDivider />

          <GoogleButton label="Continue with Google" />
        </form>

        <p className="mt-7 text-center text-sm text-slate-400">
          New to Xpera?{" "}
          <Link
            to="/auth/organization/signup"
            className="font-bold text-[#d9f45a]"
          >
            Create an account
          </Link>
        </p>
      </AuthCard>
    </AuthShell>
  );
}

export default OrganizationLogin;