import "../../styles/organization/UpcomingInterviews.css";

const interviews = [
  {
    id: 1,
    name: "Priti Mishra",
    role: "AI Chatbot Development",
    date: "May 26, 2025",
    time: "10:00 AM",
    avatar:
      "https://images.unsplash.com/photo-1762341104634-998bbee0ccba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbCUyMGdpcmwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Anannya Verma",
    role: "Full Stack Web Developer",
    date: "May 26, 2025",
    time: "02:00 PM",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Mobile App UI/UX Design",
    date: "May 27, 2025",
    time: "11:30 AM",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

export default function UpcomingInterviews() {
  return (
    <div className="upcoming-interviews-card">

      <div className="upcoming-interviews-header">

        <div>

          <h3>Upcoming Interviews</h3>

          <p>Scheduled interviews</p>

        </div>

        <button className="upcoming-view-all-btn rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
          View all &rarr;
        </button>

      </div>

      <div className="interview-list-wrap">

        {interviews.length > 0 ? (
          interviews.map((item) => (
            <div key={item.id} className="interview-row group transition-colors hover:bg-slate-50/80">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <img
                  src={item.avatar}
                  alt={`${item.name} avatar`}
                  loading="lazy"
                  className="interview-avatar shadow-sm ring-1 ring-slate-900/5 transition-transform group-hover:scale-105"
                />
                <div className="interview-info">
                  <h4 className="group-hover:text-violet-700 transition-colors">{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
              <div className="interview-datetime">
                <span className="interview-date">{item.date}</span>
                <span className="interview-time">{item.time}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-slate-500">
            <span className="text-4xl mb-3 opacity-80">📅</span>
            <h4 className="text-[15px] font-bold text-slate-900">No upcoming interviews</h4>
            <p className="text-sm mt-1 text-center">Your scheduled interviews will appear here.</p>
          </div>
        )}

      </div>

    </div>
  );
}