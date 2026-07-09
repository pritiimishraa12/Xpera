// src/data/organizationData.js

export const organization = {
  company: {
    name: "Google India",
    email: "careers@google.com",
    logo: "https://ui-avatars.com/api/?name=Google+India&background=7C3AED&color=fff",
    verified: true,
    since: "2020",
    rating: 4.9,
  },

  stats: [
    {
      id: 1,
      title: "Projects Posted",
      value: 24,
      growth: "+12%",
      icon: "project",
      color: "violet",
    },
    {
      id: 2,
      title: "Applications",
      value: 428,
      growth: "+18%",
      icon: "applications",
      color: "blue",
    },
    {
      id: 3,
      title: "Shortlisted",
      value: 76,
      growth: "+8%",
      icon: "shortlist",
      color: "green",
    },
    {
      id: 4,
      title: "Successful Hires",
      value: 18,
      growth: "+4%",
      icon: "hire",
      color: "orange",
    },
    {
      id: 5,
      title: "Active Projects",
      value: 8,
      growth: "+2",
      icon: "active",
      color: "purple",
    },
    {
      id: 6,
      title: "Pending Reviews",
      value: 32,
      growth: "-3%",
      icon: "review",
      color: "red",
    },
  ],

  applicationsChart: [
    { month: "Jan", applications: 42 },
    { month: "Feb", applications: 61 },
    { month: "Mar", applications: 89 },
    { month: "Apr", applications: 120 },
    { month: "May", applications: 155 },
    { month: "Jun", applications: 188 },
  ],

  hiringFunnel: [
    {
      stage: "Applications",
      count: 428,
      color: "#7C3AED",
    },
    {
      stage: "Reviewed",
      count: 210,
      color: "#8B5CF6",
    },
    {
      stage: "Shortlisted",
      count: 76,
      color: "#A78BFA",
    },
    {
      stage: "Selected",
      count: 18,
      color: "#C4B5FD",
    },
  ],

  recentApplicants: [
    {
      id: 1,
      name: "Rahul Sharma",
      college: "MIT WPU",
      branch: "Computer Engineering",
      skills: ["React", "Node", "MongoDB"],
      xp: 4210,
      appliedOn: "2 hrs ago",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Verma",
      college: "PCCOE",
      branch: "Information Technology",
      skills: ["Flutter", "Firebase"],
      xp: 3970,
      appliedOn: "5 hrs ago",
      status: "Reviewed",
    },
    {
      id: 3,
      name: "Ananya Singh",
      college: "COEP",
      branch: "AI & DS",
      skills: ["Python", "ML", "TensorFlow"],
      xp: 4480,
      appliedOn: "Yesterday",
      status: "Shortlisted",
    },
    {
      id: 4,
      name: "Vivek Patil",
      college: "VIT Pune",
      branch: "Computer Science",
      skills: ["Java", "Spring"],
      xp: 3650,
      appliedOn: "Yesterday",
      status: "Selected",
    },
  ],

  activeProjects: [
    {
      id: 1,
      title: "AI Resume Analyzer",
      applicants: 42,
      deadline: "12 Jul",
      status: "Hiring",
    },
    {
      id: 2,
      title: "React Dashboard",
      applicants: 35,
      deadline: "18 Jul",
      status: "Hiring",
    },
    {
      id: 3,
      title: "Flutter Commerce App",
      applicants: 26,
      deadline: "25 Jul",
      status: "Review",
    },
    {
      id: 4,
      title: "Data Analytics Portal",
      applicants: 18,
      deadline: "30 Jul",
      status: "Open",
    },
  ],

  topTalent: [
    {
      id: 1,
      name: "Rahul Sharma",
      skill: "React",
      xp: 4210,
      rating: 5,
    },
    {
      id: 2,
      name: "Ananya Singh",
      skill: "Artificial Intelligence",
      xp: 4480,
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Verma",
      skill: "Flutter",
      xp: 3970,
      rating: 5,
    },
  ],

  aiInsights: [
    {
      id: 1,
      title: "AI Recommendation",
      description:
        "Your React Internship received 48% more applications than average.",
    },
    {
      id: 2,
      title: "Suggested Action",
      description:
        "Launch another Frontend Project this week to attract more top talent.",
    },
  ],

  skillDemand: [
    {
      skill: "Artificial Intelligence",
      percentage: 91,
    },
    {
      skill: "React",
      percentage: 82,
    },
    {
      skill: "Python",
      percentage: 74,
    },
    {
      skill: "Flutter",
      percentage: 58,
    },
  ],

  notifications: [
    {
      id: 1,
      message: "Rahul Sharma applied for AI Resume Analyzer.",
      time: "2 min ago",
    },
    {
      id: 2,
      message: "Priya Verma has been shortlisted.",
      time: "Yesterday",
    },
    {
      id: 3,
      message: "React Dashboard deadline is approaching.",
      time: "Today",
    },
  ],

  deadlines: [
    {
      id: 1,
      title: "AI Resume Analyzer",
      date: "12 Jul",
    },
    {
      id: 2,
      title: "React Dashboard",
      date: "18 Jul",
    },
    {
      id: 3,
      title: "Flutter Commerce App",
      date: "25 Jul",
    },
  ],

  quickActions: [
    "Post Project",
    "Review Applicants",
    "Discover Talent",
    "View Analytics",
  ],
};

export default organization;