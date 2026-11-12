import { FiDownload, FiCode } from "react-icons/fi";
import Heading from "../components/Heading";
import { skills } from "../data";

export default function Resume() {
  return (
    <section>
      <Heading>Resume</Heading>
      <button className="btn center"><FiDownload aria-hidden="true" /> Download Resume</button>
      <h3 className="h3 with-icon"><span className="icon-box"><FiCode aria-hidden="true" /></span>Technical Skills</h3>
      <ul className="skills">
        {skills.map((s) => <li key={s.label}><b>{s.label}:</b> {s.value}</li>)}
      </ul>
    </section>
  );
}
