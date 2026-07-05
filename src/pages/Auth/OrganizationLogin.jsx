import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { AuthCard, AuthHeading, AuthShell, FormDivider, FormField, GoogleButton } from "./AuthLayout";

function OrganizationLogin() {
  return (
    <AuthShell>
      <AuthCard>
        <AuthHeading
          eyebrow="Organization access"
          title="Welcome back"
          description="Log in to manage projects and connect with emerging talent."
        />

        <form className="mt-8 space-y-5" noValidate onSubmit={(event) => event.preventDefault()}>
          <FormField id="email" label="Email" type="email" placeholder="team@organization.com" autoComplete="email" />
          <div>
            <FormField id="password" label="Password" type="password" placeholder="Enter your password" autoComplete="current-password" />
            <div className="mt-2 text-right">
              <a href="#forgot-password" className="text-xs font-semibold text-[#d9f45a] hover:text-[#e4fa7b]">Forgot Password?</a>
            </div>
          </div>
          <Button type="submit" className="w-full">Log in</Button>
          <FormDivider />
          <GoogleButton label="Continue with Google" />
        </form>

        <p className="mt-7 text-center text-sm text-slate-400">
          New to Xpera? <Link to="/auth/organization/signup" className="font-bold text-[#d9f45a] hover:text-[#e4fa7b]">Create an account</Link>
        </p>
      </AuthCard>
    </AuthShell>
  );
}

export default OrganizationLogin;