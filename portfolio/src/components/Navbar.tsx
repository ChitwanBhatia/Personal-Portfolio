import type { IconType } from "react-icons";
import { FiUser, FiFileText, FiFolder, FiBriefcase, FiMail } from "react-icons/fi";
import { TABS, Tab } from "../data";

// Icons only show on phones, where the navbar becomes a bottom tab bar.
const ICONS: Record<Tab, IconType> = {
  About: FiUser,
  Resume: FiFileText,
  Project: FiFolder,
  Experience: FiBriefcase,
  Contact: FiMail,
};

interface Props { active: Tab; onChange: (tab: Tab) => void }

export default function Navbar({ active, onChange }: Props) {
  return (
    <nav className="navbar" aria-label="Sections">
      <ul>
        {TABS.map((t) => {
          const Icon = ICONS[t];
          return (
            <li key={t}>
              <button
                className={t === active ? "active" : ""}
                aria-current={t === active ? "page" : undefined}
                onClick={() => onChange(t)}
              >
                <Icon className="nav-icon" aria-hidden="true" />
                {t}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
