import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";
import { signUpOrganization } from "../../services/auth";

import {
  AuthCard,
  AuthHeading,
  AuthShell,
  FormField,
  SelectField,
} from "./AuthLayout";

const organizationTypes = [
  "Startup",
  "Company",
  "Nonprofit",
  "Educational Institution",
  "Community Organization",
  "Other",
];

function OrganizationSignup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [toastState, setToastState] = useState({ message: "", type: "" });

  const [form, setForm] = useState({
    organizationName: "",
    organizationType: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.organizationName ||
      !form.organizationType ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setToastState({ message: "Please fill all fields.", type: "error" });
      setTimeout(() => setToastState({ message: "", type: "" }), 4000);
      return;
    }

    if (form.password.length < 6) {
      setToastState({ message: "Password must be at least 6 characters.", type: "error" });
      setTimeout(() => setToastState({ message: "", type: "" }), 4000);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setToastState({ message: "Passwords do not match.", type: "error" });
      setTimeout(() => setToastState({ message: "", type: "" }), 4000);
      return;
    }

    try {
      setLoading(true);

      await signUpOrganization({
        organizationName: form.organizationName,
        organizationType: form.organizationType,
        email: form.email,
        password: form.password,
      });

      setToastState({ message: "Organization account created successfully!", type: "success" });
      setTimeout(() => navigate("/organization/dashboard"), 1000);
    } catch (error) {
      setToastState({ message: error.message, type: "error" });
      setTimeout(() => setToastState({ message: "", type: "" }), 4000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      backTo="/auth/organization/login"
      backLabel="Back to Login"
    >
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
      <AuthCard wide>
        <AuthHeading
          eyebrow="Organization account"
          title="Create meaningful opportunities"
          description="Join Xpera to post real projects and help students build experience that matters."
        />

        <form
          className="mt-8 space-y-5"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              id="organizationName"
              label="Organization Name"
              placeholder="Organization name"
              autoComplete="organization"
              value={form.organizationName}
              onChange={handleChange}
              required
            />

            <SelectField
              id="organizationType"
              label="Organization Type"
              placeholder="Select type"
              options={organizationTypes}
              value={form.organizationType}
              onChange={handleChange}
            />
          </div>

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

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <FormField
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              autoComplete="new-password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            loading={loading}
            className="w-full"
          >
            Create Account
          </Button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/auth/organization/login"
            className="font-bold text-[#d9f45a] hover:text-[#e4fa7b]"
          >
            Log in
          </Link>
        </p>
      </AuthCard>
    </AuthShell>
  );
}

export default OrganizationSignup;