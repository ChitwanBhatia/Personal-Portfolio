import Heading from "../components/Heading";
import { jobs } from "../data";

export default function Experience() {
  return (
    <section>
      <Heading>Experience</Heading>
      <ol className="timeline">
        {jobs.map((j) => (
          <li key={j.company}>
            <h4>{j.company}</h4>
            <span className="period">{j.period}</span>
            {j.points.map((p) => <p className="text" key={p}>• {p}</p>)}
          </li>
        ))}
      </ol>
    </section>
  );
}