import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import LogIn from './LogIn'

  function Navigation(){

    const [LogInDisplay, setDisplay] = useState(false)
    const [LogInSectionDisplay, setLogInSectionDisplay] = useState(false)
    const moveRight = useSpring({ config:{ duration:1250 }, marginLeft: 0  , from: { marginLeft: -1000 } })
    
    return(
      <animated.div style={moveRight}>

        <LogIn display={LogInDisplay}/>

      <div className="navigation" 
        onClick={(event)=>{
        var active = event.target;
        var siblings = active.parentNode.childNodes;
        if(siblings.length>1 && siblings.length !== 2){
          siblings.forEach(sibling => {
            sibling.setAttribute("class","deactivated")
          });
          active.setAttribute("class","activated");
        }
      }}
        onMouseOver={()=>{setLogInSectionDisplay(true)}}
        onMouseLeave={()=>{setLogInSectionDisplay(false)}}>
        <Link to="/" id="Home">Home</Link>
        <Link to="/Team" id="Team">Team</Link>  
        <Link to="/About" id="About">About</Link>
        <Link to="/Contact" id="Contact">Contact</Link>
        <Link to="/Faq" id="Faq">Faq</Link>
        <Link to="/Tournament" id="Tournament">Tournament</Link>

        <animated.div
        className="LogInSection"
        style={{
        display:LogInSectionDisplay ? "flex":"none",
        flexDirection:"column"}}
        >

        <Link >Register</Link>
        <Link onClick={()=>{setDisplay(!LogInDisplay)}}>LogIn</Link>
        </animated.div>
      </div>
      </animated.div>
    )
  }
export default Navigation;