import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../../Landing/carousel.css';
const ModalCarousel = ({ images }) => {
  const imageContainerStyle = {

  }
  return (
    <div>
      <Carousel
        /* centerMode
        centerSlidePercentage={25}
        emulateTouch
        showThumbs={false}
        showIndicators={false}
        showStatus={false} */
        emulateTouch
      >

        {images ?

          images.map(image => (
            <div style={{ margin: 10 }} >
              {console.log(image)}
              <img src={image.secure_url} alt="img" />
              <p className="content">
                Cookie Bites - Dietary friendly cookies with all locally sourced ingredients.
					  </p>
            </div>
          ))

          : <h1>You Got Nothing Here</h1>}

      </Carousel>

    </div>
  )
}

export default ModalCarousel

