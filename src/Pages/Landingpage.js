import Navbar from "../Components/Landing/Navbar";
import About from "../Components/Landing/Sections/About";
import Home from "../Components/Landing/Sections/Home";
import Contact from "../Components/Landing/Sections/Contact";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default Landingpage;
