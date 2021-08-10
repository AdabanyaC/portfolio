import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

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
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
