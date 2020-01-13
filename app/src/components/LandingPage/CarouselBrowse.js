import * as React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
const Slide1 = require('../../assets/landing/images/carousel/CarlasHipsterBrunch.png');
const Slide2 = require('../../assets/landing/images/carousel/MyukosDelivery.png');
const Slide3 = require('../../assets/landing/images/carousel/KenChiBanner.png')

function CarouselBrowse() {
  const [index, setIndex] = React.useState(0);
 
  const images = [
    {
      src:
        `${Slide1}`
    },
    {
      src:
        `${Slide2}`
    },
    {
      src:
      `${Slide3}`
        },
  ];
 
  return (
    <div style={{ background: "white", width: "90vw", height: "100vh" }}>
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(img => (
          <GalleryImage objectFit="contain" key={img.src} src={img.src} />
        ))}
      </Gallery>
    </div>
  );
}

export default CarouselBrowse;