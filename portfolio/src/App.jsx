import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Dashboards */}
          {/* <Route path="/user/disciples" component={Disciples} /> */}

          {/* Not Found */}
          {/* <Route path="/not-found" component={NotFound} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
