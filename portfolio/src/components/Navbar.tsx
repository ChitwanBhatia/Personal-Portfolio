import { TABS, Tab } from "../data";

interface Props { active: Tab; onChange: (tab: Tab) => void }

export default function Navbar({ active, onChange }: Props) {
  return (
    <nav className="navbar">
      <ul>
        {TABS.map((t) => (
          <li key={t}>
            <button className={t === active ? "active" : ""} onClick={() => onChange(t)}>
              {t}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}