import { supabase } from "./supabase";

export async function createProject(projectData) {
    const { data, error } = await supabase
        .from("projects")
        .insert([projectData])
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function getOrganizationProjects(organizationId) {
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("organization_id", organizationId)
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
}

export async function updateProject(projectId, updates) {
    const { data, error } = await supabase
        .from("projects")
        .update(updates)
        .eq("id", projectId)
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function deleteProject(projectId) {
    const { data, error } = await supabase
        .from("projects")
        .delete()
        .eq("id", projectId)
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function getRecentProjects(limit = 5) {
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(limit);

    if (error) throw error;
    return data;
}
