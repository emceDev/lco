import React from 'react';
import {useSpring, animated} from 'react-spring'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function getPhotos() {
  return [{
    id:'1',
    src:require('../images/artimg31200.jpg'),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    textColor:'white'
  }, {
    id:'2',
    src:require('../images/img41200.jpg'),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    textColor:'rgb(177,165,51)'
  }, {
    id:'3',
    src:require('../images/artimg11200.jpg'),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    textColor:'rgb(156,221,237)'
  }, {
    id:'4',
    src:require('../images/artimg21200.jpg'),
    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },];
}
function About() {
  const slideLeft = useSpring({ config:{ duration:1650 }, left: 0 , from: { left: -1000 } })
  const slideRight = useSpring({ config:{ duration:1560 }, right: 0 , from: { right: -1000 } })
  const photos = getPhotos();
  return(
    <div className="about">
            {photos.map((photo) =>{
              if(photo.id % 2===0){
                var x = slideRight
              }else{
                x = slideLeft
              }
              return(
                      <div className="pairContainer" key={photo.id}>
                        <LazyLoadImage
                        src={photo.src}
                        alt={photo.src}
                        effect="blur"/>
                        <animated.div style={x}><p style={{color:photo.textColor}}>{photo.text}</p></animated.div>
                      </div> 
                    
              )}
            )}
    </div>
    )
}

export default About;
