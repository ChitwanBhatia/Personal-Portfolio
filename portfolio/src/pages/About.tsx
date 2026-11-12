import Heading from "../components/Heading";
import { aboutText, services } from "../data";

export default function About() {
  return (
    <section>
      <Heading>About Me</Heading>
      {aboutText.map((p) => <p className="text" key={p}>{p}</p>)}
      <h3 className="h3">What I'm Doing</h3>
      <ul className="services">
        {services.map(({ title, text, icon: Icon }) => (
          <li className="service" key={title}>
            <div className="service-icon"><Icon aria-hidden="true" /></div>
            <h4>{title}</h4>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
