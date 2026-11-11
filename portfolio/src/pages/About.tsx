import Heading from "../components/Heading";
import { aboutText, services } from "../data";

export default function About() {
  return (
    <section>
      <Heading>About Me</Heading>
      {aboutText.map((p) => <p className="text" key={p}>{p}</p>)}
      <h3 className="h3">What I'm Doing</h3>
      <ul className="services">
        {services.map((s) => (
          <li className="service" key={s.title}>
            <div className="service-icon">{s.icon}</div>
            <h4>{s.title}</h4>
            <p>{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}