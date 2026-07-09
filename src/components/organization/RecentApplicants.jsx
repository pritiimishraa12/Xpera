import "../../styles/organization/RecentApplicants.css";
import { useState } from "react";
import { sendInterviewInviteEmail } from "../../services/email";
import { HiOutlineMail } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";

const applicants = [
  {
    id: 1,
    name: "Priti Mishra",
    email: "pritiiiimishraa@gmail.com",
    project: "AI Chatbot Development",
    appliedDate: "May 24, 2025",
    avatar:
      "https://ui-avatars.com/api/?background=7C3AED&color=fff&name=Rohit+Sharma",
    status: "Shortlisted",
  },
  {
    id: 2,
    name: "Anannya Verma",
    email: "anannya@example.com",
    project: "Full Stack Web Developer",
    appliedDate: "May 23, 2025",
    avatar:
      "https://ui-avatars.com/api/?background=0EA5E9&color=fff&name=Anannya+Verma",
    status: "Applied",
  },
  {
    id: 3,
    name: "Raj Singh",
    email: "singhraj460u@gmail.com",
    project: "Mobile App UI/UX Design",
    appliedDate: "May 22, 2025",
    avatar:
      "https://ui-avatars.com/api/?background=10B981&color=fff&name=Arjun+Patel",
    status: "Interviewed",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha@example.com",
    project: "Data Analysis Intern",
    appliedDate: "May 21, 2025",
    avatar:
      "https://ui-avatars.com/api/?background=F59E0B&color=fff&name=Sneha+Reddy",
    status: "Applied",
  },
  {
    id: 5,
    name: "Vivek Singh",
    email: "vivek@example.com",
    project: "ML Model Developer",
    appliedDate: "May 20, 2025",
    avatar:
      "https://ui-avatars.com/api/?background=EC4899&color=fff&name=Vivek+Singh",
    status: "Shortlisted",
  },
];

// Map badge colors precisely to the reference screenshot:
// Applied -> Soft Blue/Sky
// Shortlisted -> Soft Purple/Violet
// Interviewed -> Soft Green
const badge = {
  Applied: "bg-blue-50 text-blue-600 border border-blue-100",
  Shortlisted: "bg-violet-50 text-violet-600 border border-violet-100",
  Interviewed: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  Invited: "bg-amber-50 text-amber-600 border border-amber-100",
};

export default function RecentApplicants() {
  const [loadingIds, setLoadingIds] = useState(new Set());
  const [successIds, setSuccessIds] = useState(new Set());
  const [toastState, setToastState] = useState({ message: "", type: "" });
  const { profile } = useAuth();

  const handleInvite = async (candidate) => {
    setLoadingIds((prev) => new Set(prev).add(candidate.id));

    // Create a mock time slot 3 days from now
    const inviteDate = new Date();
    inviteDate.setDate(inviteDate.getDate() + 3);
    const timeSlot = inviteDate.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });

    const orgName = profile?.organization_name || profile?.full_name || "Organization";

    try {
      await sendInterviewInviteEmail(candidate.email, candidate.name, candidate.project, timeSlot, orgName);
      setSuccessIds((prev) => new Set(prev).add(candidate.id));
      setToastState({ message: `Sent interview invitation to ${candidate.name}!`, type: "success" });
      setTimeout(() => setToastState({ message: "", type: "" }), 4000);
    } catch (error) {
      console.error("Failed to send invite:", error);
      setToastState({ message: `Failed to send email: ${error.message}`, type: "error" });
      setTimeout(() => setToastState({ message: "", type: "" }), 4000);
    } finally {
      setLoadingIds((prev) => {
        const next = new Set(prev);
        next.delete(candidate.id);
        return next;
      });
    }
  };

  return (
    <div className="flex flex-col h-full rounded-[24px] border border-slate-200/50 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:border-slate-200 relative">

      {/* Toast Notification */}
      {toastState.message && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[60] flex animate-fade-in-down items-center gap-3 rounded-full bg-slate-900 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.24)]">
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

      <div className="flex items-center justify-between border-b border-[#ECECEC] px-6 py-5">

        <div>

          <h3 className="text-[17px] font-bold text-slate-900">
            Recent Applicants
          </h3>

        </div>

        <button className="text-sm font-semibold text-violet-600 hover:text-violet-700">
          View all applicants →
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-[#ECECEC] text-[12px] uppercase tracking-wider text-slate-400">

              <th className="px-6 py-4 font-semibold">
                Applicant
              </th>

              <th className="px-6 py-4 font-semibold">
                Project
              </th>

              <th className="px-6 py-4 font-semibold">
                Applied On
              </th>

              <th className="px-6 py-4 font-semibold">
                Status
              </th>

              <th className="whitespace-nowrap px-6 py-4 font-semibold text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {applicants.length > 0 ? (
              applicants.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-slate-100 transition-all hover:bg-slate-50/80 group"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <img
                        src={item.avatar}
                        alt={`${item.name} avatar`}
                        loading="lazy"
                        className="h-10 w-10 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-slate-900/5 transition-transform group-hover:scale-105"
                      />

                      <div>

                        <h4 className="text-[14px] font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                          {item.name}
                        </h4>

                        <p className="text-xs text-slate-500">
                          {item.email}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-4 text-[14px] font-semibold text-slate-800">
                    {item.project}
                  </td>

                  <td className="px-6 py-4 text-[13px] text-slate-500">
                    {item.appliedDate}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`inline-flex rounded-md px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide ${badge[item.status]}`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleInvite(item)}
                      disabled={loadingIds.has(item.id) || successIds.has(item.id)}
                      aria-label={`Invite ${item.name} to interview`}
                      className="inline-flex min-w-[88px] justify-center items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-1 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <HiOutlineMail className="text-sm opacity-70" />
                      {loadingIds.has(item.id)
                        ? "Sending..."
                        : successIds.has(item.id)
                          ? "Invited"
                          : "Invite"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center justify-center text-slate-500">
                    <span className="text-4xl mb-3">📂</span>
                    <h4 className="text-[15px] font-bold text-slate-900">No applicants yet</h4>
                    <p className="text-sm mt-1">When someone applies, they’ll show up here.</p>
                  </div>
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* Bottom duplicate View All Applicants link to match the screenshot footer */}
      <div className="border-t border-[#ECECEC] p-4 text-center">
        <button className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 rounded-md px-3 py-1">
          View all applicants &rarr;
        </button>
      </div>

    </div>
  );
}