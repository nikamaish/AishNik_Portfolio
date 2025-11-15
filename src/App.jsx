import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import GitHubStats from "./components/GitHubStats";
import Experience from "./components/Experience";
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Certifications/>
      <GitHubStats/>
      <Contact/>
    </div>
  );
}

export default App;
