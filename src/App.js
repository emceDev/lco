import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Team from "./pages/Team"
import Faq from "./pages/Faq"
import Tournament from "./pages/Tournament"
import Contact from "./pages/Contact"
import {useSpring, animated, config} from 'react-spring'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 return (
    <div className="App">
      <Router>
        <div style={{position:"sticky",top:"0",zIndex:"2"}}>
        <Navigation />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Team" exact component={Team} />
          <Route path="/Faq" exact component={Faq} />
          <Route path="/about" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Tournament" exact component={Tournament} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
