import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from './CarouselStyling';

const CarouselComp = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const apiKey = '30748294-b32c0b587bb743f77a631dffb';
    (async () => {
      const { data } = await axios.get(`https://pixabay.com/api/?key=${apiKey}`);
      setPictures(data.hits);
    })();
  }, [pictures]);
  return (

    <Carousel
      responsive={responsive}
      infinite
      autoPlay="desktop"
      autoPlaySpeed={4000}
      keyBoardControl
      transitionDuration={4000}
      containerClass="carousel-container"
      itemClass="false"
    >
      { pictures.length

        ? pictures.map((ind) => (
          <img key={ind.id} src={ind.previewURL} alt={ind.type} />

        ))

        : <div>Loading</div>}
    </Carousel>
  );
};

export default CarouselComp;
