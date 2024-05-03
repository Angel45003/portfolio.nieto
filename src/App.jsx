import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/sections/HomePage";
import AboutPage from "./components/sections/AboutPage";
import ProjectPage from "./components/sections/ProjectPage";
import SkillsPage from "./components/sections/SkillsPage";
import FooterBar from "./components/sections/FooterBar";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <section>
          <HomePage />
          <AboutPage />
          <ProjectPage />
          <SkillsPage />
        </section>
        <footer>
          <FooterBar />
        </footer>
      </main>
    </>
  );
}

export default App;
