import React from 'react';
import {useSpring, animated} from 'react-spring'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function getPhotos() {
  return [{
    id:'1',
    src: '/static/media/artimg3.9de281c4.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    textColor:'white'
  }, {
    id:'2',
    src: '/static/media/img4.a7b66573.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    textColor:'rgb(177,165,51)'
  }, {
    id:'3',
    src: '/static/media/artimg1.3ead6513.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    textColor:'rgb(156,221,237)'
  }, {
    id:'4',
    src: '/static/media/artimg2.5dd6f64a.png',
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

{/* <div className="about">
{photos.map((photo) =>

  {
    if(photo.id%2===0)
      {
        return(
          <div className="pairContainer" key={photo.id}>
            <LazyLoadImage
            src={photo.src}
            alt={photo.src}
            effect="blur"/>
            <animated.div style={slideRight}>{photo.text}</animated.div>
          </div> 
        )}else{
          return(
          <div className="pairContainer" key={photo.id}>
          <LazyLoadImage
          src={photo.src}
          alt={photo.src}
          effect="blur"/>
          <animated.div style={slideLeft}>{photo.text}</animated.div>
        </div> )
        }
      
  }
)}
</div> */}
export default About;
