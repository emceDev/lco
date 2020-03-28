import React from 'react';
import {Link} from 'react-router-dom'
import {useSpring, useTransition, animated} from 'react-spring'


  function Navigation(){
    const moveRight = useSpring({ config:{ duration:1250 }, marginLeft: 0  , from: { marginLeft: -1000 } })
    return(
      <animated.div style={moveRight}>

      <div className="navigation" 
      onClick={(event)=>{
        var active = event.target;
        var siblings = active.parentNode.childNodes;
        if(siblings.length>1){
          siblings.forEach(sibling => {
            sibling.setAttribute("class","deactivated")
          });
          active.setAttribute("class","activated");
        }
        }}>
        <Link to="/" id="Home">Home</Link>
        <Link to="/Team" id="Team">Team</Link>  
        <Link to="/About" id="About">About</Link>
        <Link to="/Faq" id="Faq">Faq</Link>
        <Link to="/Tournament" id="Tournament">Tournament</Link>
      </div>
      </animated.div>
    )
  }
export default Navigation;