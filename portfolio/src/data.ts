// Placeholder content: replace with your own details, photo and projects.
export type Tab = "About" | "Resume" | "Project" | "Experience" | "Contact";
export const TABS: Tab[] = ["About", "Resume", "Project", "Experience", "Contact"];

export interface Profile { name: string; title: string; email: string; phone: string; location: string; avatar: string }
export const profile: Profile = {
  name: "Devansh Indoliyan", title: "Software Developer", email: "devanshindoliyan2123@gmail.com",
  phone: "+91 8279545085", location: "Uttarakhand, India", avatar: "/profile.jpeg",
};

// icon can be an emoji/text OR an image URL (https://... or /file.png from public/)
export interface ContactItem { label: string; value: string; icon: string; href?: string }
export const contacts: ContactItem[] = [
  { label: "Email", value: profile.email, icon: "✉", href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, icon: "https://img.icons8.com/ios-glyphs/30/smartphone--v1.png" },
  { label: "Location", value: profile.location, icon: "⌖" },
];

export interface Social { label: string; href: string; icon: string }
export const socials: Social[] = [
  { label: "GitHub", href: "#", icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000" },
  { label: "Portfolio", href: "#", icon: "" },
  { label: "LinkedIn", href: "#", icon: "https://img.icons8.com/?size=100&id=8808&format=png&color=000000" },
  { label: "Instagram", href: "#", icon: "https://img.icons8.com/?size=100&id=M486asakOqWV&format=png&color=000000" },
];

export interface Service { title: string; text: string; icon: string }
export const aboutText: string[] = [
  "I'm a Computer Science graduate with a strong foundation in Backend Development. I have hands-on experience with Java, Spring Boot, Spring Security, and JPA, and I've built RESTful APIs and backend applications.",
  "I understand the importance of secure authentication and authorization, and I've implemented login and registration flows and OAuth 2.0 in my projects. I also have a basic foundation in multithreading and a focus on writing clean, maintainable code. Alongside backend skills, I have working knowledge of frontend technologies, which helps me integrate APIs smoothly with the UI. This lets me collaborate effectively with frontend developers, designers, and other backend engineers to deliver reliable, scalable systems.",
];
export const services: Service[] = [
  { title: "Development", text: "Building responsive and scalable applications using modern technologies.", icon: "💻" },
  { title: "Competitive Programming", text: "Solving complex algorithmic problems and joining coding contests.", icon: "🧩" },
  { title: "Freelancing", text: "Providing professional development services to clients worldwide.", icon: "🌍" },
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