import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import axios from 'axios';
import './carousel.css';

const CarouselComp = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const apiKey = '30748294-b32c0b587bb743f77a631dffb';
    (async () => {
      const { data } = await axios.get(`https://pixabay.com/api/?key=${apiKey}`);
      // const three = data.hits.map(())
      setPictures(data.hits);
    })();
  }, [pictures]);

  return (
    <>
      {!pictures.length ? (<div>Loading...</div>)
        : (
          <>
            <Carousel
            // NextIcon={}
            // PrevIcon={}
              autoPlay
              animation="slide"
              interval={4000}
              duration={500}
              // index={}
              indicators={false}
              cycleNavigation
              swipe
              navButtonsAlwaysVisible
              fullHeightHover
              className="carousel"
              height={300}
              >
              {pictures.map((ind) => (
                <React.Fragment key={ind.id}>
                  <NavLink to={ind.type}>
                    <div
                      className="image-carousel"
                      style={{ width: '100%', height: '100%' }}
                    >
                      <img
                        style={{ width: '100%', height: '100%', cursor: 'pointer' }}
                        src={ind.previewURL}
                        alt={ind.type}
                      />
                    </div>
                  </NavLink>
                </React.Fragment>
              ))}
            </Carousel>
          </>
        )}
    </>
  );
};

export default CarouselComp;

{ /* <Carousel
responsive={responsive}
infinite
autoPlay="desktop"
autoPlaySpeed={4000}
keyBoardControl
transitionDuration={500}
removeArrowOnDeviceType={['tablet', 'mobile']}
containerClass="carousel-container"
itemClass
centerMode
arrows
slidesToSlide={3}
showDots
renderArrowsWhenDisabled
// customButtonGroup={pictures.length ? <ButtonGroup /> : null}
>
{ pictures.length
  ? pictures.map((ind) => (
    <React.Fragment key={ind.id}>
      <NavLink to={ind.type}>
        <div
          className="image-carousel"
          style={{ width: '100%', height: '100%' }}
        >
          <img
            style={{ width: '100%', height: '100%', cursor: 'pointer' }}
            src={ind.previewURL}
            alt={ind.type}
          />
        </div>
      </NavLink>
    </React.Fragment>
  ))
  : <div>Loading</div>}
</Carousel> */ }
