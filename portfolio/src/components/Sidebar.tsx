import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { profile, contacts, socials } from "../data";

const external = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

// Lets a long email wrap before the "@" instead of in the middle of a word.
const softBreak = (v: string) =>
  v.split(/(?=@)/).flatMap((part, i) => (i ? [<wbr key={i} />, part] : [part]));

export default function Sidebar() {
  // On phones the contact details are collapsed behind a toggle; on larger screens they are always shown.
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar card${open ? " open" : ""}`}>
      <div className="sidebar-head">
        <img className="avatar" src={profile.avatar} alt={profile.name} />
        <div className="sidebar-id">
          <h1 className="name">{profile.name}</h1>
          <p className="chip">{profile.title}</p>
        </div>
        <button
          type="button"
          className="toggle"
          aria-expanded={open}
          aria-controls="sidebar-more"
          aria-label={open ? "Hide contacts" : "Show contacts"}
          onClick={() => setOpen((o) => !o)}
        >
          <FiChevronDown aria-hidden="true" />
        </button>
      </div>

      <div id="sidebar-more" className="sidebar-more">
        <hr />

        <ul className="contacts">
          {contacts.map(({ label, value, icon: Icon, href }) => (
            <li key={label}>
              <span className="icon-box"><Icon aria-hidden="true" /></span>
              <div>
                <p className="label">{label}</p>
                <p className="value">{href ? <a href={href}>{softBreak(value)}</a> : value}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="socials">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a className="social" href={href} aria-label={label} title={label} {...external(href)}>
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
