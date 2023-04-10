import "./style.css"
import Navbar from "./Components/Navbar";
import Second from "./Components/Second";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Second />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
    </>
  );
}

export default App;
