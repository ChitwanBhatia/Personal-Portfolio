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

  return (
    <main className="layout">
      <Sidebar />
      <div className="main card">
        <Navbar active={tab} onChange={setTab} />
        <article key={tab} className="page">{pages[tab]}</article>
      </div>
    </main>
  );
}