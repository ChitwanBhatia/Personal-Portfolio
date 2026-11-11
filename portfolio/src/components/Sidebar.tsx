import { profile, contacts, socials } from "../data";
import Icon from "./Icon";

export default function Sidebar() {
  return (
    <aside className="sidebar card">
      <img className="avatar" src={profile.avatar} alt={profile.name} />
      <h1 className="name">{profile.name}</h1>
      <p className="chip">{profile.title}</p>
      <hr />

      <ul className="contacts">
        {contacts.map(({ label, value, icon, href }) => (
          <li key={label}>
            <span className="icon-box"><Icon src={icon} /></span>
            <div>
              <p className="label">{label}</p>
              <p className="value" title={value}>
                {href ? <a href={href}>{value}</a> : value}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <ul className="socials">
        {socials.map(({ label, href, icon }) => (
          <li key={label}>
            <a href={href} aria-label={label} title={label}><Icon src={icon} /></a>
          </li>
        ))}
      </ul>
    </aside>
  );
}