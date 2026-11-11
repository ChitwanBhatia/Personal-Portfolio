import Heading from "../components/Heading";
import { skills } from "../data";

export default function Resume() {
  return (
    <section>
      <Heading>Resume</Heading>
      <button className="btn center">⬇ Download Resume</button>
      <h3 className="h3 with-icon"><span className="icon-box">&lt;/&gt;</span>Technical Skills</h3>
      <ul className="skills">
        {skills.map((s) => <li key={s.label}><b>{s.label}:</b> {s.value}</li>)}
      </ul>
    </section>
  );
}