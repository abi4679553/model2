import Footer from "./components/Footer";
import Frond from "./components/Frond";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
      <Frond />
      <Footer />


    </div>
  );
}

export default App;
