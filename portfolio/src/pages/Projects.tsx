import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import Heading from "../components/Heading";
import { projects } from "../data";

const CATEGORIES = ["All", "Frontend", "Full Stack"];

const external = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

export default function Projects() {
  const [cat, setCat] = useState("All");
  const shown = projects.filter((p) => cat === "All" || p.category === cat);

  return (
    <section>
      <Heading>Project</Heading>
      <select className="select" aria-label="Filter projects" value={cat} onChange={(e) => setCat(e.target.value)}>
        {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
      </select>
      <ul className="projects">
        {shown.map((p) => (
          <li key={p.title}>
            <figure>
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="overlay">
                <a href={p.live} aria-label={`${p.title} live demo`} title="Live demo" {...external(p.live)}><FiEye aria-hidden="true" /></a>
                <a href={p.github} aria-label={`${p.title} source code`} title="Source code" {...external(p.github)}><FaGithub aria-hidden="true" /></a>
              </div>
            </figure>
            <h4>{p.title}</h4>
            <p className="cat">{p.category}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
