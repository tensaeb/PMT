import "./App.css";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home/Sections/Home";
// import About from "./Components/Home/Sections/About";
// import Contact from "./Components/Home/Sections/Contact";
// import Team from "./Components/Home/Sections/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <About />
      <Team />
      <Contact /> */}
    </div>
  );
}

export default App;
