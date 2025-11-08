import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
// import Certifications from "./components/Certifications";
import GitHubStats from "./components/GitHubStats";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Intro/>
      <AboutMe/>
      <Contact/>
      {/* <Certifications/> */}
      <GitHubStats/>
    </div>
  );
}

export default App;
