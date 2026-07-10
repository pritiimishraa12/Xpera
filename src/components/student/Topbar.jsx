import {
  HiOutlineBell,
  HiOutlineChevronDown,
  HiOutlineSearch,
  HiOutlineDocumentText,
} from "react-icons/hi";
import Button from "../ui/Button";
import { useState, useRef } from "react";
import { analyzeDocumentVision } from "../../services/groq";
import { useAuth } from "../../context/AuthContext";

function Topbar() {
  const { profile } = useAuth();
  const fileInputRef = useRef(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [extractResult, setExtractResult] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setAnalyzing(true);
    setExtractResult(null);

    try {
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const result = reader.result;
          if (result) resolve(result);
          else reject(new Error("Failed to extract data URL."));
        };
        reader.onerror = (err) => reject(err);
      });

      const res = await analyzeDocumentVision(
        dataUrl,
        "You are an expert Talent Evaluator. Analyze this resume image and return exactly ONE valid JSON object and absolutely no other text. Keys required: candidate (string), skills (list of strings), strengths (list of strings), weaknesses (list of strings), learning_suggestions (list of strings), recommended_projects (list of strings), score (number 0-100 indicating overall quality)."
      );

      let parsed = null;
      try {
        const jsonMatch = res.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[0]);
        } else {
          parsed = JSON.parse(res);
        }
      } catch (err) {
        parsed = { candidate: "Unknown", skills: [], strengths: [], weaknesses: [], learning_suggestions: [], recommended_projects: [], score: 0, raw: res };
      }
      setExtractResult(parsed);
    } catch (error) {
      console.error("Resume analysis detailed error:", error);
      setExtractResult({ error: `Analysis Failed: ${error.message}` });
    } finally {
      setAnalyzing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <header className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between -mt-2">
      {/* Search - Left aligned on desktop */}
      <div className="flex-1 w-full xl:w-auto xl:max-w-md">
        <div className="relative group">
          <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-slate-400 transition-colors group-focus-within:text-violet-600" />
          <input
            type="text"
            placeholder="Search projects, skills..."
            className="h-[46px] w-full rounded-[14px] border border-slate-200/60 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] pl-11 pr-4 text-[14px] font-semibold text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 ease-out focus:border-violet-300 focus:ring-4 focus:ring-violet-500/10 hover:border-slate-300 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)]"
          />
        </div>
      </div>

      {/* Right - Profile and actions */}
      <div className="flex w-full flex-row items-center justify-end gap-3.5 xl:w-auto">

        {/* Notifications */}
        <button className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] bg-white border border-slate-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] focus:outline-none">
          <HiOutlineBell className="text-[20px] text-slate-500 transition-colors hover:text-slate-700" />
          <span className="absolute right-3.5 top-3.5 h-2 w-2 rounded-full bg-rose-500 ring-[3px] ring-white shadow-sm"></span>
        </button>

        {/* Resume Upload */}
        <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={analyzing}
          className="flex h-[46px] items-center justify-center gap-2 rounded-[14px] bg-violet-600 px-5 text-[14px] font-bold text-white shadow-[0_2px_10px_-2px_rgba(124,58,237,0.4)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-[0_6px_16px_-2px_rgba(124,58,237,0.5)] disabled:opacity-70 disabled:cursor-wait focus:outline-none"
        >
          {analyzing ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white px-2" />
          ) : (
            <HiOutlineDocumentText className="text-[20px]" />
          )}
          <span>{analyzing ? "Analyzing..." : "Upload Resume"}</span>
        </button>

        {/* User */}
        <button className="group flex h-[46px] items-center gap-3 rounded-[14px] bg-white px-3 py-2 border border-slate-200/60 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] focus:outline-none">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] bg-violet-100 text-[11px] font-extrabold text-violet-700">
            {profile?.full_name ? profile.full_name.substring(0, 2).toUpperCase() : "PR"}
          </div>
          <div className="text-left hidden sm:block">
            <h3 className="text-[13px] font-bold text-slate-900 leading-tight">
              {profile?.full_name || "Priti"}
            </h3>
            <p className="mt-0.5 text-[10px] font-semibold tracking-wide text-slate-400 leading-none">
              Level 3 • Builder
            </p>
          </div>
          <HiOutlineChevronDown className="text-sm text-slate-400 ml-1 transition-transform group-hover:text-slate-600" />
        </button>

      </div>

      {/* Resume Analysis Output Modal */}
      {extractResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4">
          <div className="flex max-h-[85vh] w-full max-w-[550px] flex-col rounded-[24px] bg-white shadow-2xl overflow-hidden ring-1 ring-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-500/20">
                  <HiOutlineDocumentText className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">AI Analysis Complete</h3>
                  <p className="text-xs font-medium text-slate-500">CV Evaluation Report</p>
                </div>
              </div>
              <button onClick={() => setExtractResult(null)} className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">✕</button>
            </div>

            <div className="overflow-y-auto px-6 py-6 text-[14.5px] leading-relaxed text-slate-600 bg-slate-50">
              {extractResult.error ? (
                <div className="rounded-xl border border-red-200 bg-white p-5 text-red-700 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚠️</span>
                    <p className="font-semibold">{extractResult.error}</p>
                  </div>
                </div>
              ) : extractResult.raw ? (
                <div className="whitespace-pre-wrap rounded-xl bg-white p-5 shadow-sm ring-1 ring-inset ring-slate-100">{extractResult.raw}</div>
              ) : (
                <div className="space-y-6">
                  {/* Candidate Score Card */}
                  <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm ring-1 ring-inset ring-slate-100 relative overflow-hidden">
                    <div className="absolute right-0 top-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-indigo-500/5 blur-xl"></div>
                    <div className="relative z-10">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Candidate Details</p>
                      <h4 className="text-xl font-extrabold text-slate-900">{extractResult.candidate || "Unknown Candidate"}</h4>
                    </div>
                    <div className="relative z-10 flex flex-col items-end">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Overall Score</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-indigo-600 tabular-nums tracking-tighter">{extractResult.score || "--"}</span>
                        <span className="text-sm font-bold text-slate-400">/100</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-inset ring-slate-100">
                      <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-500/20 text-xs">💪</span>
                        Strengths
                      </h5>
                      <ul className="space-y-3 lg:space-y-2 text-sm text-slate-600">
                        {extractResult.strengths?.length > 0 ? extractResult.strengths.slice(0, 3).map((s, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"></span>
                            <span className="leading-snug font-medium text-slate-700">{s}</span>
                          </li>
                        )) : <li>No specific strengths found.</li>}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-inset ring-slate-100">
                      <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 text-amber-600 ring-1 ring-inset ring-amber-500/20 text-xs">📉</span>
                        Areas to Grow
                      </h5>
                      <ul className="space-y-3 lg:space-y-2 text-sm text-slate-600">
                        {extractResult.weaknesses?.length > 0 ? extractResult.weaknesses.slice(0, 3).map((w, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400"></span>
                            <span className="leading-snug font-medium text-slate-700">{w}</span>
                          </li>
                        )) : <li>No specific areas found.</li>}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-widest pl-1">Identified Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {extractResult.skills?.length > 0 ? extractResult.skills.map((skill, i) => (
                        <span key={i} className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700 ring-1 ring-inset ring-indigo-500/20 transition-all hover:bg-indigo-100">
                          {skill}
                        </span>
                      )) : <span className="text-sm text-slate-500 pl-1">No skills mapped.</span>}
                    </div>
                  </div>

                  <div className="space-y-5 rounded-xl bg-white p-5 shadow-sm ring-1 ring-inset ring-slate-100">
                    <div>
                      <h5 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-widest text-indigo-600">Learning Suggestions</h5>
                      <ul className="space-y-2.5 text-sm">
                        {extractResult.learning_suggestions?.length > 0 ? extractResult.learning_suggestions.map((l, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] text-slate-500">{i + 1}</span>
                            <span className="leading-relaxed font-medium text-slate-700">{l}</span>
                          </li>
                        )) : <li className="text-slate-500">N/A</li>}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <h5 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-widest text-emerald-600">Recommended Next Project</h5>
                      <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                        <p className="font-bold text-emerald-900 text-sm">{extractResult.recommended_projects?.[0] || "Continue building web apps using React."}</p>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
            <div className="bg-white border-t border-slate-100 p-5 flex justify-end">
              <Button onClick={() => setExtractResult(null)} className="bg-indigo-600 text-white font-bold tracking-wide hover:bg-indigo-700 px-6">Done</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Topbar;