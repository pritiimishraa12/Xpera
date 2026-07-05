import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { AuthCard, AuthHeading, AuthShell, FormField, SelectField } from "./AuthLayout";

const organizationTypes = [
  "Startup",
  "Company",
  "Nonprofit",
  "Educational Institution",
  "Community Organization",
  "Other",
];

function OrganizationSignup() {
  return (
    <AuthShell backTo="/auth/organization/login" backLabel="Back to Login">
      <AuthCard wide>
        <AuthHeading
          eyebrow="Organization account"
          title="Create meaningful opportunities"
          description="Join Xpera to post real projects and help students build experience that matters."
        />

        <form className="mt-8 space-y-5" noValidate onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="organization-name" label="Organization Name" placeholder="Organization name" autoComplete="organization" />
            <SelectField id="organization-type" label="Organization Type" placeholder="Select type" options={organizationTypes} />
          </div>
          <FormField id="email" label="Email" type="email" placeholder="team@organization.com" autoComplete="email" />
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="password" label="Password" type="password" placeholder="Create a password" autoComplete="new-password" />
            <FormField id="confirm-password" label="Confirm Password" type="password" placeholder="Confirm your password" autoComplete="new-password" />
          </div>
          <Button type="submit" className="w-full">Create Account</Button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-400">
          Already have an account? <Link to="/auth/organization/login" className="font-bold text-[#d9f45a] hover:text-[#e4fa7b]">Log in</Link>
        </p>
      </AuthCard>
    </AuthShell>
  );
}

export default OrganizationSignup;