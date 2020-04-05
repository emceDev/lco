import React from 'react';
import logo from '../images/logo.png'
import {Parallax} from 'react-parallax'
import {useSpring, animated} from 'react-spring'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Home() {
  const move = useSpring({ config:{ duration:1000 }, marginLeft: 0  , from: { marginLeft: 500 } })
  const appear = useSpring({ config:{ duration:1500 }, opacity:1 , from: {opacity:0} })
  return (
    <div className="home">
      <Parallax bgImage={require('../images/img3.png')} strength={0} style={{filter:"saturate(1)"}}>

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
      </Parallax>
    </div>
  );
}


export default Home;
