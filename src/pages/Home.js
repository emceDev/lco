import React from 'react';
import logo from '../images/logo.png'
import {useSpring, animated} from 'react-spring'


function Home() {
  const move = useSpring({ config:{ duration:1000 }, marginLeft: 0  , from: { marginLeft: 500 } })
  const appear = useSpring({ config:{ duration:1500 }, opacity:1 , from: {opacity:0} })
  return (
    <div className="home">
  
      <animated.div style={move}>
        <img src={logo} alt="logo" className="logo"/>
      </animated.div>
      
      <animated.div className="tag" style={move}>
        Go for it Team!
      </animated.div>

      <animated.div style={appear}>
        <div className="video">
          <iframe
          title="video"
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/hqvGOPB0KmQ" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
            </iframe>
        </div>
      </animated.div>
    </div>
  );
}


export default Home;
