import React from 'react';
import {Link} from 'react-router-dom'
function Navigation(props) {

    return (
      <div className="Navigation">
        <Link to="/">Home</Link>
        <Link to="/Faq">Faq</Link>
        <Link to="/Team">Team</Link>
        <Link to="/About">About</Link>
        <Link to="/Tournament">Tournament</Link>
      </div>
    )
}


export default Navigation;