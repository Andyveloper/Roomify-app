import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
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



  // { next, previous, goToSlide, ...rest }
  const ButtonGroup = (array, currentSlide) => {
    return (
      <div className="carousel-button-group" style={{position: 'absolute'}}> 
      {/* remember to give it position:absolute */}
        <ArrowBackIosNewSharpIcon className={currentSlide === 0 ? 'disable' : ''} onClick={() => currentSlide - 1} />
        {/* <ButtonTwo onClick={() => next()} /> */}
        <ArrowForwardIosIcon onClick={() => currentSlide + 1} />
      </div>
    );
  };



  return (
<>
    <Carousel
      responsive={responsive}
      infinite
      autoPlay="desktop"
      autoPlaySpeed={4000}
      keyBoardControl
      transitionDuration={4000}
      containerClass="carousel-container"
      itemClass
      centerMode
      slidesToSlide={3}
      arrows
      arrows={false}
      showDots={true}
      renderButtonGroupOutside={true}
      customButtonGroup={pictures.length ? <ButtonGroup /> : null}
    >
      { pictures.length
        ? pictures.map((ind) => (
          <React.Fragment key={ind.id}>
          <NavLink to={ind.type}>
            <div className="image-carousel">
          <img src={ind.previewURL} alt={ind.type} />
          </div>
          </NavLink>
          </React.Fragment>
        ))
        : <div>Loading</div>}
    </Carousel>
    </>  
    );
};

export default CarouselComp;
