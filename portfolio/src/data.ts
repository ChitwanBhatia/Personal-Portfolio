import type { IconType } from "react-icons";
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiCode } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { LuPuzzle } from "react-icons/lu";

// Placeholder content: replace with your own details, photo and projects.
export type Tab = "About" | "Resume" | "Project" | "Experience" | "Contact";
export const TABS: Tab[] = ["About", "Resume", "Project", "Experience", "Contact"];

export interface Profile { name: string; title: string; email: string; phone: string; location: string; avatar: string }
export const profile: Profile = {
  name: "Devansh Indoliyan", title: "Software Developer", email: "devanshindoliyan2123@gmail.com",
  phone: "+91 8279545085", location: "Uttarakhand, India", avatar: "/profile.jpeg",
};

// Icons come from react-icons (https://react-icons.github.io/react-icons/).
// To change one, import another icon above and put it in the `icon` field.
export interface ContactItem { label: string; value: string; icon: IconType; href?: string }
export const contacts: ContactItem[] = [
  { label: "Email", value: profile.email, icon: FiMail, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, icon: FiPhone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "Location", value: profile.location, icon: FiMapPin },
];

// Replace each "#" with the real profile link (GitHub is already set).
export interface Social { label: string; href: string; icon: IconType }
export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/DevanshIndoliyan-2123", icon: FaGithub },
  { label: "Portfolio", href: "#", icon: FiGlobe },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Instagram", href: "#", icon: FaInstagram },
];

export interface Service { title: string; text: string; icon: IconType }
export const aboutText: string[] = [
  "I'm a Computer Science graduate with a strong foundation in Backend Development. I have hands-on experience with Java, Spring Boot, Spring Security, and JPA, and I've built RESTful APIs and backend applications.",
  "I understand the importance of secure authentication and authorization, and I've implemented login and registration flows and OAuth 2.0 in my projects. I also have a basic foundation in multithreading and a focus on writing clean, maintainable code. Alongside backend skills, I have working knowledge of frontend technologies, which helps me integrate APIs smoothly with the UI. This lets me collaborate effectively with frontend developers, designers, and other backend engineers to deliver reliable, scalable systems.",
];
export const services: Service[] = [
  { title: "Development", text: "Building responsive and scalable applications using modern technologies.", icon: FiCode },
  { title: "Competitive Programming", text: "Solving complex algorithmic problems and joining coding contests.", icon: LuPuzzle },
  { title: "Freelancing", text: "Providing professional development services to clients worldwide.", icon: FiGlobe },
];

export interface Skill { label: string; value: string }
export const skills: Skill[] = [
  { label: "Languages", value: "Java, HTML, CSS, JavaScript" },
  { label: "Developer Tools", value: "Git, GitHub, Postman, VS Code" },
  { label: "Frameworks", value: "React, Redux, Tailwind CSS, Node.js, Express" },
  { label: "Database", value: "MySQL, MongoDB" },
];

export interface Job { company: string; period: string; points: string[] }
export const jobs: Job[] = [
  { company: "Company One", period: "Feb 2025 – May 2025, City", points: ["Built a responsive website with HTML, CSS and JavaScript.", "Managed 500+ products with structured layouts."] },
  { company: "Company Two", period: "May 2025 – Jul 2025, City", points: ["Worked on a full-stack feature using Node.js and MongoDB."] },
];

export interface Project { title: string; category: "Frontend" | "Full Stack"; image: string; github: string; live: string }
export const projects: Project[] = [
  { title: "Chat App", category: "Full Stack", image: "https://placehold.co/800x400/1e1e1f/ffdb70?text=Chat+App", github: "#", live: "#" },
  { title: "Restaurant Site", category: "Frontend", image: "https://placehold.co/800x400/1e1e1f/ffdb70?text=Restaurant", github: "#", live: "#" },
];
