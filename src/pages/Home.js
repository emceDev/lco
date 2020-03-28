import React from 'react';
import logo from '../images/logo.png'
import {Parallax} from 'react-parallax'
import Navigation from '../components/Navigation'
import {useSpring, animated} from 'react-spring'

function Home() {
  const move = useSpring({ config:{ duration:1000 }, marginLeft: 0  , from: { marginLeft: 500 } })
  const appear = useSpring({ config:{ duration:1500 }, opacity:1 , from: {opacity:0} })
  return (
    <div className="home">
      <Parallax bgImage={require('../images/img3.png')} strength={0}>

      <animated.div style={move}>
        <img src={logo} alt="logo" className="logo"/>
      </animated.div>
      
      <animated.div className="tag" style={move}>
        Go for it Team!
      </animated.div>

      <animated.div style={appear}>
        <h2 className="video"> Vido</h2>
      </animated.div>
      </Parallax>
    </div>
  );
}


export default Home;
