import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* Dashboards */}
          {/* <Route path="/user/disciples" component={Disciples} /> */}

          {/* Not Found */}
          {/* <Route path="/not-found" component={NotFound} /> */}
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
