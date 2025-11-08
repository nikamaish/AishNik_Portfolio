import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Intro/>
      <AboutMe/>
    </div>
  );
}

export default App;
