import { useState, type ReactNode } from "react";
import { Tab } from "./data";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const pages: Record<Tab, ReactNode> = {
  About: <About />,
  Resume: <Resume />,
  Project: <Projects />,
  Experience: <Experience />,
  Contact: <Contact />,
};

export default function App() {
  const [tab, setTab] = useState<Tab>("About");

  // Start each section at the top (matters on phones, where the page is long and the tab bar is at the bottom).
  const changeTab = (t: Tab) => {
    setTab(t);
    window.scrollTo({ top: 0 });
  };

  return (
    <main className="layout">
      <Sidebar />
      <div className="main card">
        <Navbar active={tab} onChange={changeTab} />
        <article key={tab} className="page">{pages[tab]}</article>
      </div>
    </main>
  );
}
