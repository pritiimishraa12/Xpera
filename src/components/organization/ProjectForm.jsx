import { useState } from "react";
import {
    HiXMark,
    HiOutlineBriefcase,
    HiOutlineSignal,
    HiOutlineSparkles,
    HiCheckCircle
} from "react-icons/hi2";


export default function ProjectForm({
    initialData,
    onSave,
    onClose,
    loading,
}) {
    const [form, setForm] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        type: initialData?.type || "Internship",
        status: initialData?.status || "Active",
    });

    const [skillsArr, setSkillsArr] = useState(
        initialData?.skills ? initialData.skills.split(",").map(val => val.trim()).filter(Boolean) : []
    );
    const [skillInput, setSkillInput] = useState("");
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    }

    function handleSkillKeyDown(e) {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const val = skillInput.trim().replace(/,/g, "");
            if (val && !skillsArr.includes(val)) {
                setSkillsArr([...skillsArr, val]);
                setSkillInput("");
                if (errors.skills) setErrors({ ...errors, skills: null });
            }
        } else if (e.key === "Backspace" && !skillInput && skillsArr.length > 0) {
            setSkillsArr(skillsArr.slice(0, -1));
        }
    }

    function removeSkill(toRemove) {
        setSkillsArr(skillsArr.filter(s => s !== toRemove));
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Safely push dangling input text to the array
        const finalSkills = [...skillsArr];
        const lingeringInput = skillInput.trim().replace(/,/g, "");
        if (lingeringInput && !finalSkills.includes(lingeringInput)) {
            finalSkills.push(lingeringInput);
        }

        const newErrors = {};
        if (!form.title.trim()) newErrors.title = "A project title is required to continue.";
        if (!form.description.trim()) newErrors.description = "Please provide a comprehensive description.";
        if (finalSkills.length === 0) newErrors.skills = "At least one skill requirement is necessary.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const payload = {
            ...form,
            skills: finalSkills.join(", ")
        };
        onSave(payload);
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md transition-opacity">
            <div className="w-full max-w-[640px] flex flex-col max-h-[92vh] bg-white rounded-[24px] shadow-[0_48px_100px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/5 relative overflow-hidden transform transition-all group animate-slide-up-modal">

                {/* Premium Header Gradient & Layout */}
                <div className="relative px-8 py-6 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white sticky top-0 z-10 flex items-start justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-violet-100/50 border border-violet-200/50 mb-3">
                            <HiOutlineSparkles className="text-[12px] text-violet-600" />
                            <span className="text-[11px] font-bold text-violet-700 uppercase tracking-wider">Workspace Setup</span>
                        </div>
                        <h2 className="text-[22px] font-extrabold text-slate-900 tracking-tight leading-tight">
                            {initialData ? "Edit Project Details" : "Create New Project"}
                        </h2>
                        <p className="text-[14px] font-medium text-slate-500 mt-1.5">Configure requirements, stack, and timeline constraints.</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex items-center justify-center h-10 w-10 mt-1 rounded-full bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/20"
                        aria-label="Close modal"
                    >
                        <HiXMark className="text-xl" />
                    </button>
                </div>

                {/* Form Body - Explicit High-End Boundaries */}
                <div className="flex-1 overflow-y-auto px-8 py-8 bg-slate-50/50">
                    <div className="space-y-8">

                        {/* Title Input Group */}
                        <div>
                            <label className="block mb-2 text-[13px] font-bold text-slate-700">
                                Project Title <span className="text-rose-500 ml-0.5">*</span>
                            </label>
                            <div className="relative group/input">
                                <input
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    className={`w-full rounded-xl border ${errors.title ? 'border-rose-300 bg-rose-50/50 focus:ring-rose-500/10 focus:border-rose-500' : 'border-slate-200 bg-white hover:border-slate-300 focus:ring-violet-500/10 focus:border-violet-500'} px-4 py-3.5 text-[15px] font-semibold text-slate-900 outline-none transition-all focus:ring-4 placeholder:text-slate-400 placeholder:font-medium shadow-sm`}
                                    placeholder="e.g. Next.js Core Dashboard Overhaul"
                                    autoFocus
                                />
                                {errors.title && (
                                    <div className="mt-1.5 flex items-center gap-1.5 animate-in">
                                        <p className="text-[12px] font-bold text-rose-500">{errors.title}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Description Group */}
                        <div>
                            <label className="flex items-baseline justify-between mb-2">
                                <span className="text-[13px] font-bold text-slate-700">Role Description <span className="text-rose-500 ml-0.5">*</span></span>
                                <span className="text-[12px] font-medium text-slate-400">Markdown not supported</span>
                            </label>
                            <div className="relative">
                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    rows={6}
                                    className={`w-full resize-y rounded-xl border ${errors.description ? 'border-rose-300 bg-rose-50/50 focus:ring-rose-500/10 focus:border-rose-500' : 'border-slate-200 bg-white hover:border-slate-300 focus:ring-violet-500/10 focus:border-violet-500'} px-4 py-3.5 text-[14px] leading-relaxed font-medium text-slate-700 outline-none transition-all focus:ring-4 placeholder:text-slate-400 shadow-sm`}
                                    placeholder="Outline the core responsibilities, expected deliverables, and the overall impact of this project on the business..."
                                />
                                {errors.description && (
                                    <div className="mt-1.5 flex items-center gap-1.5 animate-in">
                                        <p className="text-[12px] font-bold text-rose-500">{errors.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Skills Chips Map */}
                        <div className="border-t border-slate-200/60 pt-8">
                            <label className="block mb-2 text-[13px] font-bold text-slate-700">
                                Required Stack <span className="text-rose-500 ml-0.5">*</span>
                            </label>
                            <div className={`min-h-[56px] w-full rounded-xl border ${errors.skills ? 'border-rose-300 bg-rose-50/50 focus-within:ring-rose-500/10 focus-within:border-rose-500' : 'border-slate-200 bg-white hover:border-slate-300 focus-within:border-violet-500 focus-within:ring-violet-500/10'} focus-within:ring-4 transition-all flex flex-wrap items-center gap-2 p-2 shadow-sm relative cursor-text`} onClick={() => document.getElementById("skillInputBox")?.focus()}>

                                {skillsArr.map((skill, index) => (
                                    <span key={index} className="inline-flex items-center gap-1 rounded-lg bg-slate-900 border border-slate-900 pl-3 pr-1 py-1.5 text-[13px] font-bold text-white shadow-sm transition-transform hover:scale-[1.02]">
                                        <span>{skill}</span>
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); removeSkill(skill); }}
                                            className="ml-1 flex h-5 w-5 items-center justify-center rounded-md text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-slate-400 outline-none"
                                        >
                                            <HiXMark className="text-[14px]" />
                                        </button>
                                    </span>
                                ))}

                                <input
                                    id="skillInputBox"
                                    type="text"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyDown={handleSkillKeyDown}
                                    className="flex-1 min-w-[150px] bg-transparent outline-none px-2 text-[14px] font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-medium my-1"
                                    placeholder={skillsArr.length === 0 ? "Type skill & hit Enter (e.g. React)" : ""}
                                />
                            </div>
                            {errors.skills && (
                                <p className="text-[12px] font-bold text-rose-500 mt-2">{errors.skills}</p>
                            )}
                            <p className="text-[12px] font-medium text-slate-500 mt-2.5">Candidates without these core skills will be filtered automatically.</p>
                        </div>

                        {/* Dual Dropdowns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

                            {/* Type Dropdown */}
                            <div className="relative">
                                <label className="flex items-center gap-2 mb-2 text-[13px] font-bold text-slate-700">
                                    <HiOutlineBriefcase className="text-slate-400" /> Contract Type
                                </label>
                                <div className="relative shadow-sm rounded-xl">
                                    <select
                                        name="type"
                                        value={form.type}
                                        onChange={handleChange}
                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-white hover:border-slate-300 px-4 py-3.5 pr-10 text-[14px] font-semibold text-slate-900 outline-none transition-all focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 cursor-pointer"
                                    >
                                        <option value="Internship">Internship Role</option>
                                        <option value="Freelance">Freelance Contract</option>
                                        <option value="Part-time">Part-time Position</option>
                                        <option value="Full-time">Full-time Position</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center bg-slate-50 rounded-md h-7 w-7 border border-slate-200">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Status Dropdown */}
                            <div className="relative">
                                <label className="flex items-center gap-2 mb-2 text-[13px] font-bold text-slate-700">
                                    <HiOutlineSignal className="text-slate-400" /> Visibility Status
                                </label>
                                <div className="relative shadow-sm rounded-xl">
                                    <select
                                        name="status"
                                        value={form.status}
                                        onChange={handleChange}
                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-white hover:border-slate-300 px-4 py-3.5 pr-10 text-[14px] font-semibold text-slate-900 outline-none transition-all focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 cursor-pointer"
                                    >
                                        <option value="Active">Published (Active)</option>
                                        <option value="Draft">Save as Draft</option>
                                        <option value="Closed">Closed (Hidden)</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center bg-slate-50 rounded-md h-7 w-7 border border-slate-200">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Controls */}
                <div className="bg-white border-t border-slate-200/80 px-8 py-5 flex items-center justify-between sticky bottom-0 z-10">
                    <p className="hidden sm:block text-[13px] font-semibold text-slate-500">
                        {initialData ? "Changes reflect instantly." : "Live on organization profile."}
                    </p>
                    <div className="flex w-full sm:w-auto items-center justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl px-5 py-2.5 text-[14px] font-bold text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="inline-flex items-center justify-center min-w-[160px] rounded-xl bg-violet-600 text-white border border-transparent px-6 py-2.5 text-[14px] font-bold shadow-[0_4px_12px_rgba(124,58,237,0.3)] hover:bg-violet-700 hover:shadow-[0_6px_16px_rgba(124,58,237,0.4)] hover:-translate-y-[1px] transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/20 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Saving...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <HiCheckCircle className="text-[18px]" />
                                    {initialData ? "Save Changes" : "Publish Project"}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
