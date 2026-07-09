import { useState, useEffect } from "react";
import OrganizationSidebar from "../../components/organization/OrganizationSidebar";
import OrganizationTopbar from "../../components/organization/OrganizationTopbar";
import ProjectForm from "../../components/organization/ProjectForm";
import "../../styles/organization/OrganizationDashboard.css"; // Reuse layout CSS
import {
    HiOutlineBriefcase,
    HiOutlinePlus,
    HiOutlinePencilSquare,
    HiOutlineTrash,
    HiOutlineUsers,
    HiOutlineChartBar,
    HiOutlineDocumentText,
    HiOutlineVideoCamera
} from "react-icons/hi2";
import { getOrganizationProjects, createProject, updateProject, deleteProject } from "../../services/projects";
import { useAuth } from "../../context/AuthContext";

export default function OrganizationProjects() {
    const [collapsed, setCollapsed] = useState(false);
    const { user } = useAuth();

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [actionLoading, setActionLoading] = useState(false);
    const [toastState, setToastState] = useState({ message: "", type: "success" });

    useEffect(() => {
        async function loadProjects() {
            try {
                setLoading(true);
                const data = await getOrganizationProjects(user.id);
                setProjects(data);
            } catch (error) {
                console.error("Error loading projects:", error);
            } finally {
                setLoading(false);
            }
        }

        if (user?.id) {
            loadProjects();
        }
    }, [user]);

    function handleOpenCreate() {
        setEditingProject(null);
        setIsModalOpen(true);
    }

    function handleOpenEdit(project) {
        setEditingProject(project);
        setIsModalOpen(true);
    }

    async function handleDelete(projectId) {
        if (!window.confirm("Are you sure you want to delete this project?")) return;
        try {
            await deleteProject(projectId);
            setProjects(projects.filter((p) => p.id !== projectId));
            setToastState({ message: "Project deleted successfully", type: "success" });
            setTimeout(() => setToastState({ message: "", type: "" }), 4000);
        } catch (error) {
            console.error("Error deleting project:", error);
            setToastState({ message: "Failed to delete project", type: "error" });
            setTimeout(() => setToastState({ message: "", type: "" }), 4000);
        }
    }

    async function handleSaveProject(formData) {
        setActionLoading(true);
        try {
            // Root Cause Fix: Supabase throws PGRST204 if non-existent columns are passed.
            // The currently deployed Supabase "projects" schema does not contain a "skills" column.
            const dbPayload = { ...formData };
            delete dbPayload.skills;

            if (editingProject) {
                // Update
                const updated = await updateProject(editingProject.id, dbPayload);
                setProjects(projects.map((p) => (p.id === updated.id ? updated : p)));
            } else {
                // Create
                const created = await createProject({
                    ...dbPayload,
                    organization_id: user.id
                });
                setProjects([created, ...projects]);
            }
            setIsModalOpen(false);
            setToastState({ message: `Project successfully ${editingProject ? "updated" : "published"}!`, type: "success" });
            setTimeout(() => setToastState({ message: "", type: "" }), 4000);
        } catch (error) {
            console.error("Error saving project:", error);
            setToastState({ message: "Failed to save project. Please try again.", type: "error" });
            setTimeout(() => setToastState({ message: "", type: "" }), 4000);
        } finally {
            setActionLoading(false);
        }
    }

    return (
        <div className="organization-layout">
            <OrganizationSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            <div className={`organization-main ${collapsed ? "expanded" : ""}`}>
                <OrganizationTopbar onPostNew={handleOpenCreate} />

                <main className="dashboard-content relative">
                    {/* Toast Notification (Professional Fixed Viewport Position) */}
                    {toastState.message && (
                        <div className="fixed top-8 right-8 z-[100] animate-fade-in-down flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-4 shadow-[0_12px_24px_rgba(0,0,0,0.15)] ring-1 ring-slate-800">
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

                    {/* Page Header (Redesigned) */}
                    <div className="mb-10 lg:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-[28px] lg:text-[32px] font-extrabold text-slate-900 tracking-tight">Projects</h1>
                            <p className="mt-1.5 text-[15px] font-medium text-slate-500">Publish, manage and track your organization's opportunities from one place.</p>
                        </div>
                        {(!loading && projects.length > 0) && (
                            <button
                                onClick={handleOpenCreate}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-[14px] font-bold text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus:ring-4 focus:ring-slate-900/20 active:translate-y-0"
                            >
                                <HiOutlinePlus className="text-lg" />
                                <span>New Project</span>
                            </button>
                        )}
                    </div>

                    {/* Quick Statistics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
                        {[
                            { label: "Projects", value: projects.length || "0", icon: <HiOutlineBriefcase /> },
                            { label: "Applications", value: "0", icon: <HiOutlineDocumentText /> },
                            { label: "Active", value: projects.filter(p => p.status === 'Active').length || "0", icon: <HiOutlineChartBar /> },
                            { label: "Interviews", value: "0", icon: <HiOutlineVideoCamera /> }
                        ].map((stat, i) => (
                            <div key={i} className="rounded-[20px] bg-white p-6 lg:p-7 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition-all hover:-translate-y-0.5">
                                <div className="flex items-center justify-between text-slate-400 mb-4">
                                    <span className="text-[13px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</span>
                                    <span className="text-[20px] opacity-80">{stat.icon}</span>
                                </div>
                                <div className="text-[32px] font-black text-slate-900 tracking-tight">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-[24px] border border-[#ECECEC] bg-white shadow-sm relative">

                        {loading ? (
                            <div className="py-24 text-center text-[15px] font-bold text-slate-400">Loading workspace...</div>
                        ) : projects.length === 0 ? (
                            <div className="relative overflow-hidden py-32 lg:py-40 text-center">
                                {/* Premium Background Grid Mask */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

                                <div className="relative z-10 mx-auto max-w-xl px-6">
                                    {/* Icon Container */}
                                    <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-tr from-slate-800 to-slate-900 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5 transition-transform hover:scale-105">
                                        <HiOutlineBriefcase className="text-[40px] text-white" />
                                    </div>

                                    <h2 className="text-[36px] font-extrabold tracking-tight text-slate-900">Build your first opportunity.</h2>
                                    <p className="mt-5 text-[17px] font-medium text-slate-500 leading-relaxed max-w-md mx-auto">
                                        Publish a real-world project and start discovering talented students ready to build alongside you.
                                    </p>

                                    {/* Benefit Cards Layer */}
                                    <div className="mt-10 mb-12 flex flex-wrap items-center justify-center gap-4">
                                        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 backdrop-blur-sm px-3.5 py-2 text-[13px] font-bold text-slate-600 shadow-sm transition-transform hover:scale-105 cursor-default">
                                            <HiOutlineDocumentText className="text-violet-500 text-lg" /> Receive applications
                                        </div>
                                        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 backdrop-blur-sm px-3.5 py-2 text-[13px] font-bold text-slate-600 shadow-sm transition-transform hover:scale-105 cursor-default">
                                            <HiOutlineUsers className="text-violet-500 text-lg" /> Discover skilled students
                                        </div>
                                        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 backdrop-blur-sm px-3.5 py-2 text-[13px] font-bold text-slate-600 shadow-sm transition-transform hover:scale-105 cursor-default">
                                            <HiOutlineChartBar className="text-violet-500 text-lg" /> Track project progress
                                        </div>
                                    </div>

                                    {/* Primary Call to Action */}
                                    <button
                                        onClick={handleOpenCreate}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 text-[15px] font-extrabold text-white shadow-[0_8px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.4)] transition-all focus:ring-4 focus:ring-violet-500/20 hover:-translate-y-0.5 active:translate-y-0"
                                    >
                                        <HiOutlinePlus className="text-xl" /> + Publish Your First Project
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-[#ECECEC] text-[12px] uppercase tracking-wider text-slate-400">
                                            <th className="px-4 py-4 font-semibold">Title</th>
                                            <th className="px-4 py-4 font-semibold">Type</th>
                                            <th className="px-4 py-4 font-semibold">Status</th>
                                            <th className="px-4 py-4 font-semibold">Date Created</th>
                                            <th className="px-4 py-4 font-semibold text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.map((project) => (
                                            <tr key={project.id} className="border-b border-[#F1F5F9] transition-colors hover:bg-slate-50">
                                                <td className="px-4 py-4">
                                                    <div className="text-[14px] font-bold text-slate-900">{project.title}</div>
                                                    <div className="mt-0.5 truncate text-[13px] text-slate-500 max-w-[300px]">
                                                        {project.description}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-[13px] font-medium text-slate-600">
                                                    {project.type}
                                                </td>
                                                <td className="px-4 py-4">
                                                    <span
                                                        className={`inline-flex rounded-lg px-2.5 py-1 text-[11px] font-bold ${project.status === "Active"
                                                            ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                                            : project.status === "Draft"
                                                                ? "bg-slate-50 text-slate-600 border border-slate-200"
                                                                : "bg-red-50 text-red-600 border border-red-100"
                                                            }`}
                                                    >
                                                        {project.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-[13px] text-slate-500">
                                                    {new Date(project.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="px-4 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <button
                                                            onClick={() => handleOpenEdit(project)}
                                                            className="rounded-lg p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition"
                                                            title="Edit Project"
                                                        >
                                                            <HiOutlinePencilSquare className="text-[18px]" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(project.id)}
                                                            className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 transition"
                                                            title="Delete Project"
                                                        >
                                                            <HiOutlineTrash className="text-[18px]" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                    </div>
                </main>
            </div>

            {isModalOpen && (
                <ProjectForm
                    initialData={editingProject}
                    onSave={handleSaveProject}
                    onClose={() => setIsModalOpen(false)}
                    loading={actionLoading}
                />
            )}
        </div>
    );
}
