import React from 'react';
import { LazyLoadImage,trackWindowScroll} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// import getPhotos from './PhotoLoad'

function getPhotos() {
    return [{
      src: '/static/media/img3.e288398d.png',
      text: 'Goood '
    }, {
      src: '/static/media/img3.e288398d.png',
      text: 'it works '
    }, {
      src: '/static/media/img3.e288398d.png',
      text: 'Goood ya'
    }, {
      src: '/static/media/img3.e288398d.png',
      text: ' ya Goood '
    },];
  }

export class Gallery extends React.Component {
    render(){
        const photos = getPhotos();
        return(
        <div className="gallery">
                {photos.map((photo) =>
                <div className="pairContainer">
                <LazyLoadImage
                className="photo"
                src={photo.src}
                alt={photo.src}
                effect="blur"
                afterLoad={() => console.log("xd")}
                beforeLoad={() => console.log("before")}/>
                <div>{photo.text}</div>
                </div>
                )}
        </div>
        )
    }}
   
  export default Gallery;