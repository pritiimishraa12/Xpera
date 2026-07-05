import { supabase } from "./supabase";

/**
 * Student Signup
 */
export async function signUpStudent({
  fullName,
  college,
  email,
  password,
}) {
  // Create Auth User
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  // Save Profile
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

  return data.user;
}

/**
 * Organization Signup
 */
export async function signUpOrganization({
  organizationName,
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
      email,
      role: "organization",
      xp: 0,
    });

  if (profileError) throw profileError;

  return data.user;
}

/**
 * Login
 */
export async function login(email, password) {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) throw error;

  return data.user;
}

/**
 * Logout
 */
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}

/**
 * Current User
 */
export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}