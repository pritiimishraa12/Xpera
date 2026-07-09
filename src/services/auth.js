import { supabase } from "./supabase";
import { sendWelcomeEmail } from "./email";

/**
 * ============================
 * Student Signup
 * ============================
 */
export async function signUpStudent({
  fullName,
  college,
  email,
  password,
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  const { error: profileError } = await supabase
    .from("profiles")
    .insert({
      id: data.user.id,
      full_name: fullName,
      email,
      role: "student",
      college,
      xp: 0,
    });

  if (profileError) throw profileError;

  // Fire and forget welcome email
  sendWelcomeEmail(email, fullName, "student").catch(console.error);

  return data.user;
}

/**
 * ============================
 * Organization Signup
 * ============================
 */
export async function signUpOrganization({
  organizationName,
  organizationType,
  email,
  password,
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  const { error: profileError } = await supabase
    .from("profiles")
    .insert({
      id: data.user.id,
      full_name: organizationName,
      organization_name: organizationName,
      organization_type: organizationType,
      email,
      role: "organization",
      xp: 0,
    });

  if (profileError) throw profileError;

  // Fire and forget welcome email
  sendWelcomeEmail(email, organizationName, "organization").catch(console.error);

  return data.user;
}

/**
 * ============================
 * Login
 * ============================
 */
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data.user;
}

/**
 * ============================
 * Logout
 * ============================
 */
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}

/**
 * ============================
 * Current User
 * ============================
 */
export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

/**
 * ============================
 * User Profile
 * ============================
 */
export async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId);

  console.log("User ID:", userId);
  console.log("Profile Data:", data);
  console.log("Profile Error:", error);

  if (error) throw error;

  return data[0];
}