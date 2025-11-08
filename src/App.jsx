import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Intro/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;
