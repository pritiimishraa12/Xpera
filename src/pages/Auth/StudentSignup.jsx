import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";

import { signUpStudent } from "../../services/auth";

import {
  AuthCard,
  AuthHeading,
  AuthShell,
  FormDivider,
  FormField,
  GoogleButton,
} from "./AuthLayout";

function StudentSignup() {
    const navigate = useNavigate();

const [loading, setLoading] = useState(false);

const [form, setForm] = useState({
  fullName: "",
  college: "",
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
    !form.fullName ||
    !form.college ||
    !form.email ||
    !form.password ||
    !form.confirmPassword
  ) {
    alert("Please fill all fields.");
    return;
  }

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    setLoading(true);

    await signUpStudent({
      fullName: form.fullName,
      college: form.college,
      email: form.email,
      password: form.password,
    });

    alert("Account created successfully!");

    navigate("/auth/student/login");
  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
} 

  return (
    <AuthShell backTo="/auth/student/login" backLabel="Back to Login">
      <AuthCard wide>
        <AuthHeading
          eyebrow="Student account"
          title="Start building experience"
          description="Create your profile and take the first step toward verified, real-world experience."
        />

        <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="fullName" label="Full Name" placeholder="Your full name" autoComplete="name" value={form.fullName} onChange={handleChange}/>
            <FormField id="college" label="College" placeholder="Your college name" autoComplete="organization" value={form.college}  onChange={handleChange}/>
          </div>
          <FormField id="email" label="Email" type="email" placeholder="you@example.com" autoComplete="email" value={form.email} onChange={handleChange}/>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="password" label="Password" type="password" placeholder="Create a password" autoComplete="new-password" value={form.password} onChange={handleChange}/>
            <FormField id="confirmPassword" label="Confirm Password" type="password" placeholder="Confirm your password" autoComplete="new-password" value={form.confirmPassword} onChange={handleChange}/>
          </div>
          <Button type="submit" loading={loading} className="w-full">Create Account</Button>
          <FormDivider />
          <GoogleButton label="Sign up with Google" />
        </form>

        <p className="mt-7 text-center text-sm text-slate-400">
          Already have an account? <Link to="/auth/student/login" className="font-bold text-[#d9f45a] hover:text-[#e4fa7b]">Log in</Link>
        </p>
      </AuthCard>
    </AuthShell>
  );
}

export default StudentSignup;