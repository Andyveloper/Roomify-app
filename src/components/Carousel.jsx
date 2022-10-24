/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';
import './carousel.css';
import { addProperty } from '../redux/actionCreator';

const CarouselComp = () => {
  const [pictures, setPictures] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const apiKey = '30748294-b32c0b587bb743f77a631dffb';
    (async () => {
      const { data } = await axios.get(`https://pixabay.com/api/?key=${apiKey}`);
      setPictures(data.hits);
    })();
  }, [pictures]);

  const onClick = (data) => {
    dispatch(addProperty(data));
  };

  return (
    <>
      {!pictures.length ? (<div>Loading...</div>)
        : (
          <>
            <Carousel
              autoPlay
              animation="slide"
              interval={4000}
              duration={500}
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
                  <NavLink to="/reserve">
                    <div
                      onClick={() => onClick(ind)}
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
