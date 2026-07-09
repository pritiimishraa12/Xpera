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

function StudentLogin() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      // Login
      const user = await login(form.email, form.password);

      // Fetch Profile
      const profile = await getUserProfile(user.id);

      // Role Check
      if (profile.role !== "student") {
        alert(
          "This account is registered as an Organization. Please login through Organization Login."
        );
        return;
      }

      alert(`Welcome back, ${profile.full_name}!`);

      navigate("/student/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell>
      <AuthCard>
        <AuthHeading
          eyebrow="Student Access"
          title="Welcome back"
          description="Log in to continue building your skills and experience."
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
            placeholder="you@example.com"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div>
            <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <div className="mt-2 text-right">
              <button
                type="button"
                className="text-xs font-semibold text-[#d9f45a] hover:text-[#e4fa7b]"
              >
                Forgot Password?
              </button>
            </div>
          </div>

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
            to="/auth/student/signup"
            className="font-bold text-[#d9f45a] hover:text-[#e4fa7b]"
          >
            Create an account
          </Link>
        </p>
      </AuthCard>
    </AuthShell>
  );
}

export default StudentLogin;