import {
  HiOutlineBadgeCheck,
  HiOutlineBriefcase,
  HiOutlineLightBulb,
  HiOutlineSearch,
  HiOutlineSparkles,
  HiOutlineTrendingUp,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { FiCode } from "react-icons/fi";

export const heroContent = {
  badge: "Real Experience. Verified Skills.",
  title1: "Doesn’t require",
  title2: "experience.",
  highlight: "Helps you become experienced.",
  description:
    "XPERA connects students with companies to build real-world, verified projects. Gain practical experience, earn XP, and become interview-ready before landing your first internship.",
  primaryButton: "Start Building for Free",
  secondaryButton: "View Companies",
};

export const benefits = [
  {
    title: "Real-World Projects",
    description: "Work on industry-relevant projects posted by verified organizations.",
    icon: HiOutlineBriefcase,
    tone: "violet",
  },
  {
    title: "AI Career Coach",
    description: "Personalized roadmap, smart recommendations, and career guidance.",
    icon: HiOutlineSparkles,
    tone: "violet",
  },
  {
    title: "Verified Skills",
    description: "Get your skills verified and earn certificates to showcase your abilities.",
    icon: HiOutlineBadgeCheck,
    tone: "green",
  },
  {
    title: "Experience Growth",
    description: "Earn XP, level up, and build an impressive profile that stands out.",
    icon: HiOutlineTrendingUp,
    tone: "amber",
  },
];

export const steps = [
  {
    title: "Create Profile",
    description: "Tell us about yourself and your skills.",
    icon: HiOutlineUserCircle,
  },
  {
    title: "Find Projects",
    description: "Explore projects that match your skills and interests.",
    icon: HiOutlineSearch,
  },
  {
    title: "Work & Learn",
    description: "Complete projects and gain real-world experience.",
    icon: FiCode,
  },
  {
    title: "Get Recognized",
    description: "Earn XP, certificates, and get noticed by top orgs.",
    icon: HiOutlineLightBulb,
  },
];