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
      // Convert to Base64 wrapped in a proper Promise
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
        // Fallback if AI fails to return JSON
        parsed = { candidate: "Unknown", skills: [], strengths: [], weaknesses: [], learning_suggestions: [], recommended_projects: [], score: 0, raw: res };
      }
      setExtractResult(parsed);
    } catch (error) {
      console.error("Resume analysis detailed error:", error);
      setExtractResult({ error: `Analysis Failed: ${error.message}` });
    } finally {
      setAnalyzing(false);
      // Reset input so the same file can be selected again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <header className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

      {/* Left */}

      <div>

        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">
          Dashboard
        </span>

        <h1 className="mt-3 text-[34px] font-extrabold tracking-tight text-slate-900">
          Welcome back{profile?.full_name ? `, ${profile.full_name.split(" ")[0]}` : ""} 👋
        </h1>

        <p className="mt-2 max-w-xl text-[15px] leading-7 text-slate-500">
          Continue building your real-world experience and unlock your next
          career milestone.
        </p>

      </div>

      {/* Right */}

      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center xl:w-auto">

        {/* Search */}

        <div className="relative">

          <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-slate-400" />

          <input
            type="text"
            placeholder="Search projects, skills..."
            className="h-12 w-full sm:w-[320px] xl:w-[420px] rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-[15px] text-slate-900 outline-none transition-all duration-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
          />

        </div>
        {/* Notifications */}

        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:bg-slate-50">

          <HiOutlineBell className="text-[22px] text-slate-700" />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>

        </button>

        {/* Resume Upload */}
        <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
        <button
          onClick={() => fileInputRef.current?.click()}
          title="Upload Resume (Image)"
          disabled={analyzing}
          className="relative flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 transition-all duration-200 hover:bg-slate-50 font-semibold text-slate-700 text-[14px]">
          <HiOutlineDocumentText className="text-[20px]" />
          {analyzing ? "Analyzing..." : "Upload Resume"}
        </button>

        {/* User */}

        <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 transition-all duration-200 hover:bg-slate-50">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-lg font-bold text-violet-700">
            {profile?.full_name ? profile.full_name.substring(0, 2).toUpperCase() : "ST"}
          </div>

          <div className="text-left">

            <h3 className="text-[15px] font-bold text-slate-900">
              {profile?.full_name || "Student"}
            </h3>

            <p className="text-xs text-slate-500">
              Level 3 • Builder
            </p>

          </div>

          <HiOutlineChevronDown className="text-slate-500" />

        </button>

      </div>

      {/* Resume Analysis Output Modal */}
      {extractResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="flex max-h-[85vh] w-full max-w-[550px] flex-col rounded-[24px] border border-slate-200/50 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)] animate-in zoom-in-95 duration-200 overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <h3 className="text-lg font-bold text-slate-800">Resume Analysis Complete</h3>
              <button onClick={() => setExtractResult(null)} className="h-8 w-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">✕</button>
            </div>
            <div className="overflow-y-auto px-6 py-5 text-[14.5px] leading-relaxed text-slate-600 bg-slate-50/50">
              {extractResult.error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                  {extractResult.error}
                </div>
              ) : extractResult.raw ? (
                <div className="whitespace-pre-wrap">{extractResult.raw}</div>
              ) : (
                <div className="space-y-6">

                  <div className="flex items-center justify-between border border-slate-200/60 bg-white rounded-xl p-4 shadow-sm">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Candidate</p>
                      <h4 className="text-lg font-bold text-slate-900">{extractResult.candidate || "No Name Found"}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Score</p>
                      <div className="flex items-end gap-1">
                        <span className="text-3xl font-black text-violet-600 leading-none">{extractResult.score || "--"}</span>
                        <span className="text-sm font-semibold text-slate-400 pb-1">/100</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm">
                      <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span>Strengths</h5>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {extractResult.strengths?.length > 0 ? extractResult.strengths.slice(0, 3).map((s, i) => <li key={i} className="leading-snug flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> <span>{s}</span></li>) : <li>No specific strengths found.</li>}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm">
                      <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-400"></span>Areas to Grow</h5>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {extractResult.weaknesses?.length > 0 ? extractResult.weaknesses.slice(0, 3).map((w, i) => <li key={i} className="leading-snug text-slate-500">&bull; {w}</li>) : <li>No specific areas found.</li>}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-800 mb-3 text-[13px] uppercase tracking-wider">Identified Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {extractResult.skills?.length > 0 ? extractResult.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-violet-50 text-violet-700 font-semibold rounded-lg text-xs border border-violet-100">{skill}</span>
                      )) : <span className="text-sm text-slate-500">No skills mapped.</span>}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-slate-800 mb-2 text-[13px] uppercase tracking-wider">Learning Suggestions</h5>
                      <ul className="space-y-1.5 text-sm">
                        {extractResult.learning_suggestions?.length > 0 ? extractResult.learning_suggestions.map((l, i) => <li key={i} className="flex items-start gap-2"><span className="text-violet-500 mt-1 text-xs">◆</span> <span className="leading-relaxed">{l}</span></li>) : <li className="text-slate-500">N/A</li>}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800 mb-2 text-[13px] uppercase tracking-wider">Recommended Next Project</h5>
                      <div className="rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm border-l-4 border-l-violet-500">
                        <p className="font-semibold text-slate-800 text-sm">{extractResult.recommended_projects?.[0] || "Continue building web apps using React."}</p>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
            <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-end">
              <Button onClick={() => setExtractResult(null)} variant="violet">Done</Button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}

export default Topbar;