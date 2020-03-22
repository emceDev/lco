import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Team from "./pages/Team"
import Faq from "./pages/Faq"
import Tournament from "./pages/Tournament"
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Team" exact component={Team} />
          <Route path="/Faq" exact component={Faq} />
          <Route path="/about" exact component={About} />
          <Route path="/Tournament" exact component={Tournament} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
