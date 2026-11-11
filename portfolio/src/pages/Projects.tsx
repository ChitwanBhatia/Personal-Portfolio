import { useState } from "react";
import Heading from "../components/Heading";
import { projects } from "../data";

const CATEGORIES = ["All", "Frontend", "Full Stack"];

export default function Projects() {
  const [cat, setCat] = useState("All");
  const shown = projects.filter((p) => cat === "All" || p.category === cat);

  return (
    <section>
      <Heading>Project</Heading>
      <select className="select" value={cat} onChange={(e) => setCat(e.target.value)}>
        {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
      </select>
      <ul className="projects">
        {shown.map((p) => (
          <li key={p.title}>
            <figure>
              <img src={p.image} alt={p.title} />
              <div className="overlay">
                <a href={p.live}>👁</a>
                <a href={p.github}>GH</a>
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